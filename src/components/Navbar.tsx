import React, { useState, useEffect } from 'react';
import { Compass, Volume2, VolumeX, Globe, Menu, X, Sparkles } from 'lucide-react';
import type { Currency } from '../types';

interface NavbarProps {
  currentCurrency: Currency;
  onCurrencyChange: (c: Currency) => void;
  onOpenConcierge: () => void;
  onOpenBuilder: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentCurrency,
  onCurrencyChange,
  onOpenConcierge,
  onOpenBuilder
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAmbientAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  const navLinks = [
    { label: 'Expeditions', href: '#expeditions' },
    { label: 'Island Map', href: '#route-explorer' },
    { label: 'Sensory Ceylon', href: '#sensory-ceylon' },
    { label: 'Traditions', href: '#traditions' },
    { label: 'Monograph', href: '#monograph' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#131313]/90 backdrop-blur-xl border-b border-[#f6ebd9]/10 shadow-2xl py-3'
          : 'bg-gradient-to-b from-[#131313]/80 via-[#131313]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Title */}
        <a href="#" className="flex items-center gap-3.5 group text-decoration-none">
          <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[#f4b942]/40 shadow-lg group-hover:border-[#f4b942] transition-colors p-0.5 bg-[#0f3d2e]/60">
            <img
              src="/images/emblem.png"
              alt="Ceylon Odyssey Emblem"
              className="w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-editorial text-xl sm:text-2xl tracking-tight text-[#fff8ee] font-medium group-hover:text-[#f4b942] transition-colors">
              Ceylon Odyssey
            </span>
            <span className="font-body text-[9px] tracking-[0.25em] uppercase text-[#f4b942] font-semibold -mt-0.5">
              The Resplendent Isle
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.12em] text-[#c0c8c3] hover:text-[#f4b942] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#f4b942] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={onOpenBuilder}
            className="text-xs font-semibold uppercase tracking-[0.12em] text-[#f4b942] hover:text-[#fff8ee] transition-colors flex items-center gap-1.5 py-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Bespoke Tailor
          </button>
        </nav>

        {/* Right Tools & CTA */}
        <div className="hidden sm:flex items-center gap-4">
          {/* Ambient Audio Toggle */}
          <button
            onClick={toggleAmbientAudio}
            title={isAudioPlaying ? 'Mute rainforest ambience' : 'Listen to misty Ceylon rainforest'}
            className={`p-2 rounded-full border transition-all ${
              isAudioPlaying
                ? 'bg-[#0f3d2e] border-[#f4b942] text-[#f4b942] shadow-[0_0_12px_rgba(244,185,66,0.3)]'
                : 'bg-black/30 border-[#f6ebd9]/15 text-[#8a938d] hover:text-[#f6ebd9] hover:border-[#f6ebd9]/40'
            }`}
          >
            {isAudioPlaying ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Currency Switcher */}
          <div className="flex items-center bg-black/40 border border-[#f6ebd9]/15 rounded-md px-2 py-1 text-xs">
            <Globe className="w-3 h-3 text-[#8a938d] mr-1.5" />
            {(['USD', 'EUR', 'GBP', 'LKR'] as Currency[]).map((c) => (
              <button
                key={c}
                onClick={() => onCurrencyChange(c)}
                className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-colors ${
                  currentCurrency === c
                    ? 'bg-[#0f3d2e] text-[#f4b942]'
                    : 'text-[#8a938d] hover:text-[#f6ebd9]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>

          {/* Plan Your Odyssey Action Button */}
          <button
            onClick={onOpenConcierge}
            className="btn-gold !py-2.5 !px-4 !text-xs !tracking-[0.08em] !uppercase"
          >
            <Compass className="w-3.5 h-3.5 text-[#131313]" />
            Inquire
          </button>
        </div>

        {/* Mobile menu hamburger button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenConcierge}
            className="btn-gold !py-1.5 !px-3 !text-[10px] !tracking-wider uppercase"
          >
            Inquire
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#f6ebd9] hover:text-[#f4b942] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#131313]/98 border-b border-[#f4b942]/20 px-6 py-6 space-y-4 animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-semibold uppercase tracking-[0.14em] text-[#c0c8c3] hover:text-[#f4b942] transition-colors py-2 border-b border-[#f6ebd9]/5"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBuilder();
              }}
              className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f4b942] py-2 text-left flex items-center gap-2"
            >
              <Sparkles className="w-4 h-4" />
              Bespoke Trip Tailor
            </button>
          </nav>

          <div className="pt-4 flex items-center justify-between border-t border-[#f6ebd9]/10">
            <span className="text-xs text-[#8a938d]">Select Currency</span>
            <div className="flex gap-1.5">
              {(['USD', 'EUR', 'GBP', 'LKR'] as Currency[]).map((c) => (
                <button
                  key={c}
                  onClick={() => onCurrencyChange(c)}
                  className={`px-2 py-1 rounded text-xs font-semibold ${
                    currentCurrency === c
                      ? 'bg-[#0f3d2e] text-[#f4b942]'
                      : 'bg-black/30 text-[#8a938d]'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
