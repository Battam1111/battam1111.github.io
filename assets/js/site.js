// The site's own behaviour, with no library: theme button, phone menu, publication panels and author lists,
// code copy buttons, back to top, and the footer visit counter. Theme detection itself runs inline in <head>.
(function () {
  "use strict";
  var root = document.documentElement;
  var icon = function (name) {
    var t = document.getElementById("icon-" + name);
    return t ? t.innerHTML : "";
  };

  // Theme: system -> light -> dark -> system. data-theme is what the stylesheet reads; a "themechange" event
  // lets the Vega charts redraw in the new colours.
  var themeButton = document.getElementById("theme-toggle");
  var applyTheme = function () {
    root.setAttribute("data-theme-setting", window.determineThemeSetting());
    var theme = window.determineComputedTheme();
    if (root.getAttribute("data-theme") !== theme) {
      root.setAttribute("data-theme", theme);
      document.dispatchEvent(new CustomEvent("themechange", { detail: theme }));
    }
  };
  if (themeButton) {
    themeButton.addEventListener("click", function () {
      var next = { system: "light", light: "dark", dark: "system" }[window.determineThemeSetting()];
      try {
        localStorage.setItem("theme", next);
      } catch (e) {}
      applyTheme();
    });
  }
  if (window.matchMedia) {
    var mq = matchMedia("(prefers-color-scheme: dark)");
    (mq.addEventListener ? mq.addEventListener.bind(mq, "change") : mq.addListener.bind(mq))(applyTheme);
  }

  // Phone menu: the navigation becomes a full-screen sheet under the bar.
  var header = document.getElementById("site-header");
  var menuButton = document.getElementById("menu-toggle");
  var setMenu = function (open) {
    if (!header || !menuButton) return;
    header.toggleAttribute("data-menu-open", open);
    root.toggleAttribute("data-menu-open", open);
    menuButton.setAttribute("aria-expanded", open ? "true" : "false");
  };
  if (menuButton) {
    menuButton.addEventListener("click", function () {
      setMenu(!header.hasAttribute("data-menu-open"));
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && header.hasAttribute("data-menu-open")) {
        setMenu(false);
        menuButton.focus();
      }
    });
    header.querySelectorAll(".site-nav a").forEach(function (a) {
      a.addEventListener("click", function () {
        setMenu(false);
      });
    });
    matchMedia("(min-width: 760px)").addEventListener("change", function () {
      setMenu(false);
    });
  }

  // Publication panels (abstract, BibTeX, award): one open at a time per entry, below the buttons.
  document.querySelectorAll(".pub__links button[aria-controls]").forEach(function (button) {
    button.addEventListener("click", function () {
      var open = button.getAttribute("aria-expanded") !== "true";
      button
        .closest(".pub__links")
        .querySelectorAll("button[aria-controls]")
        .forEach(function (b) {
          var panel = document.getElementById(b.getAttribute("aria-controls"));
          var on = b === button && open;
          b.setAttribute("aria-expanded", on ? "true" : "false");
          if (panel) panel.hidden = !on;
        });
    });
  });

  // "N more authors" swaps to the full names and back.
  document.querySelectorAll("button.more-authors").forEach(function (button) {
    button.addEventListener("click", function () {
      var showing = button.hasAttribute("data-showing");
      button.innerHTML = showing ? button.dataset.less : button.dataset.more;
      button.toggleAttribute("data-showing", !showing);
      button.removeAttribute("title");
    });
  });

  // Copy buttons on code blocks and on a post's citation; the charts' JSON and the figures of a post are left alone.
  var addCopy = function (box, source) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = "icon-button copy-button";
    b.setAttribute("aria-label", "Copy to clipboard");
    b.innerHTML = icon("copy") + icon("check");
    b.addEventListener("click", function () {
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(source.innerText.trim()).then(function () {
        b.setAttribute("data-copied", "");
        setTimeout(function () {
          b.removeAttribute("data-copied");
        }, 2000);
      });
    });
    box.classList.add("has-copy");
    box.appendChild(b);
  };
  document.querySelectorAll("pre").forEach(function (pre) {
    var code = pre.querySelector("code");
    if (!code || code.classList.contains("language-vega_lite") || pre.closest(".gf")) return;
    addCopy(pre.parentElement, code);
  });
  document.querySelectorAll(".post-citation blockquote").forEach(function (q) {
    addCopy(q, q);
  });

  // Back to top: appears once the reader is a screen down.
  var top = document.createElement("button");
  top.type = "button";
  top.className = "icon-button to-top";
  top.setAttribute("aria-label", "Back to top");
  top.hidden = true;
  top.innerHTML = icon("arrow-up");
  top.addEventListener("click", function () {
    window.scrollTo(0, 0);
    var main = document.getElementById("main");
    if (main) {
      main.setAttribute("tabindex", "-1");
      main.focus({ preventScroll: true });
    }
  });
  document.body.appendChild(top);
  var onScroll = function () {
    top.hidden = window.scrollY < window.innerHeight;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Footer visit counter: GoatCounter's public total as plain text; stays hidden if the fetch fails.
  var counter = document.querySelector(".visit-counter[data-vc-source]");
  if (counter && window.fetch) {
    fetch(counter.getAttribute("data-vc-source"))
      .then(function (r) {
        return r.ok ? r.json() : null;
      })
      .then(function (d) {
        if (!d) return;
        var n = parseInt(String(d.count_unique || d.count || "0").replace(/[^\d]/g, ""), 10);
        if (isNaN(n)) return;
        counter.querySelector("[data-vc-count]").textContent = n.toLocaleString();
        counter.removeAttribute("data-vc-hidden");
      })
      .catch(function () {});
  }
})();
