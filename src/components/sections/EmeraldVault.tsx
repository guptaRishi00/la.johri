"use client";
import React from "react";
import { motion } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";

const collection = [
  { title: "Zambian Tears", type: "Pendant", img: BRAND_IMAGES.GOLD_TEXTURE },
  { title: "Imperial Nakshi", type: "Bridal", img: BRAND_IMAGES.CRAFT_HANDS },
  { title: "Sacred Vahana", type: "Amulet", img: BRAND_IMAGES.SACRED_GOLD },
];

export const EmeraldVault = () => {
  return (
    <section className="bg-stone-50 py-24 md:py-36 lg:py-48 overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 lg:mb-32 gap-8 md:gap-12">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-emerald-900 uppercase tracking-[0.5em] md:tracking-[0.8em] text-[9px] md:text-[10px] mb-6 md:mb-8 block font-medium"
            >
              Seasonal Curations
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif text-[#021a14] font-light italic leading-[1.1]"
            >
              The Emerald <br className="hidden md:block" /> Vault
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="w-full lg:w-1/3"
          >
            <p className="text-[#021a14]/60 text-[10px] md:text-xs font-light leading-loose tracking-[0.2em] md:tracking-widest uppercase max-w-sm">
              Rare gemstones met with antique chasing techniques, reserved for
              our private collectors.
            </p>
          </motion.div>
        </div>

        {/* Collection Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16 lg:gap-8">
          {collection.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              whileHover={{ y: -15 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[3/4] overflow-hidden mb-6 md:mb-10 bg-emerald-950/5 relative">
                {/* Subtle Overlay for better contrast on white backgrounds */}
                <div className="absolute inset-0 bg-[#021a14]/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                />
              </div>

              <div className="px-2">
                <span className="text-[8px] md:text-[9px] uppercase tracking-[0.4em] text-emerald-800 mb-2 md:mb-4 block font-medium">
                  {item.type}
                </span>
                <h4 className="text-2xl md:text-3xl font-serif text-[#021a14] font-light mb-4">
                  {item.title}
                </h4>
                {/* Animated Underline */}
                <div className="w-8 md:w-0 group-hover:w-full h-px bg-[#c2a35d] transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
