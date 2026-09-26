import React, { useState } from 'react';
import { X, Plus, Minus, Flame, Clock, Sparkles, Check, ShoppingBag } from 'lucide-react';
import { MenuItem } from '../types';

interface ItemModalProps {
  item: MenuItem | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem, quantity: number, spiceLevel: 'Mild' | 'Medium' | 'Spicy', instructions: string) => void;
}

export const ItemModal: React.FC<ItemModalProps> = ({ item, onClose, onAddToCart }) => {
  if (!item) return null;

  const [quantity, setQuantity] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState<'Mild' | 'Medium' | 'Spicy'>('Medium');
  const [instructions, setInstructions] = useState('');
  const [addedNotice, setAddedNotice] = useState(false);

  const handleAdd = () => {
    onAddToCart(item, quantity, spiceLevel, instructions);
    setAddedNotice(true);
    setTimeout(() => {
      setAddedNotice(false);
      onClose();
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="relative w-full max-w-lg bg-[#141b1e] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close dialog"
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white/80 hover:text-white hover:bg-black/90 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Dish Image Header */}
        <div className="relative h-60 w-full bg-[#1b2226] shrink-0 overflow-hidden">
          <img
            src={item.image}
            alt={item.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
            onError={(e) => {
              // fallback container
              (e.target as HTMLElement).style.display = 'none';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141b1e] via-transparent to-black/30" />
          
          {item.isSignature && (
            <div className="absolute bottom-3 left-4 text-xs font-semibold tracking-wider text-[#d4b358] uppercase flex items-center gap-1.5 bg-[#0d1214]/80 px-2.5 py-1 rounded backdrop-blur-sm border border-[#d4b358]/30">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Chef's Signature</span>
            </div>
          )}
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#fbf8ee]">{item.name}</h2>
              <div className="flex items-center gap-3 text-xs text-[#9c988f] mt-1">
                {item.preparationTime && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#d4b358]" />
                    {item.preparationTime}
                  </span>
                )}
                {item.calories && (
                  <>
                    <span aria-hidden="true">·</span>
                    <span>{item.calories}</span>
                  </>
                )}
              </div>
            </div>
            <div className="text-xl font-bold text-[#d4b358] tabular-nums whitespace-nowrap">
              ৳{item.price}
            </div>
          </div>

          <p className="text-sm text-[#c4c1b9] leading-relaxed">
            {item.description}
          </p>

          {item.ingredients && item.ingredients.length > 0 && (
            <div>
              <h4 className="text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2">Key Ingredients</h4>
              <div className="flex flex-wrap gap-1.5">
                {item.ingredients.map((ing, i) => (
                  <span key={i} className="text-xs text-[#c4c1b9] bg-white/5 px-2.5 py-1 rounded border border-white/5">
                    {ing}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Spice Level Selection */}
          <div>
            <label className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2 flex items-center gap-1.5">
              <Flame className="w-3.5 h-3.5 text-[#d4b358]" />
              <span>Spice Preference</span>
            </label>
            <div className="grid grid-cols-3 gap-2">
              {(['Mild', 'Medium', 'Spicy'] as const).map((level) => (
                <button
                  key={level}
                  type="button"
                  onClick={() => setSpiceLevel(level)}
                  className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all cursor-pointer ${
                    spiceLevel === level
                      ? 'bg-[#d4b358] text-[#0d1214] border-[#d4b358] font-semibold'
                      : 'bg-white/5 text-[#c4c1b9] border-white/10 hover:bg-white/10'
                  }`}
                >
                  {level}
                </button>
              ))}
            </div>
          </div>

          {/* Special Instructions */}
          <div>
            <label htmlFor="notes" className="block text-xs uppercase tracking-wider text-[#9c988f] font-semibold mb-2">
              Kitchen Notes (Optional)
            </label>
            <textarea
              id="notes"
              rows={2}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g. Less oil, sauce on the side, extra cutlery..."
              className="w-full text-sm bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358]"
            />
          </div>

          {/* Quantity & Add to Cart Action */}
          <div className="pt-2 flex items-center gap-4">
            <div className="flex items-center border border-white/15 rounded-lg bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                aria-label="Decrease quantity"
                className="w-8 h-8 rounded flex items-center justify-center text-[#eae7e1] hover:bg-white/10 transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="w-10 text-center font-bold text-sm text-[#fbf8ee] tabular-nums">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                aria-label="Increase quantity"
                className="w-8 h-8 rounded flex items-center justify-center text-[#eae7e1] hover:bg-white/10 transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <button
              onClick={handleAdd}
              disabled={addedNotice}
              className="flex-1 py-3 px-6 rounded-lg text-sm font-semibold tracking-wider uppercase text-[#0d1214] bg-[#d4b358] hover:bg-[#e2cb8b] disabled:bg-[#a97e20] transition-colors flex items-center justify-center gap-2 shadow cursor-pointer"
            >
              {addedNotice ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added to Bag</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add · ৳{item.price * quantity}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
