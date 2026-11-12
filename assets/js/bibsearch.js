// Publications page: the filter and the year chart.
// Filter: keeps the entries whose title, authors, venue or badge contain every typed word, hides a year line
// that has nothing left, and keeps the words in the URL hash (a hash that names an entry is left to the browser).
// Year chart: one square per paper, a row per year, built from the entries on the page and placed in the page
// header (styles in _sass/site/_viz.scss). Filled squares are the first section of the page, outlined ones the
// second; the legend repeats those two section headings, so the chart brings no words of its own. A square
// scrolls to its entry; squares of entries the filter hides are dimmed.
(function () {
  "use strict";
  var input = document.getElementById("bibsearch");
  if (!input) return;
  var entries = Array.prototype.slice.call(document.querySelectorAll(".bibliography > li"));
  var haystack = entries.map(function (li) {
    return Array.prototype.map
      .call(li.querySelectorAll(".pub__title, .pub__authors, .periodical, .pub-badge"), function (el) {
        return el.textContent;
      })
      .join(" ")
      .toLowerCase()
      .replace(/\s+/g, " ");
  });
  var cells = [];

  var filter = function (term) {
    var words = term.toLowerCase().split(/\s+/).filter(Boolean);
    entries.forEach(function (li, i) {
      li.hidden = !words.every(function (w) {
        return haystack[i].indexOf(w) !== -1;
      });
    });
    document.querySelectorAll("ol.bibliography").forEach(function (ol) {
      var empty = !ol.querySelector(":scope > li:not([hidden])");
      ol.hidden = empty;
      var year = ol.previousElementSibling;
      if (year && year.matches("h2.bibliography")) year.hidden = empty;
    });
    cells.forEach(function (c) {
      c.el.classList.toggle("is-out", c.li.hidden);
    });
  };

  var setTerm = function (term) {
    input.value = term;
    filter(term);
    history.replaceState(null, "", term ? "#" + encodeURIComponent(term) : window.location.pathname);
  };

  var fromHash = function () {
    var term = decodeURIComponent(window.location.hash.slice(1));
    if (term && document.getElementById(term)) return;
    input.value = term;
    filter(term);
  };

  var timer;
  input.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      setTerm(input.value);
    }, 150);
  });
  window.addEventListener("hashchange", fromHash);

  // ---------- Year chart ----------
  var header = document.querySelector(".post-header");
  var boxes = document.querySelectorAll(".post article > .publications");
  var make = function (tag, cls, text) {
    var el = document.createElement(tag);
    if (cls) el.className = cls;
    if (text) el.textContent = text;
    return el;
  };
  if (header && boxes.length) {
    var years = {};
    var labels = [];
    boxes.forEach(function (box, s) {
      var heading = box.previousElementSibling;
      labels.push(heading && heading.matches("h2") ? heading.textContent.trim() : "");
      var year = "";
      Array.prototype.forEach.call(box.children, function (el) {
        if (el.matches("h2.bibliography")) year = el.textContent.trim();
        else if (el.matches("ol.bibliography"))
          el.querySelectorAll(":scope > li").forEach(function (li) {
            (years[year] = years[year] || []).push({ li: li, preprint: s > 0 });
          });
      });
    });

    var chart = make("div", "pub-years");
    var title = document.querySelector(".post-title");
    chart.setAttribute("role", "group");
    if (title) chart.setAttribute("aria-label", title.textContent.trim());
    var caption = make("p", "pub-years__caption");
    caption.setAttribute("aria-hidden", "true");

    Object.keys(years)
      .sort()
      .reverse()
      .forEach(function (year) {
        var row = make("div", "pub-years__row");
        var strip = make("span", "pub-years__cells");
        years[year].forEach(function (p) {
          var name = (p.li.querySelector(".pub__title") || {}).textContent || "";
          var venue = (p.li.querySelector(".pub-badge") || {}).textContent || "";
          var text = name.trim() + (venue ? " · " + venue.trim() : "");
          var cell = make("button", "pub-years__cell" + (p.preprint ? " is-preprint" : ""));
          cell.type = "button";
          cell.setAttribute("aria-label", text);
          var show = function () {
            caption.textContent = text;
          };
          var clear = function () {
            caption.textContent = "";
          };
          cell.addEventListener("pointerenter", show);
          cell.addEventListener("focus", show);
          cell.addEventListener("pointerleave", clear);
          cell.addEventListener("blur", clear);
          cell.addEventListener("click", function () {
            if (p.li.hidden) setTerm("");
            var pub = p.li.querySelector(".pub") || p.li;
            pub.scrollIntoView({ block: "center" });
            pub.classList.remove("is-flash");
            void pub.offsetWidth;
            pub.classList.add("is-flash");
          });
          strip.appendChild(cell);
          cells.push({ el: cell, li: p.li });
        });
        row.appendChild(make("span", "pub-years__year", year));
        row.appendChild(strip);
        row.appendChild(make("span", "pub-years__n", String(years[year].length)));
        chart.appendChild(row);
      });

    var legend = make("p", "pub-years__legend");
    labels.forEach(function (label, s) {
      if (!label) return;
      var item = make("span", s > 0 ? "is-preprint" : "");
      item.appendChild(make("i"));
      item.appendChild(document.createTextNode(label));
      legend.appendChild(item);
    });
    chart.appendChild(legend);
    chart.appendChild(caption);
    header.appendChild(chart);
  }

  if (window.location.hash) fromHash();
})();
