import React from 'react';
import { LuxuryDivider } from './NatureDecorations';
import { Clock, Award, HeartHandshake, Truck, Sparkles, PhoneCall } from 'lucide-react';
import { COMPANY_DATA } from '../utils/order';

export const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: Clock,
      badge: 'Nonstop 24/7',
      title: 'Layanan Buka 24 Jam',
      description:
        'Kebutuhan hewan dan burung kesayangan Anda tidak mengenal waktu. Toko fisik dan kontak WhatsApp kami aktif 24 jam nonstop untuk konsultasi maupun bantuan darurat.',
      highlight: 'Siaga Kapan Saja'
    },
    {
      icon: Award,
      badge: 'Grade A Quality',
      title: 'Kualitas Grade A Terjamin',
      description:
        'Dedikasi kami mengutamakan mutu pilihan terbaik, higienis, dan terpercaya untuk kenyamanan hewan kesayangan serta kepuasan para pecinta alam.',
      highlight: 'Kualitas Teruji & Terpilih'
    },
    {
      icon: HeartHandshake,
      badge: 'Hospitality',
      title: 'Pelayanan Ramah & Solutif',
      description:
        'Kami melayani dengan keramahan tulus dan penuh perhatian. Bebas berkonsultasi seputar perawatan harian, panduan nutrisi, hingga berbagi tips hobi.',
      highlight: 'Konsultasi Bersahabat'
    },
    {
      icon: Truck,
      badge: 'Akses & Wilayah',
      title: 'Akses Strategis di Ngawi',
      description:
        'Berlokasi di Kedunggalar, Kabupaten Ngawi dengan suasana asri dan jalan aspal mulus. Siap menjangkau kebutuhan seluruh area Ngawi dan sekitarnya.',
      highlight: 'Layanan Cepat & Terpercaya'
    }
  ];

  return (
    <section id="keunggulan" className="relative py-20 bg-[#F0F9FF] text-slate-800 overflow-hidden">
      {/* Decorative calm background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-200/30 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <LuxuryDivider
          subtitle="Mengapa Memilih Kami"
          title="Keunggulan RETE. ID"
        />

        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base text-slate-600 mb-12 font-light">
          Dedikasi kami adalah menghadirkan kepuasan tiada tara bagi setiap pecinta hewan dan keindahan alam
          melalui 4 pilar layanan utama:
        </p>

        {/* Feature Cards Grid (Simpel, Bersih, Sederhana) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="group relative rounded-2xl p-6 bg-white border border-sky-100 hover:border-sky-300 transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md flex flex-col justify-between"
              >
                <div>
                  {/* Badge & Icon Row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5 text-[#0284C7]" />
                    </div>
                    <span className="text-[10px] font-semibold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-sky-50 text-[#0284C7] border border-sky-200">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title */}
                  <h4 className="text-base sm:text-lg font-heading font-bold text-slate-900 mb-2 group-hover:text-[#0284C7] transition-colors">
                    {feat.title}
                  </h4>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mb-5">
                    {feat.description}
                  </p>
                </div>

                {/* Bottom Highlight Pill */}
                <div className="pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#0284C7]">
                  <Sparkles className="w-3.5 h-3.5 shrink-0 text-[#10B981]" />
                  <span>{feat.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* 24/7 Action Banner */}
        <div className="mt-12 rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-[#0284C7] via-[#0EA5E9] to-[#0284C7] text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-sm text-white flex items-center justify-center shrink-0 shadow-inner">
              <PhoneCall className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-heading font-bold text-white">
                Butuh Informasi Hewan &amp; Layanan Alam Sekarang?
              </h4>
              <p className="text-xs sm:text-sm text-sky-100 mt-0.5">
                Layanan konsultasi RETE. ID aktif 24 jam nonstop setiap hari!
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${COMPANY_DATA.phone}?text=Halo%20RETE.%20ID,%20saya%20butuh%20informasi%20sekarang`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-7 py-3 rounded-full bg-white hover:bg-sky-50 text-[#0284C7] font-bold text-xs sm:text-sm tracking-wide shadow-md transition-all text-center shrink-0 cursor-pointer"
          >
            Hubungi {COMPANY_DATA.phoneDisplay} Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};
