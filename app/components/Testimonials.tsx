"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="border-y border-gray-100 bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="mb-10 text-3xl font-medium leading-tight tracking-tight text-slate-800 md:text-5xl">
            &quot;They didn&apos;t just build our platform; they integrated AI
            workflows that cut our processing time in half. The code quality is
            exceptional.&quot;
          </p>
          <div className="flex flex-col items-center gap-2">
            <div className="h-14 w-14 rounded-full bg-gray-300" />
            <h4 className="font-bold">Sarah Jenkins</h4>
            <p className="text-sm text-gray-500">CTO, DataScale Inc.</p>
          </div>
          <Link
            href="/testimonials"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#C81C33]"
          >
            Read more testimonials <ArrowRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
