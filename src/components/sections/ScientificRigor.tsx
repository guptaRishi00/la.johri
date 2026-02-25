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
            The Journey of <span className="italic">Brilliance</span>
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
              className="text-[#c0c0c0] w-6 h-6 mb-6"
              strokeWidth={1}
            />
            <h4 className="text-xl font-serif text-[#021a14] mb-4">
              International Standards
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-widest">
              Every diamond and gemstone is meticulously assessed using global
              benchmarks, ensuring internal perfection and optimal light return.
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
            <Zap className="text-[#c0c0c0] w-6 h-6 mb-6" strokeWidth={1} />
            <h4 className="text-xl font-serif text-[#021a14] mb-4">
              Mine-to-You Advantage
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-widest">
              By sourcing directly from the mines, we eliminate intermediaries,
              providing exceptional value, full traceability, and gems of
              impeccable origin.
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
              className="text-[#c0c0c0] w-6 h-6 mb-6"
              strokeWidth={1}
            />
            <h4 className="text-xl font-serif text-[#021a14] mb-4">
              Tailored Excellence
            </h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-widest">
              Every piece is crafted with precision to your exact requirements,
              uniting technical mastery with your individual vision.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
