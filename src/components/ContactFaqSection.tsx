import React, { useState } from 'react';
import { LuxuryDivider } from './NatureDecorations';
import { FAQS_DATA } from '../data/mockData';
import { COMPANY_DATA } from '../utils/order';
import { ChevronDown, MessageSquare, Send, HelpCircle } from 'lucide-react';

export const ContactFaqSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [customSubject, setCustomSubject] = useState('');
  const [customMessage, setCustomMessage] = useState('');

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleCustomInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo RETE. ID!\n\nTopik: ${customSubject || 'Pertanyaan Hewan & Alam'}\nPesan:\n${customMessage}`
    );
    window.open(`https://wa.me/${COMPANY_DATA.phone}?text=${text}`, '_blank');
  };

  return (
    <section id="kontak" className="relative py-20 bg-white text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <LuxuryDivider
          subtitle="Tanya Jawab &amp; Bantuan"
          title="Pertanyaan Umum &amp; Kontak Cepat"
        />

        <p className="max-w-2xl mx-auto text-center text-sm sm:text-base text-slate-600 mb-12">
          Kami siap melayani kebutuhan konsultasi seputar fauna burung, keasrian alam,
          maupun kunjungan ke lokasi RETE. ID di Kedunggalar, Ngawi selama 24 jam nonstop.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: FAQ Accordion */}
          <div className="lg:col-span-7 space-y-3.5">
            <div className="flex items-center gap-2 mb-3 text-slate-900">
              <HelpCircle className="w-5 h-5 text-[#0284C7]" />
              <h3 className="font-heading font-bold text-lg sm:text-xl">Pertanyaan yang Sering Diajukan</h3>
            </div>

            {FAQS_DATA.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl bg-sky-50/50 border border-sky-100 overflow-hidden shadow-sm transition-all"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-sky-50 transition-colors cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-heading font-semibold text-xs sm:text-sm text-slate-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#0284C7] transition-transform duration-300 shrink-0 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-4 sm:px-5 pb-4 text-xs text-slate-600 leading-relaxed border-t border-sky-100 pt-2.5 bg-white/70">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Instant WhatsApp Direct Form */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-7 rounded-3xl bg-sky-50/80 text-slate-800 border border-sky-200 shadow-md space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-sky-200">
                <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] text-white flex items-center justify-center font-bold shadow-sm">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-bold text-slate-900">Pesan Cepat via WhatsApp</h4>
                  <p className="text-[11px] text-[#0284C7] font-medium">Respon langsung ke tim RETE. ID</p>
                </div>
              </div>

              <form onSubmit={handleCustomInquiry} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Topik / Keperluan
                  </label>
                  <select
                    value={customSubject}
                    onChange={(e) => setCustomSubject(e.target.value)}
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-sky-200 text-xs text-slate-800 focus:outline-none focus:border-[#0284C7] shadow-sm"
                  >
                    <option value="Konsultasi Hewan &amp; Burung">Konsultasi Hewan &amp; Burung</option>
                    <option value="Konsultasi Seni &amp; Keindahan Alam">Konsultasi Seni &amp; Keindahan Alam</option>
                    <option value="Kunjungan ke Lokasi (24 Jam)">Kunjungan ke Lokasi (24 Jam)</option>
                    <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">
                    Pesan Anda
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={customMessage}
                    onChange={(e) => setCustomMessage(e.target.value)}
                    placeholder="Tuliskan pesan atau pertanyaan Anda disini..."
                    className="w-full px-3 py-2.5 rounded-xl bg-white border border-sky-200 text-xs text-slate-800 focus:outline-none focus:border-[#0284C7] resize-none shadow-sm"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] text-white font-bold text-xs tracking-wide shadow-md hover:scale-[1.01] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Kirim ke WhatsApp {COMPANY_DATA.phoneDisplay}</span>
                </button>
              </form>

              <div className="pt-1 text-center text-[10px] text-slate-500">
                Layanan komunikasi aktif setiap saat, 24 Jam Nonstop.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
