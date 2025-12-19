"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";

export const Hero = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 200]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section className="relative h-auto w-full bg-[#021a14] flex items-center justify-center overflow-hidden">
      {/* Background Texture - Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-linear-to-b from-[#021a14]/90 via-transparent to-[#021a14] z-10" />
        <img
          src={BRAND_IMAGES.GOLD_TEXTURE}
          alt="Hero Brand Motif"
          className="w-full h-full object-cover opacity-30 md:opacity-40 scale-110"
        />
      </motion.div>

      {/* Content Container */}
      <div className="relative z-20 text-center container px-6 flex flex-col items-center justify-center mt-40 max-w-7xl mx-auto">
        {/* 1. The Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
          className="mb-8 md:mb-16 lg:mb-10"
        >
          <span className="text-[#c2a35d] font-light text-[9px] md:text-[11px] uppercase tracking-[0.6em] md:tracking-[1em] mb-4 md:mb-6 block">
            Antiquity Preserved
          </span>
          <div className="w-12 md:w-16 h-px bg-[#c2a35d]/30 mx-auto" />
        </motion.div>

        {/* 2. The Main Heading - Responsive fluid sizing */}
        <div className="overflow-hidden mb-10 md:mb-20 lg:mb-10">
          <motion.h2
            initial={{ y: "100%", rotate: 2 }}
            animate={{ y: 0, rotate: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="text-5xl sm:text-6xl md:text-[9vw] lg:text-[10vw] font-serif text-stone-100 leading-[1.2] md:leading-[1.1] font-light"
          >
            A Sacred <br className="md:hidden" />
            <span className="italic text-[#c2a35d]/80"> Presence</span>
          </motion.h2>
        </div>

        {/* 3. The Description - Width controlled for readability */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          className="max-w-70 sm:max-w-md md:max-w-2xl mx-auto"
        >
          <p className="text-emerald-100/50 text-[10px] md:text-xs tracking-[0.3em] md:tracking-[0.5em] leading-loose md:leading-[2.2] font-light uppercase">
            From the deep earth to the divine body.{" "}
            <br className="hidden sm:block" />
            Handcrafted artifacts for the modern sovereign.
          </p>
        </motion.div>

        {/* 4. Scroll Indicator - Hidden on very small screens to avoid UI clutter */}
        <motion.div
          style={{ opacity }}
          className="lg:hidden bottom-8 md:bottom-12 left-1/2 mt-10 flex flex-col items-center"
        >
          <div className="w-px h-12 md:h-20 bg-linear-to-b from-[#c2a35d] to-transparent" />
          <span className="text-[7px] md:text-[8px] uppercase tracking-[0.4em] md:tracking-[0.5em] text-[#c2a35d] mt-4 md:mt-6 whitespace-nowrap">
            Begin Journey
          </span>
        </motion.div>
      </div>
    </section>
  );
};
