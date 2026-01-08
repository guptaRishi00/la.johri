"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Zap, Microscope } from "lucide-react";

export const ScientificRigor = () => {
  return (
    <section className="bg-stone-50 py-24 md:py-36 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-emerald-900 uppercase tracking-[0.8em] text-[10px] block mb-4">
            Technical Excellence
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#021a14] font-light">
            The Science of <span className="italic">Scintillation</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* GIA Standards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 border border-emerald-900/5 bg-white"
          >
            <Microscope
              className="text-[#c2a35d] w-6 h-6 mb-6"
              strokeWidth={1}
            />
            <h4 className="text-xl font-serif text-[#021a14] mb-4">
              GIA Graduate Standards
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-widest">
              Every diamond is evaluated by GIA Graduate standards, focusing on
              internal perfection and light-return.
            </p>
          </motion.div>

          {/* Type IIa Diamonds */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 border border-emerald-900/5 bg-white"
          >
            <Zap className="text-[#c2a35d] w-6 h-6 mb-6" strokeWidth={1} />
            <h4 className="text-xl font-serif text-[#021a14] mb-4">
              Type IIa Purity
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-widest">
              We specialize in Type IIa diamonds—the most chemically pure
              crystals known to man, showing an inner light that meets our
              uncompromising standards.
            </p>
          </motion.div>

          {/* Optical Excellence */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="p-8 border border-emerald-900/5 bg-white"
          >
            <ShieldCheck
              className="text-[#c2a35d] w-6 h-6 mb-6"
              strokeWidth={1}
            />
            <h4 className="text-xl font-serif text-[#021a14] mb-4">
              Optical Excellence
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-widest">
              Gems must reveal a rare combination of deep saturation and
              remarkable translucency before entering our vault.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
