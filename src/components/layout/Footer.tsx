import React from "react";
import { Instagram } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-[#021a14] pt-48 pb-12 px-12 text-emerald-100/40 border-t border-emerald-950/20">
      <div className="grid lg:grid-cols-12 gap-24 mb-32">
        <div className="lg:col-span-6">
          <h2 className="text-5xl md:text-7xl font-serif text-[#c0c0c0] mb-12 tracking-[0.2em] font-light">
            LA.JOHRI
          </h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-lg">
            <div className="space-y-4">
              <h6 className="text-[10px] uppercase tracking-[0.4em] text-[#c0c0c0]">
                The Flagship
              </h6>
              <p className="text-xs font-light leading-relaxed">
                Chhattisgarh, India
              </p>
            </div>
            <div className="space-y-4">
              <h6 className="text-[10px] uppercase tracking-[0.4em] text-[#c0c0c0]">
                Inquiries
              </h6>
              <p className="text-xs font-light leading-relaxed underline underline-offset-8">
                lajohri@gmail.com
              </p>
              <p className="text-xs font-light leading-relaxed mt-2">
                +91-9131947571
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <h6 className="text-[10px] uppercase tracking-[0.4em] text-stone-100 mb-10">
            Collections
          </h6>
          <ul className="space-y-6 text-[10px] uppercase tracking-[0.3em]">
            <li>
              <Link href="/products" className="hover:text-[#c0c0c0] transition-colors">
                Our Products
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h6 className="text-[10px] uppercase tracking-[0.4em] text-stone-100 mb-10">
            Connect
          </h6>
          <div className="flex gap-8">
            <a href="https://www.instagram.com/la.johri" target="_blank" rel="noopener noreferrer">
              <Instagram
                size={20}
                className="hover:text-[#c0c0c0] cursor-pointer"
                strokeWidth={1}
              />
            </a>
            <a href="https://wa.me/919131947571" target="_blank" rel="noopener noreferrer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="hover:text-[#c0c0c0] cursor-pointer">
                <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-emerald-950 gap-8 text-[8px] uppercase tracking-[0.5em]">
        <p>© 2025 La.Johri Fine House. Ancient Arts, Modern Souls.</p>
        <div className="flex gap-16">
          <a href="#" className="hover:text-stone-100">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-stone-100">
            Ethical Sourcing
          </a>
        </div>
      </div>
    </footer>
  );
};
