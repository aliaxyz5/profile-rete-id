import React, { useState } from 'react';
import { CartItem } from '../types';
import { calculateCartTotals, formatRupiah, generateWhatsAppOrderUrl, COMPANY_DATA } from '../utils/order';
import { X, Trash2, Plus, Minus, Send, ShoppingBag, Sparkles, AlertCircle } from 'lucide-react';

interface OrderCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, delta: number) => void;
  onRemoveItem: (productId: string) => void;
  onClearCart: () => void;
}

export const OrderCalculatorModal: React.FC<OrderCalculatorModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerAddress, setCustomerAddress] = useState('');
  const [customerNote, setCustomerNote] = useState('');

  if (!isOpen) return null;

  const { subtotal, discount, total, itemCount } = calculateCartTotals(items);

  const handleSendToWhatsApp = () => {
    const url = generateWhatsAppOrderUrl({
      name: customerName.trim() || undefined,
      phone: customerPhone.trim() || undefined,
      address: customerAddress.trim() || undefined,
      items: items,
      note: customerNote.trim() || undefined
    });

    window.open(url, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200 max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="bg-[#0D2319] text-white p-5 border-b border-[#38BDF8]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#0284C7]/20 border border-[#38BDF8]/40 flex items-center justify-center text-[#38BDF8]">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white">Daftar Pesanan &amp; Konsultasi</h3>
              <p className="text-xs text-emerald-200/80">RETE. ID — {COMPANY_DATA.hours}</p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-gray-300 hover:text-white transition-colors cursor-pointer"
            aria-label="Tutup Keranjang"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto p-5 sm:p-6 pb-8 space-y-6 flex-1 max-h-[calc(92vh-150px)]">
          {items.length === 0 ? (
            <div className="text-center py-12 px-4">
              <ShoppingBag className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <h4 className="font-heading text-base font-bold text-gray-800">Pesanan Masih Kosong</h4>
              <p className="text-xs text-gray-500 max-w-sm mx-auto mt-1 mb-5">
                Pilih produk pilihan Anda dari katalog kami (sangkar ukir, pakan, vitamin, atau karya seni alam) untuk membuat pesanan langsung.
              </p>
              <button
                onClick={onClose}
                className="px-5 py-2.5 rounded-full bg-[#1B3B2B] text-[#F4DF8C] text-xs font-semibold hover:bg-[#254f3a] transition-all cursor-pointer"
              >
                Lihat Katalog Produk
              </button>
            </div>
          ) : (
            <>
              {/* Items List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-gray-500 pb-1 border-b border-gray-100">
                  <span>Produk Terpilih ({itemCount} item)</span>
                  <button
                    onClick={onClearCart}
                    className="text-red-600 hover:underline cursor-pointer"
                  >
                    Kosongkan Semua
                  </button>
                </div>

                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-gray-50 border border-gray-200"
                  >
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-14 h-14 rounded-xl object-cover shrink-0 border border-gray-200"
                    />

                    <div className="flex-1 min-w-0">
                      <h5 className="font-medium text-xs text-gray-900 truncate">
                        {item.product.name}
                      </h5>
                      <span className="text-xs font-bold text-[#1B3B2B] block">
                        {formatRupiah(item.product.price)}
                      </span>
                    </div>

                    {/* Quantity controls */}
                    <div className="flex items-center gap-2 bg-white px-2 py-1 rounded-xl border border-gray-200">
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, -1)}
                        className="p-1 text-gray-600 hover:text-red-600 cursor-pointer"
                        aria-label="Kurangi"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.product.id, 1)}
                        className="p-1 text-gray-600 hover:text-emerald-700 cursor-pointer"
                        aria-label="Tambah"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    {/* Delete button */}
                    <button
                      onClick={() => onRemoveItem(item.product.id)}
                      className="p-1.5 text-gray-400 hover:text-red-600 cursor-pointer"
                      title="Hapus"
                      aria-label={`Hapus ${item.product.name}`}
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>

              {/* Customer Contact & Delivery Info */}
              <div className="p-4 rounded-2xl bg-[#F7F9F6] border border-[#D4AF37]/30 space-y-3">
                <h5 className="text-xs font-bold uppercase tracking-wider text-[#1B3B2B] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                  <span>Informasi Pemesan (Opsional)</span>
                </h5>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-gray-700 mb-1">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      value={customerName}
                      onChange={(e) => setCustomerName(e.target.value)}
                      placeholder="Contoh: Pak Budi Santoso"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-medium text-gray-700 mb-1">
                      Nomor WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={customerPhone}
                      onChange={(e) => setCustomerPhone(e.target.value)}
                      placeholder="Contoh: 08123456789"
                      className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#D4AF37]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-gray-700 mb-1">
                    Alamat Pengiriman (Kecamatan / Kota)
                  </label>
                  <input
                    type="text"
                    value={customerAddress}
                    onChange={(e) => setCustomerAddress(e.target.value)}
                    placeholder="Contoh: Jl. Raya Kedunggalar No. 12, Ngawi"
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium text-gray-700 mb-1">
                    Catatan Khusus (Ukuran, Warna, Permintaan Tambahan)
                  </label>
                  <textarea
                    rows={2}
                    value={customerNote}
                    onChange={(e) => setCustomerNote(e.target.value)}
                    placeholder="Contoh: Mohon packing kayu ekstra tebal untuk sangkar merak."
                    className="w-full px-3 py-2 text-xs rounded-xl border border-gray-300 bg-white focus:outline-none focus:border-[#D4AF37] resize-none"
                  />
                </div>
              </div>

              {/* Price Calculation Summary */}
              <div className="p-4 rounded-2xl bg-[#0F2319] text-white border border-[#D4AF37]/40 space-y-2">
                <div className="flex justify-between text-xs text-emerald-200">
                  <span>Subtotal Pesanan</span>
                  <span>{formatRupiah(subtotal)}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-xs text-[#F4DF8C] font-semibold">
                    <span>Diskon Pembelian Volume</span>
                    <span>-{formatRupiah(discount)}</span>
                  </div>
                )}

                <div className="pt-2 border-t border-[#D4AF37]/20 flex justify-between items-baseline">
                  <span className="text-sm font-bold text-white">Estimasi Total</span>
                  <span className="text-xl font-heading font-extrabold text-[#F4DF8C]">
                    {formatRupiah(total)}
                  </span>
                </div>

                <p className="text-[10px] text-emerald-300/70 pt-1 flex items-center gap-1.5">
                  <AlertCircle className="w-3 h-3 text-[#D4AF37]" />
                  <span>
                    Ongkos kirim ekspedisi dihitung otomatis saat konfirmasi WhatsApp berdasarkan lokasi tujuan.
                  </span>
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer Actions */}
        {items.length > 0 && (
          <div className="p-4 sm:p-5 bg-gray-50 border-t border-gray-200 flex flex-col sm:flex-row gap-3">
            <button
              onClick={onClose}
              className="px-5 py-3 rounded-2xl border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
            >
              Lanjut Belanja
            </button>

            <button
              onClick={handleSendToWhatsApp}
              className="flex-1 py-3 px-6 rounded-2xl bg-gradient-to-r from-[#0284C7] to-[#10B981] hover:from-[#38BDF8] hover:to-[#34D399] text-white font-bold text-sm tracking-wide shadow-md hover:shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4" />
              <span>Kirim Pesanan ke WhatsApp ({COMPANY_DATA.phoneDisplay})</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
