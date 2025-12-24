"use client";
import React from "react";
import { motion } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";

export default function AtelierPage() {
  return (
    <main className="bg-[#021a14] min-h-screen pt-32">
      {/* Hero Section: The Sanctuary */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[#c2a35d] uppercase tracking-[0.8em] text-[10px] mb-8 block"
          >
            The Birthplace of Sovereignty
          </motion.span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-stone-100 font-light italic leading-none mb-16">
            Where Gold <br /> Meets Soul.
          </h1>

          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <img
                src={BRAND_IMAGES.CRAFT_HANDS}
                alt="Artisan hands"
                className="w-full aspect-video object-cover grayscale hover:grayscale-0 transition-all duration-1000"
              />
            </div>
            <div className="lg:col-span-5">
              <p className="text-emerald-100/60 font-light leading-loose tracking-widest text-sm uppercase">
                Located in the heritage district of Varanasi, our atelier is not
                a factory, but a temple of patience. Each piece remains on the
                artisan's bench for weeks, absorbing the rhythm of hand-tools
                used for generations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section: The Sacred Dialogue */}
      <section className="bg-stone-50 py-32 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
          <div className="space-y-12">
            <h2 className="text-4xl md:text-6xl font-serif text-[#021a14] font-light">
              The Ritual of <br /> Creation
            </h2>
            <div className="space-y-8">
              <div className="border-l border-[#021a14]/10 pl-8 py-4">
                <h4 className="text-[#c2a35d] uppercase tracking-widest text-xs mb-2">
                  I. The Selection
                </h4>
                <p className="text-[#021a14]/70 text-sm font-light leading-relaxed">
                  Only the most vibrant Zambian emeralds and purest 22k gold are
                  permitted entry into the vault.
                </p>
              </div>
              <div className="border-l border-[#021a14]/10 pl-8 py-4">
                <h4 className="text-[#c2a35d] uppercase tracking-widest text-xs mb-2">
                  II. The Chasing
                </h4>
                <p className="text-[#021a14]/70 text-sm font-light leading-relaxed">
                  Using "Nakshi" techniques, our master karigars breathe life
                  into flat sheets of metal.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src={BRAND_IMAGES.SACRED_GOLD}
              className="w-full h-full object-cover rounded-sm"
              alt="Molten gold"
            />
            <div className="absolute inset-0 border-20 border-[#021a14]/5 -m-6 pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Philosophy Callout */}
      <section className="py-48 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h3 className="text-3xl md:text-5xl font-serif text-stone-100 italic font-light leading-relaxed">
            "To wear La.Johri is to carry the weight of a{" "}
            <span className="text-[#c2a35d]">thousand-year-old</span>{" "}
            conversation between man and mineral."
          </h3>
        </motion.div>
      </section>
    </main>
  );
}
