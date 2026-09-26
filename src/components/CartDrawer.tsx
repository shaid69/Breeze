import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, CheckCircle2, Bike, Store, UtensilsCrossed, Phone } from 'lucide-react';
import { CartItem, OrderType, OrderDetails } from '../types';
import { RESTAURANT_INFO } from '../data/restaurantData';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (index: number, quantity: number) => void;
  onRemoveItem: (index: number) => void;
  onClearCart: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [orderType, setOrderType] = useState<OrderType>('delivery');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [tableNumber, setTableNumber] = useState('');
  const [orderNotes, setOrderNotes] = useState('');
  const [confirmedOrder, setConfirmedOrder] = useState<OrderDetails | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce((sum, item) => sum + item.menuItem.price * item.quantity, 0);
  const vat = Math.round(subtotal * 0.05); // 5% VAT in Bangladesh restaurants
  const deliveryFee = orderType === 'delivery' ? (subtotal > 1500 ? 0 : 80) : 0;
  const total = subtotal + vat + deliveryFee;

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerName.trim()) {
      setErrorMsg('Please provide your name');
      return;
    }
    if (!phone.trim()) {
      setErrorMsg('Please enter your contact phone number');
      return;
    }
    if (orderType === 'delivery' && !address.trim()) {
      setErrorMsg('Please specify your delivery address in Dhaka');
      return;
    }

    setSubmitting(true);
    setErrorMsg('');

    setTimeout(() => {
      const order: OrderDetails = {
        orderId: `BRZ-${Math.floor(100000 + Math.random() * 900000)}`,
        orderType,
        customerName,
        phone,
        address: orderType === 'delivery' ? address : undefined,
        tableNumber: orderType === 'dine_in' ? tableNumber : undefined,
        items: [...items],
        subtotal,
        vat,
        deliveryFee,
        total,
        createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        notes: orderNotes || undefined,
      };

      setConfirmedOrder(order);
      onClearCart();
      setSubmitting(false);
    }, 400);
  };

  const handleFinish = () => {
    setConfirmedOrder(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm animate-fade-in">
      <div 
        className="w-full max-w-md bg-[#13191c] border-l border-white/10 h-full flex flex-col shadow-2xl overflow-hidden"
        role="dialog"
        aria-modal="true"
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between shrink-0 bg-[#0d1214]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#d4b358]" />
            <h2 className="font-serif text-lg font-bold text-[#fbf8ee]">
              {confirmedOrder ? 'Order Confirmed' : 'Your Order Bag'}
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-2 text-[#9c988f] hover:text-white hover:bg-white/10 rounded-lg transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto p-5 space-y-6">
          {confirmedOrder ? (
            /* Order Receipt */
            <div className="space-y-6 animate-fade-in">
              <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-200 flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif font-bold text-base text-white">Order Placed Successfully!</h4>
                  <p className="text-xs text-emerald-300/90 mt-1">
                    Order <span className="font-mono font-bold text-white">#{confirmedOrder.orderId}</span> is now being prepared in the kitchen.
                  </p>
                </div>
              </div>

              <div className="bg-[#0d1214] p-4 rounded-xl border border-white/5 space-y-3 text-xs">
                <div className="flex justify-between text-[#9c988f]">
                  <span>Order Type</span>
                  <span className="text-white font-medium capitalize">{confirmedOrder.orderType.replace('_', ' ')}</span>
                </div>
                <div className="flex justify-between text-[#9c988f]">
                  <span>Customer Name</span>
                  <span className="text-white font-medium">{confirmedOrder.customerName}</span>
                </div>
                <div className="flex justify-between text-[#9c988f]">
                  <span>Phone</span>
                  <span className="text-white font-medium">{confirmedOrder.phone}</span>
                </div>
                {confirmedOrder.address && (
                  <div className="flex justify-between text-[#9c988f]">
                    <span>Address</span>
                    <span className="text-white font-medium text-right max-w-[200px]">{confirmedOrder.address}</span>
                  </div>
                )}
                {confirmedOrder.tableNumber && (
                  <div className="flex justify-between text-[#9c988f]">
                    <span>Table #</span>
                    <span className="text-white font-medium">{confirmedOrder.tableNumber}</span>
                  </div>
                )}
                <div className="pt-2 border-t border-white/5 flex justify-between font-bold text-sm text-[#fbf8ee]">
                  <span>Total Amount</span>
                  <span className="text-[#d4b358] font-mono">৳{confirmedOrder.total}</span>
                </div>
              </div>

              <div className="p-4 rounded-lg bg-white/5 border border-white/5 text-xs text-[#a8a49c] space-y-2">
                <p>
                  Estimated preparation time: <strong className="text-white">25-35 minutes</strong>.
                </p>
                <div className="flex items-center gap-2 text-[#d4b358]">
                  <Phone className="w-3.5 h-3.5" />
                  <span>Restaurant Hotline: {RESTAURANT_INFO.phoneDisplay}</span>
                </div>
              </div>

              <button
                onClick={handleFinish}
                className="w-full py-3 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#0d1214] bg-[#d4b358] hover:bg-[#e2cb8b] transition-colors cursor-pointer"
              >
                Close & Return to Menu
              </button>
            </div>
          ) : items.length === 0 ? (
            /* Empty Cart State */
            <div className="text-center py-20">
              <ShoppingBag className="w-12 h-12 text-[#9c988f]/40 mx-auto mb-3" />
              <h3 className="font-serif text-lg font-medium text-[#fbf8ee] mb-1">Your bag is empty</h3>
              <p className="text-xs text-[#9c988f] mb-6">
                Explore our menu and add your favorite dishes.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-lg bg-white/10 hover:bg-white/15 text-xs font-semibold tracking-wider uppercase text-[#fbf8ee] transition-colors cursor-pointer"
              >
                Browse Menu
              </button>
            </div>
          ) : (
            /* Items List & Checkout Form */
            <div className="space-y-6">
              {/* Order Mode Tabs */}
              <div>
                <label className="block text-[11px] uppercase tracking-wider text-[#9c988f] font-semibold mb-2">
                  Dining Mode
                </label>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    type="button"
                    onClick={() => setOrderType('delivery')}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                      orderType === 'delivery'
                        ? 'bg-[#d4b358] text-[#0d1214] border-[#d4b358] font-semibold'
                        : 'bg-white/5 text-[#c4c1b9] border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <Bike className="w-4 h-4" />
                    <span>Delivery</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('takeaway')}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                      orderType === 'takeaway'
                        ? 'bg-[#d4b358] text-[#0d1214] border-[#d4b358] font-semibold'
                        : 'bg-white/5 text-[#c4c1b9] border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <Store className="w-4 h-4" />
                    <span>Takeaway</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => setOrderType('dine_in')}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border flex flex-col items-center gap-1 transition-colors cursor-pointer ${
                      orderType === 'dine_in'
                        ? 'bg-[#d4b358] text-[#0d1214] border-[#d4b358] font-semibold'
                        : 'bg-white/5 text-[#c4c1b9] border-white/10 hover:bg-white/10'
                    }`}
                  >
                    <UtensilsCrossed className="w-4 h-4" />
                    <span>Dine-In</span>
                  </button>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-[#9c988f]">
                  <span>Items ({items.reduce((s, i) => s + i.quantity, 0)})</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-400 hover:text-red-300 transition-colors"
                  >
                    Clear All
                  </button>
                </div>

                <div className="space-y-2.5">
                  {items.map((item, index) => (
                    <div 
                      key={`${item.menuItem.id}-${index}`}
                      className="p-3 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between gap-3"
                    >
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs font-semibold text-[#fbf8ee] truncate">
                          {item.menuItem.name}
                        </h4>
                        <div className="text-[11px] text-[#9c988f] flex items-center gap-2 mt-0.5">
                          <span>৳{item.menuItem.price} each</span>
                          {item.spiceLevel && (
                            <>
                              <span>·</span>
                              <span>{item.spiceLevel}</span>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Quantity Stepper */}
                      <div className="flex items-center gap-2 bg-[#0d1214] border border-white/10 rounded-lg p-0.5">
                        <button
                          onClick={() => {
                            if (item.quantity > 1) {
                              onUpdateQuantity(index, item.quantity - 1);
                            } else {
                              onRemoveItem(index);
                            }
                          }}
                          className="w-6 h-6 flex items-center justify-center text-[#9c988f] hover:text-white"
                        >
                          {item.quantity === 1 ? <Trash2 className="w-3.5 h-3.5" /> : <Minus className="w-3.5 h-3.5" />}
                        </button>
                        <span className="w-5 text-center text-xs font-bold text-[#fbf8ee] tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(index, item.quantity + 1)}
                          className="w-6 h-6 flex items-center justify-center text-[#9c988f] hover:text-white"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Total for item */}
                      <div className="text-xs font-bold text-[#d4b358] font-mono tabular-nums text-right w-16">
                        ৳{item.menuItem.price * item.quantity}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Customer Info Form */}
              <form onSubmit={handleCheckout} className="space-y-4 pt-2 border-t border-white/10">
                {errorMsg && (
                  <div className="p-2.5 rounded bg-red-500/10 border border-red-500/30 text-red-300 text-xs">
                    {errorMsg}
                  </div>
                )}

                <div className="space-y-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9c988f] font-semibold mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Shakib Al Hasan"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      className="w-full text-xs py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9c988f] font-semibold mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="+880 17XXXXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full text-xs py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358]"
                      required
                    />
                  </div>

                  {orderType === 'delivery' && (
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9c988f] font-semibold mb-1">
                        Delivery Address (Dhaka) *
                      </label>
                      <input
                        type="text"
                        placeholder="House#, Road#, Area (Nikunja, Uttara, Khilkhet...)"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className="w-full text-xs py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358]"
                        required
                      />
                    </div>
                  )}

                  {orderType === 'dine_in' && (
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-[#9c988f] font-semibold mb-1">
                        Table Number (if seated)
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Table 4 / Booth B"
                        value={tableNumber}
                        onChange={(e) => setTableNumber(e.target.value)}
                        className="w-full text-xs py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358]"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-[#9c988f] font-semibold mb-1">
                      Order Notes (Optional)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Pack cutlery, ring doorbell, extra sauce"
                      value={orderNotes}
                      onChange={(e) => setOrderNotes(e.target.value)}
                      className="w-full text-xs py-2 px-3 bg-white/5 border border-white/10 rounded-lg text-[#eae7e1] placeholder-[#6b6760] focus:outline-none focus:border-[#d4b358]"
                    />
                  </div>
                </div>

                {/* Bill Breakdown */}
                <div className="pt-3 border-t border-white/10 space-y-2 text-xs">
                  <div className="flex justify-between text-[#9c988f]">
                    <span>Subtotal</span>
                    <span className="font-mono text-[#eae7e1] tabular-nums">৳{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-[#9c988f]">
                    <span>VAT (5%)</span>
                    <span className="font-mono text-[#eae7e1] tabular-nums">৳{vat}</span>
                  </div>
                  {orderType === 'delivery' && (
                    <div className="flex justify-between text-[#9c988f]">
                      <span>Delivery Fee</span>
                      <span className="font-mono text-[#eae7e1] tabular-nums">
                        {deliveryFee === 0 ? 'FREE (Over ৳1500)' : `৳${deliveryFee}`}
                      </span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-white/10 flex justify-between font-bold text-sm text-[#fbf8ee]">
                    <span>Total Amount</span>
                    <span className="text-[#d4b358] font-mono text-base tabular-nums">৳{total}</span>
                  </div>
                  <div className="text-[11px] text-[#9c988f] text-right">
                    Payment on delivery / dining: Cash, bKash, or Card accepted.
                  </div>
                </div>

                {/* Checkout Submit */}
                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full py-3.5 px-4 rounded-lg text-xs font-semibold uppercase tracking-wider text-[#0d1214] bg-[#d4b358] hover:bg-[#e2cb8b] disabled:bg-[#a97e20] transition-colors cursor-pointer shadow-lg mt-2 flex items-center justify-center gap-2"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>{submitting ? 'Submitting Order...' : `Place Order · ৳${total}`}</span>
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
