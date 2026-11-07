import React from 'react';

export const NatureDecorations: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-10" aria-hidden="true">
      {/* 1. Diagonal Minimal Origami Trees on Left and Right Edges (Simple, Elegan & Menyesuaikan Tema) */}
      {/* Left Leaning Minimalist Tree Branch */}
      <div className="absolute -bottom-6 -left-12 sm:-left-6 w-48 sm:w-64 h-80 sm:h-96 opacity-25 text-[#0284C7] origin-bottom-left animate-tree-left">
        <svg viewBox="0 0 200 320" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          {/* Main diagonal trunk */}
          <path d="M20 320 L70 180 L110 60 L130 10" strokeWidth="2.5" strokeLinecap="round" />
          {/* Origami angled branches and geometric leaves */}
          <polygon points="110,60 145,45 130,80" fill="currentColor" fillOpacity="0.2" />
          <polygon points="90,110 140,95 115,135" fill="currentColor" fillOpacity="0.25" />
          <polygon points="70,170 125,160 95,200" fill="currentColor" fillOpacity="0.3" />
          <polygon points="50,230 105,225 75,260" fill="currentColor" fillOpacity="0.2" />
          {/* Pine needles / delicate origami spurs */}
          <line x1="70" y1="180" x2="135" y2="155" strokeWidth="1.5" />
          <line x1="90" y1="120" x2="150" y2="95" strokeWidth="1.5" />
          <line x1="110" y1="70" x2="160" y2="50" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Right Leaning Minimalist Tree Branch */}
      <div className="absolute -bottom-8 -right-12 sm:-right-6 w-52 sm:w-68 h-80 sm:h-96 opacity-25 text-[#10B981] origin-bottom-right animate-tree-right">
        <svg viewBox="0 0 200 320" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
          {/* Main diagonal trunk */}
          <path d="M180 320 L130 185 L90 70 L70 15" strokeWidth="2.5" strokeLinecap="round" />
          {/* Origami angled branches and geometric leaves */}
          <polygon points="90,70 55,55 70,90" fill="currentColor" fillOpacity="0.2" />
          <polygon points="110,120 60,105 85,145" fill="currentColor" fillOpacity="0.25" />
          <polygon points="130,175 75,165 105,205" fill="currentColor" fillOpacity="0.3" />
          <polygon points="150,235 95,230 125,265" fill="currentColor" fillOpacity="0.2" />
          {/* Pine spurs */}
          <line x1="130" y1="185" x2="65" y2="160" strokeWidth="1.5" />
          <line x1="110" y1="125" x2="50" y2="100" strokeWidth="1.5" />
        </svg>
      </div>

      {/* 2. Drifting Soft Blue & White Nature Clouds (Awan Biru Lembut) */}
      <div className="absolute top-16 left-6 w-72 sm:w-96 opacity-35 text-[#38BDF8] animate-cloud-drift">
        <svg viewBox="0 0 320 120" fill="currentColor">
          <path d="M60 90 Q30 90 20 65 Q10 40 40 30 Q55 5 95 10 Q130 -5 160 20 Q190 5 220 20 Q250 15 260 40 Q280 40 280 65 Q280 90 250 90 Z" />
        </svg>
      </div>

      <div className="absolute top-28 right-8 w-64 sm:w-80 opacity-30 text-[#BAE6FD] animate-cloud-drift-rev">
        <svg viewBox="0 0 320 120" fill="currentColor">
          <path d="M50 85 Q20 85 15 60 Q10 35 45 30 Q60 10 100 15 Q140 0 170 25 Q205 10 235 25 Q265 20 275 45 Q295 50 290 75 Q285 85 250 85 Z" />
        </svg>
      </div>

      {/* 3. Gentle Floating Sky-Blue Light Particles */}
      <div className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full bg-[#38BDF8] shadow-[0_0_8px_#38BDF8] opacity-60 animate-gentle-pulse" />
      <div className="absolute top-2/3 right-1/3 w-2 h-2 rounded-full bg-[#0284C7] shadow-[0_0_8px_#0284C7] opacity-50 animate-gentle-pulse" style={{ animationDelay: '1.5s' }} />
    </div>
  );
};

export const LuxuryDivider: React.FC<{ title?: string; subtitle?: string; light?: boolean }> = ({
  title,
  subtitle,
  light = false
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center my-6">
      {subtitle && (
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#0284C7] mb-2 flex items-center gap-2">
          <span className="w-5 h-[1px] bg-sky-300" />
          <span>{subtitle}</span>
          <span className="w-5 h-[1px] bg-sky-300" />
        </span>
      )}

      {title && (
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 ${light ? 'text-white' : 'text-slate-900'}`}>
          {title}
        </h2>
      )}

      {/* Minimalist Avian / Nature Centerpiece */}
      <div className="flex items-center gap-3 mt-1">
        <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-r from-transparent via-[#0284C7] to-transparent" />
        <div className="flex items-center text-[#0284C7]">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z" />
          </svg>
        </div>
        <div className="h-[1px] w-12 sm:w-16 bg-gradient-to-l from-transparent via-[#0284C7] to-transparent" />
      </div>
    </div>
  );
};
