import researchData from "@/data/research";
import scholarData from "@/data/scholar.generated.json";

export interface ScholarPublication {
  title: string;
  url: string | null;
  authors: string;
  venue: string;
  year: number | null;
  citationCount: number;
  citationUrl: string | null;
}

export interface ScholarSnapshot {
  name: string;
  affiliation: string;
  interests: string[];
  avatarUrl: string | null;
  profileUrl: string;
  metrics: {
    recentLabel: string;
    citations: number;
    citationsRecent: number;
    hIndex: number;
    hIndexRecent: number;
    i10Index: number;
    i10IndexRecent: number;
  };
  totalPublications: number;
  updatedAt: string;
  publications: ScholarPublication[];
}

interface PublicationOverride {
  title: string;
  description: string;
  tags: string[];
  pdfUrl?: string;
  codeUrl?: string;
  arxivId?: string;
  published?: string;
  citationCount?: number;
}

export interface DisplayPublication extends PublicationOverride {
  authors: string;
  venue: string;
  year: number | null;
  scholarUrl: string | null;
  citationUrl: string | null;
  citationCount: number;
}

export interface ProjectHighlight {
  title: string;
  description: string;
  tags: string[];
  codeUrl: string;
  pdfUrl?: string;
  published?: string;
}

function normalizeTitle(value: string) {
  return value
    .toLowerCase()
    .replace(/[\u202a-\u202e\u2066-\u2069]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

export const scholarSnapshot = scholarData as ScholarSnapshot;

const overridesByTitle = new Map(
  researchData.map((item) => [normalizeTitle(item.title), item]),
);

export function formatSyncDate(value: string) {
  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(new Date(value));
}

export function getFeaturedPublications() {
  return researchData
    .map((item) => {
      const match = scholarSnapshot.publications.find(
        (publication) =>
          normalizeTitle(publication.title) === normalizeTitle(item.title),
      );

      return {
        ...item,
        authors: match?.authors ?? "",
        venue: match?.venue ?? item.published ?? "",
        year: match?.year ?? null,
        scholarUrl: match?.url ?? null,
        citationUrl: match?.citationUrl ?? null,
        citationCount: match?.citationCount ?? item.citationCount ?? 0,
      };
    })
    .sort((left, right) => right.citationCount - left.citationCount)
    .slice(0, 6);
}

export function getPublicationList(): DisplayPublication[] {
  return scholarSnapshot.publications
    .map((publication) => {
      const override = overridesByTitle.get(normalizeTitle(publication.title));

      return {
        title: publication.title,
        description:
          override?.description ??
          "Publication details synchronized from the public Google Scholar profile.",
        tags: override?.tags ?? [],
        pdfUrl: override?.pdfUrl,
        codeUrl: override?.codeUrl,
        arxivId: override?.arxivId,
        published: override?.published ?? publication.venue,
        authors: publication.authors,
        venue: publication.venue,
        year: publication.year,
        scholarUrl: publication.url,
        citationUrl: publication.citationUrl,
        citationCount: publication.citationCount,
      };
    })
    .sort((left, right) => {
      const yearGap = (right.year ?? 0) - (left.year ?? 0);
      if (yearGap !== 0) return yearGap;
      return right.citationCount - left.citationCount;
    });
}

export function getRecentPublications(limit: number = 4) {
  return [...scholarSnapshot.publications]
    .sort((left, right) => {
      const yearGap = (right.year ?? 0) - (left.year ?? 0);
      if (yearGap !== 0) return yearGap;
      return right.citationCount - left.citationCount;
    })
    .slice(0, limit);
}

export function getProjectHighlights(): ProjectHighlight[] {
  return researchData
    .filter((item): item is PublicationOverride & { codeUrl: string } =>
      Boolean(item.codeUrl),
    )
    .slice(0, 4)
    .map((item) => ({
      title: item.title,
      description: item.description,
      tags: item.tags,
      codeUrl: item.codeUrl,
      pdfUrl: item.pdfUrl,
      published: item.published,
    }));
}
