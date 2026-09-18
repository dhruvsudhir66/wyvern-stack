import type { Metadata } from "next";
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
}): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    return {
      title: "Case Study | Wyvernstack",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const title = `${project.title} | Wyvernstack`;
  const description =
    project.description ??
    `Explore the ${project.title} project designed and developed by Wyvernstack.`;

  const url = `/work/${project.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical: url,
    },

    openGraph: {
      title,
      description,
      url,
      siteName: "Wyvernstack",
      locale: "en_US",
      type: "article",

      ...(project.image
        ? {
            images: [
              {
                url: project.image,
                width: 1200,
                height: 630,
                alt: `${project.title} project`,
              },
            ],
          }
        : {}),
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,

      ...(project.image
        ? {
            images: [project.image],
          }
        : {}),
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects.find((project) => project.slug === slug);

  if (!project) {
    notFound();
  }

  const projectUrl = `https://wyvernstack.com/work/${project.slug}`;

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description:
      project.description ??
      `A digital project designed and developed by Wyvernstack.`,
    url: projectUrl,

    creator: {
      "@type": "Organization",
      name: "Wyvernstack",
      url: "https://wyvernstack.com",
    },

    ...(project.image
      ? {
          image: `https://wyvernstack.com${project.image}`,
        }
      : {}),

    ...(project.technologies && project.technologies.length > 0
      ? {
          keywords: project.technologies.join(", "),
        }
      : {}),

    about: {
      "@type": "Thing",
      name: project.category,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-mesh font-sans">
        <Navbar />

        {/* =====================================================
            HERO
        ===================================================== */}

        <section
          aria-labelledby="project-heading"
          className="mx-auto max-w-7xl px-6 pb-16 pt-36"
        >
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

          <div
            className={`relative mt-10 min-h-[520px] overflow-hidden rounded-[2rem] shadow-2xl ${project.bg}`}
          >
            {project.image ? (
              <>
                <Image
                  src={project.image}
                  alt={`${project.title} website project preview`}
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, 1280px"
                  className="object-cover object-center"
                />

                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10"
                />
              </>
            ) : (
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-br from-black/10 to-black/40"
              />
            )}

            <div className="relative z-10 flex min-h-[520px] flex-col justify-between p-8 text-white sm:p-12 lg:p-16">
              <div className="flex items-start justify-between gap-4">
                <span className="border border-white/20 bg-white/10 px-3 py-2 text-xs font-medium backdrop-blur-md">
                  {project.category}
                </span>

                {project.image && (
                  <span className="border border-white/20 bg-black/20 px-3 py-2 text-xs font-medium backdrop-blur-md">
                    Selected Project
                  </span>
                )}
              </div>

              <div className="max-w-4xl">
                <div className="mb-5 inline-flex bg-black/30 px-3 py-1.5 font-mono text-xs backdrop-blur-md">
                  {project.metrics}
                </div>

                <h1
                  id="project-heading"
                  className="text-5xl font-extrabold tracking-tight sm:text-7xl lg:text-8xl"
                >
                  {project.title}
                </h1>

                {project.description && (
                  <p className="mt-6 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
                    {project.description}
                  </p>
                )}

                {project.url && (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${project.title} live website`}
                    className="group mt-8 inline-flex items-center gap-2 border border-white bg-white px-6 py-3.5 text-sm font-semibold text-[#0B0F19] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C81C33] hover:text-white"
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

        <section
          aria-labelledby="overview-heading"
          className="mx-auto max-w-7xl px-6 pb-24"
        >
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
                Project Overview
              </span>

              <h2
                id="overview-heading"
                className="mt-3 max-w-3xl text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-4xl"
              >
                A digital experience built around the business.
              </h2>

              {project.description && (
                <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                  {project.description}
                </p>
              )}
            </div>

            <aside
              aria-label="Project details"
              className="h-fit bg-white p-7 shadow-sm ring-1 ring-slate-200/80 lg:col-span-4"
            >
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
                Project Details
              </span>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Service
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#0B0F19]">
                    {project.category}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Focus
                  </p>

                  <p className="mt-1 text-sm font-semibold text-[#0B0F19]">
                    {project.metrics}
                  </p>
                </div>

                {project.technologies && project.technologies.length > 0 && (
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Technologies
                    </p>

                    <ul className="mt-3 space-y-2">
                      {project.technologies.map((technology) => (
                        <li
                          key={technology}
                          className="flex items-center gap-2 text-sm text-slate-600"
                        >
                          <span
                            aria-hidden="true"
                            className="h-1.5 w-1.5 bg-[#C81C33]"
                          />

                          {technology}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
            TECHNOLOGY
        ===================================================== */}

        {project.technologies && project.technologies.length > 0 && (
          <section
            aria-labelledby="technology-heading"
            className="border-y border-slate-100 bg-slate-50 px-6 py-20"
          >
            <div className="mx-auto max-w-7xl">
              <div className="max-w-2xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
                  Technology
                </span>

                <h2
                  id="technology-heading"
                  className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl"
                >
                  Technology selected
                  <br />
                  for the project.
                </h2>

                <p className="mt-5 text-base leading-7 text-slate-500">
                  The technology stack was selected around the project's
                  requirements, experience, and deployment needs.
                </p>
              </div>

              <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {project.technologies.map((technology, index) => (
                  <li
                    key={technology}
                    className="border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                  >
                    <div className="mb-6 flex h-10 w-10 items-center justify-center border border-rose-100 bg-rose-50 text-sm font-bold text-[#C81C33]">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    <h3 className="text-base font-bold text-[#0B0F19]">
                      {technology}
                    </h3>

                    <div className="mt-4 flex items-center gap-2 text-xs font-medium text-slate-400">
                      <Check size={14} className="text-[#C81C33]" />
                      Technology used
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* =====================================================
            EXPERIENCE
        ===================================================== */}

        {project.image && (
          <section
            aria-labelledby="experience-heading"
            className="mx-auto max-w-7xl px-6 py-24"
          >
            <div className="mb-12">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#C81C33]">
                The Experience
              </span>

              <h2
                id="experience-heading"
                className="mt-3 text-3xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl"
              >
                A closer look at the interface.
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-500">
                The interface was designed as a responsive experience,
                maintaining its visual hierarchy and interaction patterns across
                desktop and mobile devices.
              </p>
            </div>

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

            <div className="mt-8 grid gap-8 lg:grid-cols-[1.4fr_0.6fr]">
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

              <div className="flex min-h-[500px] items-center justify-center overflow-hidden rounded-[2rem] border border-slate-200 bg-[#f3eee7] p-8 shadow-xl">
                <div className="relative w-[210px] overflow-hidden rounded-[2.25rem] border-[7px] border-[#171315] bg-white shadow-2xl">
                  <div
                    aria-hidden="true"
                    className="absolute left-1/2 top-2 z-20 h-5 w-20 -translate-x-1/2 rounded-full bg-[#171315]"
                  />

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

            <div className="mt-10 grid gap-6 md:grid-cols-3">
              <ExperiencePoint
                number="01"
                title="Responsive layout"
                text="The interface adapts across desktop, tablet, and mobile screen sizes."
              />

              <ExperiencePoint
                number="02"
                title="Mobile-first details"
                text="Navigation, typography, calls to action, and content hierarchy were adapted for smaller screens."
              />

              <ExperiencePoint
                number="03"
                title="Consistent experience"
                text="The visual identity and interaction language remain consistent across devices."
              />
            </div>
          </section>
        )}

        {/* =====================================================
            LIVE WEBSITE
        ===================================================== */}

        {project.url && (
          <section
            aria-labelledby="live-heading"
            className="border-y border-slate-100 bg-slate-50 px-6 py-20"
          >
            <div className="mx-auto max-w-7xl">
              <div className="relative overflow-hidden rounded-[2rem] bg-[#0B0F19] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C81C33]/20 blur-3xl"
                />

                <div className="relative z-10 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
                  <div className="max-w-3xl">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E45B6C]">
                      Live project
                    </span>

                    <h2
                      id="live-heading"
                      className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl"
                    >
                      Explore {project.title}.
                    </h2>

                    <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                      Visit the live website to explore the finished interface,
                      responsive experience, and interactions.
                    </p>
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex w-fit shrink-0 items-center gap-3 border border-white bg-white px-7 py-4 text-sm font-bold text-[#0B0F19] transition-all duration-300 hover:-translate-y-1 hover:bg-[#C81C33] hover:text-white"
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

        <section
          aria-labelledby="final-cta-heading"
          className="border-t border-slate-100 bg-white px-6 py-20"
        >
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#0B0F19] p-8 text-white shadow-2xl sm:p-12 lg:p-16">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#C81C33]/20 blur-3xl"
              />

              <div className="relative z-10 max-w-3xl">
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#E45B6C]">
                  Your next project
                </span>

                <h2
                  id="final-cta-heading"
                  className="mt-3 text-3xl font-extrabold tracking-tight sm:text-5xl"
                >
                  Have a digital product
                  <br />
                  worth building?
                </h2>

                <p className="mt-5 max-w-xl text-base leading-7 text-white/60">
                  Tell us about your business, product, or digital challenge and
                  let's explore what we can build.
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
    </>
  );
}

function ExperiencePoint({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="border border-slate-200 bg-white p-7 shadow-sm">
      <span className="text-xs font-bold uppercase tracking-wider text-[#C81C33]">
        {number}
      </span>

      <h3 className="mt-3 text-lg font-bold text-[#0B0F19]">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
    </div>
  );
}
