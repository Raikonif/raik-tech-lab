import type { Locale } from "@i18n/config";
import { withLocalePath } from "@i18n/config";

type NavigationChild = {
  title: string;
  path: string;
  icon: string;
  color: string;
};

type NavigationItem = {
  title: string;
  path: string;
  badge?: boolean;
  children?: NavigationChild[];
};

const navigationByLocale: Record<
  Locale,
  Omit<NavigationItem, "path" | "children"> &
    { path: string; children?: Omit<NavigationChild, "path">[] }[]
> = {
  es: [
    {
      title: "Servicios",
      path: "/services",
      children: [
        {
          title: "Digitalizacion empresarial",
          icon: "bx:bx-buildings",
          color: "bg-green-500",
        },
        {
          title: "E-commerce y pagos",
          icon: "bx:bx-cart-alt",
          color: "bg-blue-500",
        },
        {
          title: "MVPs para startups",
          icon: "bx:bx-rocket",
          color: "bg-red-500",
        },
        {
          title: "Automatizacion con IA",
          icon: "bx:bx-bot",
          color: "bg-black",
        },
        {
          title: "Fintech y finanzas",
          icon: "bx:bx-wallet",
          color: "bg-yellow-500",
        },
      ],
    },
    { title: "Mercado", path: "/market" },
    { title: "Precios", path: "/pricing" },
    { title: "Sobre Nosotros", path: "/about" },
    { title: "Blog", badge: false, path: "/blog" },
    { title: "Contacto", path: "/contact" },
  ],
  en: [
    {
      title: "Services",
      path: "/services",
      children: [
        {
          title: "Business digitization",
          icon: "bx:bx-buildings",
          color: "bg-green-500",
        },
        {
          title: "E-commerce & payments",
          icon: "bx:bx-cart-alt",
          color: "bg-blue-500",
        },
        {
          title: "Startup MVP platforms",
          icon: "bx:bx-rocket",
          color: "bg-red-500",
        },
        { title: "AI automation", icon: "bx:bx-bot", color: "bg-black" },
        {
          title: "Fintech systems",
          icon: "bx:bx-wallet",
          color: "bg-yellow-500",
        },
      ],
    },
    { title: "Market", path: "/market" },
    { title: "Pricing", path: "/pricing" },
    { title: "About", path: "/about" },
    { title: "Blog", badge: false, path: "/blog" },
    { title: "Contact", path: "/contact" },
  ],
};

const serviceAnchors = [
  "digitalizacion",
  "ecommerce",
  "mvp",
  "ia",
  "fintech",
] as const;

export function getNavigationItems(lang: Locale): NavigationItem[] {
  return navigationByLocale[lang].map((item) => {
    if (!item.children) {
      return {
        ...item,
        path: withLocalePath(lang, item.path),
      };
    }

    return {
      ...item,
      path: withLocalePath(lang, item.path),
      children: item.children.map((child, index) => ({
        ...child,
        path: `${withLocalePath(lang, "/services")}#${serviceAnchors[index]}`,
      })),
    };
  });
}
