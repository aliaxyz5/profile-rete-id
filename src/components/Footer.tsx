import React from 'react';
import { ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-white text-slate-600 border-t border-sky-100 overflow-hidden py-8">
      {/* Decorative Cyan-Sky Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[1px] bg-gradient-to-r from-transparent via-[#0284C7] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <img
              src="./assets/aistudio/logo_rete__1__b970e963.png"
              alt="Logo RETE. ID"
              className="w-7 h-7 rounded-full object-contain bg-sky-50 p-0.5 shadow-sm"
            />
            <p className="text-slate-600 text-center sm:text-left">
              &copy; 2026 <strong className="text-slate-900 font-bold">RETE. ID</strong>. Semua Hak Cipta Dilindungi •{' '}
              <span className="text-[#0284C7] font-semibold">Alkyy-in</span>
            </p>
          </div>

          {/* Store Links & Scroll to Top Button */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.tiktok.com/@rete.id1?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-black border border-slate-200 transition-all text-[11px] font-semibold"
            >
              <span>TikTok Shop</span>
            </a>
            <a
              href="https://shopee.co.id/rete_alkyy?categoryId=100632&entryPoint=ShopByPDP&itemId=53460720230"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EE4D2D]/10 hover:bg-[#EE4D2D]/20 text-[#EE4D2D] border border-[#EE4D2D]/30 transition-all text-[11px] font-semibold"
            >
              <span>Shopee</span>
            </a>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-sky-50 hover:bg-sky-100 text-[#0284C7] transition-all cursor-pointer text-xs font-semibold border border-sky-200"
              aria-label="Kembali ke atas"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
