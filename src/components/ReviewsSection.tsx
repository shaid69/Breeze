import React, { useState } from 'react';
import { Star, MessageSquare, ArrowUpRight, CheckCircle, ThumbsUp } from 'lucide-react';
import { REVIEWS_DATA, RESTAURANT_INFO } from '../data/restaurantData';

export const ReviewsSection: React.FC = () => {
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');

  const filteredReviews = filterRating === 'all' 
    ? REVIEWS_DATA 
    : REVIEWS_DATA.filter(r => r.rating === filterRating);

  return (
    <section id="reviews" className="py-24 bg-[#11171a] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#d4b358] font-semibold mb-2">
              Google Maps Verified Feedback
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fbf8ee] tracking-tight [text-wrap:balance]">
              What Our Diners Say
            </h2>
          </div>

          <a
            href={RESTAURANT_INFO.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#d4b358] hover:text-[#e2cb8b] transition-colors"
          >
            <span>Read all 930+ reviews on Google Maps</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Rating Overview Banner */}
        <div className="bg-[#141b1e] border border-white/5 rounded-2xl p-6 sm:p-8 mb-12 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-4 flex items-center gap-5 border-b md:border-b-0 md:border-r border-white/10 pb-6 md:pb-0 md:pr-6">
            <div className="text-5xl font-serif font-bold text-[#fbf8ee] tabular-nums">
              {RESTAURANT_INFO.googleRating}
            </div>
            <div>
              <div className="flex items-center gap-1 text-[#d4b358] mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-4 h-4 ${i < 4 ? 'fill-[#d4b358] text-[#d4b358]' : 'fill-[#d4b358]/40 text-[#d4b358]'}`} 
                  />
                ))}
              </div>
              <div className="text-xs text-[#a8a49c]">
                Based on <strong className="text-white font-medium">{RESTAURANT_INFO.totalReviews} reviews</strong> on Google Maps
              </div>
            </div>
          </div>

          <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-[#a8a49c]">
            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="text-white font-medium mb-1">Cilantro Chicken Rice</div>
              <div>Most praised signature dish across diner reviews.</div>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="text-white font-medium mb-1">Calm & Cozy Interior</div>
              <div>Rated highly for anniversary, date night & privacy.</div>
            </div>
            <div className="p-3 rounded-lg bg-white/5 border border-white/5">
              <div className="text-white font-medium mb-1">Attentive & Honest Staff</div>
              <div>Commended for warmth, quick seating & integrity.</div>
            </div>
          </div>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-[#141b1e] border border-white/5 rounded-2xl p-6 flex flex-col justify-between hover:border-white/15 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="font-serif text-base font-semibold text-[#fbf8ee]">
                      {review.author}
                    </h4>
                    <div className="text-[11px] text-[#9c988f]">
                      {review.visitType} · {review.relativeTime}
                    </div>
                  </div>
                  <div className="flex items-center gap-0.5 text-[#d4b358]">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#d4b358]" />
                    ))}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#c4c1b9] leading-relaxed mb-4 italic">
                  "{review.text}"
                </p>
              </div>

              {review.highlightDish && (
                <div className="pt-3 border-t border-white/5 text-[11px] text-[#d4b358] font-medium flex items-center gap-1.5">
                  <ThumbsUp className="w-3 h-3" />
                  <span>Favorite: {review.highlightDish}</span>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
