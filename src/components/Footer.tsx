import React from 'react';
import { MapPin, Phone, Clock, ArrowUpRight } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#090d0e] border-t border-white/5 text-[#9c988f] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="md:col-span-2 space-y-4">
            <a 
              href="#" 
              className="font-serif text-2xl font-bold tracking-widest text-[#f5eed3] inline-block"
            >
              BREEZE
            </a>
            <p className="text-xs text-[#a8a49c] max-w-sm leading-relaxed">
              Fine continental dining, hand-tossed artisanal pastas, sizzling steaks, and contemporary fusion flavors situated peacefully in Nikunja-2, Dhaka.
            </p>
            <div className="text-xs text-[#d4b358]">
              Google Rating: 4.4 ★ based on 937+ diner reviews
            </div>
          </div>

          {/* Quick Navigation */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#fbf8ee] font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#menu" className="hover:text-white transition-colors">Curated Menu</a>
              </li>
              <li>
                <a href="#ambiance" className="hover:text-white transition-colors">Dining Space & Booths</a>
              </li>
              <li>
                <a href="#reservations" className="hover:text-white transition-colors">Book a Table</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-white transition-colors">Guest Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Map & Hours</a>
              </li>
            </ul>
          </div>

          {/* Contact & Hours */}
          <div>
            <h4 className="text-xs uppercase tracking-widest text-[#fbf8ee] font-semibold mb-4">
              Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#d4b358] shrink-0 mt-0.5" />
                <span>{RESTAURANT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#d4b358] shrink-0" />
                <a href={`tel:${RESTAURANT_INFO.phone}`} className="hover:text-white transition-colors">
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#d4b358] shrink-0" />
                <span>{RESTAURANT_INFO.hours}</span>
              </li>
              <li className="pt-2">
                <a
                  href={RESTAURANT_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#d4b358] hover:text-[#e2cb8b] font-medium"
                >
                  <span>Google Maps Listing</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Quiet Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-[#6b6760] gap-4">
          <div>
            © {new Date().getFullYear()} Breeze Restaurant. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Nikunja-2, Khilkhet, Dhaka 1229</span>
            <span>·</span>
            <span>Fine Dining Experience</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
