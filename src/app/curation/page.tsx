"use client";
import React from "react";
import { motion } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";

const editorialStories = [
  {
    tag: "The Narrative",
    title: "Poetry in Gold",
    description:
      "An exploration of Benares' sunset hues reflected in 22k gold.",
    image: BRAND_IMAGES.GOLD_TEXTURE,
    align: "left",
  },
  {
    tag: "The Muse",
    title: "The Sovereign Woman",
    description:
      "Defining the silhouette of modern power through antique archives.",
    image: BRAND_IMAGES.SALON_AMBIANCE,
    align: "right",
  },
];

export default function CurationPage() {
  return (
    <main className="bg-[#021a14] min-h-screen pt-32 selection:bg-[#c2a35d] selection:text-[#021a14]">
      {/* Header */}
      <section className="px-6 md:px-12 lg:px-24 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="flex flex-col md:flex-row justify-between items-end gap-12"
          >
            <div className="max-w-2xl">
              <span className="text-[#c2a35d] uppercase tracking-[1em] text-[10px] mb-8 block">
                The Editorial Perspective
              </span>
              <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-stone-100 font-light italic leading-none">
                Curation
              </h1>
            </div>
            <p className="text-emerald-100/40 text-[9px] uppercase tracking-[0.5em] leading-loose max-w-xs pb-4">
              A rhythmic assembly of history, aesthetics, and the silent
              language of stones.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Editorial Grid */}
      <section className="px-6 md:px-12 lg:px-24 py-24 border-t border-emerald-950/50">
        <div className="max-w-7xl mx-auto space-y-48">
          {editorialStories.map((story, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className={`flex flex-col ${
                story.align === "right" ? "md:flex-row-reverse" : "md:flex-row"
              } gap-16 items-center`}
            >
              {/* Image Frame */}
              <div className="w-full md:w-3/5 aspect-[4/5] overflow-hidden bg-emerald-950/20 relative group">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-[2s] scale-110 group-hover:scale-100"
                />
                <div className="absolute inset-0 border-[40px] border-[#021a14]/10 pointer-events-none" />
              </div>

              {/* Text Block */}
              <div className="w-full md:w-2/5 space-y-8">
                <span className="text-[#c2a35d] text-[9px] uppercase tracking-[0.6em]">
                  {story.tag}
                </span>
                <h3 className="text-4xl md:text-5xl font-serif text-stone-100 font-light">
                  {story.title}
                </h3>
                <p className="text-emerald-100/40 text-sm font-light leading-loose tracking-wide">
                  {story.description}
                </p>
                <button className="pt-4 text-[#c2a35d] text-[10px] uppercase tracking-[0.4em] border-b border-[#c2a35d]/20 hover:border-[#c2a35d] transition-all duration-500">
                  Read Journal
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The Salon Invite */}
      <section className="bg-stone-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="w-px h-24 bg-[#021a14]/10 mx-auto mb-16" />
          <h2 className="text-4xl md:text-6xl font-serif text-[#021a14] font-light leading-tight mb-12">
            Curated viewings are held <br className="hidden md:block" />
            in our <span className="italic">Heritage Salon</span>.
          </h2>
          <div className="flex justify-center gap-12">
            <div className="flex flex-col items-center">
              <span className="text-[8px] uppercase tracking-[0.4em] text-stone-400 mb-2">
                Location
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#021a14]">
                Jaipur
              </span>
            </div>
            <div className="w-px h-8 bg-[#021a14]/10" />
            <div className="flex flex-col items-center">
              <span className="text-[8px] uppercase tracking-[0.4em] text-stone-400 mb-2">
                District
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#021a14]">
                Heritage
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
