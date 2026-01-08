"use client";
import React from "react";
import { motion } from "framer-motion";
import { Flame, Hammer, PenTool } from "lucide-react";

export const TheForge = () => {
  return (
    <section className="bg-[#0c0c0c] py-32 px-6 md:px-12 lg:px-24 text-stone-200 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <span className="text-[#c2a35d] uppercase tracking-[0.8em] text-[10px] block mb-4">
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

        <div className="grid md:grid-cols-3 gap-16">
          <div className="text-center space-y-6">
            <Flame className="mx-auto text-[#c2a35d] w-8 h-8" strokeWidth={1} />
            <h4 className="text-xl font-serif italic">The Forge</h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-wider">
              Handcrafted in our Benares sanctuary using time-honored
              techniques.
            </p>
          </div>
          <div className="text-center space-y-6">
            <PenTool
              className="mx-auto text-[#c2a35d] w-8 h-8"
              strokeWidth={1}
            />
            <h4 className="text-xl font-serif italic">The Nakshi Chasing</h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-wider">
              Basing designs on antique archives to define the silhouette of
              power.
            </p>
          </div>
          <div className="text-center space-y-6">
            <Hammer
              className="mx-auto text-[#c2a35d] w-8 h-8"
              strokeWidth={1}
            />
            <h4 className="text-xl font-serif italic">Built to Endure</h4>
            <p className="text-xs text-stone-500 leading-relaxed uppercase tracking-wider">
              Designed with durability in mind to be carried through lineages.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
