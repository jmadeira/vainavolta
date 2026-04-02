(function () {
  const i18n = window.VNV_I18N;
  const lang = i18n?.getLang?.() ?? "pt";

  function refresh() {
    const current = i18n.getLang();
    i18n.applyLang(current);

    document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
      btn.setAttribute("aria-label", current === "pt" ? "Alternar idioma" : "Toggle language");
    });
  }

  i18n.setLang(lang);
  refresh();

  document.querySelectorAll("[data-lang-toggle]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const next = (i18n.getLang() === "pt") ? "en" : "pt";
      i18n.setLang(next);
      refresh();
    });
  });
})();
