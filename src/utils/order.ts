import { CartItem, CompanyInfo, Product } from '../types';

export const COMPANY_DATA: CompanyInfo = {
  name: 'RETE. ID',
  shortName: 'RETE. ID',
  creditBy: 'Alkyy-in',
  since: '2012',
  address: 'RT.008/RW.001, Tambakselo Timur, Pelang Lor',
  district: 'Kec. Kedunggalar',
  regency: 'Kabupaten Ngawi',
  province: 'Jawa Timur',
  postalCode: '63254',
  phone: '6287782972456',
  phoneDisplay: '0877-8297-2456',
  hours: 'Buka 24 Jam Nonstop',
  status: 'Buka Setiap Hari',
  tiktokUrl: 'https://www.tiktok.com/@rete.id1?is_from_webapp=1&sender_device=pc',
  shopeeUrl: 'https://shopee.co.id/rete_alkyy?categoryId=100632&entryPoint=ShopByPDP&itemId=53460720230'
};

export const FULL_ADDRESS = `${COMPANY_DATA.address}, ${COMPANY_DATA.district}, ${COMPANY_DATA.regency}, ${COMPANY_DATA.province} ${COMPANY_DATA.postalCode}`;

/**
 * Format numeric value into Indonesian Rupiah (Rp)
 */
export function formatRupiah(value: number): string {
  if (isNaN(value)) return 'Rp 0';
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
}

/**
 * Calculate totals for cart items with volume discounts
 */
export function calculateCartTotals(items: CartItem[]): {
  subtotal: number;
  discount: number;
  total: number;
  itemCount: number;
} {
  if (!items || items.length === 0) {
    return { subtotal: 0, discount: 0, total: 0, itemCount: 0 };
  }

  const itemCount = items.reduce((acc, curr) => acc + (curr.quantity > 0 ? curr.quantity : 0), 0);
  const subtotal = items.reduce((acc, curr) => {
    const qty = Math.max(0, curr.quantity);
    return acc + (curr.product.price * qty);
  }, 0);

  // Bonus discount 5% for orders above Rp 500,000, 10% for orders above Rp 1,500,000
  let discount = 0;
  if (subtotal >= 1500000) {
    discount = Math.round(subtotal * 0.10);
  } else if (subtotal >= 500000) {
    discount = Math.round(subtotal * 0.05);
  }

  const total = Math.max(0, subtotal - discount);

  return {
    subtotal,
    discount,
    total,
    itemCount
  };
}

/**
 * Generate a WhatsApp chat URL for general inquiries or orders
 */
export function generateWhatsAppOrderUrl(params: {
  name?: string;
  phone?: string;
  address?: string;
  items?: CartItem[];
  note?: string;
  customProduct?: string;
}): string {
  const baseWaNumber = COMPANY_DATA.phone;
  const greeting = 'Halo RETE. ID, saya ingin berkonsultasi / memesan:';

  const lines: string[] = [greeting, ''];

  if (params.name) {
    lines.push(`👤 *Nama:* ${params.name}`);
  }
  if (params.phone) {
    lines.push(`📞 *No. HP:* ${params.phone}`);
  }
  if (params.address) {
    lines.push(`📍 *Alamat Pengiriman:* ${params.address}`);
  }

  if (params.items && params.items.length > 0) {
    lines.push('');
    lines.push('📦 *Daftar Pesanan:*');
    params.items.forEach((item, index) => {
      const itemTotal = formatRupiah(item.product.price * item.quantity);
      lines.push(`${index + 1}. ${item.product.name} (x${item.quantity}) - ${itemTotal}`);
    });

    const { subtotal, discount, total } = calculateCartTotals(params.items);
    lines.push('');
    lines.push(`💵 *Subtotal:* ${formatRupiah(subtotal)}`);
    if (discount > 0) {
      lines.push(`🎉 *Potongan Diskon:* -${formatRupiah(discount)}`);
    }
    lines.push(`✨ *Estimasi Total:* ${formatRupiah(total)}`);
  } else if (params.customProduct) {
    lines.push('');
    lines.push(`🕊️ *Produk yang diminati:* ${params.customProduct}`);
  }

  if (params.note) {
    lines.push('');
    lines.push(`📝 *Catatan Khusus:* ${params.note}`);
  }

  lines.push('');
  lines.push('Mohon info ketersediaan stok & panduan pengirimannya. Terima kasih!');

  const encodedText = encodeURIComponent(lines.join('\n'));
  return `https://wa.me/${baseWaNumber}?text=${encodedText}`;
}

/**
 * Filter products by category and search keyword
 */
export function filterProducts(products: Product[], category: string, searchQuery: string): Product[] {
  let filtered = [...products];

  if (category && category !== 'all') {
    filtered = filtered.filter(p => p.category === category);
  }

  if (searchQuery && searchQuery.trim() !== '') {
    const q = searchQuery.toLowerCase().trim();
    filtered = filtered.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.shortDesc.toLowerCase().includes(q) ||
      p.categoryLabel.toLowerCase().includes(q)
    );
  }

  return filtered;
}
