"use client";
import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { BRAND_IMAGES } from "@/constants/images";

export const Craftsmanship = () => {
  return (
    <section className="py-24 md:py-36 lg:py-48 bg-[#021a14] relative px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Visual Content Section */}
        <div className="relative order-2 lg:order-1">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="aspect-[4/5] sm:aspect-square lg:aspect-[4/5] overflow-hidden rounded-sm"
          >
            <img
              src={BRAND_IMAGES.CRAFT_HANDS}
              className="w-full h-full object-cover brightness-75 transition-transform duration-[3s] hover:scale-110"
              alt="The Artisan's Touch"
            />
          </motion.div>

          {/* Decorative Border Box - Adjusted for mobile */}
          <div className="absolute -bottom-6 -left-6 md:-bottom-12 md:-left-12 w-32 h-32 md:w-72 md:h-72 border border-[#c2a35d]/20 z-10 pointer-events-none" />
        </div>

        {/* Text Content Section */}
        <div className="space-y-8 md:space-y-12 order-1 lg:order-2">
          <div className="space-y-4 md:space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="text-[#c2a35d] uppercase tracking-[0.4em] md:tracking-[0.6em] text-[9px] md:text-[10px] block font-medium"
            >
              The Human Soul
            </motion.span>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider md:tracking-widest font-serif text-stone-100 leading-tight font-light"
            >
              The Atelier
            </motion.h3>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-emerald-100/40 font-light leading-relaxed md:leading-loose text-sm md:text-base max-w-md"
          >
            Our workshop in Benares is a sanctuary of silence. Here, the
            clinking of gold is the only language spoken. Every la.johri piece
            is born from a dialogue between the master karigar and the living
            metal. We do not manufacture; we manifest.
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="flex items-center gap-4 group"
          >
            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#c2a35d]/20 flex items-center justify-center group-hover:bg-[#c2a35d] transition-all duration-700">
              <Play
                size={14}
                fill="currentColor"
                className="group-hover:text-[#021a14] text-[#c2a35d] transition-colors"
              />
            </div>
            <span className="text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] text-[#c2a35d]">
              Witness the Process
            </span>
          </motion.button>
        </div>
      </div>
    </section>
  );
};
