import React, { useState } from 'react';
import { GALLERY_ITEMS } from '../data/gallery';
import type { GalleryItem } from '../types';
import { Camera, MapPin, X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export const MonographGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Citadels', 'Highlands', 'Heritage', 'Wildlife', 'Gastronomy'];

  const filteredItems = GALLERY_ITEMS.filter((item) => {
    if (activeCategory === 'All') return true;
    return item.category === activeCategory;
  });

  const handleNext = () => {
    if (!selectedPhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % GALLERY_ITEMS.length;
    setSelectedPhoto(GALLERY_ITEMS[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedPhoto) return;
    const currentIndex = GALLERY_ITEMS.findIndex((i) => i.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length;
    setSelectedPhoto(GALLERY_ITEMS[prevIndex]);
  };

  return (
    <section id="monograph" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Chapter Editorial Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <div className="label-luxury mb-2">Photographic Journal</div>
        <h2 className="font-editorial text-3xl sm:text-5xl text-[#fff8ee] tracking-tight mb-4">
          The Island Monograph
        </h2>
        <p className="text-[#c0c8c3] text-sm sm:text-base font-light leading-relaxed">
          High-editorial plates captured at first light and twilight, documenting the raw geological splendor and living ceremonial soul of Ceylon.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase transition-all ${
                activeCategory === cat
                  ? 'bg-[#0f3d2e] text-[#f4b942] border border-[#f4b942] shadow-[0_0_15px_rgba(244,185,66,0.2)]'
                  : 'bg-[#1b1b1b]/80 text-[#8a938d] border border-[#f6ebd9]/10 hover:text-[#f6ebd9]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Monograph Masonry / Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="glass-card-interactive rounded-2xl overflow-hidden cursor-pointer group relative h-80 sm:h-96"
          >
            <img
              src={photo.image}
              alt={photo.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-90 group-hover:brightness-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#131313] via-[#131313]/20 to-transparent" />

            {/* Hover Expand Icon */}
            <div className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-[#fff8ee] opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-md">
              <Maximize2 className="w-4 h-4" />
            </div>

            {/* Plate Category */}
            <div className="absolute top-4 left-4">
              <span className="badge-luxury badge-gold text-[10px]">
                {photo.category}
              </span>
            </div>

            {/* Bottom Metadata Stamping */}
            <div className="absolute bottom-4 left-4 right-4 space-y-1">
              <span className="text-[10px] font-mono text-[#f4b942] block">
                {photo.coordinates}
              </span>
              <h3 className="font-editorial text-lg sm:text-xl text-[#fff8ee] font-medium leading-tight">
                {photo.title}
              </h3>
              <p className="text-[11px] text-[#8a938d] flex items-center gap-1.5 pt-0.5">
                <MapPin className="w-3 h-3 text-[#f4b942]" />
                {photo.region}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Fullscreen Editorial Lightbox Modal */}
      {selectedPhoto && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-xl animate-fade-in">
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-6 right-6 p-3 rounded-full bg-black/60 text-[#fff8ee] hover:text-[#f4b942] border border-white/20 transition-colors z-50"
            aria-label="Close Lightbox"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev / Next Navigation */}
          <button
            onClick={handlePrev}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-[#fff8ee] hover:text-[#f4b942] border border-white/20 transition-colors z-50"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 text-[#fff8ee] hover:text-[#f4b942] border border-white/20 transition-colors z-50"
            aria-label="Next image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Container */}
          <div className="max-w-6xl w-full flex flex-col items-center space-y-6">
            {/* Image Plate */}
            <div className="relative max-h-[70vh] w-full flex items-center justify-center overflow-hidden rounded-2xl border border-[#f4b942]/20 shadow-2xl">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="max-h-[70vh] w-auto object-contain rounded-2xl"
              />
            </div>

            {/* Archival Stamping Strip */}
            <div className="glass-panel-1 p-5 rounded-2xl w-full max-w-3xl border border-[#f6ebd9]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-[#f4b942] font-semibold block">
                  Plate #{selectedPhoto.id.replace('g-', '').toUpperCase()} • {selectedPhoto.category}
                </span>
                <h4 className="font-editorial text-xl text-[#fff8ee] font-medium mt-0.5">
                  {selectedPhoto.title}
                </h4>
                <p className="text-xs text-[#c0c8c3] mt-0.5">
                  {selectedPhoto.region} ({selectedPhoto.coordinates})
                </p>
              </div>

              <div className="border-t sm:border-t-0 sm:border-l border-[#f6ebd9]/10 pt-3 sm:pt-0 sm:pl-4 text-xs font-mono text-[#8a938d] space-y-1 text-center sm:text-right">
                <div className="flex items-center gap-1.5 justify-center sm:justify-end text-[#f4b942]">
                  <Camera className="w-3.5 h-3.5" />
                  <span>Technical Data</span>
                </div>
                <div className="text-[11px]">{selectedPhoto.cameraNotes}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
