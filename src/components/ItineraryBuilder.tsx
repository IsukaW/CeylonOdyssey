import React, { useState } from 'react';
import type { BespokePlanState, Currency } from '../types';
import { Sparkles, Compass, Shield, Check, Plane, Train, Car, Hotel, Calendar, Users, ArrowRight } from 'lucide-react';

interface ItineraryBuilderProps {
  currentCurrency: Currency;
  onSubmitPlan: (plan: BespokePlanState, estimatedPrice: number) => void;
}

export const ItineraryBuilder: React.FC<ItineraryBuilderProps> = ({
  currentCurrency,
  onSubmitPlan
}) => {
  const [style, setStyle] = useState<BespokePlanState['style']>('Royal Heritage');
  const [duration, setDuration] = useState<number>(10);
  const [transport, setTransport] = useState<BespokePlanState['transport']>('Scenic Air & Chauffeur');
  const [lodging, setLodging] = useState<BespokePlanState['lodgingTier']>('Signature Tea Bungalows & Royal Villas');
  const [travelers, setTravelers] = useState<number>(2);
  const [season, setSeason] = useState<BespokePlanState['season']>('Winter Sun (Dec-Apr)');

  // Dynamic pricing algorithm based on luxury logistics
  const baseRatePerDay: Record<BespokePlanState['style'], number> = {
    'Royal Heritage': 580,
    'Highland Mist & Tea': 540,
    'Wild Coastal Luxury': 680,
    'Ayurvedic Sanctuary': 510,
    'Active Expedition': 490,
  };

  const transportMultiplier: Record<BespokePlanState['transport'], number> = {
    'Scenic Air & Chauffeur': 1.35,
    'Private Railway & Helicopter': 1.45,
    'Luxury Dedicated Chauffeur Guide': 1.0,
  };

  const lodgingMultiplier: Record<BespokePlanState['lodgingTier'], number> = {
    'Signature Tea Bungalows & Royal Villas': 1.25,
    'Eco-Luxury Safari Tents & Private Reserves': 1.3,
    'Oceanfront Estates & Historic Mansions': 1.2,
  };

  const currencyRates: Record<Currency, { rate: number; symbol: string }> = {
    USD: { rate: 1, symbol: '$' },
    EUR: { rate: 0.92, symbol: '€' },
    GBP: { rate: 0.79, symbol: '£' },
    LKR: { rate: 305, symbol: 'Rs ' },
  };

  const calculateEstimateUSD = () => {
    const daily = baseRatePerDay[style] || 550;
    const tMulti = transportMultiplier[transport] || 1;
    const lMulti = lodgingMultiplier[lodging] || 1;
    const subtotalPerPerson = daily * duration * tMulti * lMulti;
    return Math.round(subtotalPerPerson);
  };

  const estimatedUSD = calculateEstimateUSD();
  const activeRate = currencyRates[currentCurrency];
  const formattedEstimate = `${activeRate.symbol}${Math.round((estimatedUSD * activeRate.rate) / 10 * 10).toLocaleString()}`;

  const handleSubmit = () => {
    onSubmitPlan(
      {
        style,
        duration,
        transport,
        lodgingTier: lodging,
        travelers,
        season
      },
      estimatedUSD
    );
  };

  return (
    <section id="bespoke-builder" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Chapter Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="label-luxury mb-2">Tailored Privileges</div>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#fff8ee] tracking-tight mb-4">
          Bespoke Expedition Tailor
        </h2>
        <p className="text-[#c0c8c3] text-sm sm:text-base font-light leading-relaxed">
          Commission a completely bespoke itinerary formulated to your exact pace, private aviation preferences, and architectural taste across Sri Lanka.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Interactive Configurator Panels */}
        <div className="lg:col-span-8 space-y-6">
          {/* Step 1: Expedition Style */}
          <div className="glass-card-interactive p-6 sm:p-7 rounded-3xl border border-[#f6ebd9]/15">
            <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f4b942] block mb-4 flex items-center gap-2">
              <Compass className="w-4 h-4" />
              1. Choose Your Experiential Focus
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'Royal Heritage', label: 'Royal Citadels & Sacred Art', desc: 'Sigiriya, Dambulla & Kandy Temples' },
                { id: 'Highland Mist & Tea', label: 'Highland Tea & Vintage Rail', desc: 'Nine Arches, Ceylon Tea Trails & Gorges' },
                { id: 'Wild Coastal Luxury', label: 'Wild Leopards & Blue Whales', desc: 'Yala Savanna & Mirissa Deep Ocean' },
                { id: 'Ayurvedic Sanctuary', label: 'Ayurvedic Wellness Retreat', desc: 'Holistic healing & medicinal gardens' },
                { id: 'Active Expedition', label: 'Kelani Rapids & Cloud Treks', desc: 'Whitewater rafting & Adam’s Peak dawn' },
              ].map((item) => (
                <div
                  key={item.id}
                  onClick={() => setStyle(item.id as any)}
                  className={`p-3.5 rounded-2xl cursor-pointer border transition-all text-left ${
                    style === item.id
                      ? 'bg-[#0f3d2e] border-[#f4b942] shadow-[0_0_15px_rgba(244,185,66,0.2)]'
                      : 'bg-[#131313] border-[#f6ebd9]/10 hover:border-[#f6ebd9]/30'
                  }`}
                >
                  <div className="font-semibold text-xs text-[#fff8ee] mb-1">{item.label}</div>
                  <div className="text-[10px] text-[#8a938d] leading-tight">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Step 2: Duration & Window */}
          <div className="glass-card-interactive p-6 sm:p-7 rounded-3xl border border-[#f6ebd9]/15">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f4b942] block mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  2. Duration of Sojourn
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[7, 10, 14, 21].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      className={`py-2 rounded-xl text-xs font-semibold transition-all ${
                        duration === d
                          ? 'bg-[#f4b942] text-[#131313] shadow-[0_0_12px_rgba(244,185,66,0.3)]'
                          : 'bg-[#131313] text-[#c0c8c3] border border-[#f6ebd9]/10 hover:text-[#fff8ee]'
                      }`}
                    >
                      {d} Days
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f4b942] block mb-3 flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Preferred Season
                </label>
                <select
                  value={season}
                  onChange={(e) => setSeason(e.target.value as any)}
                  aria-label="Preferred Season"
                  className="w-full bg-[#131313] text-[#fff8ee] text-xs font-medium py-2.5 px-3 rounded-xl border border-[#f6ebd9]/15 focus:border-[#f4b942] focus:outline-none cursor-pointer"
                >
                  <option value="Winter Sun (Dec-Apr)">Winter Sun (Dec–Apr)</option>
                  <option value="Highland Bloom (May-Aug)">Highland Bloom & Tea Flush (May–Aug)</option>
                  <option value="East Coast Lull (Jul-Oct)">East Coast Surf & Safaris (Jul–Oct)</option>
                  <option value="Any Season">Flexible Window</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 3: Transport & Aviation */}
          <div className="glass-card-interactive p-6 sm:p-7 rounded-3xl border border-[#f6ebd9]/15">
            <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f4b942] block mb-3 flex items-center gap-2">
              <Plane className="w-4 h-4" />
              3. Private Transport & Chartered Wings
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {[
                { id: 'Scenic Air & Chauffeur', icon: Plane, label: 'Scenic Floatplane & Chauffeur', desc: 'Water runway landings & Mercedes-Benz transfers' },
                { id: 'Private Railway & Helicopter', icon: Train, label: 'Private Rail Carriage & Chopper', desc: 'Observation car & aerial tea valley transfers' },
                { id: 'Luxury Dedicated Chauffeur Guide', icon: Car, label: 'Dedicated Master Chauffeur', desc: 'Chauffeured luxury SUV with English speaking historian' },
              ].map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    onClick={() => setTransport(item.id as any)}
                    className={`p-3.5 rounded-2xl cursor-pointer border transition-all text-left ${
                      transport === item.id
                        ? 'bg-[#0f3d2e] border-[#f4b942] shadow-[0_0_15px_rgba(244,185,66,0.2)]'
                        : 'bg-[#131313] border-[#f6ebd9]/10 hover:border-[#f6ebd9]/30'
                    }`}
                  >
                    <IconComponent className="w-4 h-4 text-[#f4b942] mb-2" />
                    <div className="font-semibold text-xs text-[#fff8ee] mb-1">{item.label}</div>
                    <div className="text-[10px] text-[#8a938d] leading-tight">{item.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step 4: Lodging Preference & Party */}
          <div className="glass-card-interactive p-6 sm:p-7 rounded-3xl border border-[#f6ebd9]/15">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f4b942] block mb-3 flex items-center gap-2">
                  <Hotel className="w-4 h-4" />
                  4. Lodging Sanctuary Tier
                </label>
                <div className="space-y-2">
                  {[
                    'Signature Tea Bungalows & Royal Villas',
                    'Eco-Luxury Safari Tents & Private Reserves',
                    'Oceanfront Estates & Historic Mansions'
                  ].map((tier) => (
                    <div
                      key={tier}
                      onClick={() => setLodging(tier as any)}
                      className={`p-3 rounded-xl cursor-pointer text-xs font-medium border transition-all ${
                        lodging === tier
                          ? 'bg-[#0f3d2e] text-[#f4b942] border-[#f4b942]'
                          : 'bg-[#131313] text-[#c0c8c3] border-[#f6ebd9]/10 hover:border-[#f6ebd9]/30'
                      }`}
                    >
                      {tier}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-[0.14em] text-[#f4b942] block mb-3 flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Number of Travelers
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {[1, 2, 4, 6].map((num) => (
                    <button
                      key={num}
                      onClick={() => setTravelers(num)}
                      className={`py-2.5 rounded-xl text-xs font-semibold transition-all ${
                        travelers === num
                          ? 'bg-[#f4b942] text-[#131313]'
                          : 'bg-[#131313] text-[#c0c8c3] border border-[#f6ebd9]/10'
                      }`}
                    >
                      {num} {num === 1 ? 'Guest' : 'Guests'}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-[#8a938d] mt-4 leading-relaxed">
                  For parties of 7+ or full private island resort buyouts, please contact our director’s desk directly.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Live Quotation & Summary Dossier */}
        <div className="lg:col-span-4 sticky top-28">
          <div className="glass-card-interactive p-6 sm:p-8 rounded-3xl border border-[#f4b942]/40 shadow-2xl space-y-6">
            <div className="label-luxury flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              Live Archival Estimate
            </div>

            <div>
              <span className="text-[10px] uppercase tracking-wider text-[#8a938d]">
                Tailored Journey Cost
              </span>
              <div className="font-editorial text-3xl sm:text-4xl text-[#fff8ee] font-medium mt-1">
                {formattedEstimate}
                <span className="text-xs font-sans text-[#8a938d] font-normal"> / traveler</span>
              </div>
              <p className="text-[11px] text-[#f4b942] mt-1 font-mono">
                Total Expedition: {activeRate.symbol}
                {(Math.round((estimatedUSD * activeRate.rate) / 10 * 10) * travelers).toLocaleString()} ({travelers} Travelers)
              </p>
            </div>

            {/* Inclusions Checklist */}
            <div className="space-y-2 pt-4 border-t border-[#f6ebd9]/10 text-xs text-[#c0c8c3]">
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#16a36a]" />
                <span>{duration} Days bespoke itinerary with {style} focus</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#16a36a]" />
                <span>{transport} logistics</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#16a36a]" />
                <span>{lodging} tier</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#16a36a]" />
                <span>Private butler & senior archaeologist escort</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#16a36a]" />
                <span>Fast-track international airport tarmac reception</span>
              </div>
            </div>

            {/* Request Commission Action */}
            <button
              onClick={handleSubmit}
              className="w-full btn-gold !py-3 !text-xs !uppercase !tracking-wider flex items-center justify-center gap-2"
            >
              <span>Commission Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <div className="text-center text-[10px] text-[#8a938d] flex items-center justify-center gap-1.5">
              <Shield className="w-3 h-3 text-[#16a36a]" />
              <span>Complimentary bespoke curation • 24h turnaround</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
