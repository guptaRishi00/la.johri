"use client";
import React from "react";
import { motion } from "framer-motion";
import { Compass } from "lucide-react";
import { BRAND_IMAGES } from "@/constants/images";

export const Manifesto = () => {
  return (
    <section className="py-32 md:py-48 lg:py-60 bg-[#021a14] text-center px-6 md:px-12 relative overflow-hidden">
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <img
          src={BRAND_IMAGES.GOLD_TEXTURE}
          className="w-full h-full object-cover mix-blend-overlay"
          alt=""
        />
      </div>

      {/* Large Background Watermark - Adjusted for Mobile Scale */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-[0.03] pointer-events-none flex items-center justify-center">
        <h2 className="text-[25vw] md:text-[30vw] font-serif text-emerald-100 font-light select-none tracking-tighter">
          JOHRI
        </h2>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.5 }}
        className="max-w-xl md:max-w-4xl mx-auto relative z-10"
      >
        {/* Compass Icon - Scaled for screens */}
        <Compass
          className="text-[#c2a35d] mx-auto mb-10 md:mb-16 w-8 h-8 md:w-12 md:h-12"
          strokeWidth={0.5}
        />

        {/* The Quote - Fluid Typography */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-7xl font-serif text-stone-100 italic leading-relaxed md:leading-snug font-light">
          "Jewellery is the <span className="text-[#c2a35d]">silent pulse</span>{" "}
          of a lineage. At la.johri, we don't curate items; we curate the{" "}
          <span className="text-[#c2a35d]">spirit of antiquity</span> itself."
        </h2>

        {/* Footer Label - Tracking reduced for mobile readability */}
        <div className="mt-12 md:mt-20">
          <p className="text-emerald-100/40 text-[8px] md:text-[10px] tracking-[0.6em] md:tracking-[1.2em] uppercase leading-widest">
            The Sovereign Code
          </p>
        </div>
      </motion.div>
    </section>
  );
};
