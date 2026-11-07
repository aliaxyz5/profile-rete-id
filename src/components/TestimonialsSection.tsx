import React from 'react';
import { LuxuryDivider } from './NatureDecorations';
import { TESTIMONIALS_DATA } from '../data/mockData';
import { Star, Quote, Feather, ShieldCheck } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimoni" className="relative py-20 bg-white text-slate-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <LuxuryDivider
          subtitle="Apresiasi Pelanggan"
          title="Kepercayaan Para Penghobi &amp; Komunitas"
        />

        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base text-slate-600 mb-12">
          Kepuasan pelanggan di Ngawi dan seluruh Nusantara adalah kehormatan bagi RETE. ID.
          Inilah suara tulus dari mereka yang telah mempercayakan kebutuhan rawatan dan hobinya bersama kami.
        </p>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="relative rounded-2xl p-6 bg-sky-50/40 border border-sky-100 shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              {/* Quote Mark Decor */}
              <div className="absolute top-5 right-5 text-sky-200 pointer-events-none">
                <Quote className="w-8 h-8 fill-current opacity-40" />
              </div>

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Testimonial Quote */}
                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6 relative z-10">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author Row */}
              <div className="pt-3.5 border-t border-sky-100 flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-sky-300 shadow-sm"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-heading font-bold text-xs sm:text-sm text-slate-900 truncate">
                    {t.name}
                  </h5>
                  <p className="text-[11px] text-[#0284C7] font-semibold truncate">
                    {t.role} • {t.location}
                  </p>
                  {t.birdType && (
                    <div className="inline-flex items-center gap-1 text-[10px] text-[#10B981] mt-0.5">
                      <Feather className="w-2.5 h-2.5 text-[#10B981]" />
                      <span>{t.birdType}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Community Trust Banner */}
        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-6 text-xs text-slate-600 bg-sky-50/80 py-3.5 px-6 rounded-2xl border border-sky-200 max-w-2xl mx-auto shadow-sm">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span className="font-medium">Kualitas Teruji &amp; Bergaransi</span>
          </div>
          <span className="text-sky-300">•</span>
          <div className="flex items-center gap-2">
            <Feather className="w-4 h-4 text-[#0284C7]" />
            <span className="font-medium">Dipercaya Sejak 2012</span>
          </div>
          <span className="text-sky-300">•</span>
          <div className="flex items-center gap-2">
            <Star className="w-4 h-4 text-amber-500 fill-current" />
            <span className="font-medium">Kepuasan Pelanggan Bintang 5</span>
          </div>
        </div>
      </div>
    </section>
  );
};
