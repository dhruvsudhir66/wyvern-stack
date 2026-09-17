"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Quote,
  Star,
  Sparkles,
} from "lucide-react";

import Navbar from "@/app/components/Navbar";

const testimonials = [
  {
    quote:
      "WYVERNSTACK didn't just build what we asked for. They challenged our assumptions, improved the product, and delivered an experience our customers genuinely enjoy using.",
    name: "Daniel Carter",
    role: "Founder & CEO",
    company: "Northstar Labs",
    initials: "DC",
    category: "Product Engineering",
  },
  {
    quote:
      "The team brought an incredible balance of technical depth and design thinking. What started as an idea became a product we were confident taking to market.",
    name: "Maya Thompson",
    role: "VP of Product",
    company: "Vertex Digital",
    initials: "MT",
    category: "Web Development",
  },
  {
    quote:
      "Communication was excellent from the first workshop through launch. Wyvernstack felt less like an external agency and more like an extension of our own team.",
    name: "Ryan Mitchell",
    role: "CTO",
    company: "Apex Financial",
    initials: "RM",
    category: "FinTech",
  },
  {
    quote:
      "They took a complicated workflow and turned it into something incredibly simple. The attention to detail across both web and mobile was outstanding.",
    name: "Sophie Williams",
    role: "Head of Operations",
    company: "Luma Commerce",
    initials: "SW",
    category: "Mobile Development",
  },
  {
    quote:
      "WYVERNSTACK helped us move from prototype to a production-ready platform without losing the original vision. The result exceeded what we thought was possible.",
    name: "James Anderson",
    role: "Co-Founder",
    company: "NeuroFlow",
    initials: "JA",
    category: "AI & Automation",
  },
  {
    quote:
      "Fast, thoughtful, and technically excellent. They understood our business problem before talking about technology, which made the entire engagement much more effective.",
    name: "Olivia Parker",
    role: "Director of Digital",
    company: "Meridian Group",
    initials: "OP",
    category: "Digital Strategy",
  },
];

const stats = [
  { value: "20+", label: "Projects delivered" },
  { value: "8+", label: "Industries served" },
  { value: "98%", label: "Client satisfaction" },
  { value: "4.9/5", label: "Average rating" },
];

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-mesh font-sans">
      <Navbar />

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative mx-auto max-w-7xl px-6 pb-20 pt-36 sm:pb-24 sm:pt-40">
        {/* Ambient lights */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4 }}
          className="pointer-events-none absolute -right-40 top-10 h-96 w-96 rounded-full bg-rose-200/30 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, delay: 0.2 }}
          className="pointer-events-none absolute -left-40 top-48 h-80 w-80 rounded-full bg-red-100/25 blur-3xl"
        />

        <div className="relative max-w-4xl">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-rose-100 bg-white/70 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.2em] text-[#C81C33] shadow-sm backdrop-blur-md">
              <Sparkles size={12} />
              Client Stories
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.75,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="mt-7 text-5xl font-extrabold tracking-[-0.05em] text-[#0B0F19] sm:text-6xl lg:text-7xl"
          >
            Good work speaks
            <br />
            <span className="text-[#C81C33]">for itself.</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.25,
            }}
            className="mt-7 max-w-2xl text-base leading-7 text-slate-500 sm:text-lg"
          >
            We measure success by the products we create and the
            relationships we build along the way. Here&apos;s what some of
            our clients have to say.
          </motion.p>
        </div>

        {/* =================================================
            STATS
        ================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.4,
          }}
          className="mt-14 grid max-w-4xl grid-cols-2 overflow-hidden rounded-3xl border border-rose-100 bg-white/70 shadow-sm backdrop-blur-md sm:grid-cols-4"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-5 sm:p-6 ${
                index !== 0
                  ? "border-l border-slate-100"
                  : ""
              } ${
                index === 2
                  ? "border-t border-slate-100 sm:border-t-0"
                  : ""
              } ${
                index === 3
                  ? "border-t border-slate-100 sm:border-t-0"
                  : ""
              }`}
            >
              <p className="text-2xl font-extrabold tracking-tight text-[#0B0F19]">
                {stat.value}
              </p>

              <p className="mt-1 text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </section>

      {/* =====================================================
          FEATURED TESTIMONIAL
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[2rem] bg-[#0B0F19] p-8 text-white sm:p-12 lg:p-16"
        >
          {/* Glow */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#C81C33]/20 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-40 left-1/3 h-96 w-96 rounded-full bg-rose-900/10 blur-3xl" />

          {/* Giant quote */}
          <motion.div
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="absolute right-10 top-6 text-[180px] font-serif leading-none text-white/[0.035] sm:right-16 sm:text-[240px]"
          >
            “
          </motion.div>

          <div className="relative max-w-4xl">
            <div className="flex items-center gap-2">
              <Quote
                size={20}
                className="text-[#C81C33]"
              />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#C81C33]">
                Featured Story
              </span>
            </div>

            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: 0.3,
              }}
              className="mt-8 text-2xl font-medium leading-relaxed tracking-tight text-white sm:text-3xl lg:text-4xl"
            >
              “{testimonials[0].quote}”
            </motion.blockquote>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C81C33] text-xs font-bold text-white">
                {testimonials[0].initials}
              </div>

              <div>
                <p className="text-sm font-bold">
                  {testimonials[0].name}
                </p>

                <p className="mt-0.5 text-xs text-slate-400">
                  {testimonials[0].role} · {testimonials[0].company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          TESTIMONIAL GRID
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 pb-28">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
              What clients say
            </span>

            <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-4xl">
              Built together.
              <br className="sm:hidden" /> Remembered together.
            </h2>
          </div>
        </div>

        <div className="columns-1 gap-5 md:columns-2">
          {testimonials.slice(1).map((testimonial, index) => (
            <motion.article
              key={testimonial.name}
              initial={{
                opacity: 0,
                y: 35,
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
                duration: 0.65,
                delay: (index % 2) * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              whileHover={{
                y: -6,
                transition: {
                  duration: 0.25,
                },
              }}
              className="group mb-5 break-inside-avoid"
            >
              <div className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-shadow duration-300 group-hover:shadow-xl group-hover:shadow-rose-900/5 sm:p-8">
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-rose-100/40 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative">
                  {/* Top */}
                  <div className="flex items-start justify-between">
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          size={13}
                          fill="currentColor"
                          className="text-[#C81C33]"
                        />
                      ))}
                    </div>

                    <span className="rounded-full bg-rose-50 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#C81C33]">
                      {testimonial.category}
                    </span>
                  </div>

                  {/* Quote */}
                  <p className="mt-7 text-base font-medium leading-7 tracking-tight text-[#0B0F19] sm:text-lg">
                    “{testimonial.quote}”
                  </p>

                  {/* Divider */}
                  <div className="my-7 h-px bg-slate-100" />

                  {/* Client */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0B0F19] text-[10px] font-bold text-white">
                        {testimonial.initials}
                      </div>

                      <div>
                        <p className="text-xs font-bold text-[#0B0F19]">
                          {testimonial.name}
                        </p>

                        <p className="mt-0.5 text-[10px] text-slate-400">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>

                    <span className="text-[10px] font-semibold text-slate-300">
                      {testimonial.company}
                    </span>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* =====================================================
          TESTIMONIAL MARQUEE
      ====================================================== */}

      <section className="overflow-hidden border-y border-rose-100 bg-white/60 py-5">
        <motion.div
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex w-max items-center gap-8"
        >
          {[...Array(2)].flatMap(() =>
            [
              "Digital Products",
              "Web Development",
              "Mobile Experiences",
              "AI & Automation",
              "Product Engineering",
              "Cloud Infrastructure",
            ].map((item, index) => (
              <div
                key={`${item}-${index}-${Math.random()}`}
                className="flex items-center gap-8"
              >
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-slate-300">
                  {item}
                </span>

                <span className="h-1.5 w-1.5 rounded-full bg-[#C81C33]" />
              </div>
            ))
          )}
        </motion.div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-rose-50 via-white to-white p-8 sm:p-12 lg:p-16"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-rose-200/30 blur-3xl" />

          <div className="relative flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
                Your story could be next
              </span>

              <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-4xl lg:text-5xl">
                Ready to build something people talk about?
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
                Let&apos;s talk about your idea, your challenge, or the
                product you&apos;ve been thinking about.
              </p>
            </div>

            <Link
              href="/contact"
              className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-[#C81C33] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-rose-900/10 transition-all duration-300 hover:bg-[#A11327] hover:shadow-xl"
            >
              Start a Conversation

              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={17} />
              </motion.span>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
}