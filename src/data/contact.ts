import type { Locale } from "@i18n/config";

const contactByLocale = {
  es: {
    heading: "Hablemos de tu proyecto",
    description:
      "Cuentanos en que etapa esta tu negocio y te proponemos un plan digital realista para Latinoamerica, con tiempos, alcance y presupuesto.",
    location: "Atencion remota para Latinoamerica",
  },
  en: {
    heading: "Let's talk about your project",
    description:
      "Tell us your current business stage and we will propose a practical digital roadmap for Latin America, including scope, timing, and budget.",
    location: "Remote service across Latin America",
  },
} as const;

const shared = {
  email: "raikonif@gmail.com",
  phone: "+591 63142527",
} as const;

export function getContactInfo(lang: Locale) {
  return {
    ...contactByLocale[lang],
    ...shared,
  };
}
