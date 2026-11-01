/* Language switch for info.html: shows one language; without JavaScript all three stay visible. */
(function () {
  "use strict";
  const langs = ["de", "fr", "en"];
  const pick = () => {
    const h = location.hash.slice(1);
    if (langs.includes(h)) return h;
    const n = (navigator.language || "de").slice(0, 2);
    return langs.includes(n) ? n : "de";
  };
  function show(l) {
    for (const x of langs) document.getElementById(x).hidden = x !== l;
    document.querySelectorAll("[data-lang]").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === l)));
    document.documentElement.lang = l;
  }
  document.querySelectorAll("[data-lang]").forEach(b => b.addEventListener("click", () => { history.replaceState(null, "", "#" + b.dataset.lang); show(b.dataset.lang); }));
  window.addEventListener("hashchange", () => show(pick()));
  show(pick());
})();
