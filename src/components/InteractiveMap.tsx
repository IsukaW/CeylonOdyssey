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

  // Short map-pin labels — some destination names lead with a descriptor
  // ("Sacred Kandy…") rather than the place name, so derive labels from id.
  const pinLabels: Record<string, string> = {
    sigiriya: 'Sigiriya',
    dambulla: 'Dambulla',
    kandy: 'Kandy',
    kitulgala: 'Kitulgala',
    ella: 'Ella',
    galle: 'Galle',
  };

  // Real waypoint positions, equirectangular-projected from actual lat/lng
  // (see DESTINATIONS) onto the island silhouette below [viewBox="0 0 452 769"]
  const waypointPositions: Record<string, { x: number; y: number }> = {
    sigiriya: { x: 221.3, y: 369.8 },
    dambulla: { x: 201.3, y: 384.9 },
    kandy: { x: 198.2, y: 491.7 },
    kitulgala: { x: 158.1, y: 546.0 },
    ella: { x: 273.7, y: 569.2 },
    galle: { x: 122.7, y: 718.0 },
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
            <div className="absolute top-[64%] left-[46%] -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[radial-gradient(circle,rgba(15,61,46,0.6)_0%,transparent_70%)] pointer-events-none" />

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

            {/* SVG Map of Sri Lanka — real coastline, geo-projected from OpenStreetMap boundary data */}
            <svg
              viewBox="0 0 452 769"
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

              {/* Offshore islets (Mannar & the Jaffna island cluster) */}
              <g fill="#175a41" stroke="rgba(244, 185, 66, 0.35)" strokeWidth="0.6">
                <circle cx="48.5" cy="170.4" r="12.3" />
                <circle cx="69.6" cy="60.3" r="8.5" />
                <circle cx="51.2" cy="69.0" r="3.1" />
                <circle cx="24.8" cy="82.8" r="4.1" />
                <circle cx="80.1" cy="125.9" r="1.8" />
                <circle cx="60.4" cy="43.6" r="3.2" />
              </g>

              {/* Real Sri Lanka Island Silhouette (OpenStreetMap coastline, simplified) */}
              <path
                d="M 121.0 26.0 C 88.0 8.6 72.3 31.3 65.2 38.1 C 58.2 45.0 75.0 53.1 85.8 60.0 C 96.5 66.9 113.1 72.9 118.8 72.7 C 124.4 72.5 106.5 56.7 114.1 59.0 C 121.6 61.4 151.6 76.8 156.5 84.6 C 161.3 92.4 145.1 98.7 138.4 98.0 C 131.7 97.4 132.5 86.9 123.2 81.1 C 113.8 75.4 93.1 67.5 91.7 69.3 C 90.3 71.1 116.2 82.4 116.2 90.1 C 116.3 97.7 94.3 100.8 92.0 107.6 C 89.7 114.5 104.9 111.3 104.7 124.5 C 104.5 137.7 98.8 160.3 91.1 173.5 C 83.4 186.6 69.2 178.9 66.0 190.1 C 62.7 201.3 79.3 203.6 74.9 229.4 C 70.4 255.2 48.3 298.2 43.7 319.1 C 39.1 340.1 51.9 328.3 51.9 334.1 C 51.9 339.9 44.0 339.6 43.7 348.1 C 43.4 356.5 49.0 373.0 50.3 376.5 C 51.5 380.0 53.0 369.1 49.8 365.6 C 46.5 362.2 37.5 364.6 34.0 359.3 C 30.5 354.1 30.5 352.9 32.3 339.4 C 34.1 325.9 44.3 294.8 43.1 291.6 C 41.8 288.4 28.9 311.4 26.0 323.3 C 23.1 335.3 21.8 311.3 28.4 351.5 C 35.1 391.6 55.2 492.8 59.2 524.0 C 63.3 555.2 48.9 502.7 48.7 507.6 C 48.6 512.6 58.3 539.3 58.5 548.8 C 58.7 558.3 42.7 526.1 49.8 554.9 C 56.8 583.8 78.3 658.5 93.7 692.9 C 109.1 727.3 107.4 716.9 126.7 726.8 C 146.0 736.8 150.9 749.7 190.4 742.6 C 230.0 735.5 284.2 712.2 324.5 691.4 C 364.8 670.7 373.6 659.5 392.0 638.8 C 410.4 618.1 409.5 607.6 416.3 588.0 C 423.1 568.4 424.5 561.3 426.0 540.8 C 427.5 520.3 428.1 508.9 423.6 485.5 C 419.1 462.1 413.9 442.8 403.5 423.8 C 393.1 404.7 377.9 399.7 371.5 390.2 C 365.2 380.8 374.3 379.0 371.8 376.4 C 369.3 373.9 360.1 380.2 359.0 377.7 C 357.9 375.2 367.9 368.7 366.4 364.0 C 364.9 359.3 359.0 372.7 351.7 354.1 C 344.4 335.5 335.4 288.6 329.7 271.0 C 324.0 253.3 327.4 264.3 323.2 265.8 C 319.0 267.4 315.7 277.7 308.7 278.8 C 301.7 279.9 291.2 274.4 288.2 271.1 C 285.2 267.8 290.3 262.6 293.5 262.1 C 296.7 261.7 302.5 270.0 304.1 268.7 C 305.8 267.5 300.7 257.2 301.8 255.9 C 303.0 254.6 309.1 265.0 310.0 262.3 C 310.9 259.6 316.5 258.4 306.4 242.4 C 296.3 226.3 269.7 192.1 259.4 182.0 C 249.2 171.8 257.5 190.3 255.2 191.6 C 252.9 192.9 249.8 192.7 247.9 188.4 C 245.9 184.2 243.3 171.8 245.4 170.3 C 247.6 168.7 261.6 189.8 258.7 180.9 C 255.7 171.9 258.1 156.3 230.6 125.3 C 203.0 94.3 154.1 43.4 121.0 26.0 Z"
                fill="url(#slIslandGrad)"
                stroke="rgba(244, 185, 66, 0.45)"
                strokeWidth="1.5"
                strokeLinejoin="round"
              />

              {/* Central Highlands Elevation Shading (tea country around Nuwara Eliya) */}
              <ellipse
                cx="222"
                cy="500"
                rx="66"
                ry="98"
                fill="url(#highlandRelief)"
              />

              {/* Connecting Expedition Routes */}
              {/* Circuit 1: The Royal Route (Sigiriya - Dambulla - Kandy) */}
              {(activeCircuit === 'all' || activeCircuit === 'royal') && (
                <path
                  d="M 221.3 369.8 L 201.3 384.9 L 198.2 491.7"
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
                  d="M 198.2 491.7 L 158.1 546.0 L 273.7 569.2"
                  fill="none"
                  stroke="#7cd4df"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              )}

              {/* Circuit 3: Southern Coast Circuit (Ella - Tangalle - Galle) */}
              {(activeCircuit === 'all' || activeCircuit === 'coast') && (
                <path
                  d="M 273.7 569.2 L 227.4 723.3 L 122.7 718.0"
                  fill="none"
                  stroke="#f4b942"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
              )}

              {/* Colombo gateway indicator */}
              <circle cx="56.8" cy="558.2" r="3.5" fill="#c0c8c3" opacity="0.6" />
              <text x="12" y="573" fill="#c0c8c3" fontSize="10" fontFamily="sans-serif">
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
                      {pinLabels[wp.id] || wp.name.split(' ')[0]}
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
