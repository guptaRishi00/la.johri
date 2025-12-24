"use client";
import React from "react";
import { motion } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";

export default function EnquirePage() {
  return (
    <main className="bg-[#fdfcf9] min-h-screen pt-32 selection:bg-[#c2a35d] selection:text-[#021a14]">
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Editorial & Context */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-12"
          >
            <div>
              <span className="text-[#021a14] uppercase tracking-[0.8em] text-[10px] mb-8 block font-medium">
                The Private Salon
              </span>
              <h1 className="text-6xl md:text-8xl font-serif text-[#021a14] font-light italic leading-none mb-8">
                Begin a <br /> Conversation
              </h1>
              <p className="text-stone-500 text-sm font-light leading-relaxed tracking-wide max-w-md">
                Whether you are seeking a bespoke commission or a private
                viewing of the Emerald Vault, our advisors are here to curate
                your experience.
              </p>
            </div>

            <div className="aspect-[4/5] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
              <img
                src={BRAND_IMAGES.SALON_AMBIANCE}
                className="w-full h-full object-cover"
                alt="Salon Interior"
              />
            </div>
          </motion.div>

          {/* Right Side: High-Touch Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="bg-white p-8 md:p-16 border border-stone-200 shadow-sm"
          >
            <form className="space-y-12">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-[#c2a35d] outline-none text-stone-800 font-light transition-colors"
                  placeholder="The name of the Sovereign"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                  Nature of Inquiry
                </label>
                <select className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-[#c2a35d] outline-none text-stone-800 font-light appearance-none">
                  <option>Bespoke Commission</option>
                  <option>Private Salon Appointment</option>
                  <option>Vault Acquisition</option>
                  <option>Heritage Restoration</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                  Preferred Correspondence
                </label>
                <input
                  type="email"
                  className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-[#c2a35d] outline-none text-stone-800 font-light transition-colors"
                  placeholder="email@domain.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-[#c2a35d] outline-none text-stone-800 font-light transition-colors resize-none"
                  placeholder="Share your intent..."
                />
              </div>

              <button className="w-full py-6 bg-[#021a14] text-[#c2a35d] text-[10px] uppercase tracking-[0.6em] hover:bg-[#c2a35d] hover:text-[#021a14] transition-all duration-700 font-medium">
                Request Engagement
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Details */}
      <section className="py-24 border-t border-stone-200 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <h6 className="text-[8px] uppercase tracking-[0.4em] text-stone-400">
              Email
            </h6>
            <p className="text-[10px] tracking-widest text-[#021a14]">
              concierge@lajohri.com
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[8px] uppercase tracking-[0.4em] text-stone-400">
              Varanasi
            </h6>
            <p className="text-[10px] tracking-widest text-[#021a14]">
              +91 542 000 1924
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[8px] uppercase tracking-[0.4em] text-stone-400">
              Instagram
            </h6>
            <p className="text-[10px] tracking-widest text-[#021a14]">
              @la.johri.heritage
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[8px] uppercase tracking-[0.4em] text-stone-400">
              Hours
            </h6>
            <p className="text-[10px] tracking-widest text-[#021a14]">
              By Appointment Only
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
