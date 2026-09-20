import React, { useState, useEffect, useRef } from 'react';
import { Compass, Volume2, VolumeX, Globe, Sparkles } from 'lucide-react';
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
  const [activeLink, setActiveLink] = useState<string>('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const menuRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { label: 'Expeditions', href: '#expeditions' },
    { label: 'Island Map', href: '#route-explorer' },
    { label: 'Sensory Ceylon', href: '#sensory-ceylon' },
    { label: 'Traditions', href: '#traditions' },
    { label: 'Monograph', href: '#monograph' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(100, (window.scrollY / docHeight) * 100) : 0);

      const sections = navLinks.map((l) => document.getElementById(l.href.slice(1)));
      const current = sections.find((el) => {
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });
      setActiveLink(current ? `#${current.id}` : '');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (mobileMenuOpen && menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [mobileMenuOpen]);

  const toggleAmbientAudio = () => {
    setIsAudioPlaying(!isAudioPlaying);
  };

  return (
    <>
      {/* Scroll Progress Indicator */}
      <div className="nav-progress-track">
        <div className="nav-progress-bar" style={{ width: `${scrollProgress}%` }} />
      </div>

      <header
        className={`fixed left-1/2 z-50 -translate-x-1/2 w-[calc(100%-1.5rem)] sm:w-[calc(100%-2.5rem)] max-w-7xl transition-all duration-500 animate-nav-drop-in ${
          scrolled ? 'top-2 sm:top-3' : 'top-4 sm:top-6'
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-2xl transition-all duration-500 ${
            scrolled
              ? 'bg-[#131313]/85 backdrop-blur-xl border border-[#f6ebd9]/12 shadow-2xl px-4 sm:px-5 py-2.5'
              : 'bg-[#131313]/45 backdrop-blur-md border border-[#f6ebd9]/8 px-4 sm:px-6 py-3.5'
          }`}
        >
          {/* Brand Logo & Title */}
          <a href="#" className="flex items-center gap-3 group text-decoration-none shrink-0">
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 shrink-0">
              <div className="absolute inset-0 rounded-full logo-ring-pulse" />
              <div className="relative w-full h-full rounded-full overflow-hidden border border-[#f4b942]/50 shadow-lg group-hover:border-[#f4b942] transition-all duration-300 p-0.5 bg-[#0f3d2e]/60">
                <img
                  src="/images/emblem.png"
                  alt="Ceylon Odyssey Emblem"
                  className="logo-emblem w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-editorial text-lg sm:text-xl tracking-tight text-[#fff8ee] font-medium group-hover:text-[#f4b942] transition-colors duration-300">
                Ceylon Odyssey
              </span>
              <span className="font-body text-[9px] tracking-[0.25em] uppercase text-[#f4b942] font-semibold -mt-0.5">
                The Resplendent Isle
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-0.5 shrink-0">
            {navLinks.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`whitespace-nowrap relative px-2.5 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] transition-colors duration-300 rounded-lg ${
                    isActive ? 'text-[#f4b942]' : 'text-[#c0c8c3] hover:text-[#fff8ee]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`nav-underline absolute left-3 right-3 -bottom-0.5 h-[1.5px] bg-[#f4b942] rounded-full ${
                      isActive ? 'is-active' : ''
                    }`}
                  />
                </a>
              );
            })}
            <button
              onClick={onOpenBuilder}
              title="Bespoke Tailor"
              className="whitespace-nowrap ml-2 flex items-center gap-1.5 rounded-lg border border-[#f4b942]/30 bg-[#f4b942]/10 px-2.5 xl:px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.1em] text-[#f4b942] transition-all duration-300 hover:bg-[#f4b942]/20 hover:border-[#f4b942]/60"
            >
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="hidden xl:inline">Bespoke Tailor</span>
            </button>
          </nav>

          {/* Right Tools & CTA */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <div className="hidden xl:flex items-center gap-3">
              {/* Ambient Audio Toggle */}
              <button
                onClick={toggleAmbientAudio}
                title={isAudioPlaying ? 'Mute rainforest ambience' : 'Listen to misty Ceylon rainforest'}
                className={`p-2 rounded-full border transition-all duration-300 ${
                  isAudioPlaying
                    ? 'bg-[#0f3d2e] border-[#f4b942] text-[#f4b942] shadow-[0_0_12px_rgba(244,185,66,0.3)]'
                    : 'bg-black/30 border-[#f6ebd9]/15 text-[#8a938d] hover:text-[#f6ebd9] hover:border-[#f6ebd9]/40 hover:scale-110'
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
                    className={`px-1.5 py-0.5 rounded text-[10px] font-semibold transition-all duration-200 ${
                      currentCurrency === c
                        ? 'bg-[#0f3d2e] text-[#f4b942]'
                        : 'text-[#8a938d] hover:text-[#f6ebd9]'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Plan Your Odyssey Action Button */}
            <button
              onClick={onOpenConcierge}
              className="btn-gold btn-shine !py-2.5 !px-4 !text-xs !tracking-[0.08em] !uppercase"
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
              aria-label="Toggle navigation menu"
              className="relative w-9 h-9 flex flex-col items-center justify-center gap-[5px] text-[#f6ebd9]"
            >
              <span
                className="hamburger-line"
                style={mobileMenuOpen ? { transform: 'translateY(7px) rotate(45deg)' } : undefined}
              />
              <span
                className="hamburger-line"
                style={mobileMenuOpen ? { opacity: 0 } : undefined}
              />
              <span
                className="hamburger-line"
                style={mobileMenuOpen ? { transform: 'translateY(-7px) rotate(-45deg)' } : undefined}
              />
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer */}
        <div
          ref={menuRef}
          className="mobile-drawer lg:hidden"
          style={mobileMenuOpen ? { maxHeight: '26rem', opacity: 1, marginTop: '0.5rem' } : { maxHeight: 0, opacity: 0, marginTop: 0 }}
        >
          <div className="bg-[#131313]/95 backdrop-blur-xl border border-[#f4b942]/20 rounded-2xl px-6 py-6 space-y-4 shadow-2xl">
            <nav className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-[0.14em] transition-colors py-2.5 border-b border-[#f6ebd9]/5 ${
                    activeLink === link.href ? 'text-[#f4b942]' : 'text-[#c0c8c3] hover:text-[#f4b942]'
                  }`}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBuilder();
                }}
                className="text-sm font-semibold uppercase tracking-[0.14em] text-[#f4b942] py-2.5 text-left flex items-center gap-2"
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
                    className={`px-2 py-1 rounded text-xs font-semibold transition-colors ${
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
        </div>
      </header>
    </>
  );
};
