import React, { useState } from 'react';
import { CULINARY_FEAST, TEA_TERROIRS } from '../data/cultureAndCuisine';
import { Utensils, Coffee, ChevronRight, Flame } from 'lucide-react';

export const SensoryCeylon: React.FC = () => {
  const [activeSensoryTab, setActiveSensoryTab] = useState<'cuisine' | 'tea'>('cuisine');
  const [selectedDishId, setSelectedDishId] = useState<string>(CULINARY_FEAST[0].id);
  const [selectedTeaId, setSelectedTeaId] = useState<string>(TEA_TERROIRS[0].id);

  const selectedDish = CULINARY_FEAST.find((d) => d.id === selectedDishId) || CULINARY_FEAST[0];

  return (
    <section id="sensory-ceylon" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Chapter Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="label-luxury mb-2">Epicurean Heritage & Single-Origin Terroir</div>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#fff8ee] tracking-tight mb-4">
          Sensory Ceylon: Earth & Infusion
        </h2>
        <p className="text-[#c0c8c3] text-sm sm:text-base font-light leading-relaxed">
          From slow-simmered earthen clay pot curries wrapped in fragrant banana leaves to the mist-kissed single-estate orthodox teas of the central highlands.
        </p>

        {/* Sensory Mode Switcher */}
        <div className="flex items-center justify-center gap-3 mt-8">
          <button
            onClick={() => setActiveSensoryTab('cuisine')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeSensoryTab === 'cuisine'
                ? 'bg-[#f4b942] text-[#131313] shadow-[0_0_20px_rgba(244,185,66,0.3)]'
                : 'bg-[#1b1b1b] text-[#8a938d] hover:text-[#fff8ee] border border-[#f6ebd9]/10'
            }`}
          >
            <Utensils className="w-4 h-4" />
            Banana Leaf Gastronomy
          </button>
          <button
            onClick={() => setActiveSensoryTab('tea')}
            className={`px-5 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all ${
              activeSensoryTab === 'tea'
                ? 'bg-[#f4b942] text-[#131313] shadow-[0_0_20px_rgba(244,185,66,0.3)]'
                : 'bg-[#1b1b1b] text-[#8a938d] hover:text-[#fff8ee] border border-[#f6ebd9]/10'
            }`}
          >
            <Coffee className="w-4 h-4" />
            High-Grown Tea Terroirs
          </button>
        </div>
      </div>

      {/* Tab 1: Banana Leaf Gastronomy */}
      {activeSensoryTab === 'cuisine' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center animate-fade-in">
          {/* Left: Dish Selector List */}
          <div className="lg:col-span-5 space-y-3">
            {CULINARY_FEAST.map((dish) => (
              <div
                key={dish.id}
                onClick={() => setSelectedDishId(dish.id)}
                className={`p-4 sm:p-5 rounded-2xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                  selectedDishId === dish.id
                    ? 'bg-[#0f3d2e]/80 border-[#f4b942] shadow-[0_0_20px_rgba(244,185,66,0.15)]'
                    : 'bg-[#1b1b1b]/70 border-[#f6ebd9]/10 hover:border-[#f6ebd9]/30'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-editorial text-lg text-[#fff8ee] font-medium">
                      {dish.name}
                    </span>
                  </div>
                  <span className="text-[11px] text-[#f4b942] tracking-wider uppercase font-semibold">
                    {dish.sinhalaName}
                  </span>
                  <p className="text-xs text-[#8a938d] mt-1 line-clamp-1">
                    {dish.tagline}
                  </p>
                </div>
                <ChevronRight
                  className={`w-5 h-5 transition-transform ${
                    selectedDishId === dish.id
                      ? 'text-[#f4b942] translate-x-1'
                      : 'text-[#8a938d]'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right: Selected Dish Showcase with Generated Stitch Asset */}
          <div className="lg:col-span-7">
            <div className="glass-card-interactive p-6 sm:p-8 rounded-3xl border border-[#f4b942]/30 shadow-2xl space-y-6">
              {/* Image Hero with Zoom */}
              <div className="zoom-container rounded-2xl h-64 sm:h-72 w-full relative border border-[#f6ebd9]/15">
                <img
                  src={selectedDish.image}
                  alt={selectedDish.name}
                  className="zoom-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1b1b1b] via-transparent to-black/30" />
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="badge-luxury badge-gold">
                    <Flame className="w-3 h-3 text-[#f4b942]" />
                    Clay Pot Woodfire Heritage
                  </span>
                  <span className="text-xs font-editorial text-[#fff8ee] bg-black/50 px-3 py-1 rounded-md backdrop-blur-md">
                    {selectedDish.sinhalaName}
                  </span>
                </div>
              </div>

              <div>
                <h3 className="font-editorial text-2xl sm:text-3xl text-[#fff8ee] font-medium mb-1">
                  {selectedDish.name}
                </h3>
                <p className="text-xs uppercase tracking-[0.14em] text-[#f4b942] font-semibold mb-4">
                  {selectedDish.tagline}
                </p>
                <p className="text-[#c0c8c3] text-sm leading-relaxed font-light mb-6">
                  {selectedDish.description}
                </p>
              </div>

              {/* Ingredients & Flavor Profile Pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#f6ebd9]/10 text-xs">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8a938d] block mb-2 font-semibold">
                    Core Island Ingredients
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDish.keyIngredients.map((ing, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#131313] text-[#e5e2e1] border border-[#f6ebd9]/10"
                      >
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#8a938d] block mb-2 font-semibold">
                    Flavor Profile
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedDish.flavorProfile.map((flv, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-md bg-[#0f3d2e] text-[#f4b942] border border-[#f4b942]/30"
                      >
                        {flv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Recommended Tea / Beverage Pairing */}
              <div className="p-4 rounded-xl bg-black/40 border border-[#f4b942]/20 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2.5">
                  <Coffee className="w-4 h-4 text-[#f4b942]" />
                  <span className="text-[#8a938d]">Sommelier Beverage Pairing:</span>
                  <span className="text-[#fff8ee] font-medium">{selectedDish.pairing}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: High-Grown Tea Terroirs */}
      {activeSensoryTab === 'tea' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
          {TEA_TERROIRS.map((tea) => (
            <div
              key={tea.id}
              onClick={() => setSelectedTeaId(tea.id)}
              className={`glass-card-interactive p-6 rounded-3xl cursor-pointer border transition-all flex flex-col justify-between ${
                selectedTeaId === tea.id
                  ? 'border-[#f4b942] bg-[#0f3d2e]/70 shadow-[0_0_25px_rgba(244,185,66,0.2)]'
                  : 'border-[#f6ebd9]/10 bg-[#1b1b1b]/80 hover:border-[#f6ebd9]/30'
              }`}
            >
              <div>
                {/* Liquor Color Swatch */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-[#8a938d] font-semibold">
                    Elevation
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="text-[10px] text-[#c0c8c3]">Liquor Tone:</span>
                    <span
                      className="w-4 h-4 rounded-full border border-white/30 shadow-sm"
                      style={{ backgroundColor: tea.liquorColor }}
                      title="Approximate brewed liquor color"
                    />
                  </div>
                </div>

                <div className="font-mono text-xs text-[#f4b942] font-semibold mb-2">
                  {tea.elevationMeters}
                </div>

                <h3 className="font-editorial text-2xl text-[#fff8ee] font-medium mb-1">
                  {tea.region}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#7cd4df] font-semibold mb-4">
                  {tea.character}
                </p>

                {/* Flavor Notes */}
                <div className="space-y-1.5 mb-6">
                  <span className="text-[10px] uppercase tracking-wider text-[#8a938d] block font-semibold">
                    Sensory Tasting Notes
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {tea.flavorNotes.map((note, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded bg-black/40 text-[#fff8ee] border border-[#f6ebd9]/10"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-[#f6ebd9]/10 text-xs">
                <div className="text-[10px] uppercase tracking-wider text-[#8a938d]">
                  Prominent Estates
                </div>
                <div className="text-[#c0c8c3] font-medium mt-0.5">
                  {tea.prominentEstates.join(', ')}
                </div>
                <div className="text-[10px] text-[#f4b942] mt-2">
                  Best Flush: {tea.bestPluckingSeason}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
