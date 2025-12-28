"use client";
import React from "react";
import { motion } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";
import {
  ShieldCheck,
  Landmark,
  Scale,
  Globe,
  GraduationCap,
} from "lucide-react";

const gemstoneSpectrum = [
  {
    name: "Pigeon Blood Rubies",
    origin: "Burma",
    image: BRAND_IMAGES.GEM_RUBY,
    desc: "The fire of the earth.",
  },
  {
    name: "Cornflower Sapphires",
    origin: "Kashmir",
    image: BRAND_IMAGES.GEM_SAPPHIRE,
    desc: "Velvety depth of the heavens.",
  },
  {
    name: "Zambian Emeralds",
    origin: "Musha",
    image: BRAND_IMAGES.GEM_EMERALD,
    desc: "The green pulse of antiquity.",
  },
  {
    name: "South Sea Pearls",
    origin: "Australia",
    image: BRAND_IMAGES.GEM_PEARL,
    desc: "Lustrous moon-drops.",
  },
  {
    name: "Royal Tanzanites",
    origin: "Merelani",
    image: BRAND_IMAGES.GEM_TANZANITE,
    desc: "The blue-violet twilight.",
  },
  {
    name: "Paraiba Tourmalines",
    origin: "Brazil",
    image: BRAND_IMAGES.GEM_TOURMALINE,
    desc: "Electric neon of the deep sea.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#021a14] min-h-screen pt-32 selection:bg-[#c2a35d] selection:text-[#021a14]">
      {/* FOUNDER SECTION */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <div className="flex items-center gap-4 mb-6">
              <GraduationCap
                className="text-[#c2a35d] w-5 h-5"
                strokeWidth={1}
              />
              <span className="text-[#c2a35d] uppercase tracking-[0.8em] text-[10px] block">
                The Master Gemmologist
              </span>
            </div>
            <h1 className="text-5xl md:text-7xl font-serif text-stone-100 font-light italic leading-tight mb-8">
              Expertise <br /> Beyond the Eye.
            </h1>
            <p className="text-emerald-100/60 font-light leading-relaxed tracking-wide text-sm mb-6">
              LA.JOHRI is led by a specialist holding a{" "}
              <span className="text-[#c2a35d]">
                Graduate Diploma in Gemmology
              </span>
              . This academic foundation ensures that every stone is evaluated
              through the rigorous lens of crystalline integrity and optical
              excellence.
            </p>
            <p className="text-emerald-100/40 font-light leading-relaxed text-xs uppercase tracking-widest">
              Our selection process rejects 98% of the gems we inspect. We seek
              only those with "Inner Light"—a specific combination of saturation
              and transparency.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="lg:col-span-7 order-1 lg:order-2 relative group"
          >
            <div className="aspect-[4/5] md:aspect-video overflow-hidden border border-[#c2a35d]/20 bg-emerald-950/20">
              <img
                src={BRAND_IMAGES.OWNER_PORTRAIT}
                alt="Founder & Gemmologist"
                className="w-full h-full object-cover grayscale transition-all duration-[3s] group-hover:grayscale-0 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 border border-[#c2a35d]/10 pointer-events-none z-10" />
          </motion.div>
        </div>
      </section>

      {/* GEMSTONE GALLERY GRID */}
      <section className="bg-white py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 text-center">
            <h2 className="text-4xl md:text-7xl font-serif text-[#021a14] font-light mb-8 italic">
              The Spectrum of Rarity
            </h2>
            <p className="text-stone-400 text-[10px] uppercase tracking-[0.6em] max-w-xl mx-auto">
              A curated archive of the world’s most significant mineral
              discoveries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {gemstoneSpectrum.map((gem, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group cursor-crosshair"
              >
                <div className="aspect-square overflow-hidden mb-8 bg-stone-100 relative">
                  <div className="absolute inset-0 bg-[#021a14]/5 group-hover:bg-transparent transition-colors duration-700 z-10" />
                  <img
                    src={gem.image}
                    alt={gem.name}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[2s] grayscale group-hover:grayscale-0"
                  />
                </div>
                <span className="text-[8px] uppercase tracking-[0.4em] text-[#c2a35d] mb-3 block">
                  {gem.origin}
                </span>
                <h4 className="text-2xl font-serif text-[#021a14] mb-3 group-hover:text-[#c2a35d] transition-colors">
                  {gem.name}
                </h4>
                <p className="text-stone-400 text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                  {gem.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ETHICAL ETHOS & TRANSPARENCY */}
      <section className="py-32 px-6 md:px-12 lg:px-24 border-t border-emerald-950/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img
              src={BRAND_IMAGES.CRAFT_HANDS}
              alt="Artisan work"
              className="w-full aspect-[4/5] object-cover opacity-60 grayscale"
            />
            <div className="absolute inset-0 bg-[#021a14]/40" />
          </div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <span className="text-[#c2a35d] uppercase tracking-[0.8em] text-[10px] block">
              Direct Access
            </span>
            <h3 className="text-4xl md:text-6xl font-serif text-stone-100 font-light leading-tight">
              Honest Value. <br /> Mine-to-Mantle.
            </h3>
            <p className="text-emerald-100/40 text-sm font-light leading-loose tracking-wide">
              By removing traditional retail overheads and intermediaries, we
              ensure that your investment is concentrated in the gem itself. We
              provide ethical, conflict-free sourcing with certified provenance.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-emerald-950/50">
              <div className="space-y-2">
                <Globe
                  className="text-[#c2a35d] w-4 h-4 mb-2"
                  strokeWidth={1}
                />
                <h6 className="text-[9px] uppercase tracking-widest text-stone-100">
                  Global Sourcing
                </h6>
                <p className="text-[9px] text-emerald-100/30 leading-relaxed uppercase">
                  Direct from ethical mines in Zambia & Burma.
                </p>
              </div>
              <div className="space-y-2">
                <Scale
                  className="text-[#c2a35d] w-4 h-4 mb-2"
                  strokeWidth={1}
                />
                <h6 className="text-[9px] uppercase tracking-widest text-stone-100">
                  Fair Pricing
                </h6>
                <p className="text-[9px] text-emerald-100/30 leading-relaxed uppercase">
                  Transparent margins without retail markups.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
