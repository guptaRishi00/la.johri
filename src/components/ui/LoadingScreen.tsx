"use client";
import { motion } from "framer-motion";

export const LoadingScreen = () => (
  <motion.div
    exit={{ opacity: 0, scale: 1.05 }}
    transition={{ duration: 1.2, ease: "easeInOut" }}
    className="fixed inset-0 z-100 bg-[#021a14] flex flex-col items-center justify-center overflow-hidden"
  >
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      className="text-center"
    >
      <h1 className="text-3xl md:text-6xl font-serif text-[#c2a35d] tracking-[0.8em] font-light">
        LA.JOHRI
      </h1>
      <div className="mt-12 flex justify-center items-center gap-6">
        <div className="w-12 h-px bg-[#c2a35d]/20" />
        <p className="text-[9px] uppercase tracking-[1em] text-emerald-100/30">
          Heritage 1924
        </p>
        <div className="w-12 h-px bg-[#c2a35d]/20" />
      </div>
    </motion.div>
  </motion.div>
);
