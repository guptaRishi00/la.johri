"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, Hammer } from "lucide-react";

export const TheSlowCraft = () => {
  return (
    <section className="bg-white py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Clock className="mx-auto text-[#021a14] w-10 h-10 mb-10 stroke-[0.5px]" />
          <h2 className="text-4xl md:text-6xl font-serif text-[#021a14] leading-tight font-light mb-12">
            Crafted, Not{" "}
            <span className="italic text-[#c0c0c0]">Rushed</span>.
          </h2>
          <p className="text-stone-500 font-light leading-loose text-base mb-16">
            Every gemstone is set with care. Every detail is perfected. Your
            custom piece receives dedicated attention throughout its creation —
            from your initial vision to the moment you hold it in your hands.
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left border-t border-stone-100 pt-16">
            <div className="space-y-4">
              <span className="text-[#c0c0c0] text-[10px] uppercase tracking-widest font-bold">
                Sourcing Standards
              </span>
              <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-wider">
                Only the most certified gemstones and the finest metals enter
                our process. Every stone is authenticated before crafting begins.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-[#c0c0c0] text-[10px] uppercase tracking-widest font-bold">
                Built for Generations
              </span>
              <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-wider">
                Hand fabricated for longevity. Every detail crafted to withstand
                time and become a family heirloom.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
