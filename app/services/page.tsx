"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BrainCircuit,
  Check,
  Code2,
  Cloud,
  Database,
  Layers3,
  Palette,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Settings2,
  Workflow,
  Zap,
} from "lucide-react";

import Navbar from "@/app/components/Navbar";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.15 },
  transition: { duration: 0.7, ease },
};

const services = [
  {
    number: "01",
    title: "Web Development",
    category: "Digital Products",
    description:
      "High-performance websites and web applications built around your business, your users, and the way your product needs to grow.",
    tags: ["Next.js", "React", "TypeScript"],
    icon: Code2,
  },
  {
    number: "02",
    title: "Mobile Development",
    category: "Connected Experiences",
    description:
      "Modern mobile experiences for iOS and Android, from polished consumer applications to powerful enterprise products.",
    tags: ["iOS", "Android", "React Native"],
    icon: Smartphone,
  },
  {
    number: "03",
    title: "UI/UX Design",
    category: "Product Experience",
    description:
      "Thoughtful interfaces and product experiences that make complex technology intuitive, useful, and unmistakably yours.",
    tags: ["UX Research", "UI Design", "Prototyping"],
    icon: Palette,
  },
  {
    number: "04",
    label: "Software as a Service",
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms designed to turn ideas into powerful, subscription-based products.",
    tags: ["Web Apps", "Cloud", "Subscriptions", "APIs"],
    icon: Layers3,
  },
  {
    number: "05",
    title: "Product Engineering",
    category: "End-to-End Development",
    description:
      "Strategy, design and engineering brought together to turn an idea, concept, or existing product into something ready for real users.",
    tags: ["MVP", "Product Strategy", "Engineering"],
    icon: Layers3,
  },
];

const engineering = [
  {
    number: "06",
    title: "Backend Development",
    description:
      "Robust APIs, databases and backend architecture that power dependable digital products.",
    tags: ["APIs", "Node.js", "PostgreSQL"],
    icon: Database,
  },
  {
    number: "07",
    title: "Cloud & DevOps",
    description:
      "Cloud infrastructure and deployment pipelines designed for reliability, security and scale.",
    tags: ["AWS", "Azure", "CI/CD"],
    icon: Cloud,
  },
  {
    number: "08",
    title: "Cybersecurity",
    description:
      "Security-minded engineering that protects applications, infrastructure, data and customer trust.",
    tags: ["Security", "Audits", "Hardening"],
    icon: ShieldCheck,
  },
  {
    number: "09",
    title: "Data & Analytics",
    description:
      "Data platforms and analytics that turn complex information into useful insights and better decisions.",
    tags: ["Analytics", "Dashboards", "Data Pipelines"],
    icon: BarChart3,
  },
  {
    number: "10",
    title: "E-commerce Solutions",
    description:
      "Scalable commerce experiences with storefronts, integrations, payments and custom workflows.",
    tags: ["Shopify", "Headless", "Payments"],
    icon: ShoppingBag,
  },
  {
    number: "11",
    title: "Legacy Modernization",
    description:
      "Modernize aging applications and infrastructure without disrupting the business processes that depend on them.",
    tags: ["Migration", "Refactoring", "Modernization"],
    icon: Settings2,
  },
];

const principles = [
  {
    number: "01",
    title: "Understand first",
    text: "We start with your business, users, constraints and desired outcome.",
  },
  {
    number: "02",
    title: "Design with purpose",
    text: "Every experience is shaped around clarity, usability and real-world behavior.",
  },
  {
    number: "03",
    title: "Engineer for reality",
    text: "We build reliable systems that can handle today's needs and tomorrow's growth.",
  },
  {
    number: "04",
    title: "Improve continuously",
    text: "Launch is a starting point. We keep improving the product as your business evolves.",
  },
];

const packages = [
  {
    number: "01",
    name: "Starter",
    price: "₹15,000",
    label: "Professional online presence",
    description:
      "A clean, professional website for businesses that need to establish a strong presence online without unnecessary complexity.",
    idealFor:
      "Small businesses · Freelancers · Startups · Local businesses · Vendors",
    delivery: "1–2 weeks",
    featured: false,
    includes: [
      "Up to 5 main pages",
      "Mostly static website",
      "Professional UI design",
      "Fully responsive design",
      "Contact / enquiry form",
      "Social media links",
      "Basic SEO-friendly structure",
      "SSL & security setup",
      "Performance optimization",
    ],
    cta: "Get Started",
  },
  {
    number: "02",
    name: "Business",
    price: "₹30,000",
    label: "Built for growth",
    description:
      "A more customized website designed to attract customers, showcase your services and give your business room to grow.",
    idealFor:
      "Growing businesses · Clinics · Salons · Restaurants · Hotels · Agencies · Professional services",
    delivery: "2–4 weeks",
    featured: true,
    includes: [
      "Everything in Starter",
      "Custom UI/UX design",
      "Up to 15 pages",
      "CMS / easy content management",
      "Blog / News section",
      "Advanced SEO",
      "Third-party service integrations",
      "Advanced enquiry forms",
      "Testimonials & galleries",
    ],
    cta: "Choose Business",
  },
  {
    number: "03",
    name: "Premium",
    price: "₹50,000",
    label: "Advanced digital experience",
    description:
      "A highly customized website for businesses that need advanced functionality, integrations and a more powerful digital experience.",
    idealFor:
      "Established businesses · E-commerce · Hospitality · SaaS · High-growth companies · Custom requirements",
    delivery: "4–8 weeks+",
    featured: false,
    includes: [
      "Everything in Business",
      "Custom website architecture",
      "Unlimited / custom page structure",
      "Customer accounts & authentication",
      "Payment gateway integration",
      "Custom workflows",
      "Admin dashboard",
      "Advanced API integrations",
      "Advanced analytics & tracking",
      "Security hardening",
      "Priority support",
      "Post-launch support",
    ],
    cta: "Build Something Custom",
  },
];

const customSolutions = [
  {
    title: "Custom Web Applications",
    text: "Purpose-built platforms around the way your business actually works.",
    items: ["Inventory", "Billing", "CRM", "Booking", "HRMS", "PMS", "Dashboards"],
    icon: Workflow,
  },
  {
    title: "E-commerce",
    text: "Commerce experiences built for products, customers, payments and growth.",
    items: [
      "Online stores",
      "Product catalogues",
      "Payments",
      "Orders",
      "Customer accounts",
    ],
    icon: ShoppingBag,
  },
  {
    title: "Mobile Applications",
    text: "Connected mobile experiences for customers, teams and on-demand services.",
    items: [
      "Customer apps",
      "Business apps",
      "Booking apps",
      "On-demand applications",
    ],
    icon: Smartphone,
  },
];

const included = [
  "Mobile-first responsive design",
  "Cross-browser compatibility",
  "SEO-friendly structure",
  "Secure deployment",
  "Performance optimization",
  "Contact & enquiry functionality",
  "Professional UI/UX",
  "Basic post-launch assistance",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090D] font-sans">
      <Navbar />

      {/* =========================================================
          HERO — DARK
      ========================================================= */}
      <section className="relative flex min-h-[88vh] items-center overflow-hidden bg-[#08090D] text-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease }}
          className="pointer-events-none absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-[#C81C33]/15 blur-[140px]"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.15, ease }}
          className="pointer-events-none absolute -left-40 bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-red-950/20 blur-[130px]"
        />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:pb-32">
          <div className="grid items-end gap-14 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-9"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C81C33]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-300">
                  What We Do
                </span>
              </div>

              <h1 className="mt-8 max-w-6xl text-5xl font-extrabold leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-[7.5rem]">
                Technology
                <br />
                <span className="text-white">built to</span>{" "}
                <span className="text-[#C81C33]">move.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="lg:col-span-3 lg:pb-3"
            >
              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                WYVERNSTACK combines strategy, design and engineering to create
                digital products, business systems and intelligent technology
                that help organizations move forward.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 text-sm font-semibold text-white"
              >
                Start a project

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all duration-300 group-hover:border-[#C81C33] group-hover:bg-[#C81C33]">
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </span>
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="mt-20 border-t border-white/10 pt-5"
          >
            <div className="flex flex-wrap justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              <span>Digital Products</span>
              <span>Mobile Experiences</span>
              <span>Business Systems</span>
              <span>AI & Automation</span>
              <span>Technology Engineering</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CORE SERVICES — LIGHT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F4F2ED] text-[#0B0F19]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
                Core services
              </p>

              <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                We build
                <br />
                digital
                <br />
                <span className="text-slate-400">experiences.</span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-slate-500">
                From a new digital product to a complete business platform,
                we bring the disciplines needed to take an idea from concept
                to reality.
              </p>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-slate-300/70 border-y border-slate-300/70">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.article
                      key={service.number}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.06,
                        ease,
                      }}
                      className="group relative py-9 sm:py-11"
                    >
                      <div className="grid gap-6 sm:grid-cols-12 sm:items-start">
                        <div className="sm:col-span-2">
                          <span className="text-xs font-bold tracking-[0.2em] text-[#C81C33]">
                            {service.number}
                          </span>

                          <div className="mt-6 hidden sm:block">
                            <Icon
                              size={20}
                              strokeWidth={1.6}
                              className="text-slate-300 transition-colors duration-300 group-hover:text-[#C81C33]"
                            />
                          </div>
                        </div>

                        <div className="sm:col-span-7">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            {service.category}
                          </p>

                          <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                            {service.title}
                          </h3>

                          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                            {service.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                            {service.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-[10px] font-semibold uppercase tracking-wider text-slate-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-start justify-between sm:col-span-3 sm:justify-end">
                          <Icon
                            size={20}
                            strokeWidth={1.6}
                            className="text-slate-300 sm:hidden"
                          />

                          <ArrowUpRight
                            size={20}
                            className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C81C33]"
                          />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C81C33] transition-all duration-500 group-hover:w-20" />
                    </motion.article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WEBSITE PACKAGES — DARK
      ========================================================= */}
      <section
        id="website-packages"
        className="relative overflow-hidden bg-[#08090D] text-white"
      >
        <div className="pointer-events-none absolute right-[-15rem] top-[-12rem] h-[40rem] w-[40rem] rounded-full bg-[#C81C33]/10 blur-[150px]" />

        <div
          className="pointer-events-none absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <motion.div {...fadeUp} className="max-w-4xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C81C33]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
                Website Packages
              </span>
            </div>

            <h2 className="mt-8 text-5xl font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">
              A website for
              <br />
              every stage
              <br />
              <span className="text-[#C81C33]">of business.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              Whether you're launching your business, building your online
              presence, or turning your website into a powerful customer
              acquisition tool, there is a package designed around where you
              are now.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
              <span>Simple</span>
              <span>Professional</span>
              <span>Scalable</span>
            </div>
          </motion.div>

          {/* Package selector / overview */}
          <div className="mt-20 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.article
                key={pkg.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
                className={`group relative flex flex-col bg-[#0B0F19] p-7 sm:p-8 lg:p-9 ${
                  pkg.featured ? "lg:bg-[#10131C]" : ""
                }`}
              >
                {pkg.featured && (
                  <div className="absolute right-0 top-0 bg-[#C81C33] px-4 py-2 text-[9px] font-bold uppercase tracking-[0.18em] text-white">
                    Most Popular
                  </div>
                )}

                <div className="flex items-start justify-between">
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#C81C33]">
                    {pkg.number}
                  </span>

                  <span className="text-[9px] uppercase tracking-[0.16em] text-white/20">
                    Website
                  </span>
                </div>

                <div className="mt-10">
                  <h3 className="text-3xl font-extrabold tracking-[-0.04em]">
                    {pkg.name}
                  </h3>

                  <p className="mt-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/30">
                    {pkg.label}
                  </p>
                </div>

                <div className="mt-8 border-y border-white/10 py-6">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                    Starting from
                  </p>

                  <p className="mt-2 text-4xl font-extrabold tracking-[-0.05em] sm:text-5xl">
                    {pkg.price}
                    <span className="ml-2 text-xs font-medium tracking-normal text-white/25">
                      onwards
                    </span>
                  </p>
                </div>

                <p className="mt-7 min-h-[84px] text-sm leading-6 text-white/45">
                  {pkg.description}
                </p>

                <div className="mt-8">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                    Ideal for
                  </p>

                  <p className="mt-3 text-xs leading-6 text-white/55">
                    {pkg.idealFor}
                  </p>
                </div>

                <div className="mt-8 border-t border-white/10 pt-7">
                  <div className="flex items-center justify-between">
                    <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-white/25">
                      Estimated delivery
                    </span>

                    <span className="text-xs font-semibold text-white/65">
                      {pkg.delivery}
                    </span>
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`group/cta mt-8 inline-flex items-center justify-between border px-5 py-4 text-[10px] font-bold uppercase tracking-[0.16em] transition-all duration-300 ${
                    pkg.featured
                      ? "border-[#C81C33] bg-[#C81C33] text-white hover:bg-[#A11327]"
                      : "border-white/10 text-white hover:border-[#C81C33] hover:bg-[#C81C33]"
                  }`}
                >
                  {pkg.cta}

                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover/cta:translate-x-1 group-hover/cta:-translate-y-1"
                  />
                </Link>
              </motion.article>
            ))}
          </div>

          {/* Detailed package comparison */}
          <div className="mt-20">
            <div className="mb-7 flex items-end justify-between gap-6 border-b border-white/10 pb-5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Compare packages
                </p>
                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  Know exactly what you're getting.
                </h3>
              </div>

              <span className="hidden text-[9px] uppercase tracking-[0.18em] text-white/20 sm:block">
                Included features
              </span>
            </div>

            <div className="overflow-hidden border-y border-white/10">
              {packages.map((pkg) => (
                <div
                  key={pkg.name}
                  className="border-b border-white/10 last:border-b-0"
                >
                  <div className="grid gap-5 py-7 lg:grid-cols-12 lg:items-start">
                    <div className="lg:col-span-3">
                      <div className="flex items-center gap-4">
                        <span className="font-mono text-[10px] font-bold text-[#C81C33]">
                          {pkg.number}
                        </span>

                        <h4 className="text-xl font-bold">{pkg.name}</h4>
                      </div>

                      <p className="mt-2 pl-8 text-xs text-white/30">
                        {pkg.price} onwards
                      </p>
                    </div>

                    <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:col-span-9 lg:grid-cols-3">
                      {pkg.includes.map((item) => (
                        <div
                          key={item}
                          className="flex items-start gap-2.5 text-xs leading-5 text-white/45"
                        >
                          <Check
                            size={13}
                            className="mt-1 shrink-0 text-[#C81C33]"
                          />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing note */}
          <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C81C33]">
                Pricing note
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-5">
              <p className="text-sm leading-7 text-white/35">
                All prices are starting prices and may vary depending on the
                number of pages, integrations, functionality and level of
                customization required.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/35">
                Hosting, domain, paid third-party services and external
                subscriptions may be charged separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          STATEMENT — DARKER EDITORIAL
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#08090D] text-white">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="pointer-events-none absolute right-[-12rem] top-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[#C81C33]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-36">
          <motion.div {...fadeUp} className="max-w-6xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C81C33]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
                Beyond the website
              </span>
            </div>

            <h2 className="mt-8 text-4xl font-extrabold leading-[0.93] tracking-[-0.055em] sm:text-6xl lg:text-[6.5rem]">
              Sometimes your
              <br />
              business needs
              <br />
              <span className="text-[#C81C33]">more than a website.</span>
            </h2>

            <div className="mt-12 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-base leading-8 text-slate-500">
                  A website is only one part of a digital business. When your
                  requirements involve workflows, customers, operations,
                  payments or internal systems, we can build the technology
                  around the way your organization works.
                </p>

                <Link
                  href="/contact"
                  className="group mt-8 inline-flex items-center gap-3 text-sm font-semibold text-white"
                >
                  Discuss a custom solution
                  <ArrowUpRight
                    size={15}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CUSTOM SOLUTIONS — LIGHT
      ========================================================= */}
      <section className="bg-[#F4F2ED] text-[#0B0F19]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
              Need something different?
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              We build more
              <br />
              <span className="text-slate-400">than websites.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500">
              If your requirements go beyond a traditional business website,
              we can build a custom digital solution around your workflow.
            </p>
          </motion.div>

          <div className="mt-20 grid border-t border-slate-300/70 lg:grid-cols-3">
            {customSolutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.article
                  key={solution.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.08,
                    ease,
                  }}
                  className="group relative border-b border-slate-300/70 py-9 lg:border-r lg:px-8 lg:py-10 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                >
                  <div className="flex items-center justify-between">
                    <Icon
                      size={21}
                      strokeWidth={1.6}
                      className="text-[#C81C33]"
                    />

                    <ArrowUpRight
                      size={17}
                      className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C81C33]"
                    />
                  </div>

                  <h3 className="mt-10 text-2xl font-bold tracking-[-0.03em]">
                    {solution.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-500">
                    {solution.text}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2">
                    {solution.items.map((item) => (
                      <span
                        key={item}
                        className="text-[10px] font-semibold uppercase tracking-wider text-slate-400"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C81C33] transition-all duration-500 group-hover:w-16" />
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          ENGINEERING SERVICES — LIGHT
      ========================================================= */}
      <section className="bg-[#F4F2ED] text-[#0B0F19]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
              Engineering
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              The technology
              <br />
              <span className="text-slate-400">behind the product.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500">
              Strong products need strong foundations. Our engineering
              capabilities cover the infrastructure, data and systems that
              keep your technology reliable as it grows.
            </p>
          </motion.div>

          <div className="mt-20 grid border-t border-slate-300/70 md:grid-cols-2">
            {engineering.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.05,
                    ease,
                  }}
                  className="group relative border-b border-slate-300/70 py-9 md:px-8 md:odd:border-r md:first:pl-0 md:odd:pr-10"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-[10px] font-bold tracking-[0.2em] text-[#C81C33]">
                        {service.number}
                      </span>

                      <Icon
                        size={18}
                        strokeWidth={1.6}
                        className="text-slate-300 transition-colors duration-300 group-hover:text-[#C81C33]"
                      />
                    </div>

                    <ArrowUpRight
                      size={17}
                      className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C81C33]"
                    />
                  </div>

                  <h3 className="mt-8 text-2xl font-bold tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mt-3 max-w-md text-sm leading-6 text-slate-500">
                    {service.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-semibold uppercase tracking-wider text-slate-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT'S INCLUDED — DARK
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#08090D] text-white">
        <div className="pointer-events-none absolute left-[-15rem] top-1/2 h-[35rem] w-[35rem] -translate-y-1/2 rounded-full bg-[#C81C33]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
                Every website
              </p>

              <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                The essentials
                <br />
                are already
                <br />
                <span className="text-[#C81C33]">covered.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/40">
                Regardless of the package you choose, every website starts
                with a professional foundation designed to work across
                devices, perform reliably and give your business a solid
                digital presence.
              </p>
            </motion.div>

            <div className="lg:col-span-7">
              <div className="border-t border-white/10">
                {included.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.05,
                      ease,
                    }}
                    className="flex items-center justify-between border-b border-white/10 py-6"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-mono text-[9px] text-[#C81C33]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-medium text-white/65">
                        {item}
                      </span>
                    </div>

                    <Check
                      size={15}
                      className="shrink-0 text-[#C81C33]"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          HOW WE ADD VALUE — DARK
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#08090D] text-white">
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
              How we work
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              Technology should
              <br />
              <span className="text-slate-600">create momentum.</span>
            </h2>
          </motion.div>

          <div className="mt-20 grid border-y border-white/10 lg:grid-cols-4">
            {principles.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                className="group border-b border-white/10 px-1 py-9 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C81C33]">
                  {item.number}
                </span>

                <h3 className="mt-12 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                  {item.text}
                </p>

                <div className="mt-8 h-px w-0 bg-[#C81C33] transition-all duration-500 group-hover:w-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA — LIGHT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F4F2ED] text-[#0B0F19]">
        <div className="pointer-events-none absolute right-[-10rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-red-100/60 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <motion.div {...fadeUp} className="lg:col-span-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
                Start a project
              </p>

              <h2 className="mt-7 text-5xl font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]">
                Let&apos;s build
                <br />
                something
                <br />
                <span className="text-slate-400">worth remembering.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease }}
              className="lg:col-span-4"
            >
              <p className="text-sm leading-7 text-slate-500">
                Tell us what you need. Whether you have a complete
                specification or an early idea, we&apos;ll help define the
                right next step.
              </p>

              <Link
                href="/contact"
                className="group mt-7 inline-flex items-center gap-3 bg-[#C81C33] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#A11327]"
              >
                Start Your Project

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}