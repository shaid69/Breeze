import React from 'react';
import { Armchair, Users, Sparkles, Music, Wine, Coffee } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface AtmosphereSectionProps {
  onOpenReservation: () => void;
}

export const AtmosphereSection: React.FC<AtmosphereSectionProps> = ({ onOpenReservation }) => {
  const highlights = [
    {
      icon: Armchair,
      title: 'Private Booths & Lounges',
      desc: 'Plush velvet booth seating crafted for privacy, intimate conversations, and undisturbed meals.'
    },
    {
      icon: Music,
      title: 'Acoustic Serenity',
      desc: 'Carefully dampened acoustics and gentle ambient melodies that insulate you from city bustle.'
    },
    {
      icon: Users,
      title: 'Family & Celebration Dining',
      desc: 'Modular banquet seating and customizable table arrangements for birthdays, anniversaries, and reunions.'
    },
    {
      icon: Coffee,
      title: 'Artisanal Beverage Bar',
      desc: 'Hand-pulled espresso, signature mochas, and refreshing botanical mocktails served all day.'
    }
  ];

  return (
    <section id="ambiance" className="py-24 bg-[#11171a] border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs uppercase tracking-widest text-[#d4b358] font-semibold mb-2">
            The Ambiance & Setting
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fbf8ee] tracking-tight mb-4 [text-wrap:balance]">
            An Intimate Oasis Along Road 16
          </h2>
          <p className="text-base text-[#a8a49c] font-light leading-relaxed">
            Designed with warm natural timber, acoustic paneling, soft pendant globes, and lush botanical accents—Breeze Restaurant was intentionally shaped to be a calm sanctuary for food lovers across Dhaka.
          </p>
        </div>

        {/* Feature Grid with Image Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Main Visual Frame */}
          <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
            <div className="aspect-[4/3] w-full bg-[#182024] overflow-hidden">
              <img
                src="/src/assets/images/interior_lounge_seating_1790414793182.jpg"
                alt="Breeze Restaurant private booth and lounge corner with warm lighting"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1214] via-transparent to-transparent opacity-80" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0d1214]/85 backdrop-blur-md border border-white/10">
              <div className="flex items-center justify-between text-xs text-[#d4b358] uppercase tracking-wider font-semibold mb-1">
                <span>Nikunja-2 Dining Room</span>
                <span>House# 1/C, Road# 16</span>
              </div>
              <p className="text-xs text-[#eae7e1]/90">
                Comfortable private booths and central seating designed for leisurely dinners and family gatherings.
              </p>
            </div>
          </div>

          {/* Details & Points */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-4">
              {highlights.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={idx} 
                    className="p-5 rounded-xl bg-[#141b1e] border border-white/5 hover:border-white/10 transition-colors"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 shrink-0 text-[#d4b358]">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-serif text-base font-semibold text-[#fbf8ee] mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-[#a8a49c] leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenReservation}
                className="w-full py-3.5 px-6 rounded-lg text-xs font-semibold tracking-wider uppercase text-[#0d1214] bg-[#d4b358] hover:bg-[#e2cb8b] transition-colors cursor-pointer text-center"
              >
                Reserve Your Table Today
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
