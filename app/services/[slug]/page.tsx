import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Navbar from "@/app/components/Navbar";
import ServiceIcon from "@/app/components/ServiceIcon";
import { services, getService } from "@/app/lib/data";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  return {
    title: service ? `${service.title} | Wyvernstack` : "Service | Wyvernstack",
    description: service?.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) notFound();

  return (
    <main className="min-h-screen overflow-hidden bg-mesh font-sans">
      <Navbar />

      <section className="mx-auto max-w-7xl px-6 pb-16 pt-36">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-[#C81C33]"
        >
          <ArrowLeft size={16} /> All Services
        </Link>

        <div className="mt-10 grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#C81C33] text-white shadow-lg shadow-rose-900/20">
              <ServiceIcon type={service.icon} size={28} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C81C33]">
              {service.eyebrow}
            </span>
            <h1 className="mt-2 text-5xl font-extrabold tracking-tight text-[#0B0F19] sm:text-6xl">
              {service.title}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-600">
              {service.longDescription}
            </p>
          </div>

          <div className="rounded-3xl bg-[#0B0F19] p-7 text-white shadow-xl lg:col-span-4">
            <p className="text-xs font-bold uppercase tracking-widest text-rose-400">
              What&apos;s included
            </p>
            <ul className="mt-5 space-y-4">
              {service.highlights.map((item) => (
                <li key={item} className="flex gap-3 text-sm leading-relaxed text-slate-200">
                  <Check className="mt-0.5 shrink-0 text-rose-400" size={17} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="border-y border-gray-100 bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C81C33]">
            Our Approach
          </span>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#0B0F19]">
            From idea to production.
          </h2>

          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {service.process.map((step, index) => (
              <div key={step} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm">
                <span className="text-sm font-bold text-[#C81C33]">
                  0{index + 1}
                </span>
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-700">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="rounded-3xl border border-rose-100 bg-gradient-to-b from-white to-rose-50/30 p-8 shadow-sm sm:p-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C81C33]">
            Ready to build?
          </span>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B0F19]">
            Let&apos;s turn this capability into your advantage.
          </h2>
          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-2xl bg-[#C81C33] px-7 py-3.5 font-medium text-white shadow-lg shadow-rose-900/15 transition-all hover:bg-[#A11327]"
          >
            Start a Project <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
