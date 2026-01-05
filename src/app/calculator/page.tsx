"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Gem,
  Sparkles,
  MapPin,
  Scale,
  User,
  Calendar,
  Clock,
  ArrowRight,
} from "lucide-react";
import { BRAND_IMAGES } from "@/constants/images"; // Ensure this import exists

// --- Types ---
type UserData = {
  name: string;
  gender: string;
  weight: string;
  dob: string;
  time: string;
  place: string;
};

type GemResult = {
  stoneName: string;
  sanskritName: string;
  weightRatti: number;
  metal: string;
  finger: string;
  day: string;
  mantra: string;
  description: string;
};

// --- Helper Logic (The "Brain") ---
const calculateGemstone = (dob: string, weightKg: number): GemResult => {
  const date = new Date(dob);
  const month = date.getMonth() + 1; // 1-12
  const day = date.getDate();

  // Simplified Zodiac Lookup (Western Sun Sign approximation)
  let sign = "";
  if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) sign = "Aries";
  else if ((month == 4 && day >= 20) || (month == 5 && day <= 20))
    sign = "Taurus";
  else if ((month == 5 && day >= 21) || (month == 6 && day <= 20))
    sign = "Gemini";
  else if ((month == 6 && day >= 21) || (month == 7 && day <= 22))
    sign = "Cancer";
  else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) sign = "Leo";
  else if ((month == 8 && day >= 23) || (month == 9 && day <= 22))
    sign = "Virgo";
  else if ((month == 9 && day >= 23) || (month == 10 && day <= 22))
    sign = "Libra";
  else if ((month == 10 && day >= 23) || (month == 11 && day <= 21))
    sign = "Scorpio";
  else if ((month == 11 && day >= 22) || (month == 12 && day <= 21))
    sign = "Sagittarius";
  else if ((month == 12 && day >= 22) || (month == 1 && day <= 19))
    sign = "Capricorn";
  else if ((month == 1 && day >= 20) || (month == 2 && day <= 18))
    sign = "Aquarius";
  else sign = "Pisces";

  const idealRatti = (weightKg / 12).toFixed(2);

  const gems: Record<string, GemResult> = {
    Aries: {
      stoneName: "Red Coral",
      sanskritName: "Moonga",
      weightRatti: Number(idealRatti),
      metal: "Copper or Gold",
      finger: "Ring Finger",
      day: "Tuesday",
      mantra: "Om Ang Angarkaya Namaha",
      description: "Boosts courage, energy, and leadership qualities.",
    },
    Taurus: {
      stoneName: "Diamond",
      sanskritName: "Heera",
      weightRatti: Number(idealRatti),
      metal: "Gold or Platinum",
      finger: "Middle Finger",
      day: "Friday",
      mantra: "Om Shum Shukraya Namaha",
      description: "Enhances luxury, love, and artistic abilities.",
    },
    Gemini: {
      stoneName: "Emerald",
      sanskritName: "Panna",
      weightRatti: Number(idealRatti),
      metal: "Gold",
      finger: "Little Finger",
      day: "Wednesday",
      mantra: "Om Bum Budhaya Namaha",
      description: "Improves communication, intellect, and business.",
    },
    Cancer: {
      stoneName: "Pearl",
      sanskritName: "Moti",
      weightRatti: Number(idealRatti),
      metal: "Silver",
      finger: "Little Finger",
      day: "Monday",
      mantra: "Om Som Somaya Namaha",
      description: "Brings emotional balance and mental peace.",
    },
    Leo: {
      stoneName: "Ruby",
      sanskritName: "Manik",
      weightRatti: Number(idealRatti),
      metal: "Gold or Copper",
      finger: "Ring Finger",
      day: "Sunday",
      mantra: "Om Hrim Suryaya Namaha",
      description: "Increases authority, confidence, and health.",
    },
    Virgo: {
      stoneName: "Emerald",
      sanskritName: "Panna",
      weightRatti: Number(idealRatti),
      metal: "Gold",
      finger: "Little Finger",
      day: "Wednesday",
      mantra: "Om Bum Budhaya Namaha",
      description: "Sharpen intellect and analytical skills.",
    },
    Libra: {
      stoneName: "Diamond",
      sanskritName: "Heera",
      weightRatti: Number(idealRatti),
      metal: "Gold/Platinum",
      finger: "Middle Finger",
      day: "Friday",
      mantra: "Om Shum Shukraya Namaha",
      description: "Attracts fame, prosperity, and harmony.",
    },
    Scorpio: {
      stoneName: "Red Coral",
      sanskritName: "Moonga",
      weightRatti: Number(idealRatti),
      metal: "Copper or Gold",
      finger: "Ring Finger",
      day: "Tuesday",
      mantra: "Om Ang Angarkaya Namaha",
      description: "Provides physical strength and protection.",
    },
    Sagittarius: {
      stoneName: "Yellow Sapphire",
      sanskritName: "Pukhraj",
      weightRatti: Number(idealRatti),
      metal: "Gold",
      finger: "Index Finger",
      day: "Thursday",
      mantra: "Om Brim Brihaspataye Namaha",
      description: "Brings wisdom, fortune, and spirituality.",
    },
    Capricorn: {
      stoneName: "Blue Sapphire",
      sanskritName: "Neelam",
      weightRatti: Number(idealRatti),
      metal: "Silver/Iron",
      finger: "Middle Finger",
      day: "Saturday",
      mantra: "Om Sham Shanaishcharaya Namaha",
      description: "Offers protection, wealth, and focus.",
    },
    Aquarius: {
      stoneName: "Blue Sapphire",
      sanskritName: "Neelam",
      weightRatti: Number(idealRatti),
      metal: "Silver/Gold",
      finger: "Middle Finger",
      day: "Saturday",
      mantra: "Om Sham Shanaishcharaya Namaha",
      description: "Enhances intuition and removes obstacles.",
    },
    Pisces: {
      stoneName: "Yellow Sapphire",
      sanskritName: "Pukhraj",
      weightRatti: Number(idealRatti),
      metal: "Gold",
      finger: "Index Finger",
      day: "Thursday",
      mantra: "Om Brim Brihaspataye Namaha",
      description: "Grant spiritual growth and prosperity.",
    },
  };

  return gems[sign] || gems["Aries"];
};

export default function GemstoneCalculator() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GemResult | null>(null);

  const [formData, setFormData] = useState<UserData>({
    name: "",
    gender: "male",
    weight: "",
    dob: "",
    time: "",
    place: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      const gemResult = calculateGemstone(
        formData.dob,
        Number(formData.weight)
      );
      setResult(gemResult);
      setLoading(false);
      setStep(2);
    }, 2000);
  };

  const reset = () => {
    setStep(1);
    setResult(null);
    setFormData({
      name: "",
      gender: "male",
      weight: "",
      dob: "",
      time: "",
      place: "",
    });
  };

  return (
    <main className="bg-[#021a14] min-h-screen pt-32 selection:bg-[#c2a35d] selection:text-[#021a14]">
      <section className="px-6 md:px-12 lg:px-24 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-start">
          {/* Left Side: Context & Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2 }}
            className="space-y-12 order-2 lg:order-1"
          >
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Sparkles className="text-[#c2a35d] w-4 h-4" />
                <span className="text-[#c2a35d] uppercase tracking-[0.8em] text-[10px] block font-medium">
                  Vedic Astrological Science
                </span>
              </div>
              <h1 className="text-6xl md:text-8xl font-serif text-stone-100 font-light italic leading-none mb-8">
                The Cosmic <br /> Alignment
              </h1>
              <p className="text-emerald-100/40 text-sm font-light leading-loose tracking-wide max-w-md">
                Gemstones are not merely ornaments; they are conductors of
                planetary energy. Enter your details to discover the stone that
                harmonizes with your lineage and spirit.
              </p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden group">
              <div className="absolute inset-0 border-[20px] border-[#021a14]/10 z-20 pointer-events-none" />
              <div className="absolute inset-0 bg-[#021a14]/20 z-10" />
              <img
                src={BRAND_IMAGES.CRAFT_HANDS}
                className="w-full h-full object-cover grayscale opacity-60"
                alt="Ancient Wisdom"
              />
            </div>
          </motion.div>

          {/* Right Side: The Calculator Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3 }}
            className="bg-emerald-950/20 p-8 md:p-16 border border-[#c2a35d]/10 backdrop-blur-sm order-1 lg:order-2"
          >
            <AnimatePresence mode="wait">
              {/* --- LOADING STATE --- */}
              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center min-h-[400px] space-y-6"
                >
                  <div className="w-16 h-16 border-t-2 border-b-2 border-[#c2a35d] rounded-full animate-spin"></div>
                  <p className="text-[10px] uppercase tracking-[0.4em] text-[#c2a35d] animate-pulse">
                    Consulting the Ephemeris...
                  </p>
                </motion.div>
              )}

              {/* --- FORM STATE --- */}
              {!loading && step === 1 && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="space-y-1">
                    <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                      Full Name
                    </label>
                    <div className="relative">
                      <User
                        className="absolute right-0 top-4 text-[#c2a35d]/40 w-4 h-4"
                        strokeWidth={1}
                      />
                      <input
                        required
                        name="name"
                        onChange={handleChange}
                        value={formData.name}
                        className="w-full bg-transparent border-b border-[#c2a35d]/20 py-4 focus:border-[#c2a35d] outline-none text-stone-100 font-serif text-lg transition-colors placeholder:text-emerald-100/10"
                        placeholder="The name of the Sovereign"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                        Date of Birth
                      </label>
                      <div className="relative">
                        <Calendar
                          className="absolute right-0 top-4 text-[#c2a35d]/40 w-4 h-4"
                          strokeWidth={1}
                        />
                        <input
                          required
                          type="date"
                          name="dob"
                          onChange={handleChange}
                          value={formData.dob}
                          className="w-full bg-transparent border-b border-[#c2a35d]/20 py-4 focus:border-[#c2a35d] outline-none text-stone-100 font-light transition-colors text-sm uppercase tracking-widest [color-scheme:dark]"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                        Time of Birth
                      </label>
                      <div className="relative">
                        <Clock
                          className="absolute right-0 top-4 text-[#c2a35d]/40 w-4 h-4"
                          strokeWidth={1}
                        />
                        <input
                          required
                          type="time"
                          name="time"
                          onChange={handleChange}
                          value={formData.time}
                          className="w-full bg-transparent border-b border-[#c2a35d]/20 py-4 focus:border-[#c2a35d] outline-none text-stone-100 font-light transition-colors text-sm uppercase tracking-widest [color-scheme:dark]"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                        Place of Birth
                      </label>
                      <div className="relative">
                        <MapPin
                          className="absolute right-0 top-4 text-[#c2a35d]/40 w-4 h-4"
                          strokeWidth={1}
                        />
                        <input
                          required
                          name="place"
                          onChange={handleChange}
                          value={formData.place}
                          className="w-full bg-transparent border-b border-[#c2a35d]/20 py-4 focus:border-[#c2a35d] outline-none text-stone-100 font-serif transition-colors"
                          placeholder="City, Country"
                        />
                      </div>
                    </div>
                    <div className="space-y-1">
                      <label className="text-[9px] uppercase tracking-[0.4em] text-stone-400">
                        Body Weight (KG)
                      </label>
                      <div className="relative">
                        <Scale
                          className="absolute right-0 top-4 text-[#c2a35d]/40 w-4 h-4"
                          strokeWidth={1}
                        />
                        <input
                          required
                          type="number"
                          name="weight"
                          onChange={handleChange}
                          value={formData.weight}
                          className="w-full bg-transparent border-b border-[#c2a35d]/20 py-4 focus:border-[#c2a35d] outline-none text-stone-100 font-serif transition-colors"
                          placeholder="00"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="pt-8">
                    <button className="w-full py-5 bg-[#c2a35d] text-[#021a14] text-[10px] uppercase tracking-[0.4em] hover:bg-stone-100 transition-all duration-700 font-medium flex items-center justify-center gap-4">
                      <Gem size={14} /> Calculate Gemstone
                    </button>
                  </div>
                </motion.form>
              )}

              {/* --- RESULT STATE --- */}
              {!loading && step === 2 && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col h-full"
                >
                  <div className="text-center mb-12 border-b border-[#c2a35d]/10 pb-12">
                    <span className="text-[#c2a35d] text-[9px] uppercase tracking-[0.6em] block mb-4">
                      Your Divine Prescription
                    </span>
                    <h2 className="text-5xl font-serif text-stone-100 italic font-light mb-2">
                      {result.stoneName}
                    </h2>
                    <p className="text-emerald-100/40 text-sm tracking-widest uppercase">
                      {result.sanskritName}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-y-12 gap-x-4 mb-12">
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-2">
                        Ideal Weight
                      </p>
                      <p className="text-xl font-serif text-[#c2a35d]">
                        {result.weightRatti} Ratti
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-2">
                        Metal
                      </p>
                      <p className="text-xl font-serif text-stone-200">
                        {result.metal}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-2">
                        Finger
                      </p>
                      <p className="text-xl font-serif text-stone-200">
                        {result.finger}
                      </p>
                    </div>
                    <div>
                      <p className="text-[9px] uppercase tracking-[0.4em] text-stone-500 mb-2">
                        Day
                      </p>
                      <p className="text-xl font-serif text-stone-200">
                        {result.day}
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#021a14] p-8 border border-[#c2a35d]/20 relative overflow-hidden mb-8">
                    <div className="relative z-10 text-center">
                      <p className="text-[9px] text-[#c2a35d] uppercase tracking-[0.4em] mb-4">
                        Empowerment Mantra
                      </p>
                      <p className="text-xl md:text-2xl font-serif italic text-stone-100 leading-relaxed">
                        "{result.mantra}"
                      </p>
                    </div>
                    {/* Decorative texture */}
                    <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
                  </div>

                  <div className="flex flex-col gap-4 mt-auto">
                    <button
                      onClick={reset}
                      className="text-[9px] uppercase tracking-[0.2em] text-emerald-100/30 hover:text-[#c2a35d] transition-colors"
                    >
                      Calculate for another
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
