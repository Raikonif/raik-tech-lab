import type { Locale } from "@i18n/config";
import { withLocalePath } from "@i18n/config";

const pricingByLocale = {
  es: [
    {
      id: "landing-pages",
      title: "Landing Pages",
      description:
        "Ideal para captar clientes rapido, con niveles que van desde presencia inicial hasta experiencia dinamica editable.",
      plans: [
        {
          name: "Landing Basica",
          from: "Pago unico desde",
          price: "USD 275",
          billingLabel: "Pago unico",
          popular: false,
          features: [
            "1 pagina orientada a conversion",
            "Formulario de contacto y WhatsApp",
            "Integracion SEO inicial",
            "Velocidad optimizada para movil",
            "Entrega en 7 a 10 dias",
          ],
          button: { text: "Empezar basico", link: "/contact" },
        },
        {
          name: "Landing + Chatbot Comercial",
          from: "Implementacion desde",
          price: "USD 460",
          billingLabel: "Implementacion + mensual",
          extraNote:
            "Uso del chatbot desde USD 50/mes por monitoreo, ajustes y volumen de conversaciones.",
          popular: true,
          features: [
            "Todo lo de Landing Basica",
            "Chatbot para pre-calificar prospectos",
            "Respuestas automaticas 24/7",
            "Conexion a correo o WhatsApp",
            "Reporte mensual de conversaciones",
          ],
          button: { text: "Quiero chatbot", link: "/contact" },
        },
        {
          name: "Landing Dinamica Editable",
          from: "Pago unico desde",
          price: "USD 700",
          billingLabel: "Pago unico",
          extraNote:
            "Se pueden modificar secciones, banners y crear paginas internas sin tocar codigo.",
          popular: false,
          features: [
            "Panel para editar textos e imagenes",
            "Bloques modulares para nuevas secciones",
            "Hasta 5 paginas internas iniciales",
            "Formulario y CTA por seccion",
            "Capacitacion de uso para tu equipo",
          ],
          button: { text: "Necesito editable", link: "/contact" },
        },
      ],
    },
    {
      id: "custom-small-systems",
      title: "Sistemas Personalizados Pequenos",
      description:
        "Para operaciones que necesitan control interno sin llegar aun a una plataforma compleja.",
      plans: [
        {
          name: "Small Core",
          from: "Pago unico desde",
          price: "USD 930",
          billingLabel: "Pago unico",
          popular: false,
          features: [
            "1 modulo principal (inventario, ventas o agenda)",
            "Hasta 5 usuarios",
            "Panel administrativo basico",
            "Roles y permisos iniciales",
            "Soporte post-lanzamiento 30 dias",
          ],
          button: { text: "Cotizar Small Core", link: "/contact" },
        },
        {
          name: "Small Plus",
          from: "Pago unico desde",
          price: "USD 1,400",
          billingLabel: "Pago unico",
          popular: true,
          features: [
            "Hasta 3 modulos conectados",
            "Hasta 12 usuarios",
            "Reportes y filtros avanzados",
            "Integracion de notificaciones",
            "Base para crecimiento a mediano sistema",
          ],
          button: { text: "Escalar a Plus", link: "/contact" },
        },
      ],
    },
    {
      id: "custom-medium-systems",
      title: "Sistemas Personalizados Medianos",
      description:
        "Pensado para empresas con varios flujos de trabajo, equipos por area y mayor volumen de datos.",
      plans: [
        {
          name: "Medium Ops",
          from: "Pago unico desde",
          price: "USD 2,370",
          billingLabel: "Pago unico",
          popular: false,
          features: [
            "Arquitectura multi-modulo",
            "Hasta 25 usuarios",
            "Flujos por area (ventas, operaciones, soporte)",
            "Dashboard ejecutivo",
            "Integraciones API basicas",
          ],
          button: { text: "Cotizar Medium Ops", link: "/contact" },
        },
        {
          name: "Medium Scale",
          from: "Pago unico desde",
          price: "USD 3,575",
          billingLabel: "Pago unico",
          popular: true,
          features: [
            "Todo lo de Medium Ops",
            "Hasta 50 usuarios",
            "Automatizaciones de procesos clave",
            "Bitacora y trazabilidad de cambios",
            "Soporte prioritario 60 dias",
          ],
          button: { text: "Ir por Medium Scale", link: "/contact" },
        },
      ],
    },
    {
      id: "erp-crm",
      title: "ERP / CRM",
      description:
        "Soluciones para gestion comercial, clientes, finanzas y operaciones en una misma plataforma.",
      plans: [
        {
          name: "CRM Esencial",
          from: "Implementacion desde",
          price: "USD 1,850",
          billingLabel: "Implementacion + mensual",
          extraNote:
            "Mantenimiento y mejoras desde USD 130/mes segun cantidad de usuarios.",
          popular: false,
          features: [
            "Pipeline comercial y seguimiento de clientes",
            "Historial de interacciones",
            "Recordatorios y tareas",
            "Embudo de conversion por vendedor",
            "Reportes comerciales base",
          ],
          button: { text: "Implementar CRM", link: "/contact" },
        },
        {
          name: "CRM Pro",
          from: "Implementacion desde",
          price: "USD 2,800",
          billingLabel: "Implementacion + mensual",
          extraNote: "Mantenimiento y evolucion desde USD 215/mes.",
          popular: true,
          features: [
            "Todo lo de CRM Esencial",
            "Automatizacion de seguimiento comercial",
            "Segmentacion avanzada de clientes",
            "Integracion de WhatsApp y correo",
            "KPIs de rendimiento por equipo",
          ],
          button: { text: "Escalar CRM", link: "/contact" },
        },
        {
          name: "ERP Integral",
          from: "Implementacion desde",
          price: "USD 4,600",
          billingLabel: "Implementacion + mensual",
          extraNote:
            "Operacion mensual desde USD 400/mes por infraestructura, soporte y evolucion continua.",
          popular: false,
          features: [
            "Modulos de compras, inventario, ventas y finanzas",
            "Flujos multi-area con aprobaciones",
            "Control de costos y margenes",
            "Reportes ejecutivos y operativos",
            "Roadmap de evolucion trimestral",
          ],
          button: { text: "Disenar ERP", link: "/contact" },
        },
      ],
    },
    {
      id: "ai-automation-monthly",
      title: "IA y Automatizacion (Mensual)",
      description:
        "Servicio recurrente para chatbots y automatizaciones. El valor mensual depende de complejidad, volumen de uso e integraciones.",
      plans: [
        {
          name: "AI Starter",
          from: "Mensual desde",
          price: "USD 65/mes",
          billingLabel: "Pago mensual recurrente",
          popular: false,
          features: [
            "1 flujo automatizado simple",
            "Hasta 1 canal de atencion",
            "Ajustes menores mensuales",
            "Monitoreo basico",
          ],
          button: { text: "Activar Starter", link: "/contact" },
        },
        {
          name: "AI Growth",
          from: "Mensual desde",
          price: "USD 160/mes",
          billingLabel: "Pago mensual recurrente",
          extraNote:
            "Recomendado para operaciones con varios flujos y seguimiento continuo.",
          popular: true,
          features: [
            "Hasta 3 automatizaciones conectadas",
            "Integracion con CRM o base de datos",
            "Reportes de rendimiento mensuales",
            "Mejoras iterativas por objetivos",
          ],
          button: { text: "Escalar a Growth", link: "/contact" },
        },
        {
          name: "AI Scale",
          from: "Mensual desde",
          price: "USD 345/mes",
          billingLabel: "Pago mensual recurrente",
          extraNote:
            "Precio ajustado segun complejidad, cantidad de integraciones, volumen y criticidad del proceso.",
          popular: false,
          features: [
            "Automatizaciones multi-area",
            "Integraciones avanzadas",
            "Monitoreo y optimizacion continua",
            "Soporte prioritario mensual",
          ],
          button: { text: "Disenar plan Scale", link: "/contact" },
        },
      ],
    },
  ],
  en: [
    {
      id: "landing-pages",
      title: "Landing Pages",
      description:
        "Built to capture demand quickly, from a simple launch-ready page to editable dynamic experiences.",
      plans: [
        {
          name: "Basic Landing",
          from: "One-time fee from",
          price: "USD 275",
          billingLabel: "One-time payment",
          popular: false,
          features: [
            "1 conversion-focused page",
            "Contact and WhatsApp form",
            "Initial SEO setup",
            "Mobile speed optimization",
            "Delivery in 7 to 10 days",
          ],
          button: { text: "Start basic", link: "/contact" },
        },
        {
          name: "Landing + Sales Chatbot",
          from: "Implementation from",
          price: "USD 460",
          billingLabel: "Implementation + monthly",
          extraNote:
            "Chatbot usage from USD 50/month based on monitoring, tuning, and conversation volume.",
          popular: true,
          features: [
            "Everything in Basic Landing",
            "Chatbot to pre-qualify leads",
            "24/7 automated responses",
            "Email or WhatsApp connection",
            "Monthly conversation report",
          ],
          button: { text: "Add chatbot", link: "/contact" },
        },
        {
          name: "Dynamic Editable Landing",
          from: "One-time fee from",
          price: "USD 700",
          billingLabel: "One-time payment",
          extraNote:
            "Edit sections, banners, and internal pages without touching code.",
          popular: false,
          features: [
            "Content editing panel",
            "Modular section blocks",
            "Up to 5 initial internal pages",
            "Forms and CTA per section",
            "Team usage onboarding",
          ],
          button: { text: "Need editable", link: "/contact" },
        },
      ],
    },
    {
      id: "custom-small-systems",
      title: "Small Custom Systems",
      description:
        "For teams that need operational control without jumping yet to a full enterprise platform.",
      plans: [
        {
          name: "Small Core",
          from: "One-time fee from",
          price: "USD 930",
          billingLabel: "One-time payment",
          popular: false,
          features: [
            "1 core module (inventory, sales, or scheduling)",
            "Up to 5 users",
            "Basic admin dashboard",
            "Initial role permissions",
            "30-day post-launch support",
          ],
          button: { text: "Quote Small Core", link: "/contact" },
        },
        {
          name: "Small Plus",
          from: "One-time fee from",
          price: "USD 1,400",
          billingLabel: "One-time payment",
          popular: true,
          features: [
            "Up to 3 connected modules",
            "Up to 12 users",
            "Advanced reporting and filters",
            "Notification integrations",
            "Foundation for medium-system growth",
          ],
          button: { text: "Scale to Plus", link: "/contact" },
        },
      ],
    },
    {
      id: "custom-medium-systems",
      title: "Medium Custom Systems",
      description:
        "For companies with multi-team workflows, higher data volume, and cross-area operations.",
      plans: [
        {
          name: "Medium Ops",
          from: "One-time fee from",
          price: "USD 2,370",
          billingLabel: "One-time payment",
          popular: false,
          features: [
            "Multi-module architecture",
            "Up to 25 users",
            "Department workflows (sales, ops, support)",
            "Executive dashboard",
            "Basic API integrations",
          ],
          button: { text: "Quote Medium Ops", link: "/contact" },
        },
        {
          name: "Medium Scale",
          from: "One-time fee from",
          price: "USD 3,575",
          billingLabel: "One-time payment",
          popular: true,
          features: [
            "Everything in Medium Ops",
            "Up to 50 users",
            "Process automation flows",
            "Change traceability logs",
            "60-day priority support",
          ],
          button: { text: "Choose Medium Scale", link: "/contact" },
        },
      ],
    },
    {
      id: "erp-crm",
      title: "ERP / CRM",
      description:
        "Unified platforms for commercial operations, customer management, finance, and internal processes.",
      plans: [
        {
          name: "CRM Essential",
          from: "Implementation from",
          price: "USD 1,850",
          billingLabel: "Implementation + monthly",
          extraNote:
            "Maintenance and upgrades from USD 130/month depending on active users.",
          popular: false,
          features: [
            "Sales pipeline and customer follow-up",
            "Interaction history",
            "Tasks and reminders",
            "Conversion funnel by seller",
            "Core commercial reports",
          ],
          button: { text: "Implement CRM", link: "/contact" },
        },
        {
          name: "CRM Pro",
          from: "Implementation from",
          price: "USD 2,800",
          billingLabel: "Implementation + monthly",
          extraNote: "Maintenance and evolution from USD 215/month.",
          popular: true,
          features: [
            "Everything in CRM Essential",
            "Automated sales follow-up",
            "Advanced customer segmentation",
            "WhatsApp and email integration",
            "Team performance KPIs",
          ],
          button: { text: "Scale CRM", link: "/contact" },
        },
        {
          name: "ERP Full",
          from: "Implementation from",
          price: "USD 4,600",
          billingLabel: "Implementation + monthly",
          extraNote:
            "Monthly operations from USD 400/month for infrastructure, support, and continuous evolution.",
          popular: false,
          features: [
            "Purchasing, inventory, sales, and finance modules",
            "Multi-department approval flows",
            "Cost and margin control",
            "Executive and operational reporting",
            "Quarterly evolution roadmap",
          ],
          button: { text: "Design ERP", link: "/contact" },
        },
      ],
    },
    {
      id: "ai-automation-monthly",
      title: "AI & Automation (Monthly)",
      description:
        "Recurring service for chatbots and automations. Monthly value depends on complexity, usage volume, and integrations.",
      plans: [
        {
          name: "AI Starter",
          from: "Monthly from",
          price: "USD 65/month",
          billingLabel: "Recurring monthly",
          popular: false,
          features: [
            "1 simple automated flow",
            "Up to 1 service channel",
            "Minor monthly improvements",
            "Basic monitoring",
          ],
          button: { text: "Activate Starter", link: "/contact" },
        },
        {
          name: "AI Growth",
          from: "Monthly from",
          price: "USD 160/month",
          billingLabel: "Recurring monthly",
          extraNote:
            "Recommended for operations with multiple flows and continuous optimization.",
          popular: true,
          features: [
            "Up to 3 connected automations",
            "CRM or database integration",
            "Monthly performance reports",
            "Goal-based iterative improvements",
          ],
          button: { text: "Scale to Growth", link: "/contact" },
        },
        {
          name: "AI Scale",
          from: "Monthly from",
          price: "USD 345/month",
          billingLabel: "Recurring monthly",
          extraNote:
            "Pricing adjusts by complexity, integration count, volume, and process criticality.",
          popular: false,
          features: [
            "Multi-area automation architecture",
            "Advanced integrations",
            "Continuous monitoring and optimization",
            "Priority monthly support",
          ],
          button: { text: "Design Scale plan", link: "/contact" },
        },
      ],
    },
  ],
} as const;

export function getPricingCategories(lang: Locale) {
  return pricingByLocale[lang].map((category) => ({
    ...category,
    plans: category.plans.map((plan) => ({
      ...plan,
      button: {
        ...plan.button,
        link: withLocalePath(lang, plan.button.link),
      },
    })),
  }));
}
