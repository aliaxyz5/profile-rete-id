import React from 'react';
import { ThreeBirdsCanvas } from './ThreeBirdsCanvas';
import { NatureDecorations } from './NatureDecorations';
import { COMPANY_DATA } from '../utils/order';
import { Phone, ArrowRight, ShieldCheck, Clock, Award, Compass } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section id="beranda" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#E0F2FE] via-[#F0F9FF] to-white">
      {/* 1. Interactive 3D Flying Birds Canvas (Transparent overlay) */}
      <div className="absolute inset-0 z-0">
        <ThreeBirdsCanvas birdCount={26} />
      </div>

      {/* 2. Soft Nature Vignette with fresh Cyan & Sky Gradient Overlay */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-t from-white via-transparent to-sky-100/40" />
      <div className="absolute inset-0 z-10 pointer-events-none bg-radial from-transparent via-sky-100/20 to-transparent" />

      {/* 3. Floating Nature Elements (simpel & tenang) */}
      <NatureDecorations />

      {/* 4. Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 text-center flex flex-col items-center">
        {/* Top Tagline Badge with Logo Crest */}
        <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-sky-200/90 shadow-sm backdrop-blur-md mb-6">
          <img
            src="./assets/aistudio/logo_rete__1__b970e963.png"
            alt="RETE. ID"
            className="w-5 h-5 rounded-full object-contain bg-sky-50 p-0.5"
          />
          <span className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-[#0284C7]">
            Profil Resmi RETE. ID
          </span>
          <span className="text-sky-300">•</span>
          <span className="text-xs text-slate-600 font-medium hidden sm:inline">
            Animals and Nature • Ngawi
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6">
          Keanggunan <span className="fresh-gradient-text italic">Harmoni Alam</span> &amp; Dunia Avian
        </h1>

        {/* Subtitle / Filosofi (Simpel, Segar & Elegan) */}
        <p className="max-w-2xl text-base sm:text-lg md:text-xl text-slate-600 font-light leading-relaxed mb-8">
          Dedikasi pelestarian keindahan fauna burung dan keseimbangan alam. Menghadirkan layanan terpercaya,
          konsultasi kesehatan hobi, serta komitmen mutu prima.
          <strong className="text-[#0284C7] font-semibold"> Buka 24 jam nonstop </strong>
          dari Kedunggalar, Kabupaten Ngawi.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto justify-center mb-6">
          {/* Primary CTA: Tentang Kami */}
          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] text-white font-bold text-sm sm:text-base tracking-wide shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <span>Tentang RETE. ID</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>

          {/* Secondary CTA: Konsultasi WhatsApp */}
          <a
            href={`https://wa.me/${COMPANY_DATA.phone}?text=Halo%20RETE.%20ID,%20saya%20tertarik%20dengan%20layanan%20hewan%20dan%20alam`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-sky-50 border border-sky-200 text-[#0284C7] font-semibold text-sm sm:text-base tracking-wide shadow-sm transition-all flex items-center justify-center gap-2.5 cursor-pointer hover:border-[#0284C7]"
          >
            <Phone className="w-4 h-4 text-[#0284C7]" />
            <span>Konsultasi WhatsApp 24 Jam</span>
          </a>
        </div>

        {/* Official Online Stores: TikTok Shop & Shopee */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider mr-1">Toko Resmi Online:</span>
          {COMPANY_DATA.tiktokUrl && (
            <a
              href={COMPANY_DATA.tiktokUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-slate-50 border border-slate-200 shadow-sm text-xs font-bold text-slate-800 hover:text-black hover:border-slate-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.29 0 .58.04.85.12V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.84-4.49V8.67a8.21 8.21 0 0 0 4.93 1.63v-3.61Z" />
              </svg>
              <span>TikTok Shop @rete.id1</span>
            </a>
          )}

          {COMPANY_DATA.shopeeUrl && (
            <a
              href={COMPANY_DATA.shopeeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#EE4D2D]/10 hover:bg-[#EE4D2D]/20 border border-[#EE4D2D]/30 shadow-sm text-xs font-bold text-[#EE4D2D] hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.5 7.5h-2.2c-.3-2.6-2.5-4.5-5.3-4.5s-5 1.9-5.3 4.5H4.5c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h15c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2Zm-7.5-3c1.7 0 3.2 1.3 3.4 3h-6.8c.2-1.7 1.7-3 3.4-3Zm7.5 15h-15v-10h2.2v2h1.5v-2h7.6v2h1.5v-2h2.2v10Z" />
              </svg>
              <span>Shopee @rete_alkyy</span>
            </a>
          )}
        </div>

        {/* Trust Badges Bar (Minimalis, Putih & Segar) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 w-full max-w-4xl pt-6 border-t border-sky-200/70">
          <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-sky-100 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0 border border-sky-100">
              <Clock className="w-4 h-4 text-[#0284C7]" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900">Layanan 24 Jam</h4>
              <p className="text-[11px] text-slate-500">Siap respons kapanpun</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-sky-100 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0 border border-sky-100">
              <Award className="w-4 h-4 text-[#0284C7]" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900">Kualitas Grade A</h4>
              <p className="text-[11px] text-slate-500">Terpercaya sejak 2012</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-sky-100 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-emerald-50 flex items-center justify-center text-[#10B981] shrink-0 border border-emerald-100">
              <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900">100% Terpercaya</h4>
              <p className="text-[11px] text-slate-500">Layanan bersahabat</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white p-3.5 rounded-2xl border border-sky-100 shadow-sm">
            <div className="w-9 h-9 rounded-xl bg-sky-50 flex items-center justify-center text-[#0284C7] shrink-0 border border-sky-100">
              <Compass className="w-4 h-4 text-[#0284C7]" />
            </div>
            <div className="text-left">
              <h4 className="text-xs sm:text-sm font-semibold text-slate-900">Kedunggalar Ngawi</h4>
              <p className="text-[11px] text-slate-500">Akses mudah &amp; asri</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
