import React, { useState } from 'react';
import { LuxuryDivider } from './NatureDecorations';
import { COMPANY_DATA, FULL_ADDRESS } from '../utils/order';
import { MapPin, Clock, Phone, Navigation, Copy, Check, Compass } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(FULL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15822.463378393527!2d111.3090623!3d-7.4116491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e79e614bc08d3e9%3A0x6b77ea6bb6d997b6!2sPelang%20Lor%2C%20Kedunggalar%2C%20Ngawi%20Regency%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid';

  const mapsDirectUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Pelang Lor, Kedunggalar, Kabupaten Ngawi, Jawa Timur'
  )}`;

  return (
    <section id="lokasi" className="relative py-20 bg-[#F0F9FF] text-slate-800 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-[450px] h-[450px] bg-sky-200/40 rounded-full blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <LuxuryDivider
          subtitle="Kunjungi Lokasi Kami"
          title="Lokasi &amp; Peta RETE. ID"
        />

        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base text-slate-600 mb-10 font-light">
          Berada di Tambakselo Timur, Pelang Lor, Kedunggalar, Ngawi.
          Kami selalu membuka pintu 24 jam nonstop untuk kunjungan langsung maupun konsultasi seputar hewan dan alam.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-7 items-stretch">
          {/* Left Column: Complete Address & Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-white border border-sky-100 shadow-md space-y-5">
              {/* Store Identity */}
              <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                <div className="flex items-center gap-3">
                  <img
                    src="/assets/aistudio/logo_rete__1__b970e963.png"
                    alt="Logo RETE. ID"
                    className="w-10 h-10 rounded-full object-contain bg-sky-50 p-0.5 shadow-sm shrink-0"
                  />
                  <div>
                    <h4 className="font-heading text-lg sm:text-xl font-bold text-slate-900">{COMPANY_DATA.name}</h4>
                    <p className="text-[11px] text-[#0284C7] font-medium">Kedunggalar, Ngawi • by {COMPANY_DATA.creditBy}</p>
                  </div>
                </div>
                <div className="px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-[#0284C7] text-xs font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
                  <span>24 Jam</span>
                </div>
              </div>

              {/* Detail Items */}
              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <div className="flex-1">
                    <span className="text-[10px] uppercase tracking-wider text-[#0284C7] font-bold block mb-0.5">
                      Alamat Lengkap
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-light">
                      {FULL_ADDRESS}
                    </p>
                    <button
                      onClick={handleCopyAddress}
                      className="mt-2 text-xs text-[#0284C7] hover:text-[#0369A1] flex items-center gap-1.5 font-semibold transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Tersalin ke Clipboard!</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Salin Alamat Lengkap</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Jam Operasional */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center text-[#10B981] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4 text-[#10B981]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#0284C7] font-bold block mb-0.5">
                      Jam Operasional
                    </span>
                    <p className="text-xs sm:text-sm text-slate-900 font-semibold">
                      Buka 24 Jam Nonstop (Senin - Minggu)
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Layanan konsultasi online &amp; lokasi resmi selalu siap melayani.
                    </p>
                  </div>
                </div>

                {/* Kontak WhatsApp */}
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 flex items-center justify-center text-[#0284C7] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#0284C7]" />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-[#0284C7] font-bold block mb-0.5">
                      Telepon / WhatsApp
                    </span>
                    <p className="text-xs sm:text-sm text-[#0284C7] font-bold">
                      {COMPANY_DATA.phoneDisplay}
                    </p>
                    <p className="text-[11px] text-slate-500 mt-0.5">
                      Chat langsung untuk informasi layanan &amp; petunjuk arah.
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-1 flex flex-col sm:flex-row gap-2.5">
                <a
                  href={mapsDirectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3.5 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-xs font-bold tracking-wide shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Buka di Google Maps</span>
                </a>

                <a
                  href={`https://wa.me/${COMPANY_DATA.phone}?text=Halo%20RETE.%20ID,%20saya%20sedang%20menuju%20ke%20lokasi%20toko%20di%20Kedunggalar,%20bisa%20minta%20share%20live%20location?`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 px-3.5 rounded-xl bg-sky-50 hover:bg-sky-100 border border-sky-200 text-[#0284C7] text-xs font-semibold transition-all flex items-center justify-center gap-1.5 cursor-pointer text-center"
                >
                  <Phone className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>Minta Share Loc WA</span>
                </a>
              </div>
            </div>

            {/* Travel Guide Tip Card */}
            <div className="p-3.5 rounded-2xl bg-white border border-sky-100 shadow-sm flex items-center gap-3">
              <Compass className="w-4 h-4 text-[#0284C7] shrink-0" />
              <p className="text-xs text-slate-600">
                <strong className="text-slate-900">Akses Rute:</strong> Sangat mudah dijangkau dari jalur Ngawi - Walikukun
                dengan jalan aspal halus untuk motor maupun mobil.
              </p>
            </div>
          </div>

          {/* Right Column: Google Maps Embed Card */}
          <div className="lg:col-span-7 h-full min-h-[360px] sm:min-h-[440px]">
            <div className="relative w-full h-full rounded-3xl overflow-hidden border border-sky-200 shadow-md bg-white">
              <iframe
                title="Peta Lokasi RETE. ID Ngawi"
                src={mapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '420px' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />

              {/* Floating Map Label Badge */}
              <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-sky-200 shadow-sm text-slate-900 pointer-events-none flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="text-[11px] font-bold text-[#0284C7]">
                  Kedunggalar, Kabupaten Ngawi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
