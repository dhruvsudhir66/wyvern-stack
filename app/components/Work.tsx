"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
} from "lucide-react";

import { projects, featuredProjects } from "@/app/lib/data";

export default function Work() {
  return (
    <section className="relative overflow-hidden bg-[#F4F2ED] py-20 text-[#0B0F19] sm:py-24 lg:py-28">
      {/* subtle decorative circle */}
      <div className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full border border-black/[0.04]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 grid gap-8 border-b border-black/10 pb-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C81C33]" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#C81C33]">
                Selected Work
              </span>
            </div>

            <h2 className="text-4xl font-semibold tracking-[-0.06em] sm:text-5xl lg:text-[5rem] lg:leading-[0.9]">
              Built for the
              <br />
              <span className="text-black/30">real world.</span>
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-black/45">
            A selection of digital products, experiences and business systems
            we've brought to life.
          </p>
        </div>

        {/* Projects */}
        <div className="grid gap-6 md:grid-cols-2">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.06,
              }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Link href={`/work/${project.slug}`} className="block">
                <div
                  className={`relative aspect-[16/10] overflow-hidden rounded-[24px] border border-black/[0.07] ${
                    project.image ? "bg-[#e9e5df]" : project.bg
                  }`}
                >
                  {project.image ? (
                    <>
                      <Image
                        src={project.image}
                        alt={`${project.title} website preview`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent" />
                    </>
                  ) : (
                    <div className={`absolute inset-0 ${project.bg}`} />
                  )}

                  <div className="absolute inset-x-5 top-5 flex items-center justify-between">
                    <span className="rounded-full bg-black/20 px-3 py-1.5 text-[10px] font-medium text-white backdrop-blur-md">
                      {project.category}
                    </span>

                    <span className="font-mono text-[9px] text-white/50">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                    <div>
                      <span className="mb-1 block text-[9px] uppercase tracking-[0.2em] text-white/60">
                        {project.metrics}
                      </span>

                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-white sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#0B0F19] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between px-1 pt-4">
                  <span className="text-[10px] uppercase tracking-[0.18em] text-black/30">
                    Case Study
                  </span>

                  <span className="text-[10px] text-black/25 transition-colors group-hover:text-[#C81C33]">
                    View project
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex justify-end">
          <Link
            href="/work"
            className="group flex items-center gap-2 text-sm font-semibold text-[#0B0F19]"
          >
            View all work

            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}