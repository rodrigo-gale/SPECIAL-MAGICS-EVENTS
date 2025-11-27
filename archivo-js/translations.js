// js/translations.js

const TRANSLATIONS = {
  es: {
    nav_services: "Servicios",
    nav_contact: "Contacto",
    nav_gallery: "Galería",

    services_title_prefix: "Nuestros ",
    services_title_main: "Servicios ",

    service_animation_title: "Animación",
    service_animation_desc:
      "Animadores profesionales, payasos, magos y personajes favoritos de todos, para todas las edades, que harán de tu fiesta un evento inolvidable, lleno de risas y diversión",

    footer_services_title: "Servicios 🎪"
  },

  ca: {
    nav_services: "Serveis",
    nav_contact: "Contacte",
    nav_gallery: "Galeria",

    services_title_prefix: "Els nostres ",
    services_title_main: "Serveis ",

    service_animation_title: "Animació",
    service_animation_desc:
      "Animadors professionals, pallassos, mags i personatges preferits de tothom, per a totes les edats, que faran de la teva festa un esdeveniment inoblidable, ple de rialles i diversió",

    footer_services_title: "Serveis 🎪"
  },

  en: {
    nav_services: "Services",
    nav_contact: "Contact",
    nav_gallery: "Gallery",

    services_title_prefix: "Our ",
    services_title_main: "Services ",

    service_animation_title: "Entertainment",
    service_animation_desc:
      "Professional entertainers, clowns, magicians and favourite characters for all ages, turning your party into an unforgettable event full of laughter and fun",

    footer_services_title: "Services 🎪"
  }
};

const FALLBACK_LANG = "es";

function applyTranslations(lang) {
  const dict = TRANSLATIONS[lang] || TRANSLATIONS[FALLBACK_LANG];
  const elements = document.querySelectorAll("[data-i18n]");

  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text =
      (dict && dict[key]) ||
      (TRANSLATIONS[FALLBACK_LANG] && TRANSLATIONS[FALLBACK_LANG][key]) ||
      "";
    el.textContent = text;
  });
}

// Idioma inicial
document.addEventListener("DOMContentLoaded", () => {
  applyTranslations(FALLBACK_LANG);
});

// Escuchar cambios del selector de idioma
document.addEventListener("languagechange", (event) => {
  const lang = event.detail.language;
  applyTranslations(lang);
});

