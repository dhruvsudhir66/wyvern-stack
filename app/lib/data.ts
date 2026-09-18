export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  icon: "code" | "smartphone" | "boxes" | "layers";
  highlights: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Development",
    eyebrow: "Digital Products",
    description:
      "High-performance websites and web applications designed around your business, customers, and digital goals.",
    longDescription:
      "We design and develop modern websites and web applications that combine strong visual design, responsive interfaces, technical performance, and maintainable architecture. From business websites and customer portals to complex web applications, we build digital experiences around how your business actually works.",
    icon: "code",
    highlights: [
      "Business websites and corporate platforms",
      "Web applications and customer portals",
      "Responsive and accessible interfaces",
      "E-commerce experiences",
      "API and third-party integrations",
      "SEO and performance-focused development",
    ],
    process: [
      "Understand the business, audience, goals, and technical requirements.",
      "Define the information architecture, user experience, and technical approach.",
      "Design and develop the interface using reusable, maintainable components.",
      "Test, optimize, deploy, and prepare the platform for ongoing growth.",
    ],
  },

  {
    slug: "mobile-development",
    title: "Mobile Development",
    shortTitle: "Mobile Development",
    eyebrow: "Connected Experiences",
    description:
      "Mobile applications designed for reliable, intuitive experiences across iOS, Android, and connected digital services.",
    longDescription:
      "We build mobile applications around real user workflows, business requirements, and connected digital services. From customer-facing applications to internal mobile tools, we focus on intuitive experiences, reliable functionality, and an architecture that can evolve with the product.",
    icon: "smartphone",
    highlights: [
      "iOS and Android applications",
      "Cross-platform mobile development",
      "Mobile-first user experiences",
      "API and backend integrations",
      "Authentication and user accounts",
      "Push notifications and connected services",
    ],
    process: [
      "Define the product requirements, users, workflows, and target platforms.",
      "Design the mobile experience and establish the application architecture.",
      "Develop the application and connect required backend services.",
      "Test across devices, optimize the experience, and prepare for release.",
    ],
  },

  {
    slug: "erp-solutions",
    title: "ERP Solutions",
    shortTitle: "ERP Solutions",
    eyebrow: "Business Systems",
    description:
      "Connected business systems that bring operations, inventory, workflows, and internal processes into one platform.",
    longDescription:
      "We develop business management platforms that connect the operational systems your organization relies on. From inventory and purchasing to finance, people, projects, and reporting, ERP solutions are designed around your workflows rather than forcing your business into a rigid system.",
    icon: "boxes",
    highlights: [
      "Inventory and stock management",
      "Sales and purchasing workflows",
      "Finance and business operations",
      "Employee and project management",
      "Reporting and business dashboards",
      "Role-based access and permissions",
    ],
    process: [
      "Map your existing business processes, roles, data, and operational requirements.",
      "Design the system architecture, workflows, permissions, and reporting structure.",
      "Build the core modules and connect the systems your teams already use.",
      "Test the workflows, refine the platform, and prepare it for production use.",
    ],
  },

  {
    slug: "saas-development",
    title: "SaaS Development",
    shortTitle: "SaaS Development",
    eyebrow: "Software as a Service",
    description:
      "Scalable SaaS platforms that turn business ideas and workflows into secure, subscription-based software products.",
    longDescription:
      "We design and develop SaaS products from the application experience through the systems behind it. Product architecture, authentication, subscriptions, user management, dashboards, integrations, and scalable infrastructure are considered together so the platform can evolve as its customer base grows.",
    icon: "layers",
    highlights: [
      "Multi-user SaaS applications",
      "Authentication and account management",
      "Subscription and billing workflows",
      "Admin and analytics dashboards",
      "Third-party and API integrations",
      "Scalable application architecture",
    ],
    process: [
      "Define the product, target users, core workflows, and commercial model.",
      "Design the application architecture, data model, and user experience.",
      "Build the product foundation, core features, accounts, and integrations.",
      "Test, deploy, measure usage, and establish the foundation for future releases.",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  metrics: string;
  bg: string;
  image?: string;
  description?: string;
  technologies?: string[];
  url?: string;
};

export const projects: Project[] = [
  {
    slug: "lumina-salon",
    title: "Lumina Salon & Beauty",
    category: "Web Design & Development",
    metrics: "Premium Beauty Experience",
    bg: "bg-[#302426]",
    image: "/lumina-salon-website.webp",
    description:
      "A premium digital experience for a modern beauty studio, combining editorial-inspired design, immersive visuals, intuitive navigation and a seamless booking journey.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://lumina.wyvernstack.com/",
  },
  {
    slug: "smile-care",
    title: "SmileCare Dental Studio",
    category: "Web Design & Development",
    metrics: "Patient-First Digital Experience",
    bg: "bg-[#171a19]",
    image: "/smilecare-dental-website.webp",
    description:
      "A thoughtfully crafted digital experience for a modern dental studio. The website combines editorial-inspired layouts, calming visual language, immersive photography and purposeful motion to transform a traditionally clinical experience into something warm, intuitive and human.",
    technologies: ["HTML", "CSS", "Javascript"],
    url: "https://smilecare.wyvernstack.com/",
  },
  {
    slug: "nexa-erp",
    title: "Nexa ERP Software",
    category: "Web Design & Development",
    metrics: "ERP Solutions for Customers",
    bg: "bg-[#171a19]",
    image: "/nexa-erp-dashboard.webp",
    description:
      "A modern all-in-one ERP platform that unifies finance, sales, purchasing, inventory, people, projects, and business reporting through a clean, data-driven interface built for growing businesses.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://nexa-erp.wyvernstack.com/",
  },
  {
    slug: "elan-boutique",
    title: "Elan Boutique",
    category: "Web Design & Development",
    metrics: "Modern Fashion for Modern People",
    bg: "bg-[#171a19]",
    image: "/elan-boutique-website.webp",
    description:
      "An edit of sculptural silhouettes, tactile fabrics and considered details—designed for the woman who never needs to be loud.",
    technologies: ["React.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://elan.wyvernstack.com/",
  },
  {
    slug: "dreams-restaurant",
    title: "Dreams Restaurant",
    category: "Web Design & Development",
    metrics: "A Taste Worth Remembering",
    bg: "bg-[#171a19]",
    image: "/dreams-restaurant-website.webp",
    description:
      "A warm and inviting digital experience for Dreams Restaurant—bringing its signature dishes, dining atmosphere and unique culinary identity to life through a modern, immersive website.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    url: "https://dreams-restaurant.wyvernstack.com/",
  },
];

export const featuredProjects: Project[] = [
  {
    slug: "lumina-salon",
    title: "Lumina Salon & Beauty",
    category: "Web Design & Development",
    metrics: "Premium Beauty Experience",
    bg: "bg-[#302426]",
    image: "/lumina-salon-website.webp",
    description:
      "A premium digital experience for a modern beauty studio, combining editorial-inspired design, immersive visuals, intuitive navigation and a seamless booking journey.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    url: "https://lumina.wyvernstack.com/",
  },
  {
    slug: "dreams-restaurant",
    title: "Dreams Restaurant",
    category: "Web Design & Development",
    metrics: "A Taste Worth Remembering",
    bg: "bg-[#171a19]",
    image: "/dreams-restaurant-website.webp",
    description:
      "A warm and inviting digital experience for Dreams Restaurant—bringing its signature dishes, dining atmosphere and unique culinary identity to life through a modern, immersive website.",
    technologies: ["HTML", "CSS", "Javascript", "Bootstrap"],
    url: "https://dreams-restaurant.wyvernstack.com/",
  },
];

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
