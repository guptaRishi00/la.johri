"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";
import { ArrowRight, Filter, ShoppingBag, Sparkles } from "lucide-react";

const productCategories = [
  { id: "all", name: "All Acquisitions" },
  { id: "diamonds", name: "Diamonds" },
  { id: "gems", name: "Rare Gemstones" },
  { id: "jewelry", name: "Fine Jewelry" },
];

const products = [
  {
    id: 1,
    title: "The Sovereign Solitaire",
    category: "diamonds",
    type: "3.5ct D-IF Oval",
    price: "Inquire for Pricing",
    image: BRAND_IMAGES.DIAMOND_HERO,
    desc: "A colorless masterpiece with absolute internal perfection.",
  },
  {
    id: 2,
    title: "Benares Sunset Ruby",
    category: "gems",
    type: "Burmese Unheated",
    price: "Acquisition Reserved",
    image:
      "https://images.unsplash.com/photo-1599707367072-cd6ada2bc375?auto=format&fit=crop&q=80&w=2400",
    desc: "Vibrant pigeon-blood hue set in 22k chased gold.",
  },
  {
    id: 3,
    title: "The Temple Collar",
    category: "jewelry",
    type: "Antique Nakshi",
    price: "Inquire for Pricing",
    image: BRAND_IMAGES.JEWELRY_NECKLACE,
    desc: "A hand-chased gold lineage piece depicting ancient motifs.",
  },
  {
    id: 4,
    title: "Ocean Eye Sapphire",
    category: "gems",
    type: "Kashmir Blue",
    price: "Price on Request",
    image:
      "https://images.unsplash.com/photo-1588444839799-eb0c5a1bc71a?auto=format&fit=crop&q=80&w=2400",
    desc: "Velvety depth found only in the historic Kashmir mines.",
  },
  {
    id: 5,
    title: "Sacred Vahana Ring",
    category: "jewelry",
    type: "Emerald & Diamond",
    price: "Inquire for Pricing",
    image: BRAND_IMAGES.JEWELRY_RING,
    desc: "A cocktail ring featuring a central 5ct Zambian Emerald.",
  },
  {
    id: 6,
    title: "Lunar Paraiba",
    category: "gems",
    type: "Electric Tourmaline",
    price: "Price on Request",
    image:
      "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=2400",
    desc: "Neon blue radiance with unmatched copper-bearing glow.",
  },
];

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts =
    activeFilter === "all"
      ? products
      : products.filter((p) => p.category === activeFilter);

  return (
    <main className="bg-[#021a14] min-h-screen pt-32 selection:bg-[#c2a35d] selection:text-[#021a14]">
      {/* HEADER SECTION */}
      <section className="px-6 md:px-12 lg:px-24 mb-20">
        <div className="max-w-7xl mx-auto border-b border-[#c2a35d]/10 pb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            <span className="text-[#c2a35d] uppercase tracking-[1em] text-[10px] mb-8 block">
              The Archive of Rarity
            </span>
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-stone-100 font-light italic leading-none mb-12">
              Collections
            </h1>
          </motion.div>

          {/* FILTER BAR */}
          <div className="flex flex-wrap gap-8 md:gap-16 items-center">
            {productCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`text-[10px] uppercase tracking-[0.4em] transition-all duration-500 pb-2 border-b ${
                  activeFilter === cat.id
                    ? "text-[#c2a35d] border-[#c2a35d]"
                    : "text-emerald-100/30 border-transparent hover:text-emerald-100"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="px-6 md:px-12 lg:px-24 pb-32">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24"
          >
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.8 }}
                  className="group cursor-none"
                >
                  {/* Image Frame */}
                  <div className="aspect-[3/4] overflow-hidden mb-8 relative bg-emerald-950/20">
                    <div className="absolute inset-0 bg-[#021a14]/40 group-hover:bg-transparent transition-all duration-1000 z-10" />
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-transform duration-[2s] scale-110 group-hover:scale-100"
                    />
                    <div className="absolute bottom-6 left-6 z-20 flex flex-col gap-2">
                      <span className="text-[#c2a35d] text-[8px] tracking-[0.3em] uppercase bg-[#021a14]/80 px-4 py-2 backdrop-blur-md self-start">
                        {product.type}
                      </span>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-4 px-2">
                    <div className="flex justify-between items-start">
                      <h3 className="text-2xl font-serif text-stone-100 group-hover:text-[#c2a35d] transition-colors duration-500">
                        {product.title}
                      </h3>
                      <Sparkles className="text-[#c2a35d]/20 group-hover:text-[#c2a35d] w-4 h-4 transition-colors duration-700" />
                    </div>
                    <p className="text-emerald-100/40 text-[10px] font-light leading-relaxed uppercase tracking-widest max-w-xs">
                      {product.desc}
                    </p>
                    <div className="pt-4 flex justify-between items-center border-t border-[#c2a35d]/10">
                      <span className="text-[9px] tracking-[0.3em] text-[#c2a35d] uppercase font-medium">
                        {product.price}
                      </span>
                      <button className="flex items-center gap-2 text-[8px] text-stone-500 hover:text-stone-100 transition-colors uppercase tracking-[0.4em]">
                        View Details <ArrowRight size={10} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* DIAMOND MASTERCLASS CALLOUT */}
      <section className="bg-stone-50 py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="w-px h-24 bg-[#021a14]/10 mx-auto" />
          <span className="text-[#021a14] uppercase tracking-[0.8em] text-[10px] block">
            Scientific Certification
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#021a14] font-light leading-tight">
            Our Diamonds are <br className="hidden md:block" />
            evaluated by the{" "}
            <span className="italic">GIA Graduate Standards</span>.
          </h2>
          <p className="text-stone-500 font-light leading-loose text-sm max-w-xl mx-auto">
            Beyond the 4Cs, we analyze the scintillation and light-return of
            every diamond in our vault. We specialize in Type IIa diamonds—the
            most chemically pure crystals known to man.
          </p>
          <button className="px-12 py-5 bg-[#021a14] text-[#c2a35d] text-[10px] uppercase tracking-[0.4em] hover:bg-[#c2a35d] hover:text-[#021a14] transition-all duration-700">
            Request Gemmology Consultation
          </button>
        </div>
      </section>
    </main>
  );
}
