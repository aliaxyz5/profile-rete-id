import React from 'react';
import { LuxuryDivider } from './NatureDecorations';
import { Heart, Sparkles, MapPin } from 'lucide-react';
import { COMPANY_DATA, FULL_ADDRESS } from '../utils/order';

export const AboutSection: React.FC = () => {
  return (
    <section id="tentang" className="relative py-20 bg-white text-slate-800 overflow-hidden">
      {/* Subtle ambient light gradient */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <LuxuryDivider
          subtitle="Filosofi &amp; Identitas"
          title="Tentang RETE. ID"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mt-8">
          {/* Left Column: Visual Showcase & Heritage Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative light-blue frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-sky-200 transform -rotate-1 pointer-events-none" />

              {/* Main image container */}
              <div className="relative rounded-2xl overflow-hidden shadow-md bg-sky-50 border border-sky-200 aspect-[4/5]">
                <img
                  src="https://images.unsplash.com/photo-1552728089-57bdde30beb3?auto=format&fit=crop&w=1000&q=80"
                  alt="Dunia Hewan dan Alam RETE. ID Ngawi"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />

                {/* Floating badge over image with logo */}
                <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-white/95 backdrop-blur-md border border-sky-100 shadow-md">
                  <div className="flex items-center gap-3">
                    <img
                      src="./assets/aistudio/logo_rete__1__b970e963.png"
                      alt="RETE. ID"
                      className="w-12 h-12 rounded-full object-contain bg-sky-50 p-0.5 shrink-0 shadow-sm"
                    />
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">RETE. ID (Est. 2012)</h4>
                      <p className="text-xs text-[#0284C7] font-medium">
                        Animals and Nature • Kedunggalar, Ngawi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Small accent badge */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] text-white px-3.5 py-1.5 rounded-xl shadow-md text-xs font-semibold tracking-wide flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Pelang Lor, Ngawi</span>
              </div>
            </div>
          </div>

          {/* Right Column: Brand Story & Values */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <div className="space-y-5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 text-[#10B981]" />
                <span>Karya Hati dari Kedunggalar, Jawa Timur • Alkyy-in</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-slate-900 leading-snug">
                Harmoni Sempurna Antara Pesona Hewan, Keindahan Alam &amp; Dedikasi Layanan
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                <strong className="text-[#0284C7] font-semibold">{COMPANY_DATA.name}</strong> didirikan sejak tahun 2012
                dengan lambang burung kolibri biru dan untaian padi yang memancarkan semangat ketangkasan, kebebasan,
                serta kesejahteraan alam. Dikelola dengan ketulusan dan dedikasi penuh di bawah naungan{' '}
                <strong className="text-slate-900 font-semibold">{COMPANY_DATA.creditBy}</strong>.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Beralamat di <span className="text-slate-900 font-medium">{FULL_ADDRESS}</span>, kami berkomitmen
                menghadirkan layanan <strong className="text-[#0284C7]">24 Jam Nonstop</strong> bagi para pecinta
                hewan dan keindahan alam, serta siap melayani konsultasi maupun kebutuhan hobi Anda setiap saat.
              </p>

              {/* 3 Simple Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 shadow-sm hover:border-sky-300 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center mb-2 font-bold text-xs">
                    01
                  </div>
                  <h5 className="font-heading font-bold text-slate-900 text-xs sm:text-sm mb-1">Hewan &amp; Avian</h5>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Kecintaan mendalam terhadap fauna burung, kesehatan, dan kesejahteraannya.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 shadow-sm hover:border-sky-300 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-[#10B981] flex items-center justify-center mb-2 font-bold text-xs">
                    02
                  </div>
                  <h5 className="font-heading font-bold text-slate-900 text-xs sm:text-sm mb-1">Harmoni Alam</h5>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Nilai kearifan lokal Kedunggalar yang menyatu bersama kesejukan alam bebas.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-sky-50/60 border border-sky-100 shadow-sm hover:border-sky-300 transition-all">
                  <div className="w-8 h-8 rounded-lg bg-sky-100 text-[#0284C7] flex items-center justify-center mb-2 font-bold text-xs">
                    03
                  </div>
                  <h5 className="font-heading font-bold text-slate-900 text-xs sm:text-sm mb-1">Dedikasi 24/7</h5>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    Pintu toko dan komunikasi online selalu terbuka kapanpun Anda membutuhkan.
                  </p>
                </div>
              </div>

              {/* Address Quick Card */}
              <div className="flex items-start gap-3 p-3.5 rounded-2xl bg-white border border-sky-100 shadow-sm">
                <MapPin className="w-4 h-4 text-[#0284C7] shrink-0 mt-0.5" />
                <div className="text-xs text-slate-600">
                  <span className="font-semibold text-slate-900 block">Alamat Galeri Resmi:</span>
                  {FULL_ADDRESS}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
