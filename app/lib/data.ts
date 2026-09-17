export type Service = {
  slug: string;
  title: string;
  shortTitle: string;
  eyebrow: string;
  description: string;
  longDescription: string;
  icon: "bot" | "code" | "layers" | "zap";
  highlights: string[];
  process: string[];
};

export const services: Service[] = [
  {
    slug: "ai-integration",
    title: "Custom AI Workflows & Agents",
    shortTitle: "AI Integration",
    eyebrow: "AI Integration",
    description:
      "Autonomous client-facing agents, retrieval systems, and AI capabilities built directly into modern web applications.",
    longDescription:
      "We design practical AI systems around your existing product and business workflows. From intelligent assistants and retrieval-augmented generation to automated internal processes, every workflow is engineered for reliability, observability, and a clear business outcome.",
    icon: "bot",
    highlights: [
      "AI agents and intelligent assistants",
      "Retrieval-augmented generation (RAG)",
      "LLM integrations and structured outputs",
      "Workflow automation and human-in-the-loop systems",
    ],
    process: [
      "Map the business workflow and identify the highest-value AI opportunities.",
      "Design the agent, data, tools, guardrails, and evaluation strategy.",
      "Build and integrate the workflow into your existing application.",
      "Measure quality, latency, cost, and business impact before scaling.",
    ],
  },
  {
    slug: "nextjs-platforms",
    title: "Next.js Web Platforms",
    shortTitle: "Web Platforms",
    eyebrow: "Web Engineering",
    description:
      "Blazing-fast Next.js applications designed for conversion, SEO, maintainability, and long-term scale.",
    longDescription:
      "We build production-grade web platforms using modern Next.js patterns. The result is a fast, accessible, search-friendly experience with an architecture your team can confidently extend as the business grows.",
    icon: "code",
    highlights: [
      "Next.js App Router architecture",
      "Server-rendered and statically generated experiences",
      "Performance and Core Web Vitals optimization",
      "API and third-party service integrations",
    ],
    process: [
      "Translate product requirements into a scalable information architecture.",
      "Build reusable components and application primitives.",
      "Optimize rendering, assets, data fetching, and deployment.",
      "Harden the platform for launch and future feature development.",
    ],
  },
  {
    slug: "design-systems",
    title: "Design Systems",
    shortTitle: "Design Systems",
    eyebrow: "Product Design",
    description:
      "Standardized UI foundations that make products consistent, faster to build, and easier to scale across teams.",
    longDescription:
      "A good design system is more than a component library. We create a cohesive visual and interaction language with reusable primitives, clear patterns, and implementation-ready components so design and engineering can move together.",
    icon: "layers",
    highlights: [
      "Reusable UI components",
      "Tokens for type, spacing, radius, and layout",
      "Responsive interaction patterns",
      "Tailwind CSS implementation and documentation",
    ],
    process: [
      "Audit the current product and identify repeated interface patterns.",
      "Define the visual primitives and reusable components.",
      "Implement the system in a maintainable component architecture.",
      "Document usage so new features stay visually consistent.",
    ],
  },
  {
    slug: "edge-infrastructure",
    title: "Edge-Optimized Infrastructure",
    shortTitle: "Edge Infrastructure",
    eyebrow: "Infrastructure",
    description:
      "Fast, resilient delivery architectures engineered around low latency, dependable deployments, and measurable performance.",
    longDescription:
      "We remove unnecessary latency from the path between your users and your application. Infrastructure decisions are driven by actual traffic patterns, caching needs, rendering strategy, and operational requirements rather than complexity for its own sake.",
    icon: "zap",
    highlights: [
      "Caching and edge delivery strategies",
      "Performance profiling and bottleneck analysis",
      "Resilient deployment patterns",
      "Monitoring and production diagnostics",
    ],
    process: [
      "Measure the current application and identify real bottlenecks.",
      "Choose the simplest architecture that addresses those bottlenecks.",
      "Implement caching, rendering, and delivery optimizations.",
      "Establish performance budgets and production monitoring.",
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
  image: "/lumina-salon.png",
  description:
    "A premium digital experience for a modern beauty studio, combining editorial-inspired design, immersive visuals, intuitive navigation and a seamless booking journey.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  url: "https://lumina.aevonsolutions.co.in/"
},
 {
  slug: "smile-care",
  title: "SmileCare Dental Studio",
  category: "Web Design & Development",
  metrics: "Patient-First Digital Experience",
  bg: "bg-[#171a19]",
  image: "/smilecare.png",
  description:
    "A thoughtfully crafted digital experience for a modern dental studio. The website combines editorial-inspired layouts, calming visual language, immersive photography and purposeful motion to transform a traditionally clinical experience into something warm, intuitive and human.",
  technologies: [
    "HTML",
    "CSS",
    "Javascript"
  ],
  url: "https://smilecare.aevonsolutions.co.in/",
},
 {
  slug: "nexa-erp",
  title: "Nexa ERP Software",
  category: "Web Design & Development",
  metrics: "ERP Solutions for Customers",
  bg: "bg-[#171a19]",
  image: "/nexa-erp.png",
  description:
    "A modern all-in-one ERP platform that unifies finance, sales, purchasing, inventory, people, projects, and business reporting through a clean, data-driven interface built for growing businesses.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  url: "https://nexaerp.aevonsolutions.co.in/",
},
 {
  slug: "elan-botique",
  title: "Elan Botique",
  category: "Web Design & Development",
  metrics: "Modern Fashion for Modern People",
  bg: "bg-[#171a19]",
  image: "/elan.png",
  description:
    "An edit of sculptural silhouettes, tactile fabrics and considered details—designed for the woman who never needs to be loud.",
  technologies: [
    "React.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  url: "https://elan.aevonsolutions.co.in/",
},
{
  slug: "dreams-restaurant",
  title: "Dreams Restaurant",
  category: "Web Design & Development",
  metrics: "A Taste Worth Remembering",
  bg: "bg-[#171a19]",
  image: "/dreams.png",
  description:
    "A warm and inviting digital experience for Dreams Restaurant—bringing its signature dishes, dining atmosphere and unique culinary identity to life through a modern, immersive website.",
  technologies: [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
  ],
  url: "https://dreams-restaurant.aevonsolutions.co.in/",
},
];

export const featuredProjects: Project[] = [
  {
  slug: "lumina-salon",
  title: "Lumina Salon & Beauty",
  category: "Web Design & Development",
  metrics: "Premium Beauty Experience",
  bg: "bg-[#302426]",
  image: "/lumina-salon.png",
  description:
    "A premium digital experience for a modern beauty studio, combining editorial-inspired design, immersive visuals, intuitive navigation and a seamless booking journey.",
  technologies: [
    "Next.js",
    "TypeScript",
    "Tailwind CSS",
    "Framer Motion",
  ],
  url: "https://lumina.aevonsolutions.co.in/"
},
{
  slug: "dreams-restaurant",
  title: "Dreams Restaurant",
  category: "Web Design & Development",
  metrics: "A Taste Worth Remembering",
  bg: "bg-[#171a19]",
  image: "/dreams.png",
  description:
    "A warm and inviting digital experience for Dreams Restaurant—bringing its signature dishes, dining atmosphere and unique culinary identity to life through a modern, immersive website.",
  technologies: [
    "HTML",
    "CSS",
    "Javascript",
    "Bootstrap",
  ],
  url: "https://dreams-restaurant.aevonsolutions.co.in/",
},
]

export const getService = (slug: string) =>
  services.find((service) => service.slug === slug);

export const getProject = (slug: string) =>
  projects.find((project) => project.slug === slug);
