import fs from "node:fs/promises";
import path from "node:path";
import { load } from "cheerio";

const PROFILE_URL =
  "https://scholar.google.com/citations?user=Zg8cX0sAAAAJ&hl=en";
const USER_AGENT =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36";
const OUTPUT_PATH = path.join(
  process.cwd(),
  "src",
  "data",
  "scholar.generated.json",
);
const PAGE_SIZE = 100;
const SOFT_HTTP_STATUSES = new Set([403, 429, 500, 502, 503, 504]);
const SOFT_ERROR_CODES = new Set([
  "ECONNRESET",
  "ECONNREFUSED",
  "ENOTFOUND",
  "ETIMEDOUT",
  "UND_ERR_CONNECT_TIMEOUT",
  "UND_ERR_HEADERS_TIMEOUT",
  "UND_ERR_SOCKET",
]);
const STRICT_MODE = ["1", "true", "yes"].includes(
  (process.env.SCHOLAR_SYNC_STRICT ?? "").toLowerCase(),
);

class ScholarSyncError extends Error {
  constructor(message, options = {}) {
    super(message, options.cause ? { cause: options.cause } : undefined);
    this.name = "ScholarSyncError";
    this.code = options.code ?? null;
    this.kind = options.kind ?? null;
    this.status = options.status ?? null;
    this.url = options.url ?? null;
  }
}

function normalizeText(value = "") {
  return value
    .replace(/[\u202a-\u202e\u2066-\u2069]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function toNumber(value = "") {
  const digits = value.replace(/[^\d]/g, "");
  return digits ? Number.parseInt(digits, 10) : 0;
}

function toAbsoluteScholarUrl(href) {
  if (!href) return null;
  return new URL(href, "https://scholar.google.com").toString();
}

async function readExistingSnapshot() {
  try {
    const raw = await fs.readFile(OUTPUT_PATH, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    if (error?.code === "ENOENT") {
      return null;
    }

    throw new ScholarSyncError(
      `Failed to read existing Scholar snapshot at ${OUTPUT_PATH}`,
      { cause: error, code: error?.code },
    );
  }
}

function hasUsableSnapshot(snapshot) {
  return Boolean(
    snapshot &&
      typeof snapshot.name === "string" &&
      snapshot.name.trim() &&
      Array.isArray(snapshot.publications) &&
      snapshot.publications.length > 0 &&
      typeof snapshot.updatedAt === "string" &&
      snapshot.updatedAt.trim(),
  );
}

function validateSnapshot(payload) {
  if (!payload.name) {
    throw new ScholarSyncError(
      "Scholar response did not include a profile name. Google may have returned a blocked or challenge page.",
      { kind: "invalid-response" },
    );
  }

  if (!Array.isArray(payload.publications) || payload.publications.length === 0) {
    throw new ScholarSyncError(
      "Scholar response did not include any publications. Google may have returned a blocked or challenge page.",
      { kind: "invalid-response" },
    );
  }

  return payload;
}

function getErrorCode(error) {
  return (
    error?.code ??
    error?.cause?.code ??
    error?.cause?.cause?.code ??
    null
  );
}

function isRecoverableScholarError(error) {
  if (error instanceof ScholarSyncError) {
    if (SOFT_HTTP_STATUSES.has(error.status)) {
      return true;
    }

    if (error.kind === "invalid-response") {
      return true;
    }
  }

  if (error instanceof TypeError) {
    return true;
  }

  const code = getErrorCode(error);
  return Boolean(code && SOFT_ERROR_CODES.has(code));
}

function formatError(error) {
  if (!error) {
    return "unknown error";
  }

  const parts = [error.message ?? String(error)];
  if (error.status) {
    parts.push(`status=${error.status}`);
  }

  const code = getErrorCode(error);
  if (code) {
    parts.push(`code=${code}`);
  }

  return parts.join(" ");
}

function parseMetrics($) {
  const recentLabel = normalizeText(
    $("#gsc_rsb_st thead th")
      .eq(2)
      .text(),
  );
  const rows = $("#gsc_rsb_st tbody tr").toArray();
  const values = rows.map((row) =>
    $(row)
      .find(".gsc_rsb_std")
      .toArray()
      .map((cell) => toNumber($(cell).text())),
  );

  return {
    recentLabel,
    citations: values[0]?.[0] ?? 0,
    citationsRecent: values[0]?.[1] ?? 0,
    hIndex: values[1]?.[0] ?? 0,
    hIndexRecent: values[1]?.[1] ?? 0,
    i10Index: values[2]?.[0] ?? 0,
    i10IndexRecent: values[2]?.[1] ?? 0,
  };
}

function parseProfile($) {
  return {
    name: normalizeText($("#gsc_prf_in").text()),
    affiliation: normalizeText($("#gsc_prf_i .gsc_prf_il").first().text()),
    interests: $("#gsc_prf_int a")
      .toArray()
      .map((item) => normalizeText($(item).text()))
      .filter(Boolean),
    avatarUrl: toAbsoluteScholarUrl($("#gsc_prf_pup-img").attr("src")),
    profileUrl: PROFILE_URL,
    metrics: parseMetrics($),
  };
}

function parsePublicationRows($) {
  return $("tr.gsc_a_tr")
    .toArray()
    .map((row) => {
      const titleLink = $(row).find("a.gsc_a_at").first();
      const grayRows = $(row).find(".gs_gray").toArray();
      const citationLink = $(row).find("a.gsc_a_ac").first();
      const yearText = normalizeText($(row).find(".gsc_a_y span").text());
      const title = normalizeText(titleLink.text());

      if (!title) return null;

      return {
        title,
        url: toAbsoluteScholarUrl(titleLink.attr("href")),
        authors: normalizeText($(grayRows[0]).text()),
        venue: normalizeText($(grayRows[1]).text()),
        year: yearText ? Number.parseInt(yearText, 10) : null,
        citationCount: toNumber(citationLink.text()),
        citationUrl: toAbsoluteScholarUrl(citationLink.attr("href")),
      };
    })
    .filter(Boolean);
}

async function fetchScholarPage(cstart = 0) {
  const url = new URL(PROFILE_URL);
  url.searchParams.set("cstart", String(cstart));
  url.searchParams.set("pagesize", String(PAGE_SIZE));

  let response;
  try {
    response = await fetch(url, {
      headers: {
        "User-Agent": USER_AGENT,
        "Accept-Language": "en-US,en;q=0.9,zh-CN;q=0.8",
      },
    });
  } catch (error) {
    throw new ScholarSyncError(
      `Scholar request failed before receiving a response for ${url}`,
      { cause: error, code: getErrorCode(error), url: url.toString() },
    );
  }

  if (!response.ok) {
    throw new ScholarSyncError(
      `Scholar request failed with status ${response.status}`,
      { status: response.status, url: url.toString() },
    );
  }

  return response.text();
}

async function buildSnapshot() {
  const firstHtml = await fetchScholarPage(0);
  const firstPage = load(firstHtml);
  const profile = parseProfile(firstPage);
  const publications = [];
  const seenTitles = new Set();

  for (let cstart = 0; ; cstart += PAGE_SIZE) {
    const html = cstart === 0 ? firstHtml : await fetchScholarPage(cstart);
    const $ = load(html);
    const rows = parsePublicationRows($);

    if (rows.length === 0) {
      break;
    }

    for (const row of rows) {
      const key = row.title.toLowerCase();
      if (!seenTitles.has(key)) {
        seenTitles.add(key);
        publications.push(row);
      }
    }

    if (rows.length < PAGE_SIZE) {
      break;
    }
  }

  const payload = {
    ...profile,
    totalPublications: publications.length,
    updatedAt: new Date().toISOString(),
    publications,
  };

  return validateSnapshot(payload);
}

async function main() {
  const existingSnapshot = await readExistingSnapshot();

  try {
    const payload = await buildSnapshot();
    await fs.writeFile(OUTPUT_PATH, `${JSON.stringify(payload, null, 2)}\n`);
    console.log(
      `Saved Scholar snapshot with ${payload.totalPublications} publications to ${OUTPUT_PATH}`,
    );
    return;
  } catch (error) {
    if (
      !STRICT_MODE &&
      hasUsableSnapshot(existingSnapshot) &&
      isRecoverableScholarError(error)
    ) {
      console.warn(
        `Scholar sync skipped: ${formatError(error)}. Keeping existing snapshot from ${existingSnapshot.updatedAt}.`,
      );
      return;
    }

    throw error;
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
