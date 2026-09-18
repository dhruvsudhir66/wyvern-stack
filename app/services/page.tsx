"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";

import Navbar from "@/app/components/Navbar";
import ServiceIcon from "@/app/components/ServiceIcon";
import { services } from "@/app/lib/data";

const ease = [0.22, 1, 0.36, 1] as const;

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: {
    once: true,
    amount: 0.15,
  },
  transition: {
    duration: 0.7,
    ease,
  },
};

const packages = [
  {
    number: "01",
    name: "Starter",
    price: "₹15,000",
    label: "Professional online presence",
    description:
      "A clean, professional website for businesses that need a strong online presence without unnecessary complexity.",
    idealFor:
      "Small businesses · Freelancers · Startups · Local businesses · Vendors",
    delivery: "1–2 weeks",
    includes: [
      "Up to 5 main pages",
      "Mostly static website",
      "Professional UI design",
      "Fully responsive design",
      "Contact / enquiry form",
      "Social media links",
      "SEO-friendly structure",
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
      "A more customized website designed to attract customers, communicate your services clearly, and give your business room to grow.",
    idealFor:
      "Growing businesses · Clinics · Salons · Restaurants · Hotels · Agencies · Professional services",
    delivery: "2–4 weeks",
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
      "A highly customized website for businesses that need advanced functionality, integrations, and a more powerful digital experience.",
    idealFor:
      "Established businesses · E-commerce · Hospitality · SaaS · High-growth companies · Custom requirements",
    delivery: "4–8 weeks+",
    includes: [
      "Everything in Business",
      "Custom website architecture",
      "Custom page structures",
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

const capabilities = [
  "Web applications",
  "SaaS platforms",
  "AI-powered workflows",
  "Business systems",
  "Customer portals",
  "API integrations",
  "Performance optimization",
  "Cloud deployments",
];

const process = [
  {
    number: "01",
    title: "Understand",
    text: "We start with your business goals, users, requirements, constraints, and the outcome the technology needs to achieve.",
  },
  {
    number: "02",
    title: "Plan",
    text: "We define the information architecture, technical approach, user experience, integrations, and delivery priorities.",
  },
  {
    number: "03",
    title: "Build",
    text: "We design and engineer the product using maintainable components, reliable architecture, and production-ready practices.",
  },
  {
    number: "04",
    title: "Improve",
    text: "After launch, we use performance data, feedback, and evolving business requirements to improve the product.",
  },
];

const included = [
  "Responsive implementation",
  "Cross-browser compatibility",
  "SEO-friendly structure",
  "Secure deployment",
  "Performance optimization",
  "Contact and enquiry functionality",
  "Professional UI/UX",
  "Production-focused engineering",
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090D] font-sans">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        aria-labelledby="services-heading"
        className="relative overflow-hidden bg-[#08090D] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-[#C81C33]/15 blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-[-10rem] h-[32rem] w-[32rem] rounded-full bg-red-950/20 blur-[130px]"
        />

        <div
          aria-hidden="true"
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
                  Digital technology services
                </span>
              </div>

              <h1
                id="services-heading"
                className="mt-8 max-w-6xl text-5xl font-extrabold leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-[7.5rem]"
              >
                Technology
                <br />
                built to <span className="text-[#C81C33]">move.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.25,
                ease,
              }}
              className="lg:col-span-3 lg:pb-3"
            >
              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                Wyvernstack designs and develops modern digital products, web
                platforms, AI systems, and technology foundations that help
                businesses operate, grow, and serve their customers more
                effectively.
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
            transition={{
              duration: 1,
              delay: 0.7,
            }}
            className="mt-20 border-t border-white/10 pt-5"
          >
            <div className="flex flex-wrap justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              <span>Web Platforms</span>
              <span>AI Systems</span>
              <span>Design Systems</span>
              <span>Infrastructure</span>
              <span>Digital Products</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CORE SERVICES
      ========================================================= */}

      <section
        aria-labelledby="core-services-heading"
        className="relative overflow-hidden bg-[#F4F2ED] text-[#0B0F19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
                Core services
              </p>

              <h2
                id="core-services-heading"
                className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl"
              >
                Digital
                <br />
                products
                <br />
                <span className="text-slate-400">engineered properly.</span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-slate-500">
                From AI-powered workflows and web platforms to design systems
                and infrastructure, our services cover the technology needed to
                build and evolve modern digital products.
              </p>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-slate-300/70 border-y border-slate-300/70">
                {services.map((service, index) => (
                  <motion.article
                    key={service.slug}
                    initial={{
                      opacity: 0,
                      y: 25,
                    }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.15,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.06,
                      ease,
                    }}
                    className="group relative"
                  >
                    <Link
                      href={`/services/${service.slug}`}
                      className="block py-9 sm:py-11"
                    >
                      <div className="grid gap-6 sm:grid-cols-12 sm:items-start">
                        <div className="sm:col-span-2">
                          <span className="text-xs font-bold tracking-[0.2em] text-[#C81C33]">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <div className="mt-6 hidden sm:block">
                            <ServiceIcon type={service.icon} size={20} />
                          </div>
                        </div>

                        <div className="sm:col-span-7">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            {service.eyebrow}
                          </p>

                          <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                            {service.title}
                          </h3>

                          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-500">
                            {service.description}
                          </p>

                          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                            {service.highlights.slice(0, 3).map((highlight) => (
                              <span
                                key={highlight}
                                className="text-[10px] font-semibold uppercase tracking-wider text-slate-400"
                              >
                                {highlight}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-start justify-between sm:col-span-3 sm:justify-end">
                          <ServiceIcon
                            type={service.icon}
                            size={20}
                            className="text-slate-300 sm:hidden"
                          />

                          <ArrowUpRight
                            size={20}
                            className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C81C33]"
                          />
                        </div>
                      </div>

                      <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C81C33] transition-all duration-500 group-hover:w-20" />
                    </Link>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE BUILD
      ========================================================= */}

      <section
        aria-labelledby="solutions-heading"
        className="bg-white text-[#0B0F19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
              What we build
            </p>

            <h2
              id="solutions-heading"
              className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl"
            >
              Technology around
              <br />
              <span className="text-slate-400">your business.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Our work can range from a high-performance marketing website to a
              full digital product. We choose the architecture, technology, and
              delivery approach around the actual requirements of the business.
            </p>
          </motion.div>

          <div className="mt-16 grid border-y border-slate-200 md:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05,
                  ease,
                }}
                className="border-b border-slate-200 px-5 py-7 md:nth-[3]:border-b-0 lg:border-r lg:last:border-r-0"
              >
                <span className="font-mono text-[10px] font-bold text-[#C81C33]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="mt-5 text-lg font-semibold tracking-tight">
                  {capability}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          WEBSITE PACKAGES
      ========================================================= */}

      <section
        id="website-packages"
        aria-labelledby="packages-heading"
        className="relative overflow-hidden bg-[#08090D] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-15rem] top-[-12rem] h-[40rem] w-[40rem] rounded-full bg-[#C81C33]/10 blur-[150px]"
        />

        <div
          aria-hidden="true"
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
                Website packages
              </span>
            </div>

            <h2
              id="packages-heading"
              className="mt-8 text-5xl font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]"
            >
              A website for
              <br />
              every stage
              <br />
              <span className="text-[#C81C33]">of business.</span>
            </h2>

            <p className="mt-8 max-w-2xl text-base leading-8 text-white/40 sm:text-lg">
              Choose a starting point based on the complexity of your website,
              content, integrations, and business requirements. Every package
              can be adapted to the project.
            </p>
          </motion.div>

          <div className="mt-20 grid gap-px border border-white/10 bg-white/10 lg:grid-cols-3">
            {packages.map((pkg, index) => (
              <motion.article
                key={pkg.name}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                  ease,
                }}
                className="group relative flex flex-col bg-[#0B0F19] p-7 sm:p-8 lg:p-9"
              >
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
                  className="group/cta mt-8 inline-flex items-center justify-between border border-white/10 px-5 py-4 text-[10px] font-bold uppercase tracking-[0.16em] text-white transition-all duration-300 hover:border-[#C81C33] hover:bg-[#C81C33]"
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

          <div className="mt-20">
            <div className="mb-7 flex items-end justify-between gap-6 border-b border-white/10 pb-5">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
                  Compare packages
                </p>

                <h3 className="mt-3 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                  Know what is included.
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

          <div className="mt-12 grid gap-8 border-t border-white/10 pt-8 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C81C33]">
                Pricing note
              </p>
            </div>

            <div className="lg:col-span-7 lg:col-start-5">
              <p className="text-sm leading-7 text-white/35">
                All prices are starting prices and may vary depending on the
                number of pages, integrations, functionality, and level of
                customization required.
              </p>

              <p className="mt-4 text-sm leading-7 text-white/35">
                Hosting, domain, paid third-party services, and external
                subscriptions may be charged separately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section
        aria-labelledby="process-heading"
        className="bg-[#F4F2ED] text-[#0B0F19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
              How we work
            </p>

            <h2
              id="process-heading"
              className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl"
            >
              From business
              <br />
              requirement to
              <br />
              <span className="text-slate-400">production.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              A structured process keeps design, engineering, business
              requirements, and technical decisions aligned throughout the
              project.
            </p>
          </motion.div>

          <ol className="mt-20 grid border-y border-slate-300/70 lg:grid-cols-4">
            {process.map((item, index) => (
              <motion.li
                key={item.number}
                initial={{
                  opacity: 0,
                  y: 25,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                className="border-b border-slate-300/70 px-1 py-9 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-[#C81C33]">
                  {item.number}
                </span>

                <h3 className="mt-12 text-xl font-bold">{item.title}</h3>

                <p className="mt-4 text-sm leading-6 text-slate-500">
                  {item.text}
                </p>

                <div className="mt-8 h-px w-10 bg-[#C81C33]" />
              </motion.li>
            ))}
          </ol>
        </div>
      </section>

      {/* =========================================================
          INCLUDED
      ========================================================= */}

      <section
        aria-labelledby="included-heading"
        className="relative overflow-hidden bg-[#08090D] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-[-15rem] top-1/2 h-[35rem] w-[35rem] -translate-y-1/2 rounded-full bg-[#C81C33]/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
                Project foundation
              </p>

              <h2
                id="included-heading"
                className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl"
              >
                The essentials
                <br />
                are already
                <br />
                <span className="text-[#C81C33]">covered.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/40">
                Our website projects begin with a professional technical
                foundation focused on responsive implementation, accessibility,
                search visibility, security, and performance.
              </p>
            </motion.div>

            <div className="lg:col-span-7">
              <div className="border-t border-white/10">
                {included.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: 20,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                      amount: 0.2,
                    }}
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

                    <Check size={15} className="shrink-0 text-[#C81C33]" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section
        aria-labelledby="cta-heading"
        className="relative overflow-hidden bg-[#F4F2ED] text-[#0B0F19]"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-10rem] top-[-12rem] h-[32rem] w-[32rem] rounded-full bg-red-100/60 blur-[120px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-end">
            <motion.div {...fadeUp} className="lg:col-span-8">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
                Start a project
              </p>

              <h2
                id="cta-heading"
                className="mt-7 text-5xl font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-7xl lg:text-[6.5rem]"
              >
                Have a
                <br />
                digital
                <br />
                <span className="text-slate-400">problem to solve?</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease,
              }}
              className="lg:col-span-4"
            >
              <p className="text-sm leading-7 text-slate-500">
                Tell us what you are building, what needs to improve, or where
                your business needs better technology. We can help define the
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
