// translations.js

// Diccionario de traducciones
const TRANSLATIONS = {
  es: {
    hero_title: "Fiestas infantiles increíbles",
    hero_subtitle: "Organizamos el cumple que tus peques nunca olvidarán.",
    hero_cta: "Pídeme información"
  },
  ca: {
    hero_title: "Festes infantils increïbles",
    hero_subtitle: "Organitzem l’aniversari que els teus petits no oblidaran mai.",
    hero_cta: "Demana’m informació"
  },
  en: {
    hero_title: "Amazing kids parties",
    hero_subtitle: "We create birthdays your kids will never forget.",
    hero_cta: "Request info"
  }
};

// Idioma por defecto si falta alguna clave
const FALLBACK_LANG = "es";

// Función que aplica las traducciones a todos los elementos con data-i18n
function applyTranslations(lang) {
  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const dict = TRANSLATIONS[lang] || TRANSLATIONS[FALLBACK_LANG];
    const text = dict[key] || TRANSLATIONS[FALLBACK_LANG][key] || "";
    el.textContent = text;
  });
}

// Cuando cargue la página, aplicamos el idioma por defecto
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(FALLBACK_LANG);
});

// Nos enganchamos al evento que emite tu selector de idioma
document.addEventListener("languagechange", (event) => {
  const lang = event.detail.language;
  applyTranslations(lang);
});
