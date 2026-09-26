import React, { useState, useMemo } from 'react';
import { Search, Sparkles, Plus, Flame, Utensils } from 'lucide-react';
import { MenuItem } from '../types';
import { MENU_ITEMS } from '../data/restaurantData';

interface MenuSectionProps {
  onSelectItem: (item: MenuItem) => void;
  onQuickAdd: (item: MenuItem) => void;
}

type CategoryTab = 'all' | 'mains' | 'steaks' | 'pasta' | 'starters' | 'burgers' | 'beverages' | 'desserts';

export const MenuSection: React.FC<MenuSectionProps> = ({ onSelectItem, onQuickAdd }) => {
  const [activeTab, setActiveTab] = useState<CategoryTab>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [onlySignatures, setOnlySignatures] = useState(false);

  const categories: { id: CategoryTab; label: string }[] = [
    { id: 'all', label: 'All Dishes' },
    { id: 'mains', label: 'Chef Signatures & Mains' },
    { id: 'steaks', label: 'Steaks & Sizzlers' },
    { id: 'pasta', label: 'Artisanal Pasta' },
    { id: 'starters', label: 'Starters & Wings' },
    { id: 'burgers', label: 'Gourmet Burgers' },
    { id: 'beverages', label: 'Drinks & Coffee' },
    { id: 'desserts', label: 'Desserts' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchesCategory = activeTab === 'all' || item.category === activeTab;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesSignature = !onlySignatures || item.isSignature;
      return matchesCategory && matchesSearch && matchesSignature;
    });
  }, [activeTab, searchQuery, onlySignatures]);

  return (
    <section id="menu" className="py-24 bg-[#0d1214] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="text-xs uppercase tracking-widest text-[#d4b358] font-semibold mb-2">
            Culinary Craftsmanship
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-[#fbf8ee] tracking-tight mb-4 [text-wrap:balance]">
            Curated Dining Menu
          </h2>
          <p className="text-sm sm:text-base text-[#a8a49c] font-light leading-relaxed">
            Freshly prepared with authentic ingredients. From our famous Cilantro Chicken Rice to tender flame-grilled steaks and slow-simmered pastas.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="mb-10 space-y-4">
          {/* Top row: Search and Signature toggle */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="relative w-full sm:w-80">
              <Search className="w-4 h-4 text-[#9c988f] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search pasta, steak, wings, mocha..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-[#141b1e] border border-white/10 rounded-lg text-sm text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#9c988f] hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
              <button
                onClick={() => setOnlySignatures(!onlySignatures)}
                className={`px-4 py-2 text-xs font-medium rounded-lg border transition-colors flex items-center gap-1.5 whitespace-nowrap cursor-pointer ${
                  onlySignatures
                    ? 'bg-[#d4b358] text-[#0d1214] border-[#d4b358] font-semibold'
                    : 'bg-[#141b1e] text-[#c4c1b9] border-white/10 hover:border-white/20'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chef's Signatures Only</span>
              </button>
            </div>
          </div>

          {/* Category Tabs: Clean segmented controls */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
            {categories.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 text-xs font-medium rounded-lg whitespace-nowrap transition-colors cursor-pointer shrink-0 ${
                  activeTab === tab.id
                    ? 'bg-white/15 text-[#fbf8ee] border border-[#d4b358]/50 shadow-sm'
                    : 'bg-[#141b1e] text-[#a8a49c] border border-white/5 hover:text-white hover:bg-white/5'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {filteredItems.length === 0 ? (
          <div className="text-center py-20 bg-[#141b1e] rounded-2xl border border-white/5 p-8">
            <Utensils className="w-10 h-10 text-[#d4b358]/50 mx-auto mb-3" />
            <h3 className="font-serif text-xl font-medium text-[#fbf8ee] mb-1">No items found</h3>
            <p className="text-sm text-[#9c988f]">
              Try adjusting your search query or switching categories.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => onSelectItem(item)}
                className="group bg-[#141b1e] border border-white/5 rounded-2xl overflow-hidden hover:border-[#d4b358]/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/40 flex flex-col cursor-pointer"
              >
                {/* Product Image Slot */}
                <div className="relative aspect-[4/3] w-full bg-[#1b2226] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#141b1e] via-transparent to-black/20" />

                  {/* Clean unboxed tag */}
                  {item.isSignature && (
                    <div className="absolute top-3 left-3 text-[11px] font-semibold tracking-wider text-[#d4b358] uppercase bg-[#0d1214]/85 px-2.5 py-1 rounded backdrop-blur-sm border border-[#d4b358]/25 flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      <span>Signature</span>
                    </div>
                  )}

                  {item.isSpicy && (
                    <div className="absolute top-3 right-3 text-[11px] font-semibold text-[#f87171] uppercase bg-[#0d1214]/85 px-2 py-1 rounded backdrop-blur-sm border border-red-500/20 flex items-center gap-1">
                      <Flame className="w-3 h-3" />
                      <span>Spicy</span>
                    </div>
                  )}
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Category Quiet Kicker */}
                    <div className="text-[11px] uppercase tracking-wider text-[#9c988f] font-medium mb-1">
                      {item.category}
                    </div>

                    {/* Dish Title */}
                    <h3 className="font-serif text-lg font-semibold text-[#fbf8ee] group-hover:text-[#d4b358] transition-colors leading-snug line-clamp-1 mb-2">
                      {item.name}
                    </h3>

                    {/* Description */}
                    <p className="text-xs text-[#a8a49c] line-clamp-2 leading-relaxed mb-4">
                      {item.description}
                    </p>
                  </div>

                  {/* Price & Action Row */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#9c988f] mr-1">BDT</span>
                      <span className="text-lg font-bold text-[#fbf8ee] tabular-nums font-mono">
                        ৳{item.price}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        onQuickAdd(item);
                      }}
                      aria-label={`Add ${item.name} to bag`}
                      className="px-3.5 py-1.5 rounded-lg bg-white/5 hover:bg-[#d4b358] text-[#fbf8ee] hover:text-[#0d1214] border border-white/10 hover:border-[#d4b358] text-xs font-medium transition-all duration-200 flex items-center gap-1 cursor-pointer"
                    >
                      <Plus className="w-3.5 h-3.5" />
                      <span>Add</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
