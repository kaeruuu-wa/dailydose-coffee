/**
 * DailyDose Coffee — Full Menu Data
 *
 * PRICE FORMAT:
 *  hasSizes: true  → price: { sm: Number, lg: Number }  (sm = 16oz, lg = 22oz)
 *  hasSizes: false → price: Number  (fixed price, e.g. hot drinks, food)
 *
 * SIZE LABELS:
 *  sizeLabel: '12 oz'  → shown as a static pill (Hot Coffee)
 *  sizeLabel: null     → no size label shown (food categories)
 *
 * BADGES: 'Best Seller' | 'Must Try' | null
 *
 * ADD-ONS (displayed as a note in the Menu section):
 *  Espresso +₱30 · Sub Oat +₱20 · Sauces/Syrups +₱10 · Seasalt Foam +₱20
 */

export const menuData = [
  // ─── 1. The Classics ────────────────────────────────────────────
  {
    category: 'The Classics',
    emoji: '🧋',
    hasSizes: true,
    sizeLabel: null,
    items: [
      { id: 1,  name: 'Caramel Macchiato', description: '', price: { sm: 130, lg: 150 }, badge: null },
      { id: 2,  name: 'Spanish Latte',     description: '', price: { sm: 130, lg: 150 }, badge: 'Best Seller' },
      { id: 3,  name: 'Vanilla Oat',       description: '', price: { sm: 140, lg: 160 }, badge: null },
      { id: 4,  name: 'Cafe Latte',        description: '', price: { sm: 120, lg: 140 }, badge: null },
      { id: 5,  name: 'White Mocha',       description: '', price: { sm: 130, lg: 150 }, badge: null },
      { id: 6,  name: 'Americano',         description: '', price: { sm: 110, lg: 130 }, badge: null },
    ],
  },

  // ─── 2. Signature Coffee ─────────────────────────────────────────
  {
    category: 'Signature Coffee',
    emoji: '✨',
    hasSizes: true,
    sizeLabel: null,
    items: [
      { id: 7,  name: "Barista's Favorite",    description: '', price: { sm: 140, lg: 160 }, badge: 'Best Seller' },
      { id: 8,  name: 'Hazelnut Latte',        description: '', price: { sm: 130, lg: 150 }, badge: null },
      { id: 9,  name: 'Salted Caramel',        description: '', price: { sm: 130, lg: 150 }, badge: null },
      { id: 10, name: 'Seasalt Oat Latte',     description: '', price: { sm: 150, lg: 170 }, badge: null },
      { id: 11, name: 'Biscoff Latte',         description: '', price: { sm: 150, lg: 170 }, badge: 'Must Try' },
      { id: 12, name: 'Cinnamon Cloud Latte',  description: '', price: { sm: 150, lg: 170 }, badge: 'Must Try' },
    ],
  },

  // ─── 3. Hot Coffee ───────────────────────────────────────────────
  {
    category: 'Hot Coffee',
    emoji: '☕',
    hasSizes: false,
    sizeLabel: '12 oz',
    items: [
      { id: 13, name: 'Caramel Macchiato', description: '', price: 130, badge: null },
      { id: 14, name: 'Salted Caramel',    description: '', price: 130, badge: null },
      { id: 15, name: 'Spanish Latte',     description: '', price: 130, badge: null },
      { id: 16, name: 'White Mocha',       description: '', price: 130, badge: null },
      { id: 17, name: 'Hazelnut Latte',    description: '', price: 130, badge: null },
      { id: 18, name: 'Cafe Latte',        description: '', price: 120, badge: null },
      { id: 19, name: 'Vanilla Oat',       description: '', price: 140, badge: null },
    ],
  },

  // ─── 4. Non-Coffee Series ────────────────────────────────────────
  {
    category: 'Non-Coffee',
    emoji: '🍫',
    hasSizes: true,
    sizeLabel: null,
    items: [
      { id: 20, name: 'Iced Cocoa',      description: '', price: { sm: 130, lg: 150 }, badge: null },
      { id: 21, name: 'Berry Cocoa',     description: '', price: { sm: 140, lg: 160 }, badge: null },
      { id: 22, name: 'Strawberry Milk', description: '', price: { sm: 120, lg: 140 }, badge: null },
      { id: 23, name: 'Biscoff Milk',    description: '', price: { sm: 130, lg: 150 }, badge: null },
      { id: 24, name: 'Nutella Milk',    description: '', price: { sm: 130, lg: 150 }, badge: null },
      { id: 25, name: 'Oreo Milk',       description: '', price: { sm: 120, lg: 140 }, badge: null },
    ],
  },

  // ─── 5. Fruit Fizz ───────────────────────────────────────────────
  {
    category: 'Fruit Fizz',
    emoji: '🫧',
    hasSizes: true,
    sizeLabel: null,
    items: [
      { id: 26, name: 'Strawberry Fizz',    description: '', price: { sm: 90, lg: 110 }, badge: null },
      { id: 27, name: 'Blueberry Fizz',     description: '', price: { sm: 90, lg: 110 }, badge: null },
      { id: 28, name: 'Lemon Fizz',         description: '', price: { sm: 90, lg: 110 }, badge: null },
      { id: 29, name: 'Peach Mango Fizz',   description: '', price: { sm: 90, lg: 110 }, badge: null },
      { id: 30, name: 'Lychee Fizz',        description: '', price: { sm: 90, lg: 110 }, badge: null },
      { id: 31, name: 'Passion Fruit Fizz', description: '', price: { sm: 90, lg: 110 }, badge: null },
    ],
  },

  // ─── 6. Matcha Series ────────────────────────────────────────────
  {
    category: 'Matcha Series',
    emoji: '🍵',
    hasSizes: true,
    sizeLabel: null,
    items: [
      { id: 32, name: 'Matcha Latte',           description: '', price: { sm: 130, lg: 150 }, badge: null },
      { id: 33, name: 'Matcha Oat',             description: '', price: { sm: 150, lg: 170 }, badge: null },
      { id: 34, name: 'Strawberry Matcha',      description: '', price: { sm: 140, lg: 160 }, badge: 'Best Seller' },
      { id: 35, name: 'Matcha Freddo',          description: '', price: { sm: 140, lg: 160 }, badge: null },
      { id: 36, name: 'White Chocolate Matcha', description: '', price: { sm: 140, lg: 160 }, badge: null },
      { id: 37, name: 'Seasalt Oat Matcha',     description: '', price: { sm: 150, lg: 170 }, badge: null },
      { id: 38, name: 'Mango Matcha',           description: '', price: { sm: 140, lg: 160 }, badge: 'Must Try' },
    ],
  },

  // ─── 7. Rice Meals ───────────────────────────────────────────────
  {
    category: 'Rice Meals',
    emoji: '🍚',
    hasSizes: false,
    sizeLabel: null,
    items: [
      { id: 39, name: 'Bacon Ricebowl',       description: 'Served with fried egg', price: 150, badge: null },
      { id: 40, name: 'Tapa Ricebowl',        description: 'Served with fried egg', price: 160, badge: null },
      { id: 41, name: 'K-Spam Ricebowl',      description: 'Served with fried egg', price: 150, badge: null },
      { id: 42, name: 'Crispy Pork Ricebowl', description: 'Served with fried egg', price: 160, badge: null },
      { id: 43, name: 'Tocino Ricebowl',      description: 'Served with fried egg', price: 150, badge: null },
      { id: 44, name: 'Longganisa Ricebowl',  description: 'Served with fried egg', price: 150, badge: null },
    ],
  },

  // ─── 8. Appetizers ───────────────────────────────────────────────
  {
    category: 'Appetizers',
    emoji: '🍟',
    hasSizes: false,
    sizeLabel: null,
    items: [
      { id: 45, name: 'K-Spam Fries',   description: '', price: 140, badge: null },
      { id: 46, name: 'Chicken Tidbits', description: '', price: 140, badge: null },
      { id: 47, name: 'Potato Fries',   description: '', price: 120, badge: null },
      { id: 48, name: 'Chicken & Fries', description: '', price: 190, badge: null },
      { id: 49, name: 'Nachos',          description: '', price: 140, badge: null },
      { id: 50, name: 'Shanghai',        description: '', price: 100, badge: null },
    ],
  },

  // ─── 9. Pastas ───────────────────────────────────────────────────
  {
    category: 'Pastas',
    emoji: '🍝',
    hasSizes: false,
    sizeLabel: null,
    items: [
      { id: 51, name: 'Bacon & Mushroom',          description: '', price: 180, badge: null },
      { id: 52, name: 'Spicy Sardines',            description: '', price: 170, badge: null },
      { id: 53, name: 'Longganisa Aglio e Olio',   description: '', price: 180, badge: null },
      { id: 54, name: 'Longganisa & Red Egg',       description: '', price: 200, badge: null },
    ],
  },
]

/** Add-on options shown as a note strip in the Menu section */
export const addOns = [
  { label: 'Espresso',      price: '+₱30' },
  { label: 'Sub Oat',       price: '+₱20' },
  { label: 'Sauces/Syrups', price: '+₱10' },
  { label: 'Seasalt Foam',  price: '+₱20' },
]
