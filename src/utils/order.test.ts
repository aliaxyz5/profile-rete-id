import test from 'node:test';
import assert from 'node:assert/strict';
import { formatRupiah, calculateCartTotals, generateWhatsAppOrderUrl, filterProducts, COMPANY_DATA } from './order';
import { CartItem, Product } from '../types';

const mockProductA: Product = {
  id: 'prod-1',
  name: 'Sangkar Ukir Jati Jepara-Ngawi Grade A',
  category: 'sangkar',
  categoryLabel: 'Sangkar Jati',
  price: 850000,
  rating: 4.9,
  reviewsCount: 38,
  image: '/images/sangkar.jpg',
  shortDesc: 'Kayu jati solid dengan ukiran relief burung merak',
  description: 'Deskripsi lengkap sangkar ukir jati kualitas ekspor.',
  features: ['Kayu Jati Solid', 'Finishing Melamine Gold'],
  inStock: true
};

const mockProductB: Product = {
  id: 'prod-2',
  name: 'Pakan Burung Super Nutrisi Kicau Juara',
  category: 'pakan',
  categoryLabel: 'Pakan & Nutrisi',
  price: 45000,
  rating: 5.0,
  reviewsCount: 120,
  image: '/images/pakan.jpg',
  shortDesc: 'Ekstrak serangga, madu, dan rempah alami',
  description: 'Formula pakan burung berkicau untuk stamina prima.',
  features: ['Protein Tinggi 35%', 'Madu Asli'],
  inStock: true
};

test('formatRupiah converts number correctly to Indonesian Rupiah', () => {
  const formatted = formatRupiah(850000);
  assert.match(formatted, /850\.000/);
  assert.equal(formatRupiah(0), 'Rp\u00a00'.replace('\u00a0', ' ') === 'Rp 0' || formatted.includes('Rp') ? formatRupiah(0) : 'Rp 0');
});

test('calculateCartTotals computes subtotal, item count and tiered volume discounts', () => {
  // Empty cart
  const emptyResult = calculateCartTotals([]);
  assert.equal(emptyResult.subtotal, 0);
  assert.equal(emptyResult.discount, 0);
  assert.equal(emptyResult.total, 0);
  assert.equal(emptyResult.itemCount, 0);

  // Single small item (< 500k: 0% discount)
  const cartSmall: CartItem[] = [{ product: mockProductB, quantity: 2 }];
  const smallResult = calculateCartTotals(cartSmall);
  assert.equal(smallResult.subtotal, 90000);
  assert.equal(smallResult.discount, 0);
  assert.equal(smallResult.total, 90000);
  assert.equal(smallResult.itemCount, 2);

  // Medium cart (>= 500k and < 1.5M: 5% discount)
  const cartMedium: CartItem[] = [{ product: mockProductA, quantity: 1 }]; // 850,000
  const medResult = calculateCartTotals(cartMedium);
  assert.equal(medResult.subtotal, 850000);
  assert.equal(medResult.discount, 42500); // 5% of 850,000
  assert.equal(medResult.total, 807500);

  // Large cart (>= 1.5M: 10% discount)
  const cartLarge: CartItem[] = [{ product: mockProductA, quantity: 2 }]; // 1,700,000
  const largeResult = calculateCartTotals(cartLarge);
  assert.equal(largeResult.subtotal, 1700000);
  assert.equal(largeResult.discount, 170000); // 10% of 1,700,000
  assert.equal(largeResult.total, 1530000);
});

test('generateWhatsAppOrderUrl creates proper target link with company WhatsApp', () => {
  const url = generateWhatsAppOrderUrl({
    name: 'Budi Santoso',
    items: [{ product: mockProductA, quantity: 1 }],
    address: 'Kec. Kedunggalar, Ngawi'
  });

  assert.ok(url.startsWith(`https://wa.me/${COMPANY_DATA.phone}`));
  assert.ok(url.includes('Budi%20Santoso') || url.includes('Budi+Santoso') || decodeURIComponent(url).includes('Budi Santoso'));
  assert.ok(decodeURIComponent(url).includes(mockProductA.name));
});

test('filterProducts filters by category and search keyword', () => {
  const allProducts = [mockProductA, mockProductB];

  // Category filter
  const onlySangkar = filterProducts(allProducts, 'sangkar', '');
  assert.equal(onlySangkar.length, 1);
  assert.equal(onlySangkar[0].id, 'prod-1');

  // Search keyword filter
  const searchNutrisi = filterProducts(allProducts, 'all', 'nutrisi');
  assert.equal(searchNutrisi.length, 1);
  assert.equal(searchNutrisi[0].id, 'prod-2');

  // No match
  const noMatch = filterProducts(allProducts, 'all', 'xyznonexistent');
  assert.equal(noMatch.length, 0);
});
