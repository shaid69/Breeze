/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MenuSection } from './components/MenuSection';
import { AtmosphereSection } from './components/AtmosphereSection';
import { ReservationSection } from './components/ReservationSection';
import { ReviewsSection } from './components/ReviewsSection';
import { LocationSection } from './components/LocationSection';
import { Footer } from './components/Footer';
import { ItemModal } from './components/ItemModal';
import { CartDrawer } from './components/CartDrawer';
import { CartItem, MenuItem } from './types';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleAddToCart = (
    item: MenuItem, 
    quantity: number = 1, 
    spiceLevel: 'Mild' | 'Medium' | 'Spicy' = 'Medium', 
    instructions: string = ''
  ) => {
    setCartItems(prev => {
      const existingIndex = prev.findIndex(
        ci => ci.menuItem.id === item.id && ci.spiceLevel === spiceLevel
      );
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        if (instructions) {
          copy[existingIndex].specialInstructions = instructions;
        }
        return copy;
      }
      return [
        ...prev,
        {
          menuItem: item,
          quantity,
          spiceLevel,
          specialInstructions: instructions || undefined,
        }
      ];
    });
  };

  const handleQuickAdd = (item: MenuItem) => {
    handleAddToCart(item, 1, 'Medium', '');
  };

  const handleUpdateQuantity = (index: number, quantity: number) => {
    setCartItems(prev => {
      const copy = [...prev];
      copy[index].quantity = quantity;
      return copy;
    });
  };

  const handleRemoveItem = (index: number) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#0d1214] text-[#eae7e1] flex flex-col selection:bg-[#d4b358]/30 selection:text-white">
      {/* Top Bar Contract (3 zones) */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenReservation={() => scrollToSection('reservations')}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onOpenReservation={() => scrollToSection('reservations')}
          onExploreMenu={() => scrollToSection('menu')}
        />

        {/* Menu Section */}
        <MenuSection
          onSelectItem={(item) => setSelectedItem(item)}
          onQuickAdd={handleQuickAdd}
        />

        {/* Atmosphere & Space Showcase */}
        <AtmosphereSection
          onOpenReservation={() => scrollToSection('reservations')}
        />

        {/* Table Reservation Engine */}
        <ReservationSection />

        {/* Guest Reviews & Google Maps Social Proof */}
        <ReviewsSection />

        {/* Location, Directions & Google Maps Integration */}
        <LocationSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Drawers */}
      <ItemModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
