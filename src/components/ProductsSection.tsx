import React, { useState } from 'react';
import { LuxuryDivider } from './NatureDecorations';
import { Product } from '../types';
import { PRODUCTS_DATA } from '../data/mockData';
import { formatRupiah, filterProducts, COMPANY_DATA } from '../utils/order';
import { Search, ShoppingBag, Eye, Phone, Star, Sparkles, X, CheckCircle, Tag, ExternalLink } from 'lucide-react';

interface ProductsSectionProps {
  onAddToCart: (product: Product) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProduct, setActiveModalProduct] = useState<Product | null>(null);
  const [addedNotice, setAddedNotice] = useState<string | null>(null);

  const categories = [
    { id: 'all', label: 'Semua Produk' },
    { id: 'sangkar', label: 'Sangkar Burung' },
    { id: 'art_alam', label: 'Layangan & Seni Alam' },
    { id: 'pakan', label: 'Pakan & Nutrisi' },
    { id: 'vitamin', label: 'Vitamin & Obat' },
    { id: 'aksesoris', label: 'Aksesoris Mewah' },
  ];

  const filteredProducts = filterProducts(PRODUCTS_DATA, selectedCategory, searchQuery);

  const handleAdd = (product: Product) => {
    onAddToCart(product);
    setAddedNotice(product.name);
    setTimeout(() => {
      setAddedNotice(null);
    }, 2200);
  };

  return (
    <section id="produk" className="relative py-20 bg-[#F8FAFC] text-[#1E293B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LuxuryDivider
          subtitle="Koleksi Pilihan"
          title="Katalog Produk RETE. ID"
        />

        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base text-slate-600 mb-8">
          Koleksi sangkar besi minimalis, sangkar jati ukir kontes, layangan kain pantai lokal,
          hingga pakan dan suplemen alami dengan layanan pemesanan 24 jam nonstop.
        </p>

        {/* Filter & Search Bar (Simpel & Bersih) */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 bg-white p-3.5 rounded-2xl border border-slate-200 shadow-sm">
          {/* Categories Pill Navigation */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#0284C7] text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari produk..."
              className="w-full pl-9 pr-4 py-1.5 text-xs rounded-full bg-slate-50 border border-slate-200 focus:outline-none focus:border-[#0284C7] focus:bg-white transition-all text-slate-800"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Floating Added Notice Toast */}
        {addedNotice && (
          <div className="fixed bottom-24 right-6 z-50 bg-[#0D2319] text-white px-4 py-2.5 rounded-2xl border border-[#34D399] shadow-xl flex items-center gap-2.5 animate-bounce">
            <CheckCircle className="w-4 h-4 text-[#34D399]" />
            <span className="text-xs">
              <strong className="text-[#38BDF8]">{addedNotice}</strong> ditambahkan ke pesanan!
            </span>
          </div>
        )}

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300">
            <Sparkles className="w-8 h-8 text-[#0284C7] mx-auto mb-2" />
            <h4 className="font-heading text-base font-bold text-slate-800">Produk Tidak Ditemukan</h4>
            <p className="text-xs text-slate-500 mt-1">
              Coba kata kunci lain atau pilih kategori &quot;Semua Produk&quot;.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 px-4 py-1.5 text-xs font-semibold rounded-full bg-[#0284C7] text-white"
            >
              Reset Filter
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl bg-white border border-slate-200 hover:border-[#38BDF8] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Product Image Frame */}
                <div className="relative aspect-square overflow-hidden bg-slate-100">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />

                  {/* Badges Overlay */}
                  <div className="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
                    {product.badge && (
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold tracking-wider uppercase bg-[#0D2319]/85 text-[#34D399] border border-[#34D399]/40 shadow-sm">
                        {product.badge}
                      </span>
                    )}
                    <span className="px-1.5 py-0.5 rounded text-[9px] font-medium bg-black/50 text-white backdrop-blur-sm">
                      {product.categoryLabel}
                    </span>
                  </div>

                  {/* Quick Detail View Action */}
                  <button
                    onClick={() => setActiveModalProduct(product)}
                    className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-slate-800 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow cursor-pointer"
                    title="Lihat Detail Produk"
                    aria-label={`Lihat detail ${product.name}`}
                  >
                    <Eye className="w-3.5 h-3.5 text-[#0284C7]" />
                  </button>
                </div>

                {/* Card Body */}
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    {/* Rating & Review count */}
                    <div className="flex items-center gap-1.5 mb-1.5 text-xs text-amber-500">
                      <div className="flex items-center">
                        <Star className="w-3 h-3 fill-current" />
                        <span className="ml-1 font-bold text-slate-800 text-[11px]">{product.rating.toFixed(1)}</span>
                      </div>
                      <span className="text-slate-400 text-[10px]">({product.reviewsCount} ulasan)</span>
                    </div>

                    {/* Product Name */}
                    <h4 className="font-heading font-bold text-sm text-[#143525] leading-snug line-clamp-2 mb-1.5 group-hover:text-[#0284C7] transition-colors">
                      {product.name}
                    </h4>

                    {/* Short Description */}
                    <p className="text-[11px] text-slate-600 line-clamp-2 mb-3 leading-relaxed">
                      {product.shortDesc}
                    </p>
                  </div>

                  {/* Price & Action Buttons */}
                  <div className="pt-2.5 border-t border-slate-100">
                    <div className="flex items-baseline gap-2 mb-2">
                      <span className="text-sm font-bold text-[#143525]">
                        {formatRupiah(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-[11px] text-slate-400 line-through">
                          {formatRupiah(product.originalPrice)}
                        </span>
                      )}
                    </div>

                    {/* Facebook Link if available */}
                    {product.externalUrl && (
                      <a
                        href={product.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mb-2 w-full py-1 px-2 rounded-lg bg-sky-50 hover:bg-sky-100 text-[#0284C7] text-[11px] font-semibold flex items-center justify-center gap-1 transition-colors border border-sky-200"
                      >
                        <ExternalLink className="w-3 h-3" />
                        <span>{product.externalLabel || 'Lihat di Facebook'}</span>
                      </a>
                    )}

                    <div className="grid grid-cols-2 gap-1.5">
                      {/* Add to order cart */}
                      <button
                        onClick={() => handleAdd(product)}
                        className="w-full py-1.5 px-2 rounded-xl bg-emerald-50 hover:bg-[#143525] text-[#143525] hover:text-[#34D399] border border-emerald-200 text-xs font-semibold transition-all flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <ShoppingBag className="w-3 h-3" />
                        <span>+ Pesan</span>
                      </button>

                      {/* Direct WhatsApp order */}
                      <a
                        href={`https://wa.me/${COMPANY_DATA.phone}?text=Halo%20RETE.%20ID,%20saya%20tertarik%20memesan%20${encodeURIComponent(product.name)}%20(${formatRupiah(product.price)}).%20Apakah%20stok%20tersedia?`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 px-2 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#10B981] text-white text-xs font-semibold hover:from-[#38BDF8] hover:to-[#34D399] transition-all flex items-center justify-center gap-1 text-center"
                      >
                        <Phone className="w-3 h-3" />
                        <span>Via WA</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Product Detail Modal */}
        {activeModalProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-200 max-h-[90vh] flex flex-col">
              {/* Close Button */}
              <button
                onClick={() => setActiveModalProduct(null)}
                className="absolute top-3.5 right-3.5 z-10 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center hover:bg-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-center">
                  <div className="aspect-square rounded-2xl overflow-hidden bg-slate-100 border border-slate-200">
                    <img
                      src={activeModalProduct.image}
                      alt={activeModalProduct.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div>
                    <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#0284C7]/10 text-[#0284C7]">
                      {activeModalProduct.categoryLabel}
                    </span>

                    <h3 className="font-heading font-bold text-xl text-[#143525] mt-1.5 mb-1.5 leading-snug">
                      {activeModalProduct.name}
                    </h3>

                    <div className="flex items-center gap-2 mb-3">
                      <div className="flex items-center text-amber-500">
                        <Star className="w-3.5 h-3.5 fill-current" />
                        <span className="ml-1 text-xs font-bold text-slate-800">
                          {activeModalProduct.rating.toFixed(1)}
                        </span>
                      </div>
                      <span className="text-xs text-slate-500">
                        ({activeModalProduct.reviewsCount} Ulasan)
                      </span>
                    </div>

                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-xl font-bold text-[#143525]">
                        {formatRupiah(activeModalProduct.price)}
                      </span>
                      {activeModalProduct.originalPrice && (
                        <span className="text-xs text-slate-400 line-through">
                          {formatRupiah(activeModalProduct.originalPrice)}
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-700 leading-relaxed">
                      {activeModalProduct.description}
                    </p>
                  </div>
                </div>

                {/* External Link in Modal */}
                {activeModalProduct.externalUrl && (
                  <div className="p-3 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-between gap-3">
                    <span className="text-xs text-slate-700">
                      Lihat galeri &amp; video produk di media sosial resmi kami:
                    </span>
                    <a
                      href={activeModalProduct.externalUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded-lg bg-[#0284C7] hover:bg-[#0369a1] text-white text-xs font-semibold flex items-center gap-1.5 shrink-0 transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Buka Facebook</span>
                    </a>
                  </div>
                )}

                {/* Features Highlights */}
                <div>
                  <h4 className="font-heading font-bold text-xs uppercase tracking-wider text-[#143525] mb-2.5 flex items-center gap-1.5">
                    <Tag className="w-3.5 h-3.5 text-[#0284C7]" />
                    <span>Spesifikasi &amp; Keunggulan</span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-1.5 text-xs text-slate-700">
                    {activeModalProduct.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons in Modal */}
                <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row gap-2.5">
                  <button
                    onClick={() => {
                      handleAdd(activeModalProduct);
                      setActiveModalProduct(null);
                    }}
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#0D2319] text-white font-semibold text-xs hover:bg-[#143525] transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <ShoppingBag className="w-3.5 h-3.5 text-[#34D399]" />
                    <span>Tambah ke Keranjang</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_DATA.phone}?text=Halo%20RETE.%20ID,%20saya%20ingin%20memesan%20${encodeURIComponent(activeModalProduct.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#10B981] text-white font-bold text-xs hover:from-[#38BDF8] hover:to-[#34D399] transition-all flex items-center justify-center gap-2 text-center"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Pesan via WhatsApp</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
