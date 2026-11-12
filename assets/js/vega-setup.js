// Draws every Vega-Lite chart of a post from its ```vega_lite code block. The block stays in the page (hidden by the
// stylesheet) so a theme change can redraw the chart from it. The site's CSP forbids eval, so expressions go
// through vega-interpreter. The site's "themechange" event (assets/js/site.js) redraws in the new colours.
// Axes, grid and lettering take the page's own design tokens (read from the stylesheet at draw time), so a chart
// sits in the page like the text around it; whatever a chart's own spec sets (its marks, its series) is left alone.
(function () {
  "use strict";
  var charts = [];

  // A token as an rgb()/rgba() string: Vega's colour parser does not read oklch(), a canvas does.
  var ctx = document.createElement("canvas").getContext("2d", { willReadFrequently: true });
  var token = function (name) {
    var value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
    if (!ctx || !value) return undefined;
    ctx.clearRect(0, 0, 1, 1);
    ctx.fillStyle = "#000";
    ctx.fillStyle = value;
    ctx.fillRect(0, 0, 1, 1);
    var d = ctx.getImageData(0, 0, 1, 1).data;
    if (!d[3]) return undefined;
    // getImageData gives straight (not premultiplied) channels, so the translucent rule tokens keep their alpha.
    return "rgba(" + d[0] + "," + d[1] + "," + d[2] + "," + (d[3] / 255).toFixed(3) + ")";
  };

  var config = function () {
    var text = getComputedStyle(document.body).fontFamily;
    return {
      font: text,
      view: { stroke: null },
      axis: {
        labelColor: token("--ink-3"),
        titleColor: token("--ink-2"),
        gridColor: token("--rule"),
        domainColor: token("--rule-strong"),
        tickColor: token("--rule-strong"),
        labelFontSize: 11,
        titleFontSize: 12,
        titleFontWeight: 500,
        titlePadding: 8,
      },
      legend: { labelColor: token("--ink-2"), titleColor: token("--ink-2") },
      title: { color: token("--ink") },
    };
  };

  var draw = function () {
    var options = { ast: true, expr: vega.expressionInterpreter, config: config() };
    charts.forEach(function (c) {
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
    draw();
  };

  if (document.readyState === "complete") setup();
  else window.addEventListener("load", setup);
  document.addEventListener("themechange", draw);
})();
