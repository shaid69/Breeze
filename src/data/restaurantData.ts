import { MenuItem, ReviewItem } from '../types';

export const RESTAURANT_INFO = {
  name: 'Breeze Restaurant',
  tagline: 'Contemporary Fine Dining & Culinary Serenity',
  address: 'House# 1/C, 1/D, Road# 16, Nikunja-2, Khilkhet, Dhaka 1229',
  city: 'Dhaka',
  postalCode: '1229',
  country: 'Bangladesh',
  phone: '+880 1305-073888',
  phoneDisplay: '+880 1305-073888',
  hours: 'Daily: 12:00 PM – 11:00 PM',
  googleMapsUrl: 'https://maps.app.goo.gl/yGj2q18kWAb2xo4s6',
  googleRating: 4.4,
  totalReviews: 937,
  cuisine: 'Modern Continental, Steaks, Artisanal Pasta & Fusion Grills',
  features: [
    'Private Booths & Family Dining',
    'Curated Ambient Lighting',
    'Express Home Delivery across Dhaka',
    'Free Roadside Valet & Parking Assistance',
    'Artisanal Coffee & Mocktail Bar'
  ]
};

export const MENU_ITEMS: MenuItem[] = [
  // Signatures & Mains
  {
    id: 'breeze-cilantro-chicken',
    name: 'Breeze Cilantro Chicken Rice',
    category: 'mains',
    price: 580,
    description: 'Our crowned guest favorite: tender char-grilled chicken breast infused with fresh garden cilantro and citrus marinade, served atop aromatic buttered basmati pilaf, charred corn, roasted cherry tomatoes, and house salsa.',
    ingredients: ['Grilled Chicken Breast', 'Cilantro Herb Pesto', 'Fragrant Pilaf Rice', 'Roasted Cherry Tomatoes', 'Lime Reduction'],
    image: '/src/assets/images/food_cilantro_chicken_1790414751429.jpg',
    isSignature: true,
    isSpicy: false,
    preparationTime: '20-25 mins',
    calories: '620 kcal'
  },
  {
    id: 'chicken-steak-platter',
    name: 'Chicken Steak Platter',
    category: 'steaks',
    price: 1150,
    description: 'Juicy, flame-seared boneless chicken steak glazed in rich rosemary black pepper jus. Served with silky buttered potato mash, grilled green asparagus, and honey-glazed baby carrots.',
    ingredients: ['Tender Chicken Steak', 'Cracked Black Pepper Jus', 'Garlic Potato Mash', 'Grilled Asparagus', 'Rosemary Butter'],
    image: '/src/assets/images/food_steak_platter_1790414766131.jpg',
    isSignature: true,
    isSpicy: false,
    preparationTime: '25-30 mins',
    calories: '780 kcal'
  },
  {
    id: 'creamy-chicken-alfredo',
    name: 'Creamy Chicken Alfredo Pasta',
    category: 'pasta',
    price: 425,
    description: 'Al dente fettuccine tossed in a velvet reduction of heavy cream, aged Parmigiano Reggiano, and garlic confit, topped with sautéed button mushrooms and tender grilled herb chicken breast strips.',
    ingredients: ['Fettuccine', 'Aged Parmigiano', 'Sautéed Mushrooms', 'Garlic Confit', 'Grilled Chicken', 'Fresh Basil'],
    image: '/src/assets/images/food_creamy_pasta_1790414779104.jpg',
    isSignature: true,
    isSpicy: false,
    preparationTime: '18-22 mins',
    calories: '690 kcal'
  },
  {
    id: 'prawn-garlic-pomodoro',
    name: 'Prawn Garlic Pomodoro',
    category: 'pasta',
    price: 650,
    description: 'Pan-seared Bay of Bengal jumbo prawns deglazed with garlic, crushed red pepper, and sweet San Marzano tomato reduction over ribbon spaghetti and fresh sweet basil.',
    ingredients: ['Jumbo Tiger Prawns', 'San Marzano Tomato', 'Garlic Olive Oil', 'Crushed Pepper', 'Sweet Basil'],
    image: '/src/assets/images/food_creamy_pasta_1790414779104.jpg',
    isSignature: false,
    isSpicy: true,
    preparationTime: '20 mins',
    calories: '540 kcal'
  },
  {
    id: 'oven-baked-pasta',
    name: 'Oven Baked Cheesy Pasta',
    category: 'pasta',
    price: 450,
    description: 'Layered rigatoni baked golden brown with slow-simmered spiced bolognese chicken ragù, silky béchamel sauce, and bubbling mozzarella crust.',
    ingredients: ['Rigatoni', 'Minced Chicken Ragù', 'Creamy Béchamel', 'Melted Mozzarella', 'Oregano'],
    image: '/src/assets/images/food_creamy_pasta_1790414779104.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '25 mins',
    calories: '720 kcal'
  },
  {
    id: 'spaghetti-bolognese',
    name: 'Classic Spaghetti Bolognese',
    category: 'pasta',
    price: 420,
    description: 'Slow-braised minced prime beef in tomato herb reduction, root vegetables, and extra virgin olive oil with shaved parmesan cheese.',
    ingredients: ['Minced Beef', 'Plum Tomatoes', 'Carrot & Celery Mirepoix', 'Parmesan', 'Spaghetti'],
    image: '/src/assets/images/food_creamy_pasta_1790414779104.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '18 mins',
    calories: '580 kcal'
  },
  {
    id: 'teriyaki-chicken-bowl',
    name: 'Teriyaki Chicken Rice Bowl',
    category: 'mains',
    price: 420,
    description: 'Succulent chicken thighs pan-glazed in sweet ginger-soy teriyaki sauce over steamed fragrant jasmine rice, topped with sesame seeds, wok greens, and pickled radish.',
    ingredients: ['Teriyaki Chicken Thighs', 'Steamed Jasmine Rice', 'Pickled Radish', 'Bok Choy', 'Toasted Sesame'],
    image: '/src/assets/images/food_cilantro_chicken_1790414751429.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '15-20 mins',
    calories: '590 kcal'
  },
  {
    id: 'lemon-herb-grilled-chicken',
    name: 'Lemon Herb Pan-Seared Chicken',
    category: 'mains',
    price: 520,
    description: 'Pan-seared chicken breast basted in lemon-thyme butter sauce, served with roasted baby potatoes and garlic green beans.',
    ingredients: ['Chicken Breast', 'Lemon Thyme Butter', 'Baby Potatoes', 'French Beans', 'Garlic Chips'],
    image: '/src/assets/images/food_cilantro_chicken_1790414751429.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '20 mins',
    calories: '510 kcal'
  },
  // Starters
  {
    id: 'glazed-chicken-wings',
    name: 'Sweet & Tangy Glazed Wings',
    category: 'starters',
    price: 380,
    description: 'Crispy fried chicken wings tossed in our signature tamarind-chili glaze, finished with sesame seeds and fresh scallions. One of our most popular appetizers.',
    ingredients: ['Chicken Wings', 'Tamarind Chili Glaze', 'Toasted Sesame', 'Scallions'],
    image: '/src/assets/images/food_cilantro_chicken_1790414751429.jpg',
    isSignature: true,
    isSpicy: true,
    preparationTime: '15 mins',
    calories: '450 kcal'
  },
  {
    id: 'karaage-fried-chicken',
    name: 'Karaage Crispy Chicken (6 pcs)',
    category: 'starters',
    price: 399,
    description: 'Japanese-style ginger and soy marinated boneless chicken chunks fried to super-crunchy perfection, served with house wasabi-lime mayo.',
    ingredients: ['Boneless Chicken Bites', 'Ginger-Soy Marinade', 'Potato Starch Crust', 'Wasabi Mayo'],
    image: '/src/assets/images/food_cilantro_chicken_1790414751429.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '15 mins',
    calories: '490 kcal'
  },
  {
    id: 'crispy-seafood-salad',
    name: 'Crispy Seafood Garden Salad',
    category: 'starters',
    price: 460,
    description: 'Fresh crisp garden lettuce, baby arugula, cherry tomatoes, and cucumber ribbons tossed with golden calamari and tender sautéed prawns in a zesty citrus vinaigrette.',
    ingredients: ['Calamari', 'Tiger Prawns', 'Organic Lettuce', 'Cherry Tomatoes', 'Citrus Vinaigrette'],
    image: '/src/assets/images/food_cilantro_chicken_1790414751429.jpg',
    isSignature: true,
    isSpicy: false,
    preparationTime: '12 mins',
    calories: '320 kcal'
  },
  {
    id: 'chicken-tenders-basket',
    name: 'Crispy Chicken Tenders (6 pcs)',
    category: 'starters',
    price: 395,
    description: 'Hand-breaded golden panko chicken tenders, served with smoked garlic dip and honey mustard sauce.',
    ingredients: ['Chicken Breast Tenders', 'Panko Crust', 'Smoked Garlic Dip', 'Honey Mustard'],
    image: '/src/assets/images/food_cilantro_chicken_1790414751429.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '15 mins',
    calories: '440 kcal'
  },
  // Burgers
  {
    id: 'breeze-prime-cheeseburger',
    name: 'Breeze Prime Smashed Cheeseburger',
    category: 'burgers',
    price: 390,
    description: 'Char-smashed beef patty, melted double cheddar, caramelized onions, house dill pickles, and special secret sauce in a toasted brioche bun with French fries.',
    ingredients: ['Prime Beef Patty', 'Double Cheddar', 'Caramelized Onions', 'Brioche Bun', 'Crispy Fries'],
    image: '/src/assets/images/food_steak_platter_1790414766131.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '18 mins',
    calories: '710 kcal'
  },
  {
    id: 'crispy-spiced-chicken-burger',
    name: 'Crispy Spiced Chicken Burger',
    category: 'burgers',
    price: 340,
    description: 'Golden crunchy chicken fillet tossed in mild cayenne spice, crisp purple cabbage slaw, and pickled jalapeño remoulade on a toasted brioche bun.',
    ingredients: ['Spiced Chicken Fillet', 'Cabbage Slaw', 'Jalapeño Mayo', 'Brioche Bun', 'Fries'],
    image: '/src/assets/images/food_cilantro_chicken_1790414751429.jpg',
    isSignature: false,
    isSpicy: true,
    preparationTime: '15 mins',
    calories: '640 kcal'
  },
  // Beverages
  {
    id: 'signature-breeze-mocha',
    name: 'Signature Breeze Mocha',
    category: 'beverages',
    price: 280,
    description: 'Double shot of locally roasted Arabica espresso blended with Belgian dark chocolate ganache, silky steamed milk, and dusted with fine cocoa.',
    ingredients: ['Espresso', 'Belgian Dark Chocolate', 'Steamed Milk', 'Cocoa Powder'],
    image: '/src/assets/images/hero_breeze_dining_1790414735388.jpg',
    isSignature: true,
    isSpicy: false,
    preparationTime: '5-7 mins',
    calories: '210 kcal'
  },
  {
    id: 'mint-basil-mojito',
    name: 'Fresh Mint & Basil Mojito',
    category: 'beverages',
    price: 240,
    description: 'Freshly muddled garden mint, sweet basil leaves, Persian lime juice, and cane sugar charged with sparkling club soda over crushed ice.',
    ingredients: ['Fresh Mint', 'Basil Leaves', 'Persian Lime', 'Sparkling Soda', 'Crushed Ice'],
    image: '/src/assets/images/hero_breeze_dining_1790414735388.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '5 mins',
    calories: '95 kcal'
  },
  {
    id: 'passionfruit-iced-tea',
    name: 'Tropical Passionfruit Iced Tea',
    category: 'beverages',
    price: 220,
    description: 'Cold-steeped Ceylon black tea shaken with natural passionfruit puree, lemon juice, and a hint of honey blossom.',
    ingredients: ['Ceylon Black Tea', 'Passionfruit Puree', 'Lemon', 'Wild Honey'],
    image: '/src/assets/images/hero_breeze_dining_1790414735388.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '5 mins',
    calories: '85 kcal'
  },
  // Desserts
  {
    id: 'molten-chocolate-lava-cake',
    name: 'Molten Belgian Chocolate Lava Cake',
    category: 'desserts',
    price: 360,
    description: 'Warm decadent Valrhona dark chocolate cake with a flowing molten core, dusted with powdered sugar and accompanied by premium French vanilla ice cream.',
    ingredients: ['Valrhona Dark Chocolate', 'Vanilla Bean Ice Cream', 'Fresh Berries'],
    image: '/src/assets/images/hero_breeze_dining_1790414735388.jpg',
    isSignature: true,
    isSpicy: false,
    preparationTime: '15 mins',
    calories: '490 kcal'
  },
  {
    id: 'lotus-biscoff-cheesecake',
    name: 'Lotus Biscoff Baked Cheesecake',
    category: 'desserts',
    price: 380,
    description: 'Rich New York style baked cheesecake layered over a buttery Lotus Biscoff biscuit crust, generously topped with warm speculoos cookie butter spread.',
    ingredients: ['Cream Cheese', 'Lotus Biscoff Crust', 'Caramelized Cookie Butter'],
    image: '/src/assets/images/hero_breeze_dining_1790414735388.jpg',
    isSignature: false,
    isSpicy: false,
    preparationTime: '5 mins',
    calories: '530 kcal'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Rafiqul Islam',
    rating: 5,
    relativeTime: '2 weeks ago',
    text: 'Breeze Restaurant is a hidden gem in Nikunja-2! The Breeze Cilantro Chicken Rice was cooked to perfection—super tender and bursting with fragrant herbal flavor. The atmosphere is calm and soothing, far away from the traffic noise.',
    highlightDish: 'Breeze Cilantro Chicken Rice',
    visitType: 'Dine-in · Dinner'
  },
  {
    id: 'rev-2',
    author: 'Tasnim Chowdhury',
    rating: 5,
    relativeTime: '1 month ago',
    text: 'Celebrated our anniversary in one of their private booths. The lighting and interior decor are truly elegant. The Chicken Alfredo and their signature Mocha were top notch. The staff was polite and discreet.',
    highlightDish: 'Chicken Alfredo & Signature Mocha',
    visitType: 'Dine-in · Anniversary Dinner'
  },
  {
    id: 'rev-3',
    author: 'Farhan Ahmed',
    rating: 4,
    relativeTime: '3 weeks ago',
    text: 'Great food presentation and generous portion sizes. The Chicken Steak Platter was juicy with flavorful black pepper sauce and silky mash. Convenient location right near Road 16 in Nikunja.',
    highlightDish: 'Chicken Steak Platter',
    visitType: 'Dine-in · Lunch'
  },
  {
    id: 'rev-4',
    author: 'Samia Kabir',
    rating: 5,
    relativeTime: '2 months ago',
    text: 'The Sweet & Tangy Wings and Crispy Seafood Salad are absolute winners. Love that they also do fast delivery. Friendly team and very clean dining floor. 10/10 recommended for family dinners.',
    highlightDish: 'Sweet & Tangy Wings',
    visitType: 'Dine-in & Takeaway'
  },
  {
    id: 'rev-5',
    author: 'Mahmud Hasan',
    rating: 5,
    relativeTime: '3 months ago',
    text: 'A great fine dining option near Khilkhet and the airport zone. The ambiance is lovely with comfortable booth seats. I also appreciate the honest and professional staff.',
    highlightDish: 'Teriyaki Chicken & Coffee',
    visitType: 'Dine-in · Friends Gathering'
  }
];
