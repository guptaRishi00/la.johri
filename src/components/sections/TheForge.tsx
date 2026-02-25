"use client";
import React from "react";
import { motion } from "framer-motion";
import { Flame, Hammer, PenTool } from "lucide-react";

export const TheForge = () => {
  return (
    <section className="bg-[#021a14] py-32 px-6 md:px-12 lg:px-24 text-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[#c0c0c0] uppercase tracking-[0.8em] text-[10px] block mb-4">
            The Fabrication Philosophy
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-light italic mb-6">
            Not Cast. <span className="text-stone-500 not-italic">Forged.</span>
          </h2>
          <p className="max-w-xl mx-auto text-stone-500 text-[10px] tracking-widest leading-loose uppercase">
            We reject mass production and industrial casting. Each piece is
            hand-fabricated from solid gold to ensure heirloom quality and
            longevity.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12 relative">
          {/* Decorative Line */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-emerald-950/30 z-0" />

          {/* Craft Step 1: THE FORGE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative z-10 bg-[#021a14] pt-8"
          >
            <div className="w-16 h-16 bg-emerald-950/20 flex items-center justify-center border border-emerald-950/50 mb-8 mx-auto rounded-full group hover:border-[#c0c0c0] transition-colors">
              <Flame
                className="text-stone-400 w-6 h-6 group-hover:text-[#c0c0c0]"
                strokeWidth={1}
              />
            </div>
            <h3 className="text-xl font-serif text-center mb-4">The Forge</h3>
            <p className="text-stone-500 text-sm text-center font-light leading-relaxed px-4">
              In our forge, we handcraft each piece using time-honored
              techniques, ensuring every creation is infused with quality,
              character, and a sense of tradition.
            </p>
          </motion.div>

          {/* Craft Step 2: SIGNATURE TECHNIQUES */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="relative z-10 bg-[#021a14] pt-8"
          >
            <div className="w-16 h-16 bg-emerald-950/20 flex items-center justify-center border border-emerald-950/50 mb-8 mx-auto rounded-full group hover:border-[#c0c0c0] transition-colors">
              <PenTool
                className="text-stone-400 w-6 h-6 group-hover:text-[#c0c0c0]"
                strokeWidth={1}
              />
            </div>
            <h3 className="text-xl font-serif text-center mb-4">
              Our Signature Techniques
            </h3>
            <p className="text-stone-500 text-sm text-center font-light leading-relaxed px-4">
              We employ a range of signature techniques that focus on
              meticulous handcraftsmanship, bringing a personal touch and
              unique artistry to every piece we create.
            </p>
          </motion.div>

          {/* Craft Step 3: BUILT TO ENDURE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="relative z-10 bg-[#021a14] pt-8"
          >
            <div className="w-16 h-16 bg-emerald-950/20 flex items-center justify-center border border-emerald-950/50 mb-8 mx-auto rounded-full group hover:border-[#c0c0c0] transition-colors">
              <Hammer
                className="text-stone-400 w-6 h-6 group-hover:text-[#c0c0c0]"
                strokeWidth={1}
              />
            </div>
            <h3 className="text-xl font-serif text-center mb-4">
              Built to Endure
            </h3>
            <p className="text-stone-500 text-sm text-center font-light leading-relaxed px-4">
              Each piece is crafted to stand the test of time, designed with
              durability and longevity in mind, so it can be treasured for
              generations to come.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
