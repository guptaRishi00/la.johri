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

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-700 px-4 sm:px-6 md:px-12 py-4 md:py-8 flex justify-between items-center ${
          isScrolled || isMenuOpen
            ? "bg-[#021a14]/95 backdrop-blur-xl py-4 md:py-6 shadow-lg"
            : "bg-transparent"
        }`}
      >
        {/* Left Side: Burger & Desktop Links */}
        <div className="flex items-center gap-6 md:gap-16 z-50">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="group flex flex-col gap-1.5 md:gap-2 relative focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span
              className={`h-px bg-[#c2a35d] transition-all duration-500 ${
                isMenuOpen
                  ? "w-6 md:w-8 rotate-45 translate-y-2 md:translate-y-2.5"
                  : "w-6 md:w-8"
              }`}
            />
            <span
              className={`h-px bg-[#c2a35d] transition-all duration-500 ${
                isMenuOpen
                  ? "w-6 md:w-8 -rotate-45"
                  : "w-4 md:w-5 group-hover:w-6 md:group-hover:w-8"
              }`}
            />
          </button>

          <div className="hidden lg:flex gap-12 text-[10px] uppercase tracking-[0.5em] text-stone-400 font-light">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:text-[#c2a35d] transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Center: Logo (Scales responsively) */}
        <div className="absolute left-1/2 -translate-x-1/2 text-center transition-all duration-500 z-40 w-full pointer-events-none">
          {/* pointer-events-none ensures the absolute div doesn't block clicks on sides, 
              but we re-enable pointer-events-auto on the Link itself */}
          <Link href="/" className="pointer-events-auto inline-block">
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-serif tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.5em] text-[#c2a35d] font-light cursor-pointer whitespace-nowrap">
              LA.JOHRI
            </h1>
          </Link>
        </div>

        {/* Right Side: Concierge & CTA (Desktop Only - hidden on mobile to save space) */}
        <div className="hidden lg:flex items-center gap-4 md:gap-12 z-50">
          <Link
            href="/calculator"
            className="hidden xl:block text-[10px] uppercase tracking-[0.4em] text-emerald-100 hover:text-[#c2a35d] transition-colors"
          >
            Gemstone Calculator
          </Link>

          <Link
            href="/enquire"
            className="px-6 md:px-10 py-2.5 md:py-3 bg-[#c2a35d]/10 hover:bg-[#c2a35d] text-[#c2a35d] hover:text-[#021a14] border border-[#c2a35d]/30 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] transition-all duration-700 font-medium whitespace-nowrap"
          >
            Enquire
          </Link>
        </div>

        {/* Mobile Right Spacer (Optional: keeps logo centered if you want symmetry) */}
        <div className="lg:hidden w-6 md:w-8" />
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-[#021a14] z-40 flex flex-col justify-center items-center px-6 md:px-12 h-screen overflow-hidden"
          >
            <div className="flex flex-col gap-8 md:gap-10 text-center items-center w-full max-w-lg">
              {/* Standard Nav Links */}
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-3xl md:text-5xl font-serif text-[#c2a35d] tracking-widest uppercase hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              {/* Added: Gemstone Calculator for Mobile (Since it's hidden on Navbar) */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <Link
                  href="/calculator"
                  onClick={() => setIsMenuOpen(false)}
                  className="text-xl md:text-3xl font-serif text-[#c2a35d]/80 tracking-widest uppercase hover:text-white transition-colors"
                >
                  Calculator
                </Link>
              </motion.div>

              <div className="flex flex-col items-center gap-6 mt-4">
                <Link
                  href="/enquire"
                  onClick={() => setIsMenuOpen(false)}
                  className="px-8 py-3 bg-[#c2a35d]/10 hover:bg-[#c2a35d] text-[#c2a35d] hover:text-[#021a14] border border-[#c2a35d]/30 text-xs uppercase tracking-[0.4em] transition-all duration-700 font-medium whitespace-nowrap"
                >
                  Contact Us
                </Link>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                className="mt-8 pt-8 border-t border-[#c2a35d]/20 flex flex-col gap-3 text-[10px] uppercase tracking-[0.3em] text-stone-500 w-full"
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
