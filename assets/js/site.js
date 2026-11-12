// The site's own behaviour, with no library: theme button, phone menu, publication panels and author lists,
// code copy buttons, back to top, the contents rail of a post, and the footer visit counter.
// Theme detection itself runs inline in <head>.
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
      // When the colours really change, the new theme opens as a circle from the button (a view transition,
      // styled in _sass/site/_motion.scss); otherwise, and where the browser cannot, it simply switches.
      var still = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (!document.startViewTransition || still || window.determineComputedTheme() === root.getAttribute("data-theme")) {
        applyTheme();
        return;
      }
      var box = themeButton.getBoundingClientRect();
      var x = box.left + box.width / 2;
      var y = box.top + box.height / 2;
      root.style.setProperty("--vt-x", x + "px");
      root.style.setProperty("--vt-y", y + "px");
      root.style.setProperty("--vt-r", Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y)) + "px");
      root.setAttribute("data-theme-switch", "");
      var done = function () {
        root.removeAttribute("data-theme-switch");
      };
      document.startViewTransition(applyTheme).finished.then(done, done);
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

  // Contents rail of a post (wide screens only, _sass/site/_viz.scss): its section headings, the current one marked.
  var post = document.querySelector(".single-post");
  var heads = post ? Array.prototype.slice.call(post.querySelectorAll(".post-content h2[id]")) : [];
  var tocLinks = [];
  if (heads.length >= 3) {
    var toc = document.createElement("nav");
    var list = document.createElement("ol");
    var postTitle = post.querySelector(".post-title");
    toc.className = "post-toc";
    if (postTitle) toc.setAttribute("aria-label", postTitle.textContent.trim());
    heads.forEach(function (h) {
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + encodeURIComponent(h.id);
      a.textContent = h.textContent.trim();
      li.appendChild(a);
      list.appendChild(li);
      tocLinks.push(a);
    });
    toc.appendChild(list);
    post.insertBefore(toc, post.firstChild);
  }

  var ticking = false;
  var onScroll = function () {
    ticking = false;
    top.hidden = window.scrollY < window.innerHeight;
    if (tocLinks.length) {
      var current = -1;
      heads.forEach(function (h, i) {
        if (h.getBoundingClientRect().top < window.innerHeight * 0.3) current = i;
      });
      tocLinks.forEach(function (a, i) {
        if (i === current) a.setAttribute("aria-current", "true");
        else a.removeAttribute("aria-current");
      });
    }
  };
  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(onScroll);
      }
    },
    { passive: true }
  );
  onScroll();

  // Profile card of the home page: sticky beside the bio only while all of it fits the window (_sass/site/_pages.scss).
  // 96 = the card's top offset there (top bar 56 + 24) and 16 to spare below it.
  var card = document.querySelector(".profile-card");
  if (card) {
    var fit = function () {
      card.classList.toggle("fits", card.offsetHeight + 96 <= window.innerHeight);
    };
    window.addEventListener("resize", fit);
    if (document.fonts) document.fonts.ready.then(fit);
    fit();
  }

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
