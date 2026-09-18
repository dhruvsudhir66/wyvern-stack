"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import ServiceIcon from "@/app/components/ServiceIcon";
import { services } from "@/app/lib/data";

export default function Services() {
  return (
    <section
      aria-labelledby="services-heading"
      className="relative overflow-hidden bg-[#08090D] py-20 text-white sm:py-24 lg:py-28"
    >
      {/* Subtle grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      {/* Atmosphere */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C81C33]/10 blur-[140px]"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <header className="grid gap-8 border-b border-white/[0.08] pb-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span
                aria-hidden="true"
                className="h-1.5 w-1.5 rounded-full bg-[#C81C33]"
              />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C81C33]">
                Services
              </span>
            </div>

            <h2
              id="services-heading"
              className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem] lg:leading-[0.92]"
            >
              Digital services
              <br />
              <span className="text-white/30">that move.</span>
            </h2>
          </div>

          <div className="md:flex md:justify-end">
            <p className="max-w-md text-sm leading-7 text-white/40 sm:text-base">
              From customer-facing experiences to the systems behind them, we
              design and engineer digital products and business technology that
              helps ambitious companies move forward.
            </p>
          </div>
        </header>

        {/* Services */}
        <ul className="mt-2">
          {services.map((service, index) => (
            <motion.li
              key={service.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
            >
              <Link
                href={`/services/${service.slug}`}
                aria-label={`Explore ${service.title}`}
                className="group relative grid gap-5 border-b border-white/[0.08] py-7 transition-colors duration-300 md:grid-cols-[70px_1.1fr_1.2fr_auto] md:items-center md:gap-8 lg:py-8"
              >
                {/* Number */}
                <div className="font-mono text-[11px] text-white/25 transition-colors group-hover:text-[#C81C33]">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Name */}
                <div className="flex items-center gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 group-hover:border-[#C81C33] group-hover:bg-[#C81C33]"
                  >
                    <ServiceIcon type={service.icon} size={17} />
                  </div>

                  <div>
                    <span className="mb-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-[#C81C33]">
                      {service.eyebrow}
                    </span>

                    <h3 className="text-xl font-semibold tracking-[-0.035em] text-white sm:text-2xl">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <div>
                  <p className="max-w-md text-sm leading-6 text-white/40">
                    {service.description}
                  </p>

                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                    {service.highlights.slice(0, 4).map((feature) => (
                      <span
                        key={feature}
                        className="text-[10px] font-medium text-white/20"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow */}
                <div
                  aria-hidden="true"
                  className="absolute right-0 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#C81C33] group-hover:bg-[#C81C33] group-hover:text-white md:static"
                >
                  <ArrowUpRight
                    size={16}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>

                {/* Hover line */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-0 bg-[#C81C33] transition-all duration-500 group-hover:w-full"
                />
              </Link>
            </motion.li>
          ))}
        </ul>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            Design · Engineering · Intelligence
          </p>

          <Link
            href="/services"
            className="group flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C81C33] focus-visible:ring-offset-4 focus-visible:ring-offset-[#08090D]"
          >
            Explore services
            <ArrowUpRight
              size={15}
              aria-hidden="true"
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
