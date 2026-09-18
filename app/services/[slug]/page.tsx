import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import Navbar from "@/app/components/Navbar";
import ServiceIcon from "@/app/components/ServiceIcon";
import { services, getService } from "@/app/lib/data";

const SITE_URL = "https://wyvernstack.com";

export function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {
      title: "Service | Wyvernstack",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  const titleMap: Record<string, string> = {
    "web-development": "Web Development Services",
    "mobile-development": "Mobile App Development Services",
    "erp-solutions": "ERP Software Development Services",
    "saas-development": "SaaS Development Services",
  };

  const title = `${titleMap[service.slug] ?? service.title} | Wyvernstack`;
  const description = service.longDescription || service.description;
  const canonical = `/services/${service.slug}`;

  return {
    title,
    description,

    alternates: {
      canonical,
    },

    openGraph: {
      title,
      description,
      url: canonical,
      siteName: "Wyvernstack",
      locale: "en_US",
      type: "website",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const serviceUrl = `${SITE_URL}/services/${service.slug}`;

  const relatedServices = services.filter((item) => item.slug !== service.slug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.eyebrow,
    description: service.longDescription,
    url: serviceUrl,
    provider: {
      "@type": "Organization",
      name: "Wyvernstack",
      url: SITE_URL,
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_URL,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: `${SITE_URL}/services`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: serviceUrl,
      },
    ],
  };

  return (
    <>
      {/* Service structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      {/* Breadcrumb structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />

      <main className="min-h-screen overflow-hidden bg-[#0B0F19] font-sans">
        <Navbar />

        {/* =========================================================
            01. DARK HERO
        ========================================================= */}
        <section
          aria-labelledby="service-heading"
          className="relative overflow-hidden bg-[#0B0F19] px-6 pb-24 pt-36 text-white sm:pb-28 lg:pb-32"
        >
          {/* Background grid */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

          {/* Decorative glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#C81C33]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-400 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81C33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#0B0F19]"
            >
              <ArrowLeft size={16} aria-hidden="true" />
              All Services
            </Link>

            <div className="mt-14 grid gap-14 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-9">
                <div
                  aria-hidden="true"
                  className="mb-8 flex h-16 w-16 items-center justify-center bg-[#C81C33] text-white shadow-xl shadow-black/30"
                >
                  <ServiceIcon type={service.icon} size={30} />
                </div>

                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C81C33]">
                  {service.eyebrow}
                </p>

                <h1
                  id="service-heading"
                  className="mt-4 max-w-5xl text-5xl font-extrabold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-8xl"
                >
                  {service.title}
                  <span className="text-[#C81C33]">.</span>
                </h1>

                <p className="mt-8 max-w-3xl text-lg leading-relaxed text-slate-300 sm:text-xl">
                  {service.longDescription}
                </p>
              </div>

              <div className="lg:col-span-3 lg:border-l lg:border-white/10 lg:pl-8">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
                  Wyvernstack
                </p>

                <p className="mt-4 text-sm leading-relaxed text-slate-400">
                  Digital products, platforms, and systems engineered around
                  real business requirements.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            02. LIGHT - WHAT WE DELIVER
        ========================================================= */}
        <section
          aria-labelledby="included-heading"
          className="bg-[#F4F2ED] px-6 py-20 text-[#0B0F19] sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-20">
              <header className="lg:col-span-5">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C81C33]">
                  What we deliver
                </p>

                <h2
                  id="included-heading"
                  className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
                >
                  Built around what your business actually needs.
                </h2>

                <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
                  Every engagement is shaped around the product, workflow,
                  users, and technical requirements behind the problem.
                </p>
              </header>

              <div className="lg:col-span-7">
                <ul className="border-t border-[#D9D6CF]">
                  {service.highlights.map((item, index) => (
                    <li
                      key={item}
                      className="grid gap-5 border-b border-[#D9D6CF] py-7 sm:grid-cols-[64px_1fr] sm:items-start"
                    >
                      <span
                        aria-hidden="true"
                        className="text-sm font-bold text-[#C81C33]"
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <div className="flex gap-4">
                        <Check
                          size={19}
                          className="mt-1 shrink-0 text-[#C81C33]"
                          aria-hidden="true"
                        />

                        <span className="text-lg font-medium leading-relaxed text-[#0B0F19]">
                          {item}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            03. DARK - PROCESS
        ========================================================= */}
        <section
          aria-labelledby="approach-heading"
          className="relative overflow-hidden bg-[#11151F] px-6 py-20 text-white sm:py-24 lg:py-28"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-40 top-1/3 h-80 w-80 rounded-full bg-[#C81C33]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <header className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C81C33]">
                Our Approach
              </p>

              <h2
                id="approach-heading"
                className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl"
              >
                A structured path from idea to production.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg">
                Clear stages keep the work focused, measurable, and ready for
                the realities of production.
              </p>
            </header>

            <ol
              aria-label={`${service.title} project process`}
              className="mt-14 grid border-l border-white/10 md:grid-cols-2 lg:grid-cols-4"
            >
              {service.process.map((step, index) => (
                <li
                  key={step}
                  className="border-b border-r border-t border-white/10 p-7 lg:min-h-[260px] lg:p-8"
                >
                  <span
                    aria-hidden="true"
                    className="text-sm font-bold text-[#C81C33]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div
                    aria-hidden="true"
                    className="my-7 h-px w-10 bg-[#C81C33]"
                  />

                  <p className="text-base leading-relaxed text-slate-300">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* =========================================================
            04. LIGHT - RELATED SERVICES
        ========================================================= */}
        <section
          aria-labelledby="related-services-heading"
          className="bg-[#F4F2ED] px-6 py-20 text-[#0B0F19] sm:py-24 lg:py-28"
        >
          <div className="mx-auto max-w-7xl">
            <header className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C81C33]">
                Explore More
              </p>

              <h2
                id="related-services-heading"
                className="mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl"
              >
                Other capabilities at Wyvernstack.
              </h2>

              <p className="mt-6 text-base leading-relaxed text-slate-600 sm:text-lg">
                Different problems often require different parts of the product
                and engineering stack.
              </p>
            </header>

            <ul className="mt-12 grid border-l border-t border-[#D9D6CF] md:grid-cols-3">
              {relatedServices.map((relatedService) => (
                <li
                  key={relatedService.slug}
                  className="border-b border-r border-[#D9D6CF]"
                >
                  <Link
                    href={`/services/${relatedService.slug}`}
                    className="group block h-full p-7 transition-colors hover:bg-[#EBE8E1] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#C81C33] sm:p-8"
                  >
                    <div
                      aria-hidden="true"
                      className="mb-8 flex h-11 w-11 items-center justify-center border border-[#D9D6CF] text-[#C81C33] transition-colors group-hover:border-[#C81C33] group-hover:bg-[#C81C33] group-hover:text-white"
                    >
                      <ServiceIcon type={relatedService.icon} size={20} />
                    </div>

                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#C81C33]">
                      {relatedService.eyebrow}
                    </p>

                    <h3 className="mt-3 text-xl font-bold tracking-tight">
                      {relatedService.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-slate-600">
                      {relatedService.description}
                    </p>

                    <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold transition-colors group-hover:text-[#C81C33]">
                      Explore service
                      <ArrowRight size={16} aria-hidden="true" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* =========================================================
            05. DARK CTA
        ========================================================= */}
        <section
          aria-labelledby="service-cta-heading"
          className="relative overflow-hidden bg-[#0B0F19] px-6 py-20 text-white sm:py-24 lg:py-32"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute right-0 top-1/2 h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full bg-[#C81C33]/10 blur-3xl"
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#C81C33]">
                Ready to build?
              </p>

              <h2
                id="service-cta-heading"
                className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              >
                Let&apos;s turn this capability into something useful for your
                business.
              </h2>

              <p className="mt-7 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">
                Tell us what you are trying to build, improve, or automate and
                we&apos;ll determine the right approach.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-2 bg-[#C81C33] px-7 py-3.5 font-semibold text-white transition-colors hover:bg-[#A11327] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81C33] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F19]"
              >
                Start a Project
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
