import React from "react";
import { Instagram, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-[#021a14] pt-48 pb-12 px-12 text-emerald-100/40 border-t border-emerald-950/20">
      <div className="grid lg:grid-cols-12 gap-24 mb-32">
        <div className="lg:col-span-6">
          <h2 className="text-5xl md:text-7xl font-serif text-[#c2a35d] mb-12 tracking-[0.2em] font-light">
            LA.JOHRI
          </h2>
          <div className="grid md:grid-cols-2 gap-16 max-w-lg">
            <div className="space-y-4">
              <h6 className="text-[10px] uppercase tracking-[0.4em] text-[#c2a35d]">
                The Flagship
              </h6>
              <p className="text-xs font-light leading-relaxed">
                Level 4, The Royal Orchid <br /> Varanasi, Heritage District
                221001
              </p>
            </div>
            <div className="space-y-4">
              <h6 className="text-[10px] uppercase tracking-[0.4em] text-[#c2a35d]">
                Inquiries
              </h6>
              <p className="text-xs font-light leading-relaxed underline underline-offset-8">
                concierge@lajohri.com
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
              <a href="#" className="hover:text-[#c2a35d] transition-colors">
                Temple Heritage
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c2a35d] transition-colors">
                Emerald Archives
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c2a35d] transition-colors">
                Bespoke Couture
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#c2a35d] transition-colors">
                The Royal Male
              </a>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h6 className="text-[10px] uppercase tracking-[0.4em] text-stone-100 mb-10">
            Connect
          </h6>
          <div className="flex gap-8 mb-16">
            <Instagram
              size={20}
              className="hover:text-[#c2a35d] cursor-pointer"
              strokeWidth={1}
            />
            <Facebook
              size={20}
              className="hover:text-[#c2a35d] cursor-pointer"
              strokeWidth={1}
            />
          </div>
          <div className="relative border-b border-[#c2a35d]/30 pb-3">
            <input
              type="email"
              placeholder="JOIN THE LIST"
              className="bg-transparent text-[10px] tracking-[0.4em] outline-none w-full placeholder:text-emerald-100/20"
            />
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
