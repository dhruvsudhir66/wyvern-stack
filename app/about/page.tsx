"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Cloud,
  Layers3,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
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
    label: "Digital Products",
    title: "Web Development",
    description:
      "High-performance websites, web applications and digital platforms designed around your business and the people using them.",
    items: ["Web Applications", "SaaS Platforms", "E-commerce", "Business Portals"],
    icon: Code2,
  },
  {
    number: "02",
    label: "Connected Experiences",
    title: "Mobile Development",
    description:
      "Fast, intuitive mobile experiences that connect your customers, teams and products wherever they are.",
    items: ["iOS & Android", "Cross-platform", "Mobile APIs", "App Experiences"],
    icon: Layers3,
  },
  {
    number: "03",
    label: "Business Systems",
    title: "ERP Solutions",
    description:
      "Connected business systems that simplify operations, bring information together and give teams better control.",
    items: ["Operations", "Inventory", "Workflows", "Business Management"],
    icon: Workflow,
  },
  {
    number: "04",
    label: "Software as a Service",
    title: "SaaS Development",
    description:
      "Scalable SaaS platforms designed to turn ideas into powerful, subscription-based products.",
    items: ["Web Apps", "Cloud", "Subscriptions", "APIs"],
    icon: Layers3,
  },
];

const principles = [
  {
    number: "01",
    title: "Business first",
    description:
      "We begin with the problem, the users and the outcome. Technology comes after we understand what needs to change.",
  },
  {
    number: "02",
    title: "Built for growth",
    description:
      "Our products are designed with the next stage in mind, giving your technology room to evolve with the business.",
  },
  {
    number: "03",
    title: "Technology with purpose",
    description:
      "We choose the right tools for the job instead of forcing fashionable technology into problems it does not solve.",
  },
  {
    number: "04",
    title: "Intelligence where it matters",
    description:
      "AI and automation are introduced where they genuinely remove friction, improve efficiency or unlock new possibilities.",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    text: "Understand your business, users, goals and constraints.",
  },
  {
    number: "02",
    title: "Define",
    text: "Turn the problem into a clear product and technical direction.",
  },
  {
    number: "03",
    title: "Design",
    text: "Create an intuitive experience and scalable product architecture.",
  },
  {
    number: "04",
    title: "Build",
    text: "Develop, test and refine production-ready software.",
  },
  {
    number: "05",
    title: "Launch",
    text: "Deploy, monitor and optimize for real users.",
  },
  {
    number: "06",
    title: "Evolve",
    text: "Continue improving the product as your business grows.",
  },
];

const capabilities = [
  {
    title: "Product",
    description: "From early concepts to production-ready digital products.",
    items: ["Product discovery", "Technical planning", "Architecture"],
  },
  {
    title: "Experience",
    description: "Interfaces that make complex technology feel simple.",
    items: ["UX strategy", "UI/UX design", "Design systems"],
  },
  {
    title: "Engineering",
    description: "Reliable software foundations built for real-world use.",
    items: ["Web applications", "Mobile products", "Backend systems"],
  },
  {
    title: "Services",
    description: "Software as a Service for everyday systems to make life simpler.",
    items: ["Web Apps", "Mobile Apps", "Other Services"],
  },
];

const technologies = [
  "Next.js",
  "React",
  "Kotlin",
  "Swift",
  "Flutter",
  "TypeScript",
  "Node.js",
  "Python",
  "PostgreSQL",
  "AWS",
  "Docker",
  "AI",
];

const industries = [
  "FinTech",
  "Healthcare",
  "E-commerce",
  "SaaS",
  "Logistics",
  "Education",
  "Real Estate",
  "Professional Services",
];

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090D] font-sans">
      <Navbar />

      {/* =========================================================
          HERO — DARK
      ========================================================= */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-[#08090D] text-white">
        {/* Ambient light */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[36rem] w-[36rem] rounded-full bg-[#C81C33]/15 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[30rem] w-[30rem] rounded-full bg-red-900/10 blur-[120px]" />

        {/* Subtle technical grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-36 lg:pb-32">
          <div className="grid items-end gap-16 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-9"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C81C33]" />
                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-300">
                  About WYVERNSTACK
                </span>
              </div>

              <h1 className="mt-8 max-w-6xl text-5xl font-extrabold leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-[7.5rem]">
                We build
                <br />
                <span className="text-white">technology</span>
                <br />
                <span className="text-[#C81C33]">that moves.</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease }}
              className="lg:col-span-3 lg:pb-3"
            >
              <p className="text-sm leading-7 text-slate-400 sm:text-base">
                WYVERNSTACK is a digital technology studio building products,
                platforms and intelligent systems for businesses ready to move
                forward.
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
            <div className="flex flex-wrap items-center justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-500">
              <span>Digital Products</span>
              <span>Business Systems</span>
              <span>SAAS Development</span>
              <span>Technology Engineering</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          WHAT WE DO — LIGHT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F4F2ED] text-[#0B0F19]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-14 lg:grid-cols-12">
            <motion.div {...fadeUp} className="lg:col-span-4">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
                What we do
              </p>

              <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
                Technology
                <br />
                built around
                <br />
                <span className="text-slate-400">your business.</span>
              </h2>

              <p className="mt-7 max-w-sm text-sm leading-7 text-slate-500">
                We bring strategy, design and engineering together to create
                digital products and systems that solve real business
                problems.
              </p>
            </motion.div>

            <div className="lg:col-span-8">
              <div className="divide-y divide-slate-300/70 border-y border-slate-300/70">
                {services.map((service, index) => {
                  const Icon = service.icon;

                  return (
                    <motion.div
                      key={service.number}
                      initial={{ opacity: 0, y: 25 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.07,
                        ease,
                      }}
                      className="group py-8 sm:py-10"
                    >
                      <div className="grid gap-6 sm:grid-cols-12 sm:items-start">
                        <div className="flex items-center gap-4 sm:col-span-2">
                          <span className="text-xs font-bold tracking-widest text-[#C81C33]">
                            {service.number}
                          </span>

                          <Icon
                            size={18}
                            className="text-slate-400 transition-colors duration-300 group-hover:text-[#C81C33]"
                          />
                        </div>

                        <div className="sm:col-span-7">
                          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                            {service.label}
                          </p>

                          <h3 className="mt-2 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
                            {service.title}
                          </h3>

                          <p className="mt-3 max-w-xl text-sm leading-6 text-slate-500">
                            {service.description}
                          </p>
                        </div>

                        <div className="sm:col-span-3 sm:text-right">
                          <div className="space-y-2 text-xs text-slate-400 sm:pt-1">
                            {service.items.map((item) => (
                              <div key={item}>{item}</div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          WHY WYVERNSTACK — DARK
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#08090D] text-white">
        <div className="pointer-events-none absolute right-[-10rem] top-[-10rem] h-[35rem] w-[35rem] rounded-full bg-[#C81C33]/10 blur-[130px]" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <motion.div {...fadeUp} className="max-w-5xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C81C33]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
                Why WYVERNSTACK
              </span>
            </div>

            <h2 className="mt-7 text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              More than developers.
              <br />
              <span className="text-slate-600">
                A technology partner.
              </span>
            </h2>
          </motion.div>

          <div className="mt-20 grid gap-0 border-y border-white/10 lg:grid-cols-4">
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
                className="group border-b border-white/10 px-1 py-8 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="text-[11px] font-bold tracking-[0.2em] text-[#C81C33]">
                  {item.number}
                </span>

                <h3 className="mt-12 text-xl font-bold tracking-tight">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-6 text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          STATEMENT — LIGHT
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#F4F2ED]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-36">
          <motion.div {...fadeUp} className="max-w-6xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
              Our approach
            </p>

            <h2 className="mt-8 text-4xl font-extrabold leading-[0.95] tracking-[-0.055em] text-[#0B0F19] sm:text-6xl lg:text-[6.5rem]">
              Great digital products
              <br />
              happen when
              <br />
              <span className="text-slate-400">
                everything connects.
              </span>
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-12">
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-base leading-8 text-slate-500">
                  Business goals. User experience. Engineering. Data.
                  Automation. We bring these disciplines together instead of
                  treating them as separate pieces of a project.
                </p>

                <p className="mt-5 text-base leading-8 text-slate-500">
                  The result is technology that is not only functional, but
                  useful, scalable and connected to the way your organization
                  actually works.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PROCESS — DARK
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

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
              How we work
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              From first idea
              <br />
              <span className="text-slate-600">to what's next.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-500">
              A clear process keeps strategy, design and engineering moving in
              the same direction.
            </p>
          </motion.div>

          <div className="mt-20 grid border-t border-white/10 md:grid-cols-2 lg:grid-cols-6">
            {process.map((item, index) => (
              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.06,
                  ease,
                }}
                className="group relative border-b border-white/10 px-5 py-8 first:pl-0 lg:border-b-0 lg:border-r lg:first:pl-0 lg:last:border-r-0"
              >
                <span className="text-[10px] font-bold tracking-[0.2em] text-[#C81C33]">
                  {item.number}
                </span>

                <h3 className="mt-10 text-lg font-bold">{item.title}</h3>

                <p className="mt-3 text-xs leading-6 text-slate-500">
                  {item.text}
                </p>

                <div className="mt-8 h-px w-0 bg-[#C81C33] transition-all duration-500 group-hover:w-10" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES — LIGHT
      ========================================================= */}
      <section className="bg-[#F4F2ED] text-[#0B0F19]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
              Capabilities
            </p>

            <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
              Everything needed
              <br />
              to build what comes next.
            </h2>
          </motion.div>

          <div className="mt-20 grid border-t border-slate-300/70 md:grid-cols-2">
            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease,
                }}
                className="group border-b border-slate-300/70 py-9 md:px-8 md:even:border-l md:first:pl-0 md:odd:pr-10"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
                      0{index + 1}
                    </span>

                    <h3 className="mt-4 text-2xl font-bold tracking-tight">
                      {capability.title}
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C81C33]"
                  />
                </div>

                <p className="mt-4 max-w-md text-sm leading-6 text-slate-500">
                  {capability.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                  {capability.items.map((item) => (
                    <span
                      key={item}
                      className="text-xs font-medium text-slate-400"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          TECHNOLOGY — DARK
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#08090D] text-white">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C81C33]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <motion.div {...fadeUp} className="lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
                Technology
              </p>

              <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Modern tools.
                <br />
                <span className="text-slate-600">
                  Practical choices.
                </span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-slate-500">
                We use proven technologies to build fast, reliable and
                maintainable systems. The stack follows the product—not the
                other way around.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, ease }}
              className="lg:col-span-6 lg:col-start-7"
            >
              <div className="border-y border-white/10 py-8">
                <div className="flex items-center gap-3">
                  <Code2 size={17} className="text-[#C81C33]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.22em] text-slate-500">
                    Our toolkit
                  </span>
                </div>

                <div className="mt-8 flex flex-wrap gap-x-7 gap-y-5">
                  {technologies.map((technology, index) => (
                    <motion.span
                      key={technology}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.04,
                      }}
                      className="text-lg font-medium tracking-tight text-slate-400 transition-colors duration-300 hover:text-white"
                    >
                      {technology}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================
          INDUSTRIES — LIGHT
      ========================================================= */}
      <section className="bg-[#F4F2ED] text-[#0B0F19]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <motion.div {...fadeUp} className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
                Where we work
              </p>

              <h2 className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl">
                Different
                <br />
                industries.
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <p className="text-lg leading-8 text-slate-500">
                The problems may look different across industries, but the
                goal remains the same: build better systems, better
                experiences and better ways of working.
              </p>
            </div>
          </motion.div>

          <div className="mt-20 grid border-t border-slate-300/70 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry, index) => (
              <motion.div
                key={industry}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                  ease,
                }}
                className="border-b border-slate-300/70 py-6 text-sm font-semibold text-slate-500 transition-colors duration-300 hover:text-[#C81C33]"
              >
                <span className="mr-4 text-[10px] font-bold text-slate-300">
                  0{index + 1}
                </span>
                {industry}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          FINAL CTA — DARK
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#08090D] text-white">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C81C33]/15 blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:py-36">
          <motion.div {...fadeUp}>
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-[#C81C33]">
              <Rocket size={19} />
            </div>

            <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
              Start something new
            </p>

            <h2 className="mt-6 text-5xl font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-7xl">
              Have a problem
              <br />
              <span className="text-[#C81C33]">worth solving?</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Whether you have a detailed product specification or just an
              idea, let's figure out what the next step looks like.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 rounded-full bg-[#C81C33] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#A11327]"
            >
              Start a Project

              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}