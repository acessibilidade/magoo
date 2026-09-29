"use strict";

const translationHost = document.getElementById("google_translate_element");
if (translationHost) {
  const status = document.querySelector(".translation-status");
  function labelTranslationSelect() {
    const select = translationHost.querySelector("select");
    if (!select) return;
    select.setAttribute("aria-labelledby", "translation-label");
    select.setAttribute("aria-describedby", "translation-note");
    if (!select.parentElement.classList.contains("translation-select-wrap")) {
      const wrapper = document.createElement("span");
      wrapper.className = "translation-select-wrap";
      select.before(wrapper);
      wrapper.append(select);
      const arrow = document.createElement("span");
      arrow.className = "material-icons notranslate translation-arrow";
      arrow.setAttribute("translate", "no");
      arrow.setAttribute("aria-hidden", "true");
      arrow.textContent = "expand_more";
      wrapper.append(arrow);
    }
    status.hidden = true;
  }
  const observer = new MutationObserver(labelTranslationSelect);
  observer.observe(translationHost, { childList: true, subtree: true });
  window.googleTranslateElementInit = function () {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "pt",
        includedLanguages: "en,de,fr,es",
        autoDisplay: false,
      },
      "google_translate_element",
    );
    labelTranslationSelect();
  };
  const script = document.createElement("script");
  script.src =
    "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
  script.async = true;
  script.onerror = function () {
    status.textContent = "Tradutor indisponível. Tente recarregar a página.";
  };
  document.head.appendChild(script);
}
