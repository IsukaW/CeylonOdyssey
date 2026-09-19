import React from 'react';
import { ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0e0e0e] border-t border-[#f4b942]/20 pt-16 pb-12 px-4 sm:px-6 lg:px-8 text-[#c0c8c3]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#f6ebd9]/10">
        {/* Brand & Manifesto */}
        <div className="md:col-span-5 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[#f4b942]/50 p-0.5 bg-[#0f3d2e]">
              <img
                src="/images/emblem.png"
                alt="Ceylon Odyssey"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <span className="font-editorial text-xl text-[#fff8ee] tracking-tight block">
                Ceylon Odyssey
              </span>
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#f4b942] font-semibold">
                The Resplendent Isle • Estd. Ceylon
              </span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-[#8a938d] font-light leading-relaxed max-w-md">
            Dedicated to the preservation of Sri Lanka's 2,500-year recorded architectural treasures, cloud forest biodiversity, single-estate orthodox teas, and living ceremonial arts through ultra-exclusive, low-impact private travel.
          </p>

          <div className="flex items-center gap-2 text-[11px] text-[#f4b942]">
            <ShieldCheck className="w-4 h-4" />
            <span>Member of Sri Lanka Wildlife & Cultural Heritage Conservation Trust</span>
          </div>
        </div>

        {/* Portfolios Navigation */}
        <div className="md:col-span-3 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#fff8ee]">
            Expeditions & Regions
          </div>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="#expeditions" className="hover:text-[#f4b942] transition-colors">
                The Royal Heritage & Citadels (8 Days)
              </a>
            </li>
            <li>
              <a href="#expeditions" className="hover:text-[#f4b942] transition-colors">
                Highland Mist & The Blue Train (7 Days)
              </a>
            </li>
            <li>
              <a href="#expeditions" className="hover:text-[#f4b942] transition-colors">
                Wild Leopards, Whales & Galle (10 Days)
              </a>
            </li>
            <li>
              <a href="#expeditions" className="hover:text-[#f4b942] transition-colors">
                Kelani Rapids & Rainforest Peaks (6 Days)
              </a>
            </li>
            <li>
              <a href="#route-explorer" className="hover:text-[#f4b942] transition-colors">
                Topographical Route Cartography
              </a>
            </li>
          </ul>
        </div>

        {/* Monograph Dispatches & Newsletter */}
        <div className="md:col-span-4 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-widest text-[#fff8ee]">
            The Archival Dispatch
          </div>
          <p className="text-xs text-[#8a938d] leading-relaxed">
            Receive seasonal monographs on wildlife migration, tea flush harvests, and private temple access invitations.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for subscribing to the Ceylon Odyssey Archival Dispatch.');
            }}
            className="flex gap-2"
          >
            <input
              type="email"
              required
              placeholder="Enter your private email"
              className="bg-[#1b1b1b] text-xs text-[#fff8ee] py-2.5 px-3 rounded-lg border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none flex-1 placeholder:text-[#8a938d]/50"
            />
            <button
              type="submit"
              className="btn-gold !py-2 !px-4 !text-xs !uppercase !tracking-wider shrink-0"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Legal & Colophon */}
      <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#8a938d]">
        <div>
          © {new Date().getFullYear()} Ceylon Odyssey Inc. All Rights Reserved. Architectural Monograph Series.
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-[#f4b942] transition-colors">
            Privacy Charter
          </a>
          <a href="#" className="hover:text-[#f4b942] transition-colors">
            Conservation Ledger
          </a>
          <a href="#" className="hover:text-[#f4b942] transition-colors">
            Terms of Commission
          </a>
        </div>
      </div>
    </footer>
  );
};
