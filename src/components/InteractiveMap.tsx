import React, { useState } from 'react';
import { DESTINATIONS } from '../data/destinations';
import type { DestinationWaypoint } from '../types';
import { Compass, Mountain, Sparkles, ArrowRight, Sun } from 'lucide-react';

interface InteractiveMapProps {
  onSelectWaypoint: (wp: DestinationWaypoint) => void;
  onInquireDestination: (wp: DestinationWaypoint) => void;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({
  onSelectWaypoint,
  onInquireDestination
}) => {
  const [activeId, setActiveId] = useState<string>('sigiriya');
  const [activeCircuit, setActiveCircuit] = useState<'all' | 'royal' | 'tea' | 'coast'>('all');

  const activeDestination = DESTINATIONS.find((d) => d.id === activeId) || DESTINATIONS[0];

  // SVG coordinates tuned for Sri Lanka teardrop map projection [viewBox="0 0 500 700"]
  const waypointPositions: Record<string, { x: number; y: number }> = {
    sigiriya: { x: 255, y: 220 },
    dambulla: { x: 235, y: 250 },
    kandy: { x: 245, y: 340 },
    kitulgala: { x: 200, y: 395 },
    ella: { x: 285, y: 440 },
    galle: { x: 190, y: 550 },
  };

  return (
    <section id="route-explorer" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Chapter Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="label-luxury mb-2">Cartography & Geography</div>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#fff8ee] tracking-tight mb-4">
          The Resplendent Circuit Explorer
        </h2>
        <p className="text-[#c0c8c3] text-sm sm:text-base font-light leading-relaxed">
          From the mist-draped 5th-century summit of Sigiriya through the high-altitude cloud forests of Ella and the sun-bleached ramparts of Galle. Select any waypoint to explore archival coordinates, elevation, and private experiences.
        </p>

        {/* Circuit Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {[
            { id: 'all', label: 'Complete Island Loop' },
            { id: 'royal', label: 'The Royal Citadel Trail' },
            { id: 'tea', label: 'Highland Tea & Mist Rail' },
            { id: 'coast', label: 'Southern Coast & Forts' },
          ].map((circuit) => (
            <button
              key={circuit.id}
              onClick={() => setActiveCircuit(circuit.id as any)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCircuit === circuit.id
                  ? 'bg-[#0f3d2e] text-[#f4b942] border border-[#f4b942] shadow-[0_0_15px_rgba(244,185,66,0.2)]'
                  : 'bg-[#1b1b1b]/80 text-[#8a938d] border border-[#f6ebd9]/10 hover:text-[#f6ebd9]'
              }`}
            >
              {circuit.label}
            </button>
          ))}
        </div>
      </div>

      {/* Map & Detail Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Interactive Topographical SVG Map */}
        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-[480px] p-6 rounded-3xl bg-[#1b1b1b]/60 border border-[#f6ebd9]/15 backdrop-blur-xl shadow-2xl overflow-hidden">
            {/* Ambient Background Glow for Central Highlands */}
            <div className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle,rgba(15,61,46,0.6)_0%,transparent_70%)] pointer-events-none" />

            {/* Map Compass Rose */}
            <div className="absolute top-6 right-6 flex flex-col items-center opacity-70 pointer-events-none">
              <Compass className="w-8 h-8 text-[#f4b942] animate-spin-slow" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-[#f4b942] font-semibold mt-1">N • Ceylon</span>
            </div>

            {/* Sea Grid Legend */}
            <div className="absolute bottom-6 left-6 text-[10px] text-[#8a938d] space-y-1 font-mono pointer-events-none">
              <div>LAT 5°55′N – 9°50′N</div>
              <div>LON 79°42′E – 81°53′E</div>
              <div className="text-[#0e7c86] font-sans text-[9px] uppercase tracking-wider">Indian Ocean Waters</div>
            </div>

            {/* SVG Map of Sri Lanka */}
            <svg
              viewBox="0 0 500 700"
              className="w-full h-auto drop-shadow-[0_15px_25px_rgba(0,0,0,0.7)]"
            >
              <defs>
                {/* Coastal gradient */}
                <linearGradient id="slIslandGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#153628" />
                  <stop offset="50%" stopColor="#0f3d2e" />
                  <stop offset="100%" stopColor="#09271d" />
                </linearGradient>

                {/* Central Highlands Elevation Relief */}
                <radialGradient id="highlandRelief" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#1d5e46" stopOpacity="0.8" />
                  <stop offset="70%" stopColor="#134735" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                </radialGradient>

                {/* Route Stroke Glow Filter */}
                <filter id="goldGlow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Realistic Stylized Sri Lanka Island Silhouette */}
              <path
                d="M 230 45 
                   C 255 45, 275 60, 270 95
                   C 265 125, 290 145, 305 175
                   C 325 215, 335 260, 330 310
                   C 325 365, 345 405, 340 455
                   C 335 505, 310 550, 280 585
                   C 255 615, 220 630, 195 620
                   C 170 610, 160 575, 165 540
                   C 170 500, 185 455, 180 405
                   C 175 355, 190 310, 195 260
                   C 200 205, 190 160, 205 110
                   C 215 75, 215 45, 230 45 Z"
                fill="url(#slIslandGrad)"
                stroke="rgba(244, 185, 66, 0.4)"
                strokeWidth="1.5"
              />

              {/* Jaffna Peninsula stylized extension in the north */}
              <path
                d="M 215 80 C 190 60, 180 30, 200 20 C 220 10, 240 25, 230 45 Z"
                fill="url(#slIslandGrad)"
                stroke="rgba(244, 185, 66, 0.3)"
                strokeWidth="1"
              />

              {/* Central Highlands Elevation Shading */}
              <ellipse
                cx="245"
                cy="375"
                rx="70"
                ry="90"
                fill="url(#highlandRelief)"
              />

              {/* Connecting Expedition Routes */}
              {/* Circuit 1: The Royal Route (Sigiriya - Dambulla - Kandy) */}
              {(activeCircuit === 'all' || activeCircuit === 'royal') && (
                <path
                  d="M 255 220 L 235 250 L 245 340"
                  fill="none"
                  stroke="#f4b942"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  filter="url(#goldGlow)"
                  className="animate-pulse"
                />
              )}

              {/* Circuit 2: Highland Tea Route (Kandy - Kitulgala - Ella) */}
              {(activeCircuit === 'all' || activeCircuit === 'tea') && (
                <path
                  d="M 245 340 L 200 395 L 285 440"
                  fill="none"
                  stroke="#7cd4df"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              )}

              {/* Circuit 3: Southern Coast Circuit (Ella - Galle) */}
              {(activeCircuit === 'all' || activeCircuit === 'coast') && (
                <path
                  d="M 285 440 L 250 510 L 190 550"
                  fill="none"
                  stroke="#f4b942"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              )}

              {/* Colombo gateway indicator */}
              <circle cx="175" cy="425" r="3.5" fill="#c0c8c3" opacity="0.6" />
              <text x="125" y="430" fill="#c0c8c3" fontSize="10" fontFamily="sans-serif">
                Colombo (CMB)
              </text>

              {/* Interactive Waypoint Pins */}
              {DESTINATIONS.map((wp) => {
                const pos = waypointPositions[wp.id] || { x: 250, y: 350 };
                const isSelected = activeId === wp.id;

                return (
                  <g
                    key={wp.id}
                    className="cursor-pointer group"
                    onClick={() => {
                      setActiveId(wp.id);
                      onSelectWaypoint(wp);
                    }}
                  >
                    {/* Pulsing halo for active selection */}
                    {isSelected && (
                      <circle
                        cx={pos.x}
                        cy={pos.y}
                        r="18"
                        fill="rgba(244, 185, 66, 0.25)"
                        className="animate-ping"
                      />
                    )}

                    {/* Outer ring */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 10 : 7}
                      fill={isSelected ? '#f4b942' : '#0f3d2e'}
                      stroke={isSelected ? '#fff8ee' : '#f4b942'}
                      strokeWidth="2"
                      className="transition-all duration-300"
                    />

                    {/* Inner core */}
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={isSelected ? 4 : 2.5}
                      fill={isSelected ? '#131313' : '#f4b942'}
                    />

                    {/* Waypoint Label */}
                    <text
                      x={pos.x + 14}
                      y={pos.y + 4}
                      fill={isSelected ? '#fff8ee' : '#c0c8c3'}
                      fontSize={isSelected ? '12' : '10'}
                      fontWeight={isSelected ? 'bold' : 'normal'}
                      fontFamily="var(--font-serif)"
                      className="transition-all duration-300 pointer-events-none drop-shadow-md"
                    >
                      {wp.name.split(' ')[0]}
                    </text>
                  </g>
                );
              })}
            </svg>
          </div>
        </div>

        {/* Right Side: Rich Destination Dossier Card */}
        <div className="lg:col-span-6">
          <div className="glass-card-interactive p-6 sm:p-8 rounded-3xl border border-[#f4b942]/30 shadow-2xl relative">
            {/* Header Badge & Region */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <span className="badge-luxury badge-gold">
                <Sparkles className="w-3 h-3" />
                {activeDestination.region}
              </span>
              <span className="font-mono text-xs text-[#8a938d]">
                {activeDestination.coordinates}
              </span>
            </div>

            {/* Destination Name & Native Script */}
            <div className="flex items-baseline gap-3 mb-2">
              <h3 className="font-editorial text-2xl sm:text-3xl text-[#fff8ee] font-medium">
                {activeDestination.name}
              </h3>
              {activeDestination.nativeName && (
                <span className="font-editorial text-xl text-[#f4b942]/70">
                  {activeDestination.nativeName}
                </span>
              )}
            </div>

            {/* Tagline */}
            <p className="text-xs uppercase tracking-[0.14em] text-[#f4b942] font-semibold mb-4">
              {activeDestination.tag}
            </p>

            {/* Image Preview with Zoom Container */}
            <div className="zoom-container rounded-2xl h-48 sm:h-56 mb-5 relative border border-[#f6ebd9]/10">
              <img
                src={activeDestination.image}
                alt={activeDestination.name}
                className="zoom-image w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-[#fff8ee]">
                <span className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-md">
                  <Mountain className="w-3.5 h-3.5 text-[#f4b942]" />
                  {activeDestination.elevation}
                </span>
                <span className="flex items-center gap-1.5 bg-black/50 px-2.5 py-1 rounded-md backdrop-blur-md">
                  <Sun className="w-3.5 h-3.5 text-[#f4b942]" />
                  {activeDestination.bestSeason.split('&')[0]}
                </span>
              </div>
            </div>

            {/* Summary Narrative */}
            <p className="text-[#c0c8c3] text-sm leading-relaxed mb-6 font-light">
              {activeDestination.summary}
            </p>

            {/* Curated Privileges & Highlights */}
            <div className="mb-6 space-y-2.5">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-[#f4b942]">
                Curated Private Privileges
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#e5e2e1]">
                {activeDestination.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f4b942] mt-1.5 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Lodges Spotlight */}
            <div className="pt-4 border-t border-[#f6ebd9]/10 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[10px] uppercase tracking-wider text-[#8a938d] block">
                  Recommended Luxury Lodges
                </span>
                <span className="text-xs text-[#fff8ee] font-medium">
                  {activeDestination.luxuryLodges.join(' • ')}
                </span>
              </div>

              {/* Inquire CTA */}
              <button
                onClick={() => onInquireDestination(activeDestination)}
                className="btn-gold !py-2 !px-4 !text-xs !tracking-wider flex items-center gap-1.5"
              >
                <span>Inquire Private Visit</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
