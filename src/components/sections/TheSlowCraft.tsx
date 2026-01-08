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
            The Temple of{" "}
            <span className="italic text-[#c2a35d]">Patience</span>.
          </h2>
          <p className="text-stone-500 font-light leading-loose text-base mb-16">
            Located in the heritage district of Varanasi, our atelier is not a
            factory, but a sanctuary of silence. Each piece remains on the
            artisan's bench for weeks, absorbing the rhythm of hand-tools used
            for generations.
          </p>

          <div className="grid md:grid-cols-2 gap-12 text-left border-t border-stone-100 pt-16">
            <div className="space-y-4">
              <span className="text-[#c2a35d] text-[10px] uppercase tracking-widest font-bold">
                The Ritual
              </span>
              <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-wider">
                Only the most vibrant Zambian emeralds and purest 22k gold are
                permitted entry into the forge.
              </p>
            </div>
            <div className="space-y-4">
              <span className="text-[#c2a35d] text-[10px] uppercase tracking-widest font-bold">
                The Fabrication
              </span>
              <p className="text-xs text-stone-400 leading-relaxed uppercase tracking-wider">
                We reject mass production. Each artifact is hand-fabricated from
                solid gold to ensure heirloom quality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
