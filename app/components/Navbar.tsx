"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  // { label: "Testimonials", href: "/testimonials" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  // Close mobile menu whenever the route changes
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="fixed left-0 top-0 z-50 w-full border-b border-rose-100/60 bg-white/80 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-10 flex items-center"
            aria-label="WyvernStack Home"
          >
            <Image
              src="/logo.png"
              alt="WyvernStack"
              width={100}
              height={42}
              priority
              className="h-auto w-[140px] object-contain sm:w-[200px]"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {links.map((link) => {
              const active = isActive(link.href);

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative rounded-full px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-500 transition-colors duration-200 hover:text-[#C81C33]"
                >
                  {active && (
                    <motion.span
                      layoutId="navbar-active-pill"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                      className="absolute inset-0 rounded-full border border-rose-100 bg-rose-50/80"
                    />
                  )}

                  {active && (
                    <motion.span
                      layoutId="navbar-active-glow"
                      className="absolute inset-0 rounded-full bg-rose-100/30 blur-md"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 32,
                      }}
                    />
                  )}

                  <span className="relative z-10 flex items-center gap-2">
                    {active && (
                      <motion.span
                        layoutId="navbar-active-dot"
                        className="h-1.5 w-1.5 rounded-full bg-[#C81C33]"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}

                    {link.label}
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="group hidden items-center gap-2 rounded-xl bg-[#C81C33] px-5 py-3 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-rose-900/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#A11327] hover:shadow-xl md:flex"
          >
            Start a Project
            <ArrowRight
              size={14}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            className="relative z-[60] flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white/80 text-[#0B0F19] transition-all duration-200 hover:border-rose-200 hover:text-[#C81C33] md:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={21} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90, scale: 0.7 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: -90, scale: 0.7 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={21} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: 0.35,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="overflow-hidden border-t border-rose-100/60 bg-white/95 backdrop-blur-xl md:hidden"
            >
              <div className="mx-auto max-w-7xl px-6 pb-7 pt-4">
                <div className="space-y-1">
                  {links.map((link, index) => {
                    const active = isActive(link.href);

                    return (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: -15 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.35,
                          delay: index * 0.05,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      >
                        <Link
                          href={link.href}
                          className={`group flex items-center justify-between rounded-xl px-4 py-3.5 text-xs font-bold uppercase tracking-[0.16em] transition-all duration-200 ${
                            active
                              ? "bg-rose-50 text-[#C81C33]"
                              : "text-slate-500 hover:bg-slate-50 hover:text-[#C81C33]"
                          }`}
                        >
                          <span className="flex items-center gap-3">
                            <motion.span
                              animate={{
                                width: active ? 6 : 4,
                                opacity: active ? 1 : 0.35,
                              }}
                              className="h-1.5 rounded-full bg-[#C81C33]"
                            />

                            {link.label}
                          </span>

                          <ArrowRight
                            size={15}
                            className={`transition-all duration-200 ${
                              active
                                ? "translate-x-0 text-[#C81C33]"
                                : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          />
                        </Link>
                      </motion.div>
                    );
                  })}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: links.length * 0.05,
                  }}
                  className="mt-4 border-t border-slate-100 pt-4"
                >
                  <Link
                    href="/contact"
                    className="group flex w-full items-center justify-center gap-2 rounded-xl bg-[#C81C33] px-5 py-3.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white shadow-lg shadow-rose-900/10 transition-all duration-300 hover:bg-[#A11327]"
                  >
                    Start a Project
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.button
            type="button"
            aria-label="Close menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setMobileOpen(false)}
            className="fixed inset-0 z-40 bg-[#0B0F19]/10 backdrop-blur-[2px] md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}