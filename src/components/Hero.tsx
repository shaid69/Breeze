import React from 'react';
import { Calendar, Utensils, MapPin, Star, ArrowUpRight, Clock } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface HeroProps {
  onOpenReservation: () => void;
  onExploreMenu: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenReservation, onExploreMenu }) => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Fallback and Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src="/src/assets/images/hero_breeze_dining_1790414735388.jpg"
          alt="Breeze Restaurant interior atmosphere with warm lighting and wooden tables"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-fade-in"
        />
        {/* Measured dark scrim for WCAG AA readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1214] via-[#0d1214]/75 to-[#0d1214]/45" />
        <div className="absolute inset-0 bg-radial from-transparent via-[#0d1214]/40 to-[#0d1214]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        
        {/* Unboxed Metadata Line with Typographic Separators */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-sm font-medium tracking-wide text-[#d4b358] mb-6">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5" />
            Nikunja-2, Dhaka
          </span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="flex items-center gap-1.5 text-[#eae7e1]/90">
            <Clock className="w-3.5 h-3.5" />
            Daily 12:00 PM – 11:00 PM
          </span>
          <span aria-hidden="true" className="text-white/30">·</span>
          <span className="flex items-center gap-1 text-[#eae7e1]/90">
            <Star className="w-3.5 h-3.5 fill-[#d4b358] text-[#d4b358]" />
            4.4 Rating (930+ Reviews)
          </span>
        </div>

        {/* Primary Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-[#fbf8ee] leading-[1.12] mb-6 max-w-4xl mx-auto [text-wrap:balance]">
          Where Modern Gastronomy Meets Calm Serenity
        </h1>

        {/* Body Description */}
        <p className="text-base sm:text-lg text-[#c4c1b9] max-w-2xl mx-auto mb-10 leading-relaxed font-light">
          Tucked along Road 16 in Nikunja-2, Breeze Restaurant brings an elevated continental dining experience—renowned for our fragrant Cilantro Chicken Rice, artisan pasta, and sizzling steaks crafted for cherished gatherings.
        </p>

        {/* Action Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          <button
            onClick={onOpenReservation}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-semibold tracking-wider uppercase text-[#0d1214] bg-[#d4b358] hover:bg-[#e2cb8b] rounded-lg transition-all duration-200 shadow-lg shadow-[#d4b358]/10 flex items-center justify-center gap-2 cursor-pointer group"
          >
            <Calendar className="w-4 h-4 transition-transform group-hover:scale-110" />
            <span>Reserve a Table</span>
          </button>

          <button
            onClick={onExploreMenu}
            className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-[#fbf8ee] bg-white/5 hover:bg-white/10 border border-white/15 rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
          >
            <Utensils className="w-4 h-4 text-[#d4b358]" />
            <span>Explore Menu</span>
          </button>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3.5 text-sm font-medium text-[#c4c1b9] hover:text-[#fbf8ee] bg-transparent hover:bg-white/5 border border-white/10 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <span>Open in Maps</span>
            <ArrowUpRight className="w-4 h-4 text-[#d4b358]" />
          </a>
        </div>

        {/* Adjacency Proof Strip */}
        <div className="mt-14 pt-8 border-t border-white/10 max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="font-serif text-2xl font-bold text-[#fbf8ee] tabular-nums">4.4 / 5.0</div>
            <div className="text-xs text-[#9c988f] mt-1">Google Rating</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-[#fbf8ee] tabular-nums">937+</div>
            <div className="text-xs text-[#9c988f] mt-1">Verified Reviews</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-[#fbf8ee] tabular-nums">12 PM – 11 PM</div>
            <div className="text-xs text-[#9c988f] mt-1">7 Days a Week</div>
          </div>
          <div>
            <div className="font-serif text-2xl font-bold text-[#fbf8ee] tabular-nums">Nikunja-2</div>
            <div className="text-xs text-[#9c988f] mt-1">Road 16, Dhaka</div>
          </div>
        </div>

      </div>
    </section>
  );
};
