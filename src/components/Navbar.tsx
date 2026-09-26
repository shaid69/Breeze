import React, { useState } from 'react';
import { ShoppingBag, Calendar, Phone, Menu as MenuIcon, X, MapPin } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  onOpenReservation: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  onOpenReservation,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Menu', href: '#menu' },
    { label: 'Ambiance', href: '#ambiance' },
    { label: 'Reservations', href: '#reservations' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Location', href: '#location' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#0d1214]/95 backdrop-blur-md border-b border-white/5 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Zone 1: Single element wordmark in display face */}
        <a 
          href="#" 
          className="font-serif text-2xl md:text-3xl font-bold tracking-widest text-[#f5eed3] hover:text-[#d4b358] transition-colors whitespace-nowrap"
        >
          BREEZE
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#c4c1b9]">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-[#f5eed3] transition-colors hover:underline underline-offset-8 decoration-[#d4b358]/50"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center space-x-3">
          {/* Cart / Bag Button */}
          <button
            onClick={onOpenCart}
            aria-label="View Order Bag"
            className="relative p-2.5 rounded-lg text-[#eae7e1] hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors flex items-center justify-center cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-[#d4b358]" />
            {cartCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-[#d4b358] text-[#0d1214] text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Table Reservation Button */}
          <button
            onClick={onOpenReservation}
            className="hidden sm:inline-flex items-center space-x-2 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-[#0d1214] bg-[#d4b358] hover:bg-[#e2cb8b] rounded-lg transition-colors whitespace-nowrap shadow-sm cursor-pointer"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Table</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="md:hidden p-2 rounded-lg text-[#c4c1b9] hover:text-white hover:bg-white/5 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#13191c] border-b border-white/10 px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-[#c4c1b9]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 rounded-md hover:bg-white/5 hover:text-[#f5eed3] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenReservation();
              }}
              className="w-full py-2.5 px-4 text-center text-xs font-semibold tracking-wider uppercase text-[#0d1214] bg-[#d4b358] hover:bg-[#e2cb8b] rounded-lg transition-colors cursor-pointer"
            >
              Reserve a Table
            </button>
            <a
              href={`tel:${RESTAURANT_INFO.phone}`}
              className="w-full py-2.5 px-4 text-center text-xs font-medium text-[#c4c1b9] bg-white/5 rounded-lg border border-white/10 flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#d4b358]" />
              <span>Call: {RESTAURANT_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
