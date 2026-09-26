export interface MenuItem {
  id: string;
  name: string;
  category: 'mains' | 'pasta' | 'steaks' | 'starters' | 'burgers' | 'beverages' | 'desserts';
  price: number; // In BDT (৳)
  description: string;
  ingredients?: string[];
  image: string;
  isSignature?: boolean;
  isSpicy?: boolean;
  preparationTime?: string;
  calories?: string;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
  specialInstructions?: string;
  spiceLevel?: 'Mild' | 'Medium' | 'Spicy';
}

export type OrderType = 'dine_in' | 'takeaway' | 'delivery';

export interface OrderDetails {
  orderId: string;
  orderType: OrderType;
  customerName: string;
  phone: string;
  address?: string;
  tableNumber?: string;
  items: CartItem[];
  subtotal: number;
  vat: number;
  deliveryFee: number;
  total: number;
  createdAt: string;
  notes?: string;
}

export interface ReservationDetails {
  reservationId: string;
  guestName: string;
  phone: string;
  email?: string;
  date: string;
  time: string;
  guestsCount: number;
  seatingArea: 'main_hall' | 'window' | 'private_booth' | 'celebration';
  occasion?: string;
  specialRequests?: string;
  status: 'confirmed' | 'pending';
}

export interface ReviewItem {
  id: string;
  author: string;
  rating: number;
  relativeTime: string;
  text: string;
  highlightDish?: string;
  visitType: string;
}
