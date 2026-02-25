"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

// Components
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CustomCursor } from "@/components/layout/CustomCursor";
import { LoadingScreen } from "@/components/ui/LoadingScreen";

// Sections
import { Hero } from "@/components/sections/Hero";
import { Craftsmanship } from "@/components/sections/Craftsmanship";
import { Provenance } from "@/components/sections/Provenance"; // NEW
import { TheForge } from "@/components/sections/TheForge"; // NEW

import { Manifesto } from "@/components/sections/Manifesto";

import { TheSlowCraft } from "@/components/sections/TheSlowCraft";
import { ScientificRigor } from "@/components/sections/ScientificRigor";


export default function LandingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-[#021a14] min-h-screen selection:bg-[#c0c0c0] selection:text-[#021a14] scroll-smooth cursor-none">
      <CustomCursor />
      <AnimatePresence>
        {loading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <main className={loading ? "hidden" : "block"}>
        <Hero />
        <Craftsmanship />
        <TheSlowCraft /> {/* Focus on the time/patience factor */}
        <ScientificRigor />
        <Provenance />
        <TheForge />


        <Manifesto />

      </main>
      {!loading && <Footer />}
    </div>
  );
}
