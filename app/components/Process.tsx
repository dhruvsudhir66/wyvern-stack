"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Compass, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Discover",
    label: "Understand",
    description:
      "We start by understanding your business, users, goals, and the problem worth solving.",
    icon: Compass,
  },
  {
    number: "02",
    title: "Design",
    label: "Shape",
    description:
      "We turn ideas into a clear product direction, experience, and technical foundation.",
    icon: PenTool,
  },
  {
    number: "03",
    title: "Build",
    label: "Create",
    description:
      "We design and engineer the product with quality, performance, and scalability in mind.",
    icon: Code2,
  },
  {
    number: "04",
    title: "Evolve",
    label: "Grow",
    description:
      "Launch is only the beginning. We help refine, automate, and evolve what we build.",
    icon: Rocket,
  },
];

export default function Process() {
  return (
    <section
      aria-labelledby="process-heading"
      className="relative overflow-hidden bg-[#08090D] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Decorative grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Decorative atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-48 bottom-0 h-[450px] w-[450px] rounded-full bg-[#C81C33]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <header className="grid gap-8 border-b border-white/[0.08] pb-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <div aria-hidden="true" className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C81C33]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C81C33]">
                How We Work
              </span>
            </div>

            <h2
              id="process-heading"
              className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem] lg:leading-[0.92]"
            >
              From first idea
              <br />
              <span className="text-white/30">to what&apos;s next.</span>
            </h2>
          </div>

          <div className="md:flex md:justify-end">
            <p className="max-w-md text-sm leading-7 text-white/40 sm:text-base">
              Good technology starts with understanding. We work closely with
              you from the first conversation through launch and beyond.
            </p>
          </div>
        </header>

        {/* Process steps */}
        <ol
          aria-label="Wyvernstack project process"
          className="mt-14 grid list-none gap-10 p-0 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li key={step.number}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.07,
                  }}
                  className="group border-b border-white/[0.08] pb-8 lg:border-b-0"
                >
                  <div className="mb-8 flex items-center justify-between">
                    <div
                      aria-hidden="true"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:border-[#C81C33] group-hover:bg-[#C81C33]"
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>

                    <span className="font-mono text-[10px] text-white/20 transition-colors group-hover:text-[#C81C33]">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#C81C33]">
                    {step.label}
                  </span>

                  <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-white/35">
                    {step.description}
                  </p>

                  <div
                    aria-hidden="true"
                    className="mt-6 h-px w-8 bg-white/10 transition-all duration-500 group-hover:w-14 group-hover:bg-[#C81C33]"
                  />
                </motion.article>
              </li>
            );
          })}
        </ol>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-white/30">
            Clear communication. Thoughtful technology. Real progress.
          </p>

          <Link
            href="/contact"
            className="group inline-flex items-center gap-3 text-sm font-semibold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81C33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090D]"
          >
            Start a conversation
            <span
              aria-hidden="true"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 transition-all group-hover:border-[#C81C33] group-hover:bg-[#C81C33]"
            >
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:rotate-45"
              />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
