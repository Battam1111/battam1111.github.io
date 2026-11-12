// Publications page filter: keeps the entries whose title, authors, venue or badge contain every typed word,
// hides a year line (and a section) that has nothing left, and keeps the words in the URL hash.
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
  };

  var fromHash = function () {
    var term = decodeURIComponent(window.location.hash.slice(1));
    input.value = term;
    filter(term);
  };

  var timer;
  input.addEventListener("input", function () {
    clearTimeout(timer);
    timer = setTimeout(function () {
      filter(input.value);
      history.replaceState(null, "", input.value ? "#" + encodeURIComponent(input.value) : window.location.pathname);
    }, 150);
  });
  window.addEventListener("hashchange", fromHash);
  if (window.location.hash) fromHash();
})();
