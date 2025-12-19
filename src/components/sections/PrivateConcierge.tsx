"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { BRAND_IMAGES } from "@/constants/images";

export const PrivateConcierge = () => {
  return (
    <section className="bg-[#fdfcf9] py-24 md:py-36 lg:py-48 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 lg:gap-24 items-center">
        {/* Image Section - Column 7 on large screens */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:col-span-7"
        >
          <div className="relative group overflow-hidden">
            <img
              src={BRAND_IMAGES.SALON_AMBIANCE}
              className="w-full aspect-[4/3] md:aspect-video object-cover brightness-95 transition-transform duration-[2s] group-hover:scale-105"
              alt="The Private Salon"
            />
            {/* Subtle overlay for luxury feel */}
            <div className="absolute inset-0 bg-[#021a14]/5 pointer-events-none" />
          </div>
        </motion.div>

        {/* Text Content - Column 5 on large screens */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col items-start"
        >
          <span className="text-[#021a14] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px] mb-6 md:mb-8 block font-semibold">
            Exclusivity
          </span>

          <h3 className="text-4xl md:text-6xl lg:text-7xl font-serif text-[#021a14] mb-8 md:mb-12 font-light leading-[1.1]">
            Private <br className="hidden sm:block" /> Engagement
          </h3>

          <p className="text-stone-600 font-light leading-relaxed md:leading-loose text-sm md:text-base mb-8 md:mb-12 max-w-md">
            Experience the collection in the comfort of our private salons. By
            appointment only, our advisors will guide you through the history
            and provenance of each piece.
          </p>

          <button className="flex items-center gap-4 text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.5em] text-[#021a14] group">
            <span className="border-b border-[#021a14]/20 pb-2 group-hover:border-[#c2a35d] transition-all duration-500 whitespace-nowrap">
              Book Private Viewing
            </span>
            <div className="p-2 border border-[#021a14]/10 rounded-full group-hover:border-[#c2a35d] group-hover:bg-[#c2a35d] group-hover:text-white transition-all duration-500">
              <ArrowUpRight
                size={14}
                className="transition-transform duration-500 group-hover:rotate-45"
              />
            </div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
