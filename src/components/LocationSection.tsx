import React, { useState } from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Copy, Check, Car, Plane } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(`${RESTAURANT_INFO.name}, ${RESTAURANT_INFO.address}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="location" className="py-24 bg-[#0d1214] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs uppercase tracking-widest text-[#d4b358] font-semibold mb-2">
            Location & Access
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fbf8ee] tracking-tight mb-4 [text-wrap:balance]">
            Visit Us in Nikunja-2
          </h2>
          <p className="text-base text-[#a8a49c] font-light leading-relaxed">
            Conveniently situated on Road 16 in Nikunja-2, moments away from Dhaka Regency and the airport corridor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Information Column */}
          <div className="lg:col-span-5 bg-[#141b1e] border border-white/5 rounded-2xl p-6 sm:p-8 flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Address Block */}
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4b358] font-semibold mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Address</span>
                </div>
                <p className="text-base font-medium text-[#fbf8ee] leading-relaxed mb-3">
                  {RESTAURANT_INFO.address}
                </p>
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleCopy}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-xs text-[#c4c1b9] border border-white/10 transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-300">Address Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Address</span>
                      </>
                    )}
                  </button>

                  <a
                    href={RESTAURANT_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#d4b358] hover:bg-[#e2cb8b] text-xs font-semibold text-[#0d1214] transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Open Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Operating Hours */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4b358] font-semibold mb-2">
                  <Clock className="w-4 h-4" />
                  <span>Operating Hours</span>
                </div>
                <div className="text-sm text-[#fbf8ee] font-medium">
                  {RESTAURANT_INFO.hours}
                </div>
                <div className="text-xs text-[#9c988f] mt-1">
                  Lunch & Dinner dine-in, takeaway, and delivery available daily.
                </div>
              </div>

              {/* Phone Hotline */}
              <div className="pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#d4b358] font-semibold mb-2">
                  <Phone className="w-4 h-4" />
                  <span>Phone & Inquiries</span>
                </div>
                <a
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="text-base font-semibold text-[#fbf8ee] hover:text-[#d4b358] transition-colors"
                >
                  {RESTAURANT_INFO.phoneDisplay}
                </a>
                <div className="text-xs text-[#9c988f] mt-1">
                  For immediate table confirmations and custom catering.
                </div>
              </div>

              {/* Nearby Landmarks */}
              <div className="pt-6 border-t border-white/10 space-y-2 text-xs text-[#a8a49c]">
                <div className="flex items-center gap-2">
                  <Car className="w-4 h-4 text-[#d4b358]" />
                  <span>5 mins from Dhaka Regency Hotel & Khilkhet Footbridge</span>
                </div>
                <div className="flex items-center gap-2">
                  <Plane className="w-4 h-4 text-[#d4b358]" />
                  <span>10 mins from Hazrat Shahjalal International Airport (HSIA)</span>
                </div>
              </div>

            </div>

            <div className="pt-8">
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-center text-[#0d1214] bg-[#d4b358] hover:bg-[#e2cb8b] transition-colors flex items-center justify-center gap-2 shadow cursor-pointer"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Turn-by-Turn Directions</span>
              </a>
            </div>
          </div>

          {/* Interactive Map Visual Slot */}
          <div className="lg:col-span-7 bg-[#141b1e] border border-white/5 rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            <div className="relative flex-1 min-h-[380px] bg-[#1a2327]">
              {/* Google Maps Embed iframe with live interactive map of Nikunja 2 Dhaka */}
              <iframe
                title="Breeze Restaurant Google Maps Location"
                src="https://maps.google.com/maps?q=Breeze+Restaurant+House+1C+Road+16+Nikunja+2+Dhaka&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '380px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full filter contrast-105"
              />

              {/* Floating map pin info card */}
              <div className="absolute top-4 left-4 p-3.5 rounded-xl bg-[#0d1214]/90 backdrop-blur-md border border-white/15 max-w-xs shadow-lg pointer-events-none">
                <div className="font-serif font-bold text-sm text-[#fbf8ee]">
                  Breeze Restaurant
                </div>
                <div className="text-[11px] text-[#c4c1b9] mt-0.5">
                  House# 1/C, 1/D, Road# 16, Nikunja-2, Dhaka
                </div>
                <div className="text-[11px] text-[#d4b358] font-medium mt-1">
                  ★ 4.4 on Google Maps (930+ reviews)
                </div>
              </div>
            </div>

            {/* Quick Map Action Footer */}
            <div className="p-4 bg-[#0d1214] border-t border-white/5 flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="text-[#a8a49c]">
                Shortlink: <span className="font-mono text-[#eae7e1]">maps.app.goo.gl/yGj2q18kWAb2xo4s6</span>
              </span>
              <a
                href={RESTAURANT_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#d4b358] hover:text-[#e2cb8b] font-medium flex items-center gap-1"
              >
                <span>Open in App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
