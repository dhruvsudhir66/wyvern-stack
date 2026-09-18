"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react";

import Navbar from "@/app/components/Navbar";
import { projects } from "@/app/lib/data";

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

const capabilities = [
  "Business websites",
  "Web applications",
  "SaaS platforms",
  "Business systems",
  "Customer experiences",
  "API integrations",
  "Performance-focused builds",
  "AI-enabled products",
];

const principles = [
  {
    number: "01",
    title: "Clear purpose",
    text: "Every project starts with a clear business objective, audience, and problem to solve.",
  },
  {
    number: "02",
    title: "Useful experience",
    text: "Interfaces should make products easier to understand, navigate, and use.",
  },
  {
    number: "03",
    title: "Strong foundations",
    text: "The architecture behind the experience matters just as much as the interface users see.",
  },
  {
    number: "04",
    title: "Built to evolve",
    text: "Digital products should have enough structure to support future content, features, and growth.",
  },
];

export default function WorkPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#08090D] font-sans">
      <Navbar />

      {/* =========================================================
          HERO
      ========================================================= */}

      <section
        aria-labelledby="work-heading"
        className="relative overflow-hidden bg-[#08090D] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-[#C81C33]/15 blur-[140px]"
        />

        <div
          aria-hidden="true"
          className="pointer-events-none absolute -left-40 bottom-[-12rem] h-[30rem] w-[30rem] rounded-full bg-red-950/20 blur-[130px]"
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

        <div className="relative mx-auto w-full max-w-7xl px-6 pb-24 pt-32 lg:pb-28">
          <div className="grid items-end gap-14 lg:grid-cols-12">
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                ease,
              }}
              className="lg:col-span-9"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-[#C81C33]" />

                <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-red-300">
                  Selected work
                </span>
              </div>

              <h1
                id="work-heading"
                className="mt-8 max-w-6xl text-5xl font-extrabold leading-[0.9] tracking-[-0.065em] sm:text-7xl lg:text-[7.5rem]"
              >
                Digital products
                <br />
                <span className="text-white">built for</span>{" "}
                <span className="text-[#C81C33]">real businesses.</span>
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
                Explore websites, digital products, business platforms, and
                customer experiences designed and engineered by Wyvernstack.
              </p>

              <div className="mt-7 flex items-center gap-4">
                <span className="text-4xl font-extrabold text-white">
                  {String(projects.length).padStart(2, "0")}
                </span>

                <div className="h-8 w-px bg-white/10" />

                <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
                  Projects
                </span>
              </div>
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
              <span>Strategy</span>
              <span>Design</span>
              <span>Engineering</span>
              <span>Digital Products</span>
              <span>Technology</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PROJECT SHOWCASE
      ========================================================= */}

      <section
        aria-labelledby="selected-work-heading"
        className="bg-[#F4F2ED] text-[#0B0F19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
          <motion.div {...fadeUp} className="max-w-3xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
              Portfolio
            </p>

            <h2
              id="selected-work-heading"
              className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl"
            >
              Websites and
              <br />
              digital products
              <br />
              <span className="text-slate-400">built with purpose.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              A selection of projects across beauty, healthcare, enterprise
              software, retail, and hospitality. Each project combines visual
              design with the technology needed for its specific business
              context.
            </p>
          </motion.div>

          <div className="mt-20 divide-y divide-slate-300/70 border-y border-slate-300/70">
            {projects.map((project, index) => (
              <ProjectRow key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section
        aria-labelledby="capabilities-heading"
        className="bg-white text-[#0B0F19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div {...fadeUp} className="max-w-4xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
              Capabilities
            </p>

            <h2
              id="capabilities-heading"
              className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl"
            >
              More than
              <br />
              <span className="text-slate-400">a website.</span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Our projects can range from a focused business website to a larger
              digital product with applications, integrations, business
              workflows, and supporting infrastructure.
            </p>
          </motion.div>

          <div className="mt-16 grid border-y border-slate-200 sm:grid-cols-2 lg:grid-cols-4">
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
                className="border-b border-slate-200 px-5 py-7 lg:border-r lg:last:border-r-0"
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
          APPROACH
      ========================================================= */}

      <section
        aria-labelledby="approach-heading"
        className="relative overflow-hidden bg-[#08090D] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute right-[-12rem] top-[-12rem] h-[38rem] w-[38rem] rounded-full bg-[#C81C33]/10 blur-[140px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
          <motion.div {...fadeUp} className="max-w-6xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-[#C81C33]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
                Our approach
              </span>
            </div>

            <h2
              id="approach-heading"
              className="mt-8 text-4xl font-extrabold leading-[0.93] tracking-[-0.055em] sm:text-6xl lg:text-[6.5rem]"
            >
              Design with purpose.
              <br />
              <span className="text-slate-600">Engineer for reality.</span>
            </h2>

            <div className="mt-12 grid gap-10 lg:grid-cols-12">
              <div className="lg:col-span-5 lg:col-start-8">
                <p className="text-base leading-8 text-slate-500">
                  A successful digital product needs more than a polished
                  interface. It needs a clear purpose, useful interactions,
                  dependable technology, and a structure that can evolve with
                  the business.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PROJECT PRINCIPLES
      ========================================================= */}

      <section
        aria-labelledby="principles-heading"
        className="bg-[#F4F2ED] text-[#0B0F19]"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <motion.div {...fadeUp} className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
                Project principles
              </p>

              <h2
                id="principles-heading"
                className="mt-6 text-4xl font-extrabold leading-[0.95] tracking-[-0.05em] sm:text-6xl"
              >
                Different
                <br />
                projects.
                <br />
                <span className="text-slate-400">Same standard.</span>
              </h2>
            </div>

            <div className="lg:col-span-6 lg:col-start-7">
              <ol className="divide-y divide-slate-300/70 border-y border-slate-300/70">
                {principles.map((principle) => (
                  <li
                    key={principle.number}
                    className="grid grid-cols-[50px_1fr] gap-4 py-7"
                  >
                    <span className="text-[10px] font-bold tracking-[0.2em] text-[#C81C33]">
                      {principle.number}
                    </span>

                    <div>
                      <h3 className="text-lg font-bold tracking-tight">
                        {principle.title}
                      </h3>

                      <p className="mt-2 max-w-lg text-sm leading-6 text-slate-500">
                        {principle.text}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          CTA
      ========================================================= */}

      <section
        aria-labelledby="work-cta-heading"
        className="relative overflow-hidden bg-[#08090D] text-white"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C81C33]/15 blur-[140px]"
        />

        <div className="relative mx-auto max-w-5xl px-6 py-28 text-center lg:py-36">
          <motion.div {...fadeUp}>
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-red-300">
              Start a project
            </p>

            <h2
              id="work-cta-heading"
              className="mt-6 text-5xl font-extrabold leading-[0.9] tracking-[-0.06em] sm:text-7xl"
            >
              Have something
              <br />
              <span className="text-[#C81C33]">worth building?</span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-slate-500 sm:text-base">
              Tell us about your business, product, or digital challenge. We can
              help define the right technology and experience for the project.
            </p>

            <Link
              href="/contact"
              className="group mt-9 inline-flex items-center gap-3 border border-[#C81C33] bg-[#C81C33] px-7 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#A11327]"
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

/* ================================================================
   PROJECT ROW
================================================================ */

function ProjectRow({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const hasImage = Boolean(project.image);
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.12,
      }}
      transition={{
        duration: 0.7,
        delay: 0.05,
        ease,
      }}
      className="group py-12 sm:py-16 lg:py-20"
    >
      <div
        className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-14 ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* =====================================================
            PROJECT VISUAL
        ===================================================== */}

        <div className="lg:col-span-7">
          <Link
            href={`/work/${project.slug}`}
            aria-label={`View ${project.title} case study`}
            className="block"
          >
            <div
              className={`relative aspect-[16/10] overflow-hidden rounded-[1.5rem] ${
                project.bg || "bg-slate-100"
              }`}
            >
              {hasImage ? (
                <Image
                  src={project.image!}
                  alt={`${project.title} website project preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                />
              ) : (
                <FallbackVisual project={project} index={index} />
              )}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-60"
              />

              <div
                aria-hidden="true"
                className="absolute left-5 top-5 z-20 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-black/20 text-[10px] font-bold text-white backdrop-blur-md"
              >
                {String(index + 1).padStart(2, "0")}
              </div>

              <div
                aria-hidden="true"
                className="absolute bottom-5 right-5 z-20 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-white text-[#0B0F19] opacity-0 shadow-xl transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
              >
                <ArrowUpRight size={18} />
              </div>
            </div>
          </Link>
        </div>

        {/* =====================================================
            PROJECT INFORMATION
        ===================================================== */}

        <div className="lg:col-span-5">
          <div className="flex items-center gap-3">
            <span className="h-px w-7 bg-[#C81C33]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {project.category}
            </span>
          </div>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-[-0.04em] sm:text-4xl lg:text-5xl">
            {project.title}
          </h2>

          {project.description && (
            <p className="mt-5 max-w-md text-sm leading-7 text-slate-500">
              {project.description}
            </p>
          )}

          {project.technologies && project.technologies.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="text-[10px] font-semibold uppercase tracking-wider text-slate-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          )}

          <div className="mt-9 flex flex-wrap items-center gap-6">
            <Link
              href={`/work/${project.slug}`}
              className="group/link inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-[#0B0F19] transition-colors hover:text-[#C81C33]"
            >
              View case study
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </Link>

            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.title} live website`}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.15em] text-slate-400 transition-colors hover:text-[#C81C33]"
              >
                Live website
                <ExternalLink size={13} />
              </a>
            )}
          </div>

          <div className="mt-9 border-t border-slate-200 pt-4">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
              {project.metrics}
            </span>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

/* ================================================================
   FALLBACK PROJECT VISUAL
================================================================ */

function FallbackVisual({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className={`absolute inset-0 ${project.bg || "bg-slate-100"}`} />

      <motion.div
        initial={{
          scale: 0.85,
          opacity: 0.5,
        }}
        whileInView={{
          scale: 1,
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.9,
          ease,
        }}
        className="absolute left-[12%] top-[12%] h-[72%] w-[76%] rounded-[2rem] border border-white/30 bg-white/10 shadow-2xl backdrop-blur-sm"
      >
        <div className="flex h-9 items-center gap-1.5 border-b border-white/20 px-4">
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
          <span className="h-2 w-2 rounded-full bg-white/40" />
        </div>

        <div className="grid h-[calc(100%-36px)] grid-cols-[25%_1fr]">
          <div className="border-r border-white/10 p-4">
            <div className="h-5 w-16 rounded bg-white/20" />

            <div className="mt-8 space-y-3">
              <div className="h-2 rounded bg-white/25" />
              <div className="h-2 w-4/5 rounded bg-white/10" />
              <div className="h-2 rounded bg-white/10" />
              <div className="h-2 w-3/5 rounded bg-white/10" />
            </div>
          </div>

          <div className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <div className="h-2 w-20 rounded bg-white/20" />
                <div className="mt-2 h-4 w-32 rounded bg-white/30" />
              </div>

              <div className="h-8 w-8 rounded-full bg-white/10" />
            </div>

            <div className="mt-7 grid grid-cols-3 gap-2">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="rounded-lg border border-white/10 bg-white/5 p-3"
                >
                  <div className="h-1.5 w-8 rounded bg-white/20" />
                  <div className="mt-2 h-3 w-10 rounded bg-white/30" />
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/10 p-4">
              <div className="h-2 w-20 rounded bg-white/20" />

              <div className="mt-5 flex h-24 items-end gap-2">
                {[35, 50, 42, 65, 54, 76, 62, 88].map((height, i) => (
                  <motion.div
                    key={i}
                    initial={{
                      height: 0,
                    }}
                    whileInView={{
                      height: `${height}%`,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.6,
                      delay: 0.2 + i * 0.04,
                    }}
                    className={`flex-1 rounded-t ${
                      i === 7 ? "bg-[#C81C33]" : "bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      <div
        aria-hidden="true"
        className="absolute bottom-5 right-7 text-[7rem] font-black leading-none text-white/5"
      >
        {String(index + 1).padStart(2, "0")}
      </div>
    </div>
  );
}
