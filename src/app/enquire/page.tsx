"use client";
import React from "react";
import { motion } from "framer-motion";
import { BRAND_IMAGES } from "@/constants/images";

export default function EnquirePage() {
  return (
    <main className="bg-[#fdfcf9] min-h-screen pt-32 selection:bg-[#c0c0c0] selection:text-[#021a14]">
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
            className="bg-white p-8 md:p-16 border border-stone-200 shadow-sm"
          >
            <form className="space-y-12">
              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                  Full Name
                </label>
                <input
                  type="text"
                  className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-[#c0c0c0] outline-none text-stone-800 font-light transition-colors"
                  placeholder="The name of the Sovereign"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                  Nature of Inquiry
                </label>
                <select className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-[#c0c0c0] outline-none text-stone-800 font-light appearance-none">
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
                  className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-[#c0c0c0] outline-none text-stone-800 font-light transition-colors"
                  placeholder="email@domain.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-transparent border-b border-stone-200 py-4 focus:border-[#c0c0c0] outline-none text-stone-800 font-light transition-colors resize-none"
                  placeholder="Share your intent..."
                />
              </div>

              <button className="w-full py-6 bg-[#021a14] text-[#c0c0c0] text-[10px] uppercase tracking-[0.6em] hover:bg-[#c0c0c0] hover:text-[#021a14] transition-all duration-700 font-medium">
                Request Engagement
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Footer Contact Details */}
      <section className="py-24 border-t border-stone-200 bg-stone-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
          <div className="space-y-2">
            <h6 className="text-[8px] uppercase tracking-[0.4em] text-stone-400">
              Email
            </h6>
            <a href="mailto:Lajohri@gmail.com" className="text-[10px] tracking-widest text-[#021a14] hover:text-[#c0c0c0] transition-colors">
              Lajohri@gmail.com
            </a>
          </div>
          <div className="space-y-2">
            <h6 className="text-[8px] uppercase tracking-[0.4em] text-stone-400">
              Phone
            </h6>
            <a href="tel:+919131947571" className="text-[10px] tracking-widest text-[#021a14] hover:text-[#c0c0c0] transition-colors">
              +91 91319 47571
            </a>
          </div>
          <div className="space-y-2">
            <h6 className="text-[8px] uppercase tracking-[0.4em] text-stone-400">
              Location
            </h6>
            <p className="text-[10px] tracking-widest text-[#021a14]">
              Raipur, Chhattisgarh
            </p>
          </div>
          <div className="space-y-2">
            <h6 className="text-[8px] uppercase tracking-[0.4em] text-stone-400">
              Instagram
            </h6>
            <a href="https://www.instagram.com/la.johri" target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest text-[#021a14] hover:text-[#c0c0c0] transition-colors">
              @la.johri
            </a>
          </div>

        </div>
      </section>
    </main>
  );
}
