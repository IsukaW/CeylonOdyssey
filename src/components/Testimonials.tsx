import React from 'react';
import { Quote, Award } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const dispatches = [
    {
      quote:
        '“Standing atop Sigiriya before sunrise with our private archaeologist, the jungle mist parting beneath our feet in absolute stillness, was an experience without parallel anywhere in Asia.”',
      author: 'Lord & Lady Harrington',
      residence: 'Cotswolds, United Kingdom',
      expedition: 'The Royal Heritage & Sacred Citadels (8 Days)',
      seal: 'Patron of the Arts',
    },
    {
      quote:
        '“The private observation rail car winding through Ella’s cloud forests was straight out of an Edwardian travelogue. Ceylon Odyssey orchestrates seamless elegance in the world’s most wild settings.”',
      author: 'Evelyn Vance-Sinclair',
      residence: 'Geneva, Switzerland',
      expedition: 'Highland Mist & The Blue Train Legacy (7 Days)',
      seal: 'Connoisseur Circle',
      avatar: '/images/traveler_portrait.jpg',
    },
    {
      quote:
        '“We tracked a female leopard onto a sun-warmed granite boulder at dawn, then flew by seaplane to our clifftop villa above Weligama bay for lunch. Unrivaled choreography.”',
      author: 'Dr. Julian & Clara Thorne',
      residence: 'San Francisco, California',
      expedition: 'Wild Leopard Trails & Southern Whales (10 Days)',
      seal: 'Conservation Fellow',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-[#f6ebd9]/10">
      {/* Editorial Header */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <div className="label-luxury mb-2">Editorial Dispatches</div>
        <h2 className="font-editorial text-3xl sm:text-4xl text-[#fff8ee] tracking-tight mb-3">
          Chronicles of the Discerning Traveler
        </h2>
        <p className="text-xs sm:text-sm text-[#c0c8c3] font-light">
          Excerpts from the private guest monographs of Ceylon Odyssey explorers.
        </p>
      </div>

      {/* Dispatches Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {dispatches.map((disp, i) => (
          <div
            key={i}
            className="glass-card-interactive p-6 sm:p-7 rounded-3xl border border-[#f6ebd9]/10 flex flex-col justify-between"
          >
            <div>
              <Quote className="w-6 h-6 text-[#f4b942]/50 mb-4" />
              <p className="font-editorial text-sm sm:text-base italic text-[#fff8ee] leading-relaxed mb-6 font-light">
                {disp.quote}
              </p>
            </div>

            <div className="pt-4 border-t border-[#f6ebd9]/10 space-y-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  {disp.avatar && (
                    <img
                      src={disp.avatar}
                      alt={disp.author}
                      className="w-8 h-8 rounded-full object-cover border border-[#f4b942]/40"
                    />
                  )}
                  <span className="font-editorial text-sm font-medium text-[#fff8ee]">
                    {disp.author}
                  </span>
                </div>
                <span className="text-[10px] text-[#f4b942] flex items-center gap-1 font-semibold uppercase tracking-wider">
                  <Award className="w-3 h-3" />
                  {disp.seal}
                </span>
              </div>
              <div className="text-[11px] text-[#8a938d]">{disp.residence}</div>
              <div className="text-[10px] text-[#7cd4df] font-mono pt-1">
                {disp.expedition}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Press Seals */}
      <div className="mt-14 pt-8 border-t border-[#f6ebd9]/5 flex flex-wrap items-center justify-center gap-8 sm:gap-16 opacity-60">
        <span className="font-editorial tracking-widest text-sm text-[#c0c8c3] uppercase">
          Condé Nast Traveler • Top Specialist
        </span>
        <span className="font-editorial tracking-widest text-sm text-[#c0c8c3] uppercase">
          Robb Report • Best Private Aviation
        </span>
        <span className="font-editorial tracking-widest text-sm text-[#c0c8c3] uppercase">
          Relais & Châteaux Preferred Escapes
        </span>
        <span className="font-editorial tracking-widest text-sm text-[#c0c8c3] uppercase">
          Pure Luxury Travel Guild
        </span>
      </div>
    </section>
  );
};
