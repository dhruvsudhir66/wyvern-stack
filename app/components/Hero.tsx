"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Cpu,
  Activity,
  Network,
  Zap,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-[#F8FAFC]">
      {/* =====================================================
          BACKGROUND
      ===================================================== */}

      <div className="absolute inset-0 -z-20 bg-grid-pattern" />

      {/* Red ambient glow */}
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.16, 0.24, 0.16],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -right-40 top-20 -z-10 h-[600px] w-[600px] rounded-full bg-[#C81C33]/15 blur-[120px]"
      />

      <motion.div
        animate={{
          scale: [1.08, 1, 1.08],
          opacity: [0.08, 0.14, 0.08],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute -left-60 bottom-0 -z-10 h-[500px] w-[500px] rounded-full bg-rose-300/20 blur-[120px]"
      />

      {/* =====================================================
          HERO CONTENT
      ===================================================== */}

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-28 sm:pb-28 sm:pt-36">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-8">
          {/* =================================================
              LEFT — CONTENT
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease,
            }}
            className="relative z-20 lg:col-span-7"
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease,
              }}
              className="mb-7 flex items-center gap-3"
            >
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full border border-[#C81C33]/30 bg-white shadow-sm">
                <Sparkles
                  size={14}
                  className="text-[#C81C33]"
                />

                <span className="absolute inset-0 animate-ping rounded-full border border-[#C81C33]/20" />
              </div>

              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#C81C33]">
                    WYVERNSTACK
                  </p>

                  <p className="mt-0.5 text-[9px] uppercase tracking-[0.18em] text-slate-400">
                    Technology · Design · Innovation
                </p>
              </div>
            </motion.div>

            {/* Main headline */}
            <h1 className="max-w-4xl text-[3.5rem] font-extrabold leading-[0.95] tracking-[-0.055em] text-[#0B0F19] sm:text-6xl md:text-7xl lg:text-[5.8rem]">
              We build what
              <br />

              <span className="relative inline-block">
                comes next.

                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "72%" }}
                  transition={{
                    duration: 0.9,
                    delay: 0.8,
                    ease,
                  }}
                  className="absolute -bottom-2 left-0 h-[3px] bg-[#C81C33] sm:-bottom-3"
                />
              </span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.35,
                ease,
              }}
              className="mt-8 max-w-xl text-base leading-7 text-slate-500 sm:text-lg"
            >
              Wyvernstack is a digital technology studio building products, platforms, and experiences that move businesses forward.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.45,
                ease,
              }}
              className="mt-9 flex flex-wrap items-center gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#C81C33] px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-[#C81C33]/20 transition-all duration-300 hover:-translate-y-1 hover:bg-[#A11327]"
              >
                Start a Project

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>

              <Link
                href="/work"
                className="group inline-flex items-center gap-3 rounded-xl border border-slate-200 bg-white/80 px-6 py-3.5 text-sm font-semibold text-[#0B0F19] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:bg-white"
              >
                Explore Work

                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>
            </motion.div>

            {/* Technical metadata */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                duration: 0.8,
                delay: 0.65,
              }}
              className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-slate-200 pt-5"
            >
              <MetaItem
                label="Discovery"
                value="Strategy & Product"
              />

              <MetaItem
                label="Creation"
                value="Design & Engineering"
              />

              <MetaItem
                label="Evolution"
                value="Scale & Automation"
              />
            </motion.div>
          </motion.div>

          {/* =================================================
              RIGHT — AI SYSTEM
          ================================================= */}

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease,
            }}
            className="relative lg:col-span-5"
          >
            <div className="relative mx-auto aspect-square max-w-[530px]">
              {/* Outer technical frame */}
              <div className="absolute inset-[5%] rounded-full border border-slate-300/60" />

              <div className="absolute inset-[12%] rounded-full border border-dashed border-[#C81C33]/20" />

              <div className="absolute inset-[20%] rounded-full border border-slate-200/80" />

              {/* Rotating ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 24,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[8%] rounded-full border border-[#C81C33]/20 border-t-[#C81C33]/70"
              />

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[16%] rounded-full border border-dashed border-slate-300/70 border-r-[#C81C33]/50"
              />

              {/* Crosshair lines */}
              <div className="absolute left-1/2 top-[4%] h-[92%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-slate-300/50 to-transparent" />

              <div className="absolute left-[4%] top-1/2 h-px w-[92%] -translate-y-1/2 bg-gradient-to-r from-transparent via-slate-300/50 to-transparent" />

              {/* =================================================
                  CENTRAL AI CORE
              ================================================= */}

              <motion.div
                animate={{
                  scale: [1, 1.04, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute left-1/2 top-1/2 flex h-44 w-44 -translate-x-1/2 -translate-y-1/2 items-center justify-center sm:h-52 sm:w-52"
              >
                {/* Glow */}
                <div className="absolute inset-0 rounded-full bg-[#C81C33]/15 blur-3xl" />

                {/* Core rings */}
                <div className="absolute inset-5 rounded-full border border-[#C81C33]/30 bg-white/70 shadow-2xl backdrop-blur-xl" />

                <div className="absolute inset-10 rounded-full border border-[#C81C33]/40 bg-[#0B0F19]" />

                {/* Core */}
                <motion.div
                  animate={{
                    boxShadow: [
                      "0 0 20px rgba(200,28,51,.25)",
                      "0 0 55px rgba(200,28,51,.5)",
                      "0 0 20px rgba(200,28,51,.25)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="relative flex h-16 w-16 items-center justify-center rounded-full bg-[#C81C33]"
                >
                  <Cpu
                    size={28}
                    className="text-white"
                  />

                  <span className="absolute inset-[-7px] rounded-full border border-[#C81C33]/50" />
                </motion.div>
              </motion.div>

              {/* =================================================
                  ORBITING NODES
              ================================================= */}

              <OrbitNode
                className="left-[12%] top-[24%]"
                icon={<Network size={15} />}
                label="NETWORK"
              />

              <OrbitNode
                className="right-[9%] top-[31%]"
                icon={<Zap size={15} />}
                label="AUTOMATION"
              />

              <OrbitNode
                className="bottom-[18%] left-[17%]"
                icon={<Activity size={15} />}
                label="REALTIME"
              />

              {/* =================================================
                  TOP TELEMETRY
              ================================================= */}

              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute right-[3%] top-[5%] rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-lg backdrop-blur-md"
              >
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#C81C33]" />

                  <span className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
                    System Status
                  </span>
                </div>

                <p className="mt-1 text-xs font-bold text-[#0B0F19]">
                  Operational
                </p>
              </motion.div>

              {/* =================================================
                  BOTTOM TELEMETRY
              ================================================= */}

              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute bottom-[4%] right-[4%] w-40 rounded-xl border border-slate-200 bg-[#0B0F19]/95 p-4 text-white shadow-2xl"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[8px] uppercase tracking-[0.18em] text-slate-500">
                    Processing
                  </span>

                  <Activity
                    size={13}
                    className="text-[#C81C33]"
                  />
                </div>

                <div className="mt-3 flex h-8 items-end gap-1">
                  {[25, 40, 28, 65, 48, 72, 55, 85, 68, 92].map(
                    (height, index) => (
                      <motion.span
                        key={index}
                        animate={{
                          height: [
                            `${height}%`,
                            `${Math.max(20, height - 20)}%`,
                            `${height}%`,
                          ],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: index * 0.08,
                        }}
                        className={`flex-1 rounded-sm ${
                          index === 9
                            ? "bg-[#C81C33]"
                            : "bg-white/20"
                        }`}
                      />
                    )
                  )}
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <span className="text-[9px] text-slate-500">
                    AI CORE
                  </span>

                  <span className="text-[9px] font-bold text-[#C81C33]">
                    98.4%
                  </span>
                </div>
              </motion.div>

              {/* =================================================
                  CORNER MARKERS
              ================================================= */}

              <div className="absolute left-[7%] top-[9%] h-5 w-5 border-l border-t border-[#C81C33]/50" />

              <div className="absolute right-[7%] bottom-[9%] h-5 w-5 border-b border-r border-[#C81C33]/50" />

              <div className="absolute bottom-[18%] left-[4%] text-[8px] font-mono tracking-widest text-slate-400">
                12.4831° / 77.5900°
              </div>

              <div className="absolute right-[6%] top-[17%] text-[8px] font-mono tracking-widest text-slate-400">
                NODE_01
              </div>
            </div>
          </motion.div>
        </div>

        {/* =====================================================
            BOTTOM SYSTEM BAR
        ===================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.7,
            delay: 0.8,
            ease,
          }}
          className="mt-16 overflow-hidden rounded-2xl border border-slate-200 bg-white/70 shadow-sm backdrop-blur-md"
        >
          <div className="grid divide-y divide-slate-200 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            <SystemBar
              label="WEB ENGINEERING"
              value="HIGH PERFORMANCE"
              icon={<Zap size={15} />}
            />

            <SystemBar
              label="AI SYSTEMS"
              value="INTELLIGENCE FIRST"
              icon={<Cpu size={15} />}
            />

            <SystemBar
              label="EXPERIENCE"
              value="HUMAN CENTRIC"
              icon={<Sparkles size={15} />}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================================================
   META ITEM
============================================================ */

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div>
      <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-xs font-semibold text-[#0B0F19]">
        {value}
      </p>
    </div>
  );
}

/* ============================================================
   ORBIT NODE
============================================================ */

function OrbitNode({
  className,
  icon,
  label,
}: {
  className: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <motion.div
      animate={{
        y: [0, -7, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute z-20 ${className}`}
    >
      <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/85 px-2.5 py-2 shadow-lg backdrop-blur-md">
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-rose-50 text-[#C81C33]">
          {icon}
        </div>

        <span className="text-[7px] font-bold tracking-[0.14em] text-slate-500">
          {label}
        </span>
      </div>
    </motion.div>
  );
}

/* ============================================================
   SYSTEM BAR
============================================================ */

function SystemBar({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 px-5 py-4">
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-rose-50 text-[#C81C33]">
        {icon}
      </div>

      <div>
        <p className="text-[8px] font-bold uppercase tracking-[0.18em] text-slate-400">
          {label}
        </p>

        <p className="mt-0.5 text-[10px] font-bold tracking-wide text-[#0B0F19]">
          {value}
        </p>
      </div>

      <div className="ml-auto h-1.5 w-1.5 rounded-full bg-[#C81C33]" />
    </div>
  );
}