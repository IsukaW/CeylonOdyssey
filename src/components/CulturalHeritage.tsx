import React from 'react';
import { CULTURAL_TRADITIONS } from '../data/cultureAndCuisine';
import { Shield, Flame, Sparkles } from 'lucide-react';

export const CulturalHeritage: React.FC = () => {
  const vesDance = CULTURAL_TRADITIONS[0];
  const moonstone = CULTURAL_TRADITIONS[1];
  const vesakFestival = CULTURAL_TRADITIONS[2];

  return (
    <section id="traditions" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Chapter Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="label-luxury mb-2">Sacred Rhythms & Royal Chronicles</div>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#fff8ee] tracking-tight mb-4">
          The Living Soul of Ceylon
        </h2>
        <p className="text-[#c0c8c3] text-sm sm:text-base font-light leading-relaxed">
          Centuries before Western explorers anchored on the spice coast, Ceylon's hill kingdom preserved intricate cosmic dance traditions, celestial temple stone carvings, and luminous festivals of light that still breathe today.
        </p>
      </div>

      {/* Ves Dance Spotlight */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
        {/* Left Image Hero */}
        <div className="lg:col-span-6">
          <div className="zoom-container rounded-3xl h-[420px] sm:h-[480px] relative border border-[#f4b942]/30 shadow-2xl overflow-hidden">
            <img
              src={vesDance.image}
              alt={vesDance.title}
              className="zoom-image w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-black/20 to-black/40" />

            <div className="absolute top-4 left-4">
              <span className="badge-luxury badge-gold">
                <Flame className="w-3 h-3 text-[#f4b942]" />
                Kandyan Esala Ritual
              </span>
            </div>

            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs uppercase tracking-[0.2em] text-[#f4b942] font-semibold block mb-1">
                {vesDance.era}
              </span>
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#fff8ee] font-medium">
                {vesDance.title}
              </h3>
              <p className="font-editorial text-lg text-[#f4b942]/80 mt-0.5">
                {vesDance.nativeTitle}
              </p>
            </div>
          </div>
        </div>

        {/* Right Details */}
        <div className="lg:col-span-6 space-y-6">
          <div className="glass-card-interactive p-6 sm:p-8 rounded-3xl border border-[#f6ebd9]/15 shadow-2xl">
            <div className="label-luxury mb-2">Sacred Origins & Initiation</div>
            <h4 className="font-editorial text-2xl text-[#fff8ee] mb-4">
              The Cosmic Rite of the Ves Bandhima
            </h4>
            <p className="text-[#c0c8c3] text-sm leading-relaxed font-light mb-6">
              {vesDance.summary}
            </p>

            <blockquote className="font-editorial text-sm italic text-[#fff8ee]/90 border-l-2 border-[#f4b942] pl-4 py-1 mb-6">
              {vesDance.ritualSignificance}
            </blockquote>

            {/* The 4 Sacred Elements */}
            <div className="space-y-3">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-[#f4b942] block">
                The 64 Sacred Insignia
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[#e5e2e1]">
                {vesDance.elements.map((elem, i) => {
                  const [name, desc] = elem.split(': ');
                  return (
                    <div key={i} className="p-3 rounded-xl bg-black/40 border border-[#f6ebd9]/10">
                      <div className="font-semibold text-[#f4b942]">{name}</div>
                      <div className="text-[#8a938d] text-[11px] mt-0.5">{desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Moonstone (Sandakada Pahana) & Cave Temple Feature */}
      <div className="glass-panel-1 p-8 sm:p-10 rounded-3xl border border-[#f6ebd9]/15 relative overflow-hidden shadow-2xl mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f4b942]">
              <Shield className="w-3.5 h-3.5" />
              Ancient Monolithic Architecture
            </div>
            <h3 className="font-editorial text-2xl sm:text-4xl text-[#fff8ee] font-medium">
              The Moonstone (Sandakada Pahana): Threshold to Transcendence
            </h3>
            <p className="text-[#c0c8c3] text-sm sm:text-base font-light leading-relaxed">
              Carved from single granite slabs at the foot of royal monasteries in Anuradhapura and Polonnaruwa, the semicircular Moonstone represents mankind's spiritual journey through the cycle of Samsara towards the tranquil lotus petal of enlightenment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 text-xs">
              {moonstone.elements.map((el, i) => {
                const [symbol, meaning] = el.split(': ');
                return (
                  <div key={i} className="flex items-start gap-2.5">
                    <span className="w-2 h-2 rounded-full bg-[#f4b942] mt-1 shrink-0" />
                    <div>
                      <strong className="text-[#fff8ee] block">{symbol}</strong>
                      <span className="text-[#8a938d]">{meaning}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="zoom-container rounded-2xl h-64 sm:h-80 relative border border-[#f4b942]/30 overflow-hidden shadow-xl">
              <img
                src={moonstone.image}
                alt={moonstone.title}
                className="zoom-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-center">
                <span className="text-[11px] text-[#f4b942] uppercase tracking-widest font-semibold block mb-1">
                  Living 2,000-Year Subterranean Sanctuary
                </span>
                <span className="font-editorial text-sm text-[#fff8ee]">
                  Dambulla Royal Cave Monasteries & Stone Stepping Shrines
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vesak Lantern Illuminations Feature */}
      {vesakFestival && (
        <div className="glass-card-interactive p-8 sm:p-10 rounded-3xl border border-[#f6ebd9]/15 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="zoom-container rounded-2xl h-64 sm:h-80 relative border border-[#f4b942]/30 overflow-hidden shadow-xl">
                <img
                  src={vesakFestival.image}
                  alt={vesakFestival.title}
                  className="zoom-image w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="badge-luxury badge-gold">
                    <Sparkles className="w-3 h-3 text-[#f4b942]" />
                    Festival of Sacred Light
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="font-editorial text-sm text-[#fff8ee] block">
                    {vesakFestival.title}
                  </span>
                  <span className="text-[11px] text-[#f4b942] tracking-wider">
                    {vesakFestival.nativeTitle}
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#f4b942]">
                <Sparkles className="w-3.5 h-3.5" />
                Celebration of Enlightenment
              </div>
              <h3 className="font-editorial text-2xl sm:text-4xl text-[#fff8ee] font-medium">
                {vesakFestival.title}
              </h3>
              <p className="text-[#c0c8c3] text-sm sm:text-base font-light leading-relaxed">
                {vesakFestival.summary}
              </p>

              <blockquote className="font-editorial text-sm italic text-[#fff8ee]/90 border-l-2 border-[#f4b942] pl-4 py-1">
                {vesakFestival.ritualSignificance}
              </blockquote>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                {vesakFestival.elements.map((el, i) => {
                  const [part, detail] = el.split(': ');
                  return (
                    <div key={i} className="p-3 rounded-xl bg-black/40 border border-[#f6ebd9]/10">
                      <div className="font-semibold text-[#f4b942]">{part}</div>
                      <div className="text-[#8a938d] text-[11px] mt-0.5">{detail}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
