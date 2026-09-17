"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Smartphone,
  Boxes,
  Layers3,
} from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    label: "Digital Products",
    description:
      "Websites, applications and digital platforms designed around your business.",
    features: ["Web Apps", "SaaS", "Portals", "E-commerce"],
    href: "/services/web-development",
    icon: Code2,
  },
  {
    number: "02",
    title: "Mobile Development",
    label: "Connected Experiences",
    description:
      "Fast, intuitive mobile experiences built for the way people use technology.",
    features: ["iOS", "Android", "Cross-platform", "API"],
    href: "/services/mobile-development",
    icon: Smartphone,
  },
  {
    number: "03",
    title: "ERP Solutions",
    label: "Business Systems",
    description:
      "Connected systems that simplify operations and bring your business together.",
    features: ["Operations", "Inventory", "Workflows", "ERP"],
    href: "/services/erp-solutions",
    icon: Boxes,
  },
  {
    number: "04",
    title: "SaaS Development",
    label: "Software as a Service",
    description:
      "Scalable SaaS platforms designed to turn ideas into powerful, subscription-based products.",
    features: ["Web Apps", "Cloud", "Subscriptions", "APIs"],
    href: "/services/saas-development",
    icon: Layers3,
  },
];

export default function Services() {
  return (
    <section className="relative overflow-hidden bg-[#08090D] py-20 text-white sm:py-24 lg:py-28">
      {/* Subtle grid */}
      <div
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
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C81C33]/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="grid gap-8 border-b border-white/[0.08] pb-10 md:grid-cols-[1fr_1fr] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C81C33]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C81C33]">
                Services
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.055em] sm:text-5xl lg:text-[4.5rem] lg:leading-[0.92]">
              Technology
              <br />
              <span className="text-white/30">that moves.</span>
            </h2>
          </div>

          <div className="md:flex md:justify-end">
            <p className="max-w-md text-sm leading-7 text-white/40 sm:text-base">
              From customer-facing experiences to the systems behind them, we
              design and engineer technology that helps ambitious businesses
              move forward.
            </p>
          </div>
        </div>

        {/* Services */}
        <div className="mt-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.05,
                }}
              >
                <div
                  // href={service.href}
                  className="group relative grid gap-5 border-b border-white/[0.08] py-7 transition-all duration-300 md:grid-cols-[70px_1.1fr_1.2fr_auto] md:items-center md:gap-8 lg:py-8"
                >
                  {/* Number */}
                  <div className="font-mono text-[11px] text-white/25 transition-colors group-hover:text-[#C81C33]">
                    {service.number}
                  </div>

                  {/* Name */}
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-white transition-all duration-300 group-hover:border-[#C81C33] group-hover:bg-[#C81C33]">
                      <Icon size={17} strokeWidth={1.5} />
                    </div>

                    <div>
                      <span className="mb-1 block text-[9px] font-medium uppercase tracking-[0.18em] text-[#C81C33]">
                        {service.label}
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
                      {service.features.map((feature) => (
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
                  {/* <div className="absolute right-0 top-7 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white/30 transition-all duration-300 group-hover:border-[#C81C33] group-hover:bg-[#C81C33] group-hover:text-white md:static">
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:rotate-45"
                    />
                  </div> */}

                  {/* Hover line */}
                  <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C81C33] transition-all duration-500 group-hover:w-full" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-4 border-t border-white/[0.08] pt-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/25">
            Design · Engineering · Intelligence
          </p>

          <Link
            href="/services"
            className="group flex items-center gap-2 text-sm font-medium text-white/50 transition-colors hover:text-white"
          >
            Explore services

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}