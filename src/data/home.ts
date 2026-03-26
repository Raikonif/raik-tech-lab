import type { Locale } from "@i18n/config";
import { withLocalePath } from "@i18n/config";

const content = {
  es: {
    heroContent: {
      title:
        "Impulsamos negocios en Latinoamerica con tecnologia que vende y escala.",
      description:
        "El mercado tecnologico regional esta creciendo, pero muchas empresas aun operan con procesos manuales. Creamos sistemas internos, e-commerce, MVPs y automatizaciones para transformar operaciones en resultados medibles.",
      primaryCta: {
        label: "Solicitar diagnostico",
        icon: "bx:bx-line-chart",
      },
      secondaryCta: {
        label: "Ver servicios",
        icon: "bx:bx-briefcase-alt-2",
      },
      badge: "Soluciones de software para empresas y startups en Latinoamerica",
    },
    marketHighlights: [
      { value: "+15%", label: "Crecimiento anual del sector tech" },
      { value: "+20%", label: "Incremento estimado en demanda de software" },
      {
        value: "200+",
        label: "Empresas de software activas en mercados regionales",
      },
      { value: "150+", label: "Startups tecnologicas activas" },
    ],
    featuresSection: {
      title: "Servicios de mayor demanda en el mercado regional",
      description:
        "Diseñamos soluciones enfocadas en sectores donde ya existe necesidad real, presupuesto y urgencia por digitalizar.",
    },
    features: [
      {
        title: "Digitalizacion de negocios tradicionales",
        description:
          "Reemplazamos Excel, procesos manuales y operaciones por WhatsApp con sistemas internos, paneles administrativos, inventario, facturacion y CRM.",
        icon: "bx:bx-buildings",
        color: "bg-green-500",
      },
      {
        title: "E-commerce y pagos digitales",
        description:
          "Construimos tiendas online, integraciones de pago, gestion de pedidos y embudos de conversion para negocios que aun no venden en serio por internet.",
        icon: "bx:bx-cart-alt",
        color: "bg-blue-500",
      },
      {
        title: "MVPs y plataformas para startups",
        description:
          "Lanzamos productos minimos viables en semanas, con arquitectura escalable para validar mercado y crecer sin rehacer todo desde cero.",
        icon: "bx:bx-rocket",
        color: "bg-red-500",
      },
      {
        title: "Automatizacion y soluciones con IA",
        description:
          "Creamos chatbots, flujos inteligentes, recomendaciones y automatizaciones de datos para equipos que quieren producir mas con menos friccion.",
        icon: "bx:bx-bot",
        color: "bg-black",
      },
      {
        title: "Fintech y sistemas financieros",
        description:
          "Desarrollamos billeteras, dashboards financieros y experiencias de pago claras para competir frente a la banca tradicional.",
        icon: "bx:bx-wallet",
        color: "bg-yellow-500",
      },
    ],
    opportunitySection: {
      title: "Por que este es el momento ideal en Latinoamerica",
      description:
        "El mercado no esta saturado, los competidores tradicionales aun son lentos y las empresas que digitalizan temprano se quedan con la mayor ventaja.",
    },
    opportunityPoints: [
      "La demanda crece mas rapido que la oferta especializada en software de calidad.",
      "La mayoria de negocios sigue operando con procesos manuales y poco control de datos.",
      "La adopcion de pagos digitales y fintech acelera nuevos modelos de ingreso.",
      "Las startups locales necesitan equipos tecnicos que lancen MVPs de forma rapida y estable.",
    ],
    deliveryModel: [
      {
        title: "Diagnostico de operacion",
        description:
          "Auditamos procesos, cuellos de botella y oportunidades de automatizacion con impacto economico.",
      },
      {
        title: "Roadmap y prototipo",
        description:
          "Definimos prioridades, alcance y una primera version orientada a resultados medibles.",
      },
      {
        title: "Implementacion y crecimiento",
        description:
          "Desplegamos, capacitamos al equipo y evolucionamos la plataforma por etapas.",
      },
    ],
    logoSectionTitle:
      "Stack moderno para lanzar rapido y escalar con seguridad",
    ctaContent: {
      title: "Convirtamos tu operacion manual en una maquina digital.",
      description:
        "Agenda una reunion y te mostramos en que area de tu negocio tienes el retorno mas rapido con tecnologia.",
      actionLabel: "Hablar con un especialista",
    },
  },
  en: {
    heroContent: {
      title:
        "We help businesses across Latin America scale with technology that sells.",
      description:
        "Regional demand for software is growing fast, but many companies still rely on manual processes. We build internal systems, e-commerce platforms, MVPs, and AI automations with measurable impact.",
      primaryCta: {
        label: "Request assessment",
        icon: "bx:bx-line-chart",
      },
      secondaryCta: {
        label: "View services",
        icon: "bx:bx-briefcase-alt-2",
      },
      badge: "Software solutions for companies and startups in Latin America",
    },
    marketHighlights: [
      { value: "+15%", label: "Annual growth in the tech sector" },
      { value: "+20%", label: "Estimated increase in software demand" },
      {
        value: "200+",
        label: "Software companies active across regional markets",
      },
      { value: "150+", label: "Active technology startups" },
    ],
    featuresSection: {
      title: "Most demanded digital services in the regional market",
      description:
        "We design solutions for business areas with immediate demand, clear ROI, and urgent digitization needs.",
    },
    features: [
      {
        title: "Traditional business digitization",
        description:
          "We replace spreadsheets, manual tasks, and chat-based operations with internal systems, admin dashboards, inventory, invoicing, and CRM.",
        icon: "bx:bx-buildings",
        color: "bg-green-500",
      },
      {
        title: "E-commerce and digital payments",
        description:
          "We build online stores, payment integrations, order management, and conversion-focused funnels for businesses moving online.",
        icon: "bx:bx-cart-alt",
        color: "bg-blue-500",
      },
      {
        title: "MVPs and startup platforms",
        description:
          "We launch MVPs quickly with scalable architecture so teams can validate market traction before scaling.",
        icon: "bx:bx-rocket",
        color: "bg-red-500",
      },
      {
        title: "AI automation solutions",
        description:
          "We develop chatbots, intelligent workflows, recommendations, and data automations that reduce operational friction.",
        icon: "bx:bx-bot",
        color: "bg-black",
      },
      {
        title: "Fintech and financial systems",
        description:
          "We build wallets, financial dashboards, and payment experiences designed for clarity, scale, and trust.",
        icon: "bx:bx-wallet",
        color: "bg-yellow-500",
      },
    ],
    opportunitySection: {
      title: "Why this is the right time in Latin America",
      description:
        "The market is growing, competition is still fragmented, and early digitizers capture long-term operational advantage.",
    },
    opportunityPoints: [
      "Demand is growing faster than high-quality software delivery capacity.",
      "Many businesses still run critical operations with low process visibility.",
      "Digital payments and fintech adoption are opening new revenue models.",
      "Local startups need fast and stable MVP execution partners.",
    ],
    deliveryModel: [
      {
        title: "Operational diagnosis",
        description:
          "We audit bottlenecks, workflows, and automation opportunities with measurable business impact.",
      },
      {
        title: "Roadmap and prototype",
        description:
          "We define priorities and scope, then launch a first version focused on clear business outcomes.",
      },
      {
        title: "Implementation and growth",
        description:
          "We deploy, onboard your team, and evolve the platform through phased iterations.",
      },
    ],
    logoSectionTitle: "Modern stack to launch faster and scale safely",
    ctaContent: {
      title: "Turn manual operations into a digital growth engine.",
      description:
        "Book a call and we will identify where technology can deliver your fastest return.",
      actionLabel: "Talk to a specialist",
    },
  },
} as const;

export const technologyIcons = [
  {
    name: "simple-icons:react",
    className: "size-8 hover:text-cyan-600 md:size-12",
  },
  {
    name: "simple-icons:astro",
    className: "size-8 hover:text-slate-800 md:size-12",
  },
  {
    name: "simple-icons:tailwindcss",
    className: "size-8 hover:text-emerald-500 md:size-16",
  },
  {
    name: "simple-icons:django",
    className: "size-8 hover:text-green-800 md:size-12",
  },
  {
    name: "simple-icons:fastapi",
    className: "size-8 hover:text-emerald-500 md:size-16",
  },
  {
    name: "simple-icons:digitalocean",
    className: "size-8 hover:text-sky-700 md:size-16",
  },
  {
    name: "simple-icons:railway",
    className: "size-8 hover:text-indigo-800 md:size-16",
  },
  {
    name: "simple-icons:vercel",
    className: "size-8 hover:text-slate-700 md:size-12",
  },
] as const;

export function getHeroContent(lang: Locale) {
  return {
    ...content[lang].heroContent,
    primaryCta: {
      ...content[lang].heroContent.primaryCta,
      href: withLocalePath(lang, "/contact"),
    },
    secondaryCta: {
      ...content[lang].heroContent.secondaryCta,
      href: withLocalePath(lang, "/services"),
    },
  };
}

export function getMarketHighlights(lang: Locale) {
  return content[lang].marketHighlights;
}

export function getFeaturesSection(lang: Locale) {
  return content[lang].featuresSection;
}

export function getFeatures(lang: Locale) {
  return content[lang].features;
}

export function getOpportunitySection(lang: Locale) {
  return content[lang].opportunitySection;
}

export function getOpportunityPoints(lang: Locale) {
  return content[lang].opportunityPoints;
}

export function getDeliveryModel(lang: Locale) {
  return content[lang].deliveryModel;
}

export function getLogoSectionTitle(lang: Locale) {
  return content[lang].logoSectionTitle;
}

export function getCtaContent(lang: Locale) {
  return {
    title: content[lang].ctaContent.title,
    description: content[lang].ctaContent.description,
    action: {
      label: content[lang].ctaContent.actionLabel,
      href: withLocalePath(lang, "/contact"),
    },
  };
}
