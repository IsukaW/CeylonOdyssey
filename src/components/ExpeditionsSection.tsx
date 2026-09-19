import React, { useState } from 'react';
import { EXPEDITIONS } from '../data/expeditions';
import type { ExpeditionJourney, Currency } from '../types';
import { Clock, Users, Sparkles, Check, ArrowRight, X, Calendar, ShieldCheck, Heart } from 'lucide-react';

interface ExpeditionsSectionProps {
  currentCurrency: Currency;
  onBookExpedition: (expedition: ExpeditionJourney) => void;
  selectedRegionFilter?: string;
}

export const ExpeditionsSection: React.FC<ExpeditionsSectionProps> = ({
  currentCurrency,
  onBookExpedition,
  selectedRegionFilter
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedExpeditionModal, setSelectedExpeditionModal] = useState<ExpeditionJourney | null>(null);
  const [activeDayTab, setActiveDayTab] = useState<number>(1);
  const [savedFavorites, setSavedFavorites] = useState<Record<string, boolean>>({});

  // Currency multiplier conversion rates
  const currencyRates: Record<Currency, { rate: number; symbol: string; suffix?: string }> = {
    USD: { rate: 1, symbol: '$' },
    EUR: { rate: 0.92, symbol: '€' },
    GBP: { rate: 0.79, symbol: '£' },
    LKR: { rate: 305, symbol: 'Rs ' },
  };

  const formatPrice = (baseUSD: number) => {
    const config = currencyRates[currentCurrency];
    const converted = Math.round((baseUSD * config.rate) / 10) * 10;
    return `${config.symbol}${converted.toLocaleString()}`;
  };

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedFavorites((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const categories = [
    { id: 'all', label: 'All Expeditions' },
    { id: 'UNESCO Heritage', label: 'UNESCO Royal Citadels' },
    { id: 'Scenic Train', label: 'Scenic Rail & Tea' },
    { id: 'Leopard Safari', label: 'Wild Safaris & Whales' },
    { id: 'Whitewater Rafting', label: 'Adrenaline & Rainforest' },
  ];

  const filteredExpeditions = EXPEDITIONS.filter((exp) => {
    const matchesCat = activeCategory === 'all' || exp.tags.includes(activeCategory);
    const matchesRegion = !selectedRegionFilter || selectedRegionFilter === 'All' || exp.summary.toLowerCase().includes(selectedRegionFilter.toLowerCase()) || exp.tags.some(t => t.toLowerCase().includes(selectedRegionFilter.toLowerCase()));
    return matchesCat && matchesRegion;
  });

  return (
    <section id="expeditions" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Chapter Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="label-luxury mb-2">Curated Portfolios</div>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#fff8ee] tracking-tight mb-4">
          Signature Island Expeditions
        </h2>
        <p className="text-[#c0c8c3] text-sm sm:text-base font-light leading-relaxed">
          Each itinerary is privately escorted by scholar-naturalists, featuring chartered seaplanes, private vintage train carriages, and after-hours access to ancient sanctuaries.
        </p>

        {/* Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#0f3d2e] text-[#f4b942] border border-[#f4b942] shadow-[0_0_15px_rgba(244,185,66,0.25)]'
                  : 'bg-[#1b1b1b]/80 text-[#8a938d] border border-[#f6ebd9]/10 hover:text-[#f6ebd9]'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Expeditions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredExpeditions.map((exp) => (
          <div
            key={exp.id}
            onClick={() => {
              setSelectedExpeditionModal(exp);
              setActiveDayTab(1);
            }}
            className="glass-card-interactive rounded-3xl overflow-hidden cursor-pointer group flex flex-col justify-between"
          >
            {/* Top Image Hero with Zoom */}
            <div className="relative h-64 sm:h-72 w-full zoom-container">
              <img
                src={exp.heroImage}
                alt={exp.title}
                className="zoom-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-[#1b1b1b]/30 to-black/40" />

              {/* Top Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                {exp.rarityBadge && (
                  <span className="badge-luxury badge-gold">
                    <Sparkles className="w-3 h-3" />
                    {exp.rarityBadge}
                  </span>
                )}
                <button
                  onClick={(e) => toggleFavorite(exp.id, e)}
                  className={`p-2 rounded-full backdrop-blur-md border transition-colors ${
                    savedFavorites[exp.id]
                      ? 'bg-[#f4b942] border-[#f4b942] text-[#131313]'
                      : 'bg-black/40 border-white/20 text-[#fff8ee] hover:text-[#f4b942]'
                  }`}
                  aria-label="Save to favorites"
                >
                  <Heart className={`w-4 h-4 ${savedFavorites[exp.id] ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Bottom Card Meta Tags */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-[#fff8ee]">
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                    <Clock className="w-3.5 h-3.5 text-[#f4b942]" />
                    {exp.durationDays} Days / {exp.durationDays - 1} Nights
                  </span>
                  <span className="flex items-center gap-1 bg-black/60 px-2.5 py-1 rounded-md backdrop-blur-md">
                    <Users className="w-3.5 h-3.5 text-[#f4b942]" />
                    {exp.groupSize.split(' ')[0]}
                  </span>
                </div>
              </div>
            </div>

            {/* Narrative Content */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#fff8ee] group-hover:text-[#f4b942] transition-colors mb-2 font-medium">
                  {exp.title}
                </h3>
                <p className="text-xs uppercase tracking-[0.14em] text-[#f4b942] font-semibold mb-4">
                  {exp.subtitle}
                </p>
                <p className="text-sm text-[#c0c8c3] leading-relaxed line-clamp-3 mb-6 font-light">
                  {exp.summary}
                </p>

                {/* Privileges List Preview */}
                <div className="space-y-1.5 mb-6">
                  {exp.exclusivePrivileges.slice(0, 2).map((priv, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#e5e2e1]">
                      <Sparkles className="w-3.5 h-3.5 text-[#f4b942] shrink-0" />
                      <span>{priv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Price & Action Row */}
              <div className="pt-6 border-t border-[#f6ebd9]/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8a938d] block">
                    All-Inclusive from
                  </span>
                  <span className="font-editorial text-2xl sm:text-3xl text-[#fff8ee] font-medium">
                    {formatPrice(exp.basePriceUSD)}
                    <span className="text-xs font-sans text-[#8a938d] font-normal"> / guest</span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs uppercase tracking-wider text-[#f4b942] font-semibold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    View Itinerary
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Itinerary Modal */}
      {selectedExpeditionModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="glass-modal max-w-4xl w-full rounded-3xl overflow-hidden border border-[#f4b942]/30 max-h-[90vh] flex flex-col shadow-2xl relative my-auto">
            {/* Modal Header */}
            <div className="relative h-56 sm:h-64 shrink-0 overflow-hidden">
              <img
                src={selectedExpeditionModal.heroImage}
                alt={selectedExpeditionModal.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/60 to-black/50" />

              {/* Close Button */}
              <button
                onClick={() => setSelectedExpeditionModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-[#fff8ee] hover:text-[#f4b942] border border-white/20 transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="absolute bottom-6 left-6 right-6">
                <span className="badge-luxury badge-gold mb-2 inline-flex">
                  {selectedExpeditionModal.pace}
                </span>
                <h3 className="font-editorial text-2xl sm:text-4xl text-[#fff8ee] font-medium leading-tight">
                  {selectedExpeditionModal.title}
                </h3>
                <p className="text-xs uppercase tracking-widest text-[#f4b942] font-semibold mt-1">
                  {selectedExpeditionModal.subtitle}
                </p>
              </div>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto flex-1 space-y-8">
              {/* Editorial Quote */}
              <blockquote className="font-editorial text-lg italic text-[#fff8ee]/90 border-l-2 border-[#f4b942] pl-4 py-1">
                {selectedExpeditionModal.editorialQuote}
              </blockquote>

              {/* Quick Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-black/40 border border-[#f6ebd9]/10 text-center">
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8a938d]">Duration</div>
                  <div className="text-sm font-semibold text-[#fff8ee] mt-0.5">
                    {selectedExpeditionModal.durationDays} Days / {selectedExpeditionModal.durationDays - 1} Nights
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8a938d]">Travel Style</div>
                  <div className="text-sm font-semibold text-[#fff8ee] mt-0.5">
                    {selectedExpeditionModal.pace}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8a938d]">Party Size</div>
                  <div className="text-sm font-semibold text-[#fff8ee] mt-0.5">
                    {selectedExpeditionModal.groupSize}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-[#8a938d]">Starting Rate</div>
                  <div className="text-sm font-semibold text-[#f4b942] mt-0.5">
                    {formatPrice(selectedExpeditionModal.basePriceUSD)}
                  </div>
                </div>
              </div>

              {/* Day-by-Day Interactive Navigator */}
              <div>
                <h4 className="font-editorial text-xl text-[#fff8ee] mb-4">
                  Day-by-Day Archival Itinerary
                </h4>

                {/* Day selector pills */}
                <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-4 scrollbar-none">
                  {selectedExpeditionModal.dayPlan.map((d) => (
                    <button
                      key={d.day}
                      onClick={() => setActiveDayTab(d.day)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                        activeDayTab === d.day
                          ? 'bg-[#f4b942] text-[#131313] shadow-[0_0_12px_rgba(244,185,66,0.3)]'
                          : 'bg-[#1b1b1b] text-[#8a938d] hover:text-[#fff8ee] border border-[#f6ebd9]/10'
                      }`}
                    >
                      Day {d.day}
                    </button>
                  ))}
                </div>

                {/* Active Day Detail Card */}
                {(() => {
                  const currentDay =
                    selectedExpeditionModal.dayPlan.find((d) => d.day === activeDayTab) ||
                    selectedExpeditionModal.dayPlan[0];
                  return (
                    <div className="p-5 rounded-2xl bg-[#1b1b1b]/80 border border-[#f4b942]/20 space-y-3 animate-fade-in">
                      <div className="flex items-center justify-between text-xs text-[#f4b942]">
                        <span className="font-semibold uppercase tracking-wider">
                          Day {currentDay.day} • {currentDay.location}
                        </span>
                      </div>
                      <div className="font-editorial text-xl text-[#fff8ee] font-medium">
                        {currentDay.title}
                      </div>
                      <ul className="space-y-2 pt-2 text-xs text-[#c0c8c3]">
                        {currentDay.activities.map((act, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f4b942] mt-1.5 shrink-0" />
                            <span>{act}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })()}
              </div>

              {/* Expedition Gallery Plates */}
              {selectedExpeditionModal.galleryImages && selectedExpeditionModal.galleryImages.length > 0 && (
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-[#f4b942] font-semibold mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Expedition Visual Chronicles
                  </h5>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {selectedExpeditionModal.galleryImages.map((imgUrl, idx) => (
                      <div
                        key={idx}
                        className="relative h-28 sm:h-32 rounded-xl overflow-hidden border border-[#f6ebd9]/10 group/thumb shadow-md"
                      >
                        <img
                          src={imgUrl}
                          alt={`${selectedExpeditionModal.title} Plate ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover/thumb:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                        <span className="absolute bottom-2 left-2 text-[10px] text-[#fff8ee] font-mono tracking-wider">
                          Plate 0{idx + 1}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Inclusions & Privileges Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4 border-t border-[#f6ebd9]/10">
                <div>
                  <h5 className="text-xs uppercase tracking-widest text-[#f4b942] font-semibold mb-3 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    Bespoke Inclusions
                  </h5>
                  <ul className="space-y-2 text-xs text-[#c0c8c3]">
                    {selectedExpeditionModal.inclusions.map((inc, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#16a36a] mt-0.5 shrink-0" />
                        <span>{inc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="text-xs uppercase tracking-widest text-[#f4b942] font-semibold mb-3 flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4" />
                    Exclusive Odyssey Privileges
                  </h5>
                  <ul className="space-y-2 text-xs text-[#c0c8c3]">
                    {selectedExpeditionModal.exclusivePrivileges.map((priv, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Sparkles className="w-3.5 h-3.5 text-[#f4b942] mt-0.5 shrink-0" />
                        <span>{priv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Modal Footer CTA */}
            <div className="p-6 bg-[#131313] border-t border-[#f6ebd9]/10 flex flex-wrap items-center justify-between gap-4 shrink-0">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8a938d]">
                  Bespoke Departure Quote
                </span>
                <div className="font-editorial text-2xl text-[#fff8ee] font-medium">
                  {formatPrice(selectedExpeditionModal.basePriceUSD)}
                  <span className="text-xs font-sans text-[#8a938d]"> / guest</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedExpeditionModal(null)}
                  className="btn-ghost-luxury !py-2.5 !px-4 !text-xs"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const exp = selectedExpeditionModal;
                    setSelectedExpeditionModal(null);
                    onBookExpedition(exp);
                  }}
                  className="btn-gold !py-2.5 !px-6 !text-xs !uppercase !tracking-wider flex items-center gap-2"
                >
                  <Calendar className="w-4 h-4" />
                  Reserve This Expedition
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
