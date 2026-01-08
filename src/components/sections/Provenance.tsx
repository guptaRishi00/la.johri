"use client";
import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Globe, Scale, ArrowRight } from "lucide-react";

export const Provenance = () => {
  return (
    <section className="bg-white py-24 md:py-32 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Academic Genuineness */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap
                className="text-[#c2a35d] w-5 h-5"
                strokeWidth={1}
              />
              <span className="text-[#021a14] uppercase tracking-[0.6em] text-[10px] block">
                The Graduate Gemmologist
              </span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif text-[#021a14] mb-8 leading-tight">
              Mastery Beyond <br /> <span className="italic">the Sight.</span>
            </h2>
            <p className="text-stone-600 font-light leading-relaxed text-sm mb-8 max-w-md">
              Every stone is evaluated through the rigorous lens of crystalline
              integrity and optical excellence by our specialist holding a
              diploma in gemology. We select only the few gems that reveal a
              rare combination of saturation and inner light.
            </p>

            <div className="flex gap-12 pt-8 border-t border-stone-100">
              <div>
                <h6 className="text-[10px] uppercase tracking-widest text-[#021a14] mb-2">
                  Direct Sourcing
                </h6>
                <p className="text-[10px] text-stone-400 uppercase tracking-tight">
                  From the legendary fields of Kashmir & Africa.
                </p>
              </div>
              <div>
                <h6 className="text-[10px] uppercase tracking-widest text-[#021a14] mb-2">
                  Ethical Ethos
                </h6>
                <p className="text-[10px] text-stone-400 uppercase tracking-tight">
                  Conflict-free with certified provenance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: The Pricing Model (Visual Genuineness) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-stone-50 p-8 md:p-12 border border-stone-100"
          >
            <h5 className="text-[10px] uppercase tracking-[0.4em] text-[#021a14] mb-8 font-bold">
              The LA.JOHRI Mine-to-Mantle Model
            </h5>
            <div className="space-y-10">
              <div className="flex items-center gap-4 text-[10px] text-[#021a14] uppercase tracking-wider">
                <span>Ethical Mine</span>
                <ArrowRight className="w-3 h-3 text-[#c2a35d]" />
                <span className="bg-[#021a14] text-[#c2a35d] px-3 py-1">
                  LA.JOHRI Atelier
                </span>
                <ArrowRight className="w-3 h-3 text-[#c2a35d]" />
                <span>The Sovereign</span>
              </div>
              <p className="text-xs text-stone-500 leading-loose">
                Traditional luxury is marked up to cover middlemen, exporters,
                and retailers. By bypassing international brokers, we ensure
                your investment is concentrated in the gem itself.
              </p>
              <div className="w-full bg-[#021a14]/10 h-1 rounded-full overflow-hidden">
                <div className="bg-[#c2a35d] w-[35%] h-full" />
              </div>
              <span className="text-[9px] uppercase tracking-widest text-[#c2a35d]">
                Transparent Value. Uncompromised.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
