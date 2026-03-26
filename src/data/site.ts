import type { Locale } from "@i18n/config";

const localizedSite = {
  es: {
    brand: {
      name: "RaiKode",
      suffix: "Solutions",
    },
    metadata: {
      titleSuffix: "RaiKode Solutions",
      description:
        "Desarrollo web, sistemas internos, e-commerce y automatizacion para empresas.",
      openGraphTitle: "RaiKode Solutions | Tecnologia para crecer mas rapido",
      openGraphImageAlt: "Servicios digitales para empresas",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      creditsPrefix: "Desarrollado por",
    },
  },
  en: {
    brand: {
      name: "RaiKode",
      suffix: "Solutions",
    },
    metadata: {
      titleSuffix: "RaiKode Solutions",
      description:
        "Web development, internal systems, e-commerce and automation for growing companies.",
      openGraphTitle: "RaiKode Solutions | Technology to scale faster",
      openGraphImageAlt: "Digital services for modern businesses",
    },
    footer: {
      rights: "All rights reserved.",
      creditsPrefix: "Built by",
    },
  },
} as const;

const social = {
  twitterHandle: "@raikonif",
} as const;

const footerShared = {
  creditsLabel: "Raikonif",
  creditsUrl: "https://github.com/raikonif",
} as const;

export function getSiteConfig(lang: Locale) {
  return {
    ...localizedSite[lang],
    social,
    footer: {
      ...localizedSite[lang].footer,
      ...footerShared,
    },
  };
}
