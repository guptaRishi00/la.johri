"use client";
import React, { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export const CustomCursor = () => {
  const mouseX = useSpring(0, { stiffness: 400, damping: 30 });
  const mouseY = useSpring(0, { stiffness: 400, damping: 30 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-10 h-10 rounded-full border border-[#c2a35d]/40 pointer-events-none z-9999 hidden md:flex items-center justify-center mix-blend-difference"
      style={{ x: mouseX, y: mouseY, translateX: "-50%", translateY: "-50%" }}
    >
      <div className="w-1 h-1 bg-[#c2a35d] rounded-full" />
    </motion.div>
  );
};
