"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useActionState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  Loader2,
  ArrowUpRight,
  CheckCircle2,
  ArrowDown,
} from "lucide-react";

import { sendEmail } from "@/app/actions/sendEmail";

export default function Contact() {
  return (
    <main className="overflow-hidden bg-[#08090D]">
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="relative isolate min-h-[78vh] overflow-hidden bg-[#08090D] text-white">
        {/* Ambient glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute -right-40 top-0 h-[38rem] w-[38rem] rounded-full bg-[#C81C33]/20 blur-[140px]"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="pointer-events-none absolute -left-40 bottom-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#C81C33]/10 blur-[120px]"
        />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
          }}
        />

        {/* Large decorative circle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="pointer-events-none absolute right-[8%] top-[22%] hidden h-56 w-56 rounded-full border border-white/[0.06] lg:block"
        >
          <div className="absolute inset-6 rounded-full border border-[#C81C33]/20" />
          <div className="absolute inset-[4.5rem] rounded-full bg-[#C81C33]/10 blur-2xl" />

          <span className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-[#C81C33] shadow-[0_0_15px_rgba(200,28,51,.9)]" />
        </motion.div>

        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-between px-6 pb-12 pt-10 sm:pb-16 lg:px-8 lg:pt-14">
          {/* Top line */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-between border-b border-white/10 pb-5"
          >
            <div className="flex items-center gap-3">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#C81C33] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#C81C33]" />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-white/45">
                Start a Conversation
              </span>
            </div>

            <span className="hidden font-mono text-[10px] uppercase tracking-[0.2em] text-white/20 sm:block">
              WYVERNSTACK / 04
            </span>
          </motion.div>

          {/* Main hero */}
          <div className="relative max-w-6xl pt-24 lg:pt-28">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55 }}
              className="mb-7 text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]"
            >
              Digital Technology Studio
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="max-w-6xl text-[clamp(3.7rem,8.5vw,9rem)] font-extrabold leading-[0.86] tracking-[-0.07em]"
            >
              Let&apos;s make
              <br />
              something{" "}
              <span className="text-[#C81C33]">real.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 max-w-xl text-base leading-7 text-white/45 sm:text-lg"
            >
              Have a product to build, a system to modernize, or an idea worth
              exploring? Start the conversation and let&apos;s figure out
              what comes next.
            </motion.p>
          </div>

          {/* Bottom */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-20 flex items-end justify-between border-t border-white/10 pt-6"
          >
            <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-4 sm:gap-x-16">
              <HeroMeta label="Web" />
              <HeroMeta label="Mobile" />
              <HeroMeta label="AI & Automation" />
              <HeroMeta label="Business Systems" />
            </div>

            <div className="hidden items-center gap-3 text-white/25 sm:flex">
              <span className="text-[9px] uppercase tracking-[0.2em]">
                Scroll
              </span>

              <ArrowDown size={14} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* =====================================================
          PROJECT BRIEF — LIGHT
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F4F2ED] text-[#0B0F19]">
        <div className="pointer-events-none absolute right-[-12rem] top-[-10rem] h-[32rem] w-[32rem] rounded-full bg-[#C81C33]/5 blur-[130px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-20 max-w-3xl"
          >
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-[#C81C33]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-black/35">
                Project Brief
              </span>
            </div>

            <h2 className="mt-7 text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">
              Start with
              <br />
              the <span className="text-[#C81C33]">idea.</span>
            </h2>

            <p className="mt-7 max-w-xl text-sm leading-7 text-black/45 sm:text-base">
              Give us enough context to understand what you&apos;re trying to
              achieve. You don&apos;t need to have everything figured out.
            </p>
          </motion.div>

          {/* Main workspace */}
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            {/* =================================================
                DETAILS
            ================================================= */}

            <motion.aside
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-4"
            >
              <div className="border-t border-black/10 pt-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-black/30">
                    WYVERNSTACK Studio
                  </span>

                  <span className="font-mono text-[9px] text-[#C81C33]">
                    INFO_01
                  </span>
                </div>
              </div>

              <p className="mt-8 max-w-sm text-sm leading-7 text-black/45">
                We work across digital products, business platforms,
                intelligent automation, and modern software infrastructure.
              </p>

              {/* Contact information */}
              <div className="mt-12">
                <ContactLine
                  icon={<Mail size={16} />}
                  label="Email"
                  value="wyvernstack@gmail.com"
                  href="mailto:wyvernstack@gmail.com"
                />

                <ContactLine
                  icon={<Phone size={16} />}
                  label="Phone"
                  value="+91 7012524123"
                  href="tel:+917012524123"
                />

                <ContactLine
                  icon={<MapPin size={16} />}
                  label="Studio"
                  value="Bengaluru, Karnataka, India"
                />

                <ContactLine
                  icon={<Clock3 size={16} />}
                  label="Availability"
                  value="Mon – Fri · 9:00 AM – 6:00 PM"
                />
              </div>
            </motion.aside>

            {/* =================================================
                FORM
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-8"
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROCESS — DARK
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#08090D] text-white">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[#C81C33]/10 blur-[140px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
            <div className="lg:col-span-5">
              <SectionLabel dark>
                What happens next
              </SectionLabel>

              <h2 className="mt-7 text-[clamp(2.8rem,5vw,5rem)] font-extrabold leading-[0.92] tracking-[-0.06em]">
                A simple
                <br />
                path from
                <br />
                <span className="text-[#C81C33]">idea to action.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/40 sm:text-base">
                No unnecessary layers. No complicated process. Just a focused
                conversation followed by a clear next step.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="border-t border-white/10">
                <ProcessStep
                  number="01"
                  title="We review"
                  text="We go through your brief and identify the key requirements, opportunities, and constraints."
                />

                <ProcessStep
                  number="02"
                  title="We respond"
                  text="We get back to you within 24 hours with questions, recommendations, and a clear direction."
                />

                <ProcessStep
                  number="03"
                  title="We explore"
                  text="We schedule a discovery conversation to understand the business, users, product, and technical requirements."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA — LIGHT
      ====================================================== */}

      <section className="relative overflow-hidden bg-[#F4F2ED] text-[#0B0F19]">
        <div className="pointer-events-none absolute bottom-[-15rem] right-[-10rem] h-[30rem] w-[30rem] rounded-full bg-[#C81C33]/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-28">
          <div className="border-t border-black/10 pt-8">
            <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
                  One more thing
                </p>

                <h2 className="mt-6 max-w-4xl text-[clamp(3rem,6vw,6rem)] font-extrabold leading-[0.9] tracking-[-0.06em]">
                  Good ideas
                  <br />
                  deserve to <span className="text-[#C81C33]">move.</span>
                </h2>
              </div>

              <Link
                href="/work"
                className="group inline-flex shrink-0 items-center gap-4 text-xs font-bold uppercase tracking-[0.16em]"
              >
                Explore Our Work

                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0B0F19] text-white transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


/* =========================================================
   CONTACT FORM
========================================================= */

function ContactForm() {
  const [state, formAction, isPending] = useActionState(sendEmail, null);

  return (
    <form action={formAction} className="relative">
      {/* Form top metadata */}
      <div className="mb-10 flex items-center justify-between border-b border-black/10 pb-5">
        <div className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-[#C81C33]" />

          <span className="text-[9px] font-bold uppercase tracking-[0.22em] text-black/35">
            Tell us about it
          </span>
        </div>

        <span className="font-mono text-[9px] text-black/20">
          FORM_01
        </span>
      </div>

      <div className="grid gap-x-8 gap-y-8 sm:grid-cols-2">
        <Field
          label="Your Name"
          id="name"
          name="name"
          placeholder="Alex Morgan"
        />

        <Field
          label="Work Email"
          id="email"
          name="email"
          type="email"
          placeholder="alex@company.com"
        />

        <Field
          label="Company"
          id="company"
          name="company"
          placeholder="Your company"
          required={false}
        />

        {/* Project Type */}
        <div>
          <label
            htmlFor="projectType"
            className="mb-3 block text-[9px] font-bold uppercase tracking-[0.18em] text-black/35"
          >
            Project Type
          </label>

          <div className="relative">
            <select
              id="projectType"
              name="projectType"
              defaultValue=""
              className="peer w-full cursor-pointer appearance-none border-0 border-b border-black/15 bg-transparent px-0 py-3 pr-8 text-sm font-medium text-[#0B0F19] outline-none transition-colors duration-300 focus:border-[#C81C33]"
            >
              <option value="" disabled>
                Select a service
              </option>

              <option value="Web Development">
                Web Development
              </option>

              <option value="Mobile Development">
                Mobile Development
              </option>

              <option value="UI/UX Design">
                UI/UX Design
              </option>

              <option value="Backend Development">
                Backend Development
              </option>

              <option value="Data & Analytics">
                Data & Analytics
              </option>

              <option value="E-commerce Solutions">
                E-commerce Solutions
              </option>

              <option value="Other">
                Other
              </option>
            </select>

            <span className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-xs text-black/25 transition-colors peer-focus:text-[#C81C33]">
              ↓
            </span>

            <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#C81C33] transition-all duration-500 peer-focus:w-full" />
          </div>
        </div>

        {/* =================================================
            DETAILS
        ================================================= */}

        <div className="sm:col-span-2">
          <div className="mb-3 flex items-center justify-between">
            <label
              htmlFor="details"
              className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/35"
            >
              Project Details
            </label>

            <span className="font-mono text-[9px] text-black/20">
              REQUIRED
            </span>
          </div>

          <div className="relative">
            <textarea
              id="details"
              name="details"
              required
              rows={8}
              placeholder="Tell us what you're trying to build, improve, or solve..."
              className="w-full resize-none border border-black/[0.12] bg-white/50 px-5 py-5 text-sm leading-7 text-[#0B0F19] outline-none placeholder:text-black/25 transition-all duration-300 hover:border-black/20 focus:border-[#C81C33] focus:bg-white focus:shadow-[0_0_0_3px_rgba(200,28,51,0.05)]"
            />

            {/* Corner markers */}
            <span className="pointer-events-none absolute left-0 top-0 h-3 w-3 border-l border-t border-[#C81C33]/50" />

            <span className="pointer-events-none absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#C81C33]/50" />
          </div>
        </div>

        {/* Response */}
        {state?.message && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex items-start gap-3 border px-4 py-4 text-sm font-medium sm:col-span-2 ${
              state.success
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}
          >
            {state.success && (
              <CheckCircle2
                size={17}
                className="mt-0.5 shrink-0"
              />
            )}

            <span>{state.message}</span>
          </motion.div>
        )}

        {/* Submit */}
        <div className="sm:col-span-2">
          <div className="flex flex-col gap-6 border-t border-black/10 pt-7 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />

                <p className="text-xs font-semibold text-black/55">
                  Usually responds within 24 hours.
                </p>
              </div>

              <p className="mt-2 text-[9px] uppercase tracking-[0.14em] text-black/25">
                No obligation · No spam
              </p>
            </div>

            <button
              disabled={isPending}
              type="submit"
              className="group relative flex w-full cursor-pointer items-center justify-center gap-3 overflow-hidden bg-[#C81C33] px-8 py-4 text-xs font-bold uppercase tracking-[0.14em] text-white transition-all duration-300 hover:bg-[#A11327] hover:shadow-[0_15px_35px_rgba(200,28,51,0.2)] disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
            >
              <span className="absolute inset-0 translate-y-full bg-white/10 transition-transform duration-500 group-hover:translate-y-0" />

              <span className="relative">
                {isPending ? "Sending" : "Send Project Brief"}
              </span>

              <span className="relative">
                {isPending ? (
                  <Loader2
                    size={16}
                    className="animate-spin"
                  />
                ) : (
                  <Send
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </span>
            </button>
          </div>

          <p className="mt-5 text-[9px] leading-5 text-black/25">
            We&apos;ll only use your information to respond to your enquiry.
          </p>
        </div>
      </div>
    </form>
  );
}


/* =========================================================
   FIELD
========================================================= */

function Field({
  label,
  id,
  name,
  placeholder,
  type = "text",
  required = true,
}: {
  label: string;
  id: string;
  name: string;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <label
        htmlFor={id}
        className="mb-3 block text-[9px] font-bold uppercase tracking-[0.18em] text-black/35"
      >
        {label}

        {!required && (
          <span className="ml-2 font-medium normal-case tracking-normal text-black/20">
            Optional
          </span>
        )}
      </label>

      <div className="relative">
        <input
          id={id}
          type={type}
          name={name}
          required={required}
          placeholder={placeholder}
          className="peer w-full border-0 border-b border-black/15 bg-transparent px-0 py-3 text-sm font-medium text-[#0B0F19] outline-none placeholder:text-black/20 transition-colors duration-300 focus:border-[#C81C33]"
        />

        <span className="pointer-events-none absolute bottom-0 left-0 h-px w-0 bg-[#C81C33] transition-all duration-500 peer-focus:w-full" />
      </div>
    </motion.div>
  );
}


/* =========================================================
   CONTACT LINE
========================================================= */

function ContactLine({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="group flex items-center justify-between border-b border-black/10 py-5">
      <div className="flex items-center gap-4">
        <span className="text-[#C81C33]">
          {icon}
        </span>

        <div>
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-black/30">
            {label}
          </p>

          <p className="mt-1 text-sm font-medium text-black/65">
            {value}
          </p>
        </div>
      </div>

      {href && (
        <ArrowUpRight
          size={15}
          className="text-black/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#C81C33]"
        />
      )}
    </div>
  );

  if (!href) return content;

  return (
    <a href={href} className="block">
      {content}
    </a>
  );
}


/* =========================================================
   PROCESS STEP
========================================================= */

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
      className="grid gap-5 border-b border-white/10 py-9 sm:grid-cols-[70px_180px_1fr]"
    >
      <span className="font-mono text-xs font-bold text-[#C81C33]">
        {number}
      </span>

      <h3 className="text-xl font-bold tracking-tight">
        {title}
      </h3>

      <p className="max-w-xl text-sm leading-7 text-white/40">
        {text}
      </p>
    </motion.div>
  );
}


/* =========================================================
   HERO META
========================================================= */

function HeroMeta({ label }: { label: string }) {
  return (
    <div>
      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/25">
        Capability
      </p>

      <p className="mt-2 text-xs font-medium text-white/60">
        {label}
      </p>
    </div>
  );
}


/* =========================================================
   SECTION LABEL
========================================================= */

function SectionLabel({
  children,
  dark = false,
}: {
  children: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.24em] ${
        dark ? "text-white/40" : "text-black/35"
      }`}
    >
      <span className="h-px w-8 bg-[#C81C33]" />

      {children}
    </div>
  );
}