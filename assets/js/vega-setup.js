// Draws every Vega-Lite chart of a post from its ```vega_lite code block. The block stays in the page (hidden by the
// stylesheet) so a theme change can redraw the chart from it. The site's CSP forbids eval, so expressions go
// through vega-interpreter. The site's "themechange" event (assets/js/site.js) redraws in the new colours.
(function () {
  "use strict";
  var charts = [];

  var draw = function (theme) {
    charts.forEach(function (c) {
      var options = { ast: true, expr: vega.expressionInterpreter };
      if (theme === "dark") options.theme = "dark";
      if (c.view) c.view.finalize();
      vegaEmbed(c.el, c.spec, options).then(function (result) {
        c.view = result.view;
      });
    });
  };

  var setup = function () {
    document.querySelectorAll("pre>code.language-vega_lite").forEach(function (code) {
      var pre = code.parentElement;
      pre.classList.add("unloaded");
      var el = document.createElement("div");
      el.classList.add("vega-lite");
      pre.after(el);
      charts.push({ el: el, spec: JSON.parse(code.textContent) });
    });
    draw(window.determineComputedTheme());
  };

  if (document.readyState === "complete") setup();
  else window.addEventListener("load", setup);
  document.addEventListener("themechange", function (e) {
    draw(e.detail);
  });
})();
