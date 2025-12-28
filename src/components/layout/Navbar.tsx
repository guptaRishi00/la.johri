"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 px-6 md:px-12 py-6 md:py-8 flex justify-between items-center ${
          isScrolled || isMenuOpen
            ? "bg-[#021a14]/95 backdrop-blur-xl py-4 md:py-6"
            : "bg-transparent"
        }`}
      >
        {/* Left Side: Burger & Desktop Links */}
        <div className="flex items-center gap-6 md:gap-16">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex flex-col gap-2 relative z-60"
          >
            <span
              className={`h-px bg-[#c2a35d] transition-all duration-500 ${
                isMenuOpen ? "w-8 rotate-45 translate-y-2.5" : "w-8"
              }`}
            />
            <span
              className={`h-px bg-[#c2a35d] transition-all duration-500 ${
                isMenuOpen ? "w-8 -rotate-45" : "w-5 group-hover:w-8"
              }`}
            />
          </button>

          <div className="hidden lg:flex gap-12 text-[10px] uppercase tracking-[0.5em] text-stone-400 font-light">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#c2a35d] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Center: Logo (Scales responsively) */}

        <div className="absolute left-1/2 -translate-x-1/2 text-center transition-all duration-500">
          <Link href="/">
            {" "}
            {/* Add this Link wrapper */}
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif tracking-[0.3em] md:tracking-[0.5em] text-[#c2a35d] font-light cursor-pointer">
              LA.JOHRI
            </h1>
          </Link>
        </div>

        {/* Right Side: Concierge & CTA */}
        <div className="hidden lg:flex items-center gap-4 md:gap-12">
          <div className="hidden xl:block text-[9px] uppercase tracking-[0.4em] text-emerald-100/40">
            Private Concierge Open
          </div>
          <Link
            href="/enquire"
            className="px-6 md:px-10 py-2.5 md:py-3 bg-[#c2a35d]/10 hover:bg-[#c2a35d] text-[#c2a35d] hover:text-[#021a14] border border-[#c2a35d]/30 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all duration-700 font-medium whitespace-nowrap"
          >
            Enquire
          </Link>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#021a14] z-40 flex flex-col justify-center items-center px-12"
          >
            <div className="flex flex-col gap-10 text-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-3xl md:text-5xl font-serif text-[#c2a35d] tracking-widest uppercase"
                >
                  {link.name}
                </motion.a>
              ))}

              <div className="flex items-center justify-center gap-4 md:gap-12">
                <Link
                  href="/enquire"
                  className="px-6 md:px-10 py-2.5 md:py-3 bg-[#c2a35d]/10 hover:bg-[#c2a35d] text-[#c2a35d] hover:text-[#021a14] border border-[#c2a35d]/30 text-[9px] md:text-[10px] uppercase tracking-[0.4em] transition-all duration-700 font-medium whitespace-nowrap"
                >
                  Contact
                </Link>
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-12 pt-12 border-t border-[#c2a35d]/20 flex flex-col gap-4 text-[10px] uppercase tracking-[0.4em] text-stone-500"
              >
                <p>Instagram — Heritage</p>
                <p>Location — Jaipur, India</p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
