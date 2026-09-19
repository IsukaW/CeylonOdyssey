import { useState } from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { InteractiveMap } from './components/InteractiveMap';
import { ExpeditionsSection } from './components/ExpeditionsSection';
import { SensoryCeylon } from './components/SensoryCeylon';
import { CulturalHeritage } from './components/CulturalHeritage';
import { ItineraryBuilder } from './components/ItineraryBuilder';
import { MonographGallery } from './components/MonographGallery';
import { Testimonials } from './components/Testimonials';
import { ConciergeModal } from './components/ConciergeModal';
import { Footer } from './components/Footer';
import type { Currency, ExpeditionJourney, DestinationWaypoint, BespokePlanState } from './types';

export function App() {
  const [currency, setCurrency] = useState<Currency>('USD');
  const [isConciergeOpen, setIsConciergeOpen] = useState(false);
  const [selectedExpedition, setSelectedExpedition] = useState<ExpeditionJourney | null>(null);
  const [bespokePlan, setBespokePlan] = useState<BespokePlanState | null>(null);
  const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
  const [selectedRegionFilter, setSelectedRegionFilter] = useState<string>('All');

  const handleOpenConcierge = () => {
    setSelectedExpedition(null);
    setBespokePlan(null);
    setEstimatedPrice(null);
    setIsConciergeOpen(true);
  };

  const handleOpenBuilder = () => {
    const builderElem = document.getElementById('bespoke-builder');
    if (builderElem) {
      builderElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleBookExpedition = (expedition: ExpeditionJourney) => {
    setSelectedExpedition(expedition);
    setBespokePlan(null);
    setEstimatedPrice(expedition.basePriceUSD);
    setIsConciergeOpen(true);
  };

  const handleInquireDestination = (destination: DestinationWaypoint) => {
    setSelectedExpedition({
      id: destination.id,
      title: `Private Expedition to ${destination.name}`,
      subtitle: `${destination.region} • ${destination.tag}`,
      durationDays: 8,
      pace: 'Immersive Discovery',
      groupSize: 'Private Bespoke (2–4 Guests)',
      basePriceUSD: 5200,
      heroImage: destination.image,
      galleryImages: [destination.image],
      tags: [destination.region],
      summary: destination.summary,
      editorialQuote: `Curated private journey exploring ${destination.name} (${destination.coordinates})`,
      dayPlan: [],
      inclusions: destination.highlights,
      exclusivePrivileges: destination.luxuryLodges,
    });
    setBespokePlan(null);
    setEstimatedPrice(5200);
    setIsConciergeOpen(true);
  };

  const handleSubmitBespokePlan = (plan: BespokePlanState, price: number) => {
    setSelectedExpedition(null);
    setBespokePlan(plan);
    setEstimatedPrice(price);
    setIsConciergeOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#f6ebd9] selection:bg-[#f4b942] selection:text-[#131313]">
      {/* Editorial Floating Navbar */}
      <Navbar
        currentCurrency={currency}
        onCurrencyChange={setCurrency}
        onOpenConcierge={handleOpenConcierge}
        onOpenBuilder={handleOpenBuilder}
      />

      <main>
        {/* Chapter 1: Cinematic Sigiriya Hero */}
        <HeroSection
          onExploreClick={() => {
            const expSection = document.getElementById('expeditions');
            if (expSection) expSection.scrollIntoView({ behavior: 'smooth' });
          }}
          onFilterChange={(region) => setSelectedRegionFilter(region)}
        />

        {/* Golden Editorial Divider */}
        <div className="divider-gold my-8" />

        {/* Chapter 2: Topographical Island Route Explorer */}
        <InteractiveMap
          onSelectWaypoint={() => {}}
          onInquireDestination={handleInquireDestination}
        />

        <div className="divider-gold my-8" />

        {/* Chapter 3: Curated Signature Expeditions */}
        <ExpeditionsSection
          currentCurrency={currency}
          onBookExpedition={handleBookExpedition}
          selectedRegionFilter={selectedRegionFilter}
        />

        <div className="divider-gold my-8" />

        {/* Chapter 4: Sensory Ceylon: Banana Leaf Feast & Single-Origin Tea */}
        <SensoryCeylon />

        <div className="divider-gold my-8" />

        {/* Chapter 5: Cultural Heritage, Sacred Ves Dance & Ancient Moonstones */}
        <CulturalHeritage />

        <div className="divider-gold my-8" />

        {/* Chapter 6: Bespoke Expedition Tailor & Live Quotation Engine */}
        <ItineraryBuilder
          currentCurrency={currency}
          onSubmitPlan={handleSubmitBespokePlan}
        />

        <div className="divider-gold my-8" />

        {/* Chapter 7: The Ceylon Monograph: Full-Bleed Photographic Plates */}
        <MonographGallery />

        {/* Chapter 8: Traveler Dispatches & Press Seals */}
        <Testimonials />
      </main>

      {/* Editorial Colophon & Footer */}
      <Footer />

      {/* Private Concierge Commission Modal */}
      <ConciergeModal
        isOpen={isConciergeOpen}
        onClose={() => setIsConciergeOpen(false)}
        preselectedExpedition={selectedExpedition}
        bespokePlan={bespokePlan}
        estimatedPrice={estimatedPrice}
      />
    </div>
  );
}

export default App;
