"use client";
import React from "react";
import { motion } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";
import { Shield, Crown, Gem } from "lucide-react";

const vaultCategories = [
  {
    title: "The Heritage Archive",
    description:
      "Restored artifacts from the 1920s, preserving the original spirit of the house.",
    image: BRAND_IMAGES.GOLD_TEXTURE,
    count: "04 Pieces",
  },
  {
    title: "Royal Commissions",
    description: "One-of-one creations designed for the modern sovereign.",
    image: BRAND_IMAGES.SACRED_GOLD,
    count: "02 Pieces",
  },
  {
    title: "Uncut Rarities",
    description:
      "Ethically sourced gemstones in their most primal, divine form.",
    image: BRAND_IMAGES.SALON_AMBIANCE,
    count: "07 Pieces",
  },
];

export default function VaultPage() {
  return (
    <main className="bg-[#021a14] min-h-screen pt-32 selection:bg-[#c2a35d] selection:text-[#021a14]">
      {/* Hero: The Sanctuary of Rarity */}
      <section className="px-6 md:px-12 lg:px-24 mb-32 border-b border-[#c2a35d]/10 pb-24">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-[#c2a35d] uppercase tracking-[1em] text-[10px] mb-8 block">
              Entry Forbidden to the Ordinary
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-[10vw] font-serif text-stone-100 font-light italic leading-none mb-12">
              The Vault
            </h1>
            <p className="text-emerald-100/40 text-[10px] md:text-xs tracking-[0.5em] uppercase max-w-2xl mx-auto leading-loose">
              A climate-controlled sanctuary housing our most guarded
              acquisitions. Provenance is our promise; rarity is our currency.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vault Inventory Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24 bg-[#021a14]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
            {vaultCategories.map((category, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="group cursor-none"
              >
                <div className="aspect-[3/4] overflow-hidden mb-8 relative">
                  <div className="absolute inset-0 bg-[#021a14]/40 group-hover:bg-transparent transition-all duration-1000 z-10" />
                  <img
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s]"
                  />
                  <div className="absolute bottom-6 left-6 z-20">
                    <span className="text-[#c2a35d] text-[10px] tracking-widest uppercase bg-[#021a14]/80 px-4 py-2 backdrop-blur-md">
                      {category.count}
                    </span>
                  </div>
                </div>
                <h3 className="text-2xl font-serif text-stone-100 mb-4 group-hover:text-[#c2a35d] transition-colors duration-500">
                  {category.title}
                </h3>
                <p className="text-emerald-100/40 text-xs font-light leading-relaxed uppercase tracking-widest">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Security Manifesto */}
      <section className="py-48 px-6 bg-[#fdfcf9]">
        <div className="max-w-4xl mx-auto text-center space-y-16">
          <Gem className="mx-auto text-[#021a14] w-12 h-12 stroke-[0.5px]" />
          <h2 className="text-4xl md:text-6xl font-serif text-[#021a14] leading-tight font-light">
            Each acquisition is accompanied by a{" "}
            <span className="italic">Digital Ancestry Ledger</span>, ensuring
            your legacy is etched in time.
          </h2>
          <button className="px-12 py-4 border border-[#021a14]/20 text-[#021a14] text-[10px] uppercase tracking-[0.4em] hover:bg-[#021a14] hover:text-[#c2a35d] transition-all duration-700">
            Request Access Credentials
          </button>
        </div>
      </section>
    </main>
  );
}
