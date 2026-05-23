/* v17 trilingual switcher (EN / 中 / 日).
 *
 * Mechanism:
 *   - Each translatable text is wrapped in <span lang="en|zh|ja"> or
 *     <div lang="..."> in the source (about.md, layouts, _config.yml).
 *   - CSS rule (_yanjun-craft.scss section 18) hides non-matching lang
 *     descendants based on <html lang="...">.
 *   - This script:
 *       (1) On first paint, reads localStorage and sets <html lang> ASAP.
 *           A small inline early-set is also embedded in head.liquid so
 *           there's no flash even before this deferred script runs.
 *       (2) On DOM ready, wires up the .lang-toggle buttons.
 *       (3) Persists choice to localStorage.
 *
 * Default lang: en (only used if localStorage is empty).
 * Does NOT do auto-detection from navigator.language — user has to
 * actively pick. This matches the homepage's "default English" rule.
 */
(function () {
  var SUPPORTED = ['en', 'zh', 'ja'];
  var STORAGE_KEY = 'preferred_lang';
  var DEFAULT_LANG = 'en';

  function readLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      if (stored && SUPPORTED.indexOf(stored) !== -1) return stored;
    } catch (e) { /* localStorage might be disabled */ }
    return DEFAULT_LANG;
  }

  function applyLang(lang) {
    if (SUPPORTED.indexOf(lang) === -1) lang = DEFAULT_LANG;
    document.documentElement.lang = lang;
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    var buttons = document.querySelectorAll('.lang-toggle button');
    for (var i = 0; i < buttons.length; i++) {
      var btn = buttons[i];
      var isActive = btn.getAttribute('data-lang') === lang;
      if (isActive) btn.classList.add('active');
      else btn.classList.remove('active');
      btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    }
  }

  // (1) Set lang on document as early as possible, before content paints
  // (the inline snippet in head.liquid does this too — this is a safety net)
  applyLang(readLang());

  // (2) Wire up buttons when DOM is ready
  function init() {
    applyLang(readLang());
    var buttons = document.querySelectorAll('.lang-toggle button');
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function (e) {
        applyLang(this.getAttribute('data-lang'));
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
