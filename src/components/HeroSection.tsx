import React, { useState } from 'react';
import { Compass, Sparkles, MapPin, Calendar, Users, ChevronDown, ArrowDown } from 'lucide-react';

interface HeroSectionProps {
  onExploreClick: () => void;
  onFilterChange: (region: string) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onFilterChange }) => {
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [selectedSeason, setSelectedSeason] = useState('Winter Sun (Dec–Apr)');
  const [guestCount, setGuestCount] = useState('2 Guests (Private Villa)');

  const handleSearch = () => {
    onFilterChange(selectedRegion);
    onExploreClick();
  };

  return (
    <section className="relative min-h-[100vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Cinematic Sigiriya Aerial Background with Subtle Parallax & Warm Mist Gradient */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <img
          src="/images/sigiriya.jpg"
          alt="Sigiriya Lion Rock aerial view at golden hour"
          className="w-full h-full object-cover object-center scale-105 filter brightness-[0.75] contrast-[1.08]"
        />
        {/* Editorial Gradients & Vignettes */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/55 to-[#131313]/85" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f3d2e]/60 via-transparent to-[#131313]/70" />
        {/* Lankan Golden Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle,rgba(244,185,66,0.18)_0%,transparent_70%)] blur-3xl pointer-events-none" />
      </div>

      {/* Main Editorial Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-auto mb-12">
        {/* Top Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0f3d2e]/70 border border-[#f4b942]/30 backdrop-blur-md mb-6 animate-fade-in shadow-[0_0_20px_rgba(244,185,66,0.15)]">
          <Sparkles className="w-3.5 h-3.5 text-[#f4b942]" />
          <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#fff8ee]">
            Archival Monograph & Luxury Expeditions
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#f4b942] animate-ping" />
        </div>

        {/* Main Headline */}
        <h1 className="font-editorial text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#fff8ee] tracking-tight leading-[1.05] font-normal mb-6">
          Where Ancient Citadels <br />
          <span className="italic font-light text-[#f4b942] underline decoration-[#f4b942]/30 decoration-wavy underline-offset-8">
            Dissolve into Mist
          </span>
        </h1>

        {/* Editorial Narrative Deck */}
        <p className="font-body text-base sm:text-lg md:text-xl text-[#c0c8c3] max-w-3xl mx-auto font-light leading-relaxed mb-10">
          A collection of ultra-luxury bespoke journeys across Sri Lanka. Trace 5th-century royal cloud citadels, ride the vintage blue train through emerald Ceylon tea estates, encounter apex ocean giants, and witness living sacred cosmic dance rites.
        </p>

        {/* Floating Discovery Command Bar */}
        <div className="glass-card-interactive p-4 sm:p-5 rounded-2xl max-w-4xl mx-auto border border-[#f6ebd9]/20 shadow-2xl text-left">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-[#f6ebd9]/10">
            {/* Region Selector */}
            <div className="space-y-1">
              <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f4b942] flex items-center gap-1.5">
                <MapPin className="w-3 h-3" />
                Province / Realm
              </label>
              <div className="relative">
                <select
                  value={selectedRegion}
                  onChange={(e) => setSelectedRegion(e.target.value)}
                  aria-label="Select Region"
                  className="w-full bg-[#1b1b1b]/80 text-[#fff8ee] text-xs font-medium py-2 px-3 rounded-lg border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="All">All Regions of Ceylon</option>
                  <option value="Cultural Triangle">Cultural Triangle & Citadels</option>
                  <option value="Hill Country">Central Mist & Tea Terraces</option>
                  <option value="Southern Coast">Southern Coast & Galle Fort</option>
                  <option value="Rainforest & Wilderness">Rainforests & Kelani Rapids</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#8a938d] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Season Selector */}
            <div className="space-y-1">
              <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f4b942] flex items-center gap-1.5">
                <Calendar className="w-3 h-3" />
                Travel Window
              </label>
              <div className="relative">
                <select
                  value={selectedSeason}
                  onChange={(e) => setSelectedSeason(e.target.value)}
                  aria-label="Select Travel Window"
                  className="w-full bg-[#1b1b1b]/80 text-[#fff8ee] text-xs font-medium py-2 px-3 rounded-lg border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="Winter Sun (Dec–Apr)">Winter Sun & Blue Whales (Dec–Apr)</option>
                  <option value="Highland Flush (May–Aug)">Highland Tea Harvest (May–Aug)</option>
                  <option value="Esala Perahera (Aug)">Sacred Kandy Esala Perahera (Aug)</option>
                  <option value="Wild Dry Lull (Sep–Nov)">Wildlife Predator Season (Sep–Nov)</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#8a938d] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Guest Configuration */}
            <div className="space-y-1">
              <label className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#f4b942] flex items-center gap-1.5">
                <Users className="w-3 h-3" />
                Party & Lodging
              </label>
              <div className="relative">
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  aria-label="Select Party and Lodging"
                  className="w-full bg-[#1b1b1b]/80 text-[#fff8ee] text-xs font-medium py-2 px-3 rounded-lg border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none appearance-none cursor-pointer"
                >
                  <option value="2 Guests (Private Villa)">2 Guests (Private Heritage Villa)</option>
                  <option value="4-6 Guests (Private Residence)">4–6 Guests (Planter’s Bungalow)</option>
                  <option value="Solo Connoisseur">Solo Connoisseur</option>
                  <option value="Private Family Charter">Private Family Estate Charter</option>
                </select>
                <ChevronDown className="w-3.5 h-3.5 text-[#8a938d] absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-3.5 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs text-[#8a938d]">
              <span className="w-2 h-2 rounded-full bg-[#16a36a]" />
              <span className="font-light">
                Private chauffeurs, scenic seaplanes & Relais & Châteaux lodges verified
              </span>
            </div>
            <button
              onClick={handleSearch}
              className="w-full sm:w-auto btn-gold !py-2.5 !px-6 !text-xs !tracking-[0.1em] !uppercase flex items-center justify-center gap-2"
            >
              <Compass className="w-4 h-4" />
              Explore Curated Journeys
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Heritage Stats Bar */}
      <div className="relative z-10 max-w-6xl mx-auto w-full border-t border-[#f6ebd9]/10 pt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="border-r border-[#f6ebd9]/10 last:border-0">
            <div className="font-editorial text-2xl sm:text-3xl text-[#fff8ee] font-medium">8 UNESCO</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#f4b942] mt-0.5">Living World Heritage Sites</div>
          </div>
          <div className="border-r border-[#f6ebd9]/10 last:border-0">
            <div className="font-editorial text-2xl sm:text-3xl text-[#fff8ee] font-medium">2,500+ Yrs</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#f4b942] mt-0.5">Continuous Recorded Chronicles</div>
          </div>
          <div className="border-r border-[#f6ebd9]/10 last:border-0">
            <div className="font-editorial text-2xl sm:text-3xl text-[#fff8ee] font-medium">1,868 m</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#f4b942] mt-0.5">Single-Origin High-Grown Tea Peaks</div>
          </div>
          <div>
            <div className="font-editorial text-2xl sm:text-3xl text-[#fff8ee] font-medium">100% Private</div>
            <div className="text-[10px] uppercase tracking-[0.14em] text-[#f4b942] mt-0.5">Dedicated Chauffeurs & Concierge</div>
          </div>
        </div>

        {/* Down Indicator */}
        <div className="flex justify-center mt-6">
          <a
            href="#route-explorer"
            className="text-[#8a938d] hover:text-[#f4b942] transition-colors flex items-center gap-2 text-xs tracking-widest uppercase font-medium group"
          >
            <span>Begin Island Exploration</span>
            <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
