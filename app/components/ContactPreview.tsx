"use client";

import { useActionState } from "react";
import {
  Loader2,
  Send,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { sendEmail } from "@/app/actions/sendEmail";

export default function ContactPreview() {
  const [state, formAction, isPending] = useActionState(
    sendEmail,
    null
  );

  return (
    <section className="relative overflow-hidden bg-[#F4F2ED] py-20 text-[#0B0F19] sm:py-24 lg:py-28">
      {/* Background detail */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[500px] w-[500px] rounded-full bg-[#C81C33]/[0.035] blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        {/* Header */}
        <div className="mb-14 flex items-center justify-between border-b border-black/10 pb-5">
          <div className="flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#C81C33]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#C81C33]">
              Start a Conversation
            </span>
          </div>

          <span className="hidden font-mono text-[9px] uppercase tracking-[0.2em] text-black/20 sm:block">
            WYVERNSTACK / CONTACT
          </span>
        </div>

        {/* Main */}
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* Left */}
          <div>
            <h2 className="max-w-xl text-[3.5rem] font-semibold leading-[0.9] tracking-[-0.065em] sm:text-6xl lg:text-[5.8rem]">
              Let&apos;s build
              <br />
              <span className="text-black/25">something</span>
              <br />
              <span className="text-[#C81C33]">meaningful.</span>
            </h2>

            <p className="mt-8 max-w-md text-sm leading-7 text-black/45 sm:text-base">
              Have an idea, a business challenge or a product you want to bring
              to life? Tell us what you&apos;re working on and we&apos;ll take it
              from there.
            </p>

            <div className="mt-10 h-px w-12 bg-[#C81C33]" />

            <p className="mt-5 text-[10px] uppercase tracking-[0.2em] text-black/25">
              Digital Products · Business Systems · Intelligent Technology
            </p>
          </div>

          {/* Form */}
          <div className="rounded-[26px] border border-black/[0.08] bg-white p-6 shadow-[0_20px_70px_rgba(11,15,25,0.06)] sm:p-8">
            <div className="mb-7 flex items-center justify-between">
              <div>
                <p className="text-sm font-semibold">
                  Project Brief
                </p>

                <p className="mt-1 text-xs text-black/35">
                  Tell us what you have in mind.
                </p>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10">
                <ArrowUpRight size={15} className="text-black/40" />
              </div>
            </div>

            <form action={formAction}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="preview-name"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-black/40"
                  >
                    Your Name
                  </label>

                  <input
                    id="preview-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Alex Morgan"
                    className="w-full rounded-xl border border-black/[0.08] bg-[#F7F7F5] px-4 py-3.5 text-sm text-[#0B0F19] placeholder:text-black/20 outline-none transition focus:border-[#C81C33] focus:bg-white focus:ring-2 focus:ring-[#C81C33]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preview-email"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-black/40"
                  >
                    Work Email
                  </label>

                  <input
                    id="preview-email"
                    name="email"
                    type="email"
                    required
                    placeholder="alex@company.com"
                    className="w-full rounded-xl border border-black/[0.08] bg-[#F7F7F5] px-4 py-3.5 text-sm text-[#0B0F19] placeholder:text-black/20 outline-none transition focus:border-[#C81C33] focus:bg-white focus:ring-2 focus:ring-[#C81C33]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preview-company"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-black/40"
                  >
                    Company
                  </label>

                  <input
                    id="preview-company"
                    name="company"
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full rounded-xl border border-black/[0.08] bg-[#F7F7F5] px-4 py-3.5 text-sm text-[#0B0F19] placeholder:text-black/20 outline-none transition focus:border-[#C81C33] focus:bg-white focus:ring-2 focus:ring-[#C81C33]/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="preview-projectType"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-black/40"
                  >
                    Project Type
                  </label>

                  <select
                    id="preview-projectType"
                    name="projectType"
                    defaultValue=""
                    className="w-full rounded-xl border border-black/[0.08] bg-[#F7F7F5] px-4 py-3.5 text-sm text-[#0B0F19] outline-none transition focus:border-[#C81C33] focus:bg-white focus:ring-2 focus:ring-[#C81C33]/10"
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

                    <option value="ERP Solutions">
                      ERP Solutions
                    </option>

                    <option value="AI Integration">
                      AI Integration
                    </option>

                    <option value="Product Design">
                      Product Design
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div className="sm:col-span-2">
                  <label
                    htmlFor="preview-details"
                    className="mb-2 block text-[10px] font-medium uppercase tracking-[0.15em] text-black/40"
                  >
                    About Your Project
                  </label>

                  <textarea
                    id="preview-details"
                    name="details"
                    required
                    rows={5}
                    placeholder="Tell us briefly about your project..."
                    className="w-full resize-none rounded-xl border border-black/[0.08] bg-[#F7F7F5] px-4 py-3.5 text-sm leading-6 text-[#0B0F19] placeholder:text-black/20 outline-none transition focus:border-[#C81C33] focus:bg-white focus:ring-2 focus:ring-[#C81C33]/10"
                  />
                </div>
              </div>

              {state?.message && (
                <div
                  className={`mt-5 flex items-start gap-3 rounded-xl border p-4 text-xs font-medium ${
                    state.success
                      ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                      : "border-rose-200 bg-rose-50 text-rose-700"
                  }`}
                >
                  {state.success && (
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                  )}

                  <span>{state.message}</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="group mt-5 flex w-full items-center justify-center gap-3 rounded-xl bg-[#0B0F19] px-6 py-4 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#C81C33] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isPending ? (
                  <>
                    Sending...
                    <Loader2 size={16} className="animate-spin" />
                  </>
                ) : (
                  <>
                    Send Project Brief
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Footer line */}
        <div className="mt-14 border-t border-black/10 pt-6">
          <p className="text-[10px] uppercase tracking-[0.18em] text-black/20">
            WYVERNSTACK — Digital Technology Studio
          </p>
        </div>
      </div>
    </section>
  );
}