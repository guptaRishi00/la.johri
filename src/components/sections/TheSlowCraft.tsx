"use client";
import React from "react";
import { motion } from "framer-motion";
import { Clock, ShieldCheck, Gem } from "lucide-react";

export const TheSlowCraft = () => {
  return (
    <section className="bg-white py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Clock className="mx-auto text-[#021a14] w-10 h-10 mb-10 stroke-[0.5px]" />
          <h2 className="text-4xl md:text-6xl font-serif text-[#021a14] leading-tight font-light mb-12">
            Crafted, Not <span className="italic text-[#858585]">Rushed</span>.
          </h2>
          <p className="text-stone-500 font-light leading-loose text-base mb-16 max-w-2xl mx-auto">
            Every gemstone is set with care. Every detail is perfected. Your
            custom piece receives dedicated attention throughout its creation —
            from your initial vision to the moment you hold it in your hands.
          </p>

          <div className="grid md:grid-cols-2 gap-6 text-left">
            {/* Card 1: Sourcing Standards */}
            <div className="group p-8 bg-[#faf9f8] border border-stone-100 rounded-sm transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50">
              <Gem className="w-5 h-5 mb-6 text-[#021a14] stroke-[1px]" />
              <span className="block text-[#021a14] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
                Sourcing Standards
              </span>
              <p className="text-[11px] text-stone-500 leading-relaxed uppercase tracking-widest">
                Only the most certified gemstones and the finest metals enter
                our process. Every stone is authenticated before crafting
                begins.
              </p>
            </div>

            {/* Card 2: Built for Generations */}
            <div className="group p-8 bg-[#faf9f8] border border-stone-100 rounded-sm transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-stone-200/50">
              <ShieldCheck className="w-5 h-5 mb-6 text-[#021a14] stroke-[1px]" />
              <span className="block text-[#021a14] text-[10px] uppercase tracking-[0.2em] font-bold mb-4">
                Built for Generations
              </span>
              <p className="text-[11px] text-stone-500 leading-relaxed uppercase tracking-widest">
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
