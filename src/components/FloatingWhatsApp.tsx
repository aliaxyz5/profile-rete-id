import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { COMPANY_DATA } from '../utils/order';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(true);

  const directUrl = `https://wa.me/${COMPANY_DATA.phone}?text=Halo%20RETE.%20ID,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20hewan%20dan%20alam`;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Interactive Tooltip Card */}
      {showTooltip && (
        <div className="mb-2.5 max-w-xs bg-white text-slate-800 p-3.5 rounded-2xl border border-sky-200 shadow-xl relative flex items-start gap-2.5">
          <button
            onClick={() => setShowTooltip(false)}
            className="absolute top-2 right-2 text-slate-400 hover:text-slate-700 p-0.5 cursor-pointer"
            aria-label="Tutup petunjuk"
          >
            <X className="w-3.5 h-3.5" />
          </button>

          <div className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping shrink-0 mt-1" />
          <div className="pr-4">
            <h5 className="font-heading font-bold text-xs text-[#0284C7]">
              Konsultasi WhatsApp 24 Jam
            </h5>
            <p className="text-[11px] text-slate-600 mt-0.5 leading-tight">
              Tim RETE. ID standby 24 jam nonstop melayani Anda untuk konsultasi hewan &amp; keasrian alam!
            </p>
          </div>
        </div>
      )}

      {/* Floating Button with fresh cyan gradient */}
      <a
        href={directUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-13 h-13 rounded-full bg-gradient-to-tr from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] text-white shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer border-2 border-white"
        aria-label="Chat WhatsApp RETE. ID 24 Jam"
      >
        {/* Pulsing Outer Ring */}
        <span className="absolute -inset-1 rounded-full bg-sky-400 opacity-40 animate-ping -z-10" />

        <MessageCircle className="w-6 h-6 fill-current" />
      </a>
    </div>
  );
};
