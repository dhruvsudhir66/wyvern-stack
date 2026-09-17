import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  ExternalLink,
} from "lucide-react";

import Navbar from "@/app/components/Navbar";
import { projects } from "@/app/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  return {
    title: project
      ? `${project.title} | WYVERNSTACK`
      : "Case Study | WYVERNSTACK",

    description:
      project?.description ??
      "A digital experience designed and developed by WYVERNSTACK.",
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find(
    (project) => project.slug === slug
  );

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen overflow-hidden bg-mesh font-sans">
      <Navbar />

      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36">
        {/* Back to work */}
        <Link
          href="/work"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#C81C33]"
        >
          <ArrowLeft
            size={16}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />

          All Work
        </Link>

        {/* Hero */}
        <div
          className={`relative mt-10 min-h-[520px] overflow-hidden rounded-[2rem] shadow-2xl ${project.bg}`}
        >
          {/* Project image */}
          {project.image ? (
            <>
              <Image
                src={project.image}
                alt={`${project.title} website preview`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10" />
            </>
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40" />
          )}

          {/* Hero content */}
          <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-8 text-white sm:p-12 lg:p-16">
            {/* Top row */}
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-xs font-medium backdrop-blur-md">
                {project.category}
              </span>

              {project.image && (
                <span className="rounded-full border border-white/20 bg-black/20 px-4 py-2 text-xs font-medium backdrop-blur-md">
                  Featured Project
                </span>
              )}
            </div>

            {/* Bottom content */}
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex rounded-md bg-black/30 px-3 py-1.5 text-xs font-mono backdrop-blur-md">
                {project.metrics}
              </div>

              <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl">
                {project.title}
              </h1>

              {project.description && (
                <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                  {project.description}
                </p>
              )}

              {/* Visit website */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-[#0B0F19] shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-[#C81C33] hover:text-white"
                >
                  Visit Website

                  <ExternalLink
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT OVERVIEW
      ===================================================== */}
      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Description */}
          <div className="lg:col-span-8">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
              Project Overview
            </span>

            <h2 className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-4xl">
              A digital experience built around the brand.
            </h2>

            {project.description && (
              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                {project.description}
              </p>
            )}
          </div>

          {/* Project details */}
          <aside className="h-fit rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200/80 lg:col-span-4">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
              Project Details
            </span>

            <div className="mt-6 space-y-6">
              {/* Service */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Service
                </p>

                <p className="mt-1 text-sm font-semibold text-[#0B0F19]">
                  {project.category}
                </p>
              </div>

              {/* Focus */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                  Focus
                </p>

                <p className="mt-1 text-sm font-semibold text-[#0B0F19]">
                  {project.metrics}
                </p>
              </div>

              {/* Technologies */}
              {project.technologies &&
                project.technologies.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Technologies
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.technologies.map(
                        (technology) => (
                          <span
                            key={technology}
                            className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-medium text-slate-600"
                          >
                            {technology}
                          </span>
                        )
                      )}
                    </div>
                  </div>
                )}

              {/* Website */}
              {project.url && (
                <div className="border-t border-slate-100 pt-6">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 text-sm font-semibold text-[#0B0F19] transition-colors hover:text-[#C81C33]"
                  >
                    Visit Live Website

                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </div>
              )}
            </div>
          </aside>
        </div>
      </section>

      {/* =====================================================
          TECHNOLOGY / CAPABILITIES
      ===================================================== */}
      {project.technologies &&
        project.technologies.length > 0 && (
          <section className="border-y border-slate-100 bg-slate-50 px-6 py-20">
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
                  What We Built
                </span>

                <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl">
                  Designed for experience.
                  <br />
                  Built for performance.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-500">
                  A carefully crafted digital experience using
                  modern web technologies and responsive design
                  principles.
                </p>
              </div>

              <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {project.technologies.map(
                  (technology, index) => (
                    <div
                      key={technology}
                      className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                    >
                      <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full bg-rose-50 text-sm font-bold text-[#C81C33]">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      <h3 className="text-base font-bold text-[#0B0F19]">
                        {technology}
                      </h3>

                      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
                        <Check
                          size={14}
                          className="text-[#C81C33]"
                        />

                        Project capability
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}

      {/* =====================================================
          DESKTOP + MOBILE EXPERIENCE
      ===================================================== */}
      {project.image && (
        <section className="mx-auto max-w-7xl px-6 py-24">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
              The Experience
            </span>

            <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl">
              A closer look.
            </h2>

            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
              Designed as a responsive experience that maintains
              the visual language, hierarchy and interactions across
              desktop and mobile.
            </p>
          </div>

          {/* Main desktop presentation */}
          <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-100 p-2 shadow-2xl">
            <div className="relative aspect-[16/9] overflow-hidden rounded-[1.5rem]">
              <Image
                src={project.image}
                alt={`${project.title} desktop website design`}
                fill
                sizes="(max-width: 768px) 100vw, 1280px"
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
              />
            </div>
          </div>

          {/* Responsive showcase */}
          <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
            {/* Desktop device */}
            <div className="relative overflow-hidden rounded-[2rem] border border-slate-200 bg-[#0B0F19] p-4 shadow-xl">
              <div className="mb-4 flex items-center gap-2 px-2">
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />
                <span className="h-2 w-2 rounded-full bg-white/30" />

                <span className="ml-3 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">
                  Desktop Experience
                </span>
              </div>

              <div className="relative aspect-[16/10] overflow-hidden rounded-[1.25rem] bg-white">
                <Image
                  src={project.image}
                  alt={`${project.title} desktop responsive preview`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 70vw"
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* Mobile device */}
            <div className="flex min-h-[500px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f3eee7] p-8 shadow-xl">
              <div className="relative w-[210px] overflow-hidden rounded-[2.25rem] border-[7px] border-[#171315] bg-white shadow-2xl">
                {/* Phone top speaker */}
                <div className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#171315]" />

                <div className="relative aspect-[9/19.5] w-full">
                  <Image
                    src={project.image}
                    alt={`${project.title} mobile responsive design`}
                    fill
                    sizes="210px"
                    className="object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile design explanation */}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C81C33]">
                01
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#0B0F19]">
                Fully Responsive
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Layouts adapt naturally across desktop, tablet and
                mobile screen sizes.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C81C33]">
                02
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#0B0F19]">
                Mobile First Details
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Navigation, typography, CTAs and content hierarchy
                were carefully adapted for smaller screens.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C81C33]">
                03
              </span>

              <h3 className="mt-3 text-lg font-bold text-[#0B0F19]">
                Consistent Experience
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                The same visual identity and interaction language
                carries across every device.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          LIVE WEBSITE CTA
      ===================================================== */}
      {project.url && (
        <section className="border-y border-slate-100 bg-slate-50 px-6 py-20">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0B0F19] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
              {/* Decorative glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C81C33]/20 blur-3xl" />

              <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                <div className="max-w-3xl">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E45B6C]">
                    Explore the live experience
                  </span>

                  <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
                    See {project.title} in action.
                  </h2>

                  <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                    Experience the final website, interactions and
                    responsive design firsthand.
                  </p>
                </div>

                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-7 py-4 text-sm font-bold text-[#0B0F19] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C81C33] hover:text-white"
                >
                  Visit Live Website

                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* =====================================================
          FINAL CTA
      ===================================================== */}
      <section className="border-t border-slate-100 bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[2rem] bg-[#0B0F19] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
            {/* Decorative glow */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C81C33]/20 blur-3xl" />

            <div className="relative z-10 max-w-3xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E45B6C]">
                Your next project
              </span>

              <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Build something equally ambitious.
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                Have an idea that deserves more than a template?
                Let&apos;s turn it into a thoughtful digital
                experience.
              </p>

              <Link
                href="/contact"
                className="group mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#C81C33] px-7 py-3.5 font-medium text-white shadow-lg shadow-rose-900/20 transition-all hover:bg-[#A11327]"
              >
                Start a Project

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}