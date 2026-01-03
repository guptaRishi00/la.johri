"use client";
import React from "react";
import { motion } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";
import {
  Scale,
  Globe,
  GraduationCap,
  Gem,
  ArrowRight,
  Hammer,
  PenTool,
  Flame,
} from "lucide-react";

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

      {/* GLOBAL SOURCING & FAIR PRICING */}
      <section className="bg-white py-32 px-6 md:px-12 lg:px-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[#c2a35d]/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
            {/* COLUMN 1: GLOBAL SOURCING */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
            >
              <div className="flex items-center gap-3 mb-8">
                <Globe className="text-[#c2a35d] w-5 h-5" strokeWidth={1} />
                <span className="text-[#021a14] uppercase tracking-[0.6em] text-[10px]">
                  Global Provenance
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#021a14] mb-8 leading-tight">
                Sourced from the <br />{" "}
                <span className="italic text-[#c2a35d]">Source.</span>
              </h2>
              <p className="text-stone-600 font-light text-sm leading-relaxed mb-12">
                We bypass international trade shows and brokers. Instead, we
                maintain direct relationships with mining communities in
                specific geologies known for chemical purity.
              </p>

              <div className="space-y-8 border-l border-[#c2a35d]/30 pl-8">
                {[
                  {
                    region: "Mogok, Burma",
                    stone: "Pigeon Blood Rubies",
                    desc: "The world's premier source for fluorescent red corundum.",
                  },
                  {
                    region: "Kashmir Valley",
                    stone: "Cornflower Sapphires",
                    desc: "Velvety blue hues sourced from historical deposits.",
                  },
                  {
                    region: "Merelani Hills, Tanzania",
                    stone: "Royal Tanzanite",
                    desc: "The only known source on earth for this trichroic gem.",
                  },
                  {
                    region: "Musha, Zambia",
                    stone: "Vivid Emeralds",
                    desc: "Ethically mined stones with deep, bluish-green saturation.",
                  },
                ].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <h4 className="text-[#021a14] font-serif text-lg mb-1 group-hover:text-[#c2a35d] transition-colors">
                      {item.region}
                    </h4>
                    <div className="flex items-center gap-2 mb-1">
                      <Gem className="w-3 h-3 text-[#c2a35d]" />
                      <span className="text-xs uppercase tracking-widest text-stone-500">
                        {item.stone}
                      </span>
                    </div>
                    <p className="text-[10px] text-stone-400 leading-relaxed max-w-sm">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* COLUMN 2: FAIR PRICING MODEL */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              className="bg-stone-50 p-8 md:p-12 border border-stone-100 relative"
            >
              <div className="flex items-center gap-3 mb-8">
                <Scale className="text-[#c2a35d] w-5 h-5" strokeWidth={1} />
                <span className="text-[#021a14] uppercase tracking-[0.6em] text-[10px]">
                  Transparent Pricing
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#021a14] mb-8 leading-tight">
                The Cost of <br />{" "}
                <span className="italic text-stone-400 line-through decoration-[#c2a35d]">
                  Tradition.
                </span>
              </h2>
              <p className="text-stone-600 font-light text-sm leading-relaxed mb-12">
                Traditional luxury jewelry is marked up 8-10x to cover the costs
                of middlemen, retail rent, and branding. We operate differently.
              </p>

              {/* COMPARISON VISUAL */}
              <div className="space-y-6">
                {/* Traditional Model */}
                <div className="opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
                  <h5 className="text-xs uppercase tracking-widest text-stone-500 mb-4">
                    Traditional Retail
                  </h5>
                  <div className="flex items-center justify-between text-[10px] text-stone-400 uppercase tracking-wider mb-2">
                    <span>Mine</span>
                    <ArrowRight className="w-3 h-3" />
                    <span>Exporter</span>
                    <ArrowRight className="w-3 h-3" />
                    <span>Wholesaler</span>
                    <ArrowRight className="w-3 h-3" />
                    <span>Retailer</span>
                  </div>
                  <div className="w-full bg-stone-200 h-1 rounded-full overflow-hidden">
                    <div className="bg-stone-400 w-full h-full" />
                  </div>
                  <div className="mt-2 text-right text-xs text-stone-500 font-serif italic">
                    ~ 1000% Markup
                  </div>
                </div>

                {/* LA.JOHRI Model */}
                <div className="pt-6 border-t border-dashed border-stone-300">
                  <h5 className="text-xs uppercase tracking-widest text-[#021a14] mb-4 font-bold">
                    The LA.JOHRI Model
                  </h5>
                  <div className="flex items-center gap-4 text-[10px] text-[#021a14] uppercase tracking-wider mb-2">
                    <span>Mine</span>
                    <ArrowRight className="w-3 h-3 text-[#c2a35d]" />
                    <span className="bg-[#021a14] text-[#c2a35d] px-2 py-1">
                      LA.JOHRI Gemmologist
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#c2a35d]" />
                    <span>You</span>
                  </div>
                  <div className="w-full bg-[#021a14]/10 h-1 rounded-full overflow-hidden flex">
                    <div className="bg-[#c2a35d] w-[25%] h-full" />
                  </div>
                  <div className="mt-2 text-left text-xs text-[#c2a35d] font-serif italic">
                    Fair Value. Uncompromised.
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* NEW SECTION: TRUE CRAFTSMANSHIP */}
      <section className="bg-[#0c0c0c] py-32 px-6 md:px-12 lg:px-24 text-stone-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-[#c2a35d] uppercase tracking-[0.8em] text-[10px] block mb-4">
              The Atelier
            </span>
            <h2 className="text-4xl md:text-6xl font-serif font-light italic mb-6">
              Not Cast. <br />{" "}
              <span className="text-stone-500 not-italic">Forged.</span>
            </h2>
            <p className="max-w-lg mx-auto text-stone-500 text-xs tracking-widest leading-loose uppercase">
              We reject mass-production casting. Each piece is hand-fabricated
              from solid 18K gold, ensuring heirloom density and structural
              longevity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Decorative Line */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-px bg-stone-800 z-0" />

            {/* Craft Step 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="relative z-10 bg-[#0c0c0c] pt-8"
            >
              <div className="w-16 h-16 bg-[#1a1a1a] flex items-center justify-center border border-stone-800 mb-8 mx-auto rounded-full group hover:border-[#c2a35d] transition-colors">
                <PenTool
                  className="text-stone-400 w-6 h-6 group-hover:text-[#c2a35d]"
                  strokeWidth={1}
                />
              </div>
              <h3 className="text-xl font-serif text-center mb-4">
                The Gouache
              </h3>
              <p className="text-stone-500 text-sm text-center font-light leading-relaxed px-4">
                Every commission begins as a hand-painted gouache illustration,
                mapping the light performance of your specific gem before metal
                ever touches fire.
              </p>
            </motion.div>

            {/* Craft Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="relative z-10 bg-[#0c0c0c] pt-8"
            >
              <div className="w-16 h-16 bg-[#1a1a1a] flex items-center justify-center border border-stone-800 mb-8 mx-auto rounded-full group hover:border-[#c2a35d] transition-colors">
                <Flame
                  className="text-stone-400 w-6 h-6 group-hover:text-[#c2a35d]"
                  strokeWidth={1}
                />
              </div>
              <h3 className="text-xl font-serif text-center mb-4">The Forge</h3>
              <p className="text-stone-500 text-sm text-center font-light leading-relaxed px-4">
                We use traditional alloying methods to create our signature "Old
                World" 18k Gold—a richer, deeper yellow that complements
                high-saturation gemstones.
              </p>
            </motion.div>

            {/* Craft Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-10 bg-[#0c0c0c] pt-8"
            >
              <div className="w-16 h-16 bg-[#1a1a1a] flex items-center justify-center border border-stone-800 mb-8 mx-auto rounded-full group hover:border-[#c2a35d] transition-colors">
                <Hammer
                  className="text-stone-400 w-6 h-6 group-hover:text-[#c2a35d]"
                  strokeWidth={1}
                />
              </div>
              <h3 className="text-xl font-serif text-center mb-4">
                The Setting
              </h3>
              <p className="text-stone-500 text-sm text-center font-light leading-relaxed px-4">
                Micro-pave and bezel settings are done under 40x magnification.
                We do not use glue or shortcuts; physics and precision hold your
                legacy together.
              </p>
            </motion.div>
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
