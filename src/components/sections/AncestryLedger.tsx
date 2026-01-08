"use client";
import React from "react";
import { motion } from "framer-motion";
import { BookOpen, History, Lock } from "lucide-react";

export const AncestryLedger = () => {
  return (
    <section className="bg-[#021a14] py-24 md:py-48 px-6 md:px-12 lg:px-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#c2a35d] uppercase tracking-[0.8em] text-[10px] block mb-8">
            Legacy Preservation
          </span>
          <h2 className="text-5xl md:text-7xl font-serif text-stone-100 font-light leading-tight mb-8">
            The Digital <br /> <span className="italic">Ancestry Ledger</span>
          </h2>
          <p className="text-emerald-100/40 text-sm font-light leading-loose tracking-wide max-w-md mb-12">
            Each acquisition is accompanied by a ledger that ensures your legacy
            is etched in time. We provide ethical, conflict-free sourcing with
            certified provenance.
          </p>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <History
                className="text-[#c2a35d] w-5 h-5 mt-1"
                strokeWidth={1}
              />
              <div>
                <h5 className="text-stone-100 font-serif text-lg mb-1">
                  Mine-to-Mantle Traceability
                </h5>
                <p className="text-[10px] text-emerald-100/30 uppercase tracking-widest">
                  Direct relationships with mining communities ensure an
                  unbroken chain.
                </p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <Lock className="text-[#c2a35d] w-5 h-5 mt-1" strokeWidth={1} />
              <div>
                <h5 className="text-stone-100 font-serif text-lg mb-1">
                  Certified Provenance
                </h5>
                <p className="text-[10px] text-emerald-100/30 uppercase tracking-widest">
                  Historical artifacts and royal commissions documented for
                  generations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="relative aspect-square">
          {/* Decorative frame for an "Ancient Ledger" feel */}
          <div className="absolute inset-0 border border-[#c2a35d]/20 m-8" />
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full h-full bg-emerald-950/20 flex items-center justify-center p-12"
          >
            <BookOpen
              className="text-[#c2a35d]/10 w-64 h-64 absolute"
              strokeWidth={0.5}
            />
            <div className="text-center z-10">
              <span className="text-[#c2a35d] text-[10px] tracking-[1em] uppercase mb-4 block">
                Archive Entry
              </span>
              <p className="text-stone-400 font-serif italic text-2xl">
                "Provenance is our promise; <br /> rarity is our currency."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
