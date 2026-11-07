import React, { useState, useEffect } from 'react';
import { Phone, Clock, Menu, X, Sparkles, ExternalLink } from 'lucide-react';
import { COMPANY_DATA } from '../utils/order';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Beranda', href: '#beranda' },
    { label: 'Tentang Kami', href: '#tentang' },
    { label: 'Keunggulan', href: '#keunggulan' },
    { label: 'Testimoni', href: '#testimoni' },
    { label: 'Lokasi & Peta', href: '#lokasi' },
    { label: 'Kontak', href: '#kontak' },
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'glass-nav-fresh py-2.5 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm border-b border-sky-100/70 py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo & Name */}
            <a
              href="#beranda"
              className="flex items-center gap-3 group focus:outline-none"
              aria-label="RETE. ID Beranda"
            >
              <div className="relative w-11 h-11 rounded-full p-[2px] bg-gradient-to-tr from-[#0284C7] to-[#38BDF8] shadow-sm group-hover:scale-105 transition-transform overflow-hidden">
                <img
                  src="./assets/aistudio/logo_rete__1__b970e963.png"
                  alt="Logo RETE. ID"
                  className="w-full h-full object-contain rounded-full bg-white p-0.5"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-slate-900 group-hover:text-[#0284C7] transition-colors">
                    RETE. ID
                  </span>
                  <span className="text-[10px] font-semibold text-[#0284C7] px-2 py-0.5 rounded-full bg-sky-50 border border-sky-200">
                    Est. 2012
                  </span>
                </div>
                <span className="text-[11px] text-[#0284C7] font-medium tracking-wide hidden sm:block">
                  Animals and Nature • Ngawi
                </span>
              </div>
            </a>

            {/* Desktop Navigation with Origami Bird Crane Unfold Animation on Hover */}
            <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleNavClick(link.href)}
                  className="relative inline-flex items-center py-1.5 px-1 text-xs lg:text-sm font-medium text-slate-700 hover:text-[#0284C7] transition-colors group cursor-pointer select-none whitespace-nowrap"
                >
                  {/* Small CSS-based origami bird icon that gently unfolds near menu text */}
                  <span
                    className="inline-flex items-center justify-center max-w-0 opacity-0 -translate-x-1.5 scale-50 group-hover:max-w-5 group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 group-hover:mr-1.5 transition-all duration-300 ease-out overflow-visible pointer-events-none"
                    aria-hidden="true"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-[#0284C7] transform origin-bottom-left group-hover:animate-origami-crane shrink-0 drop-shadow-sm"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      {/* Geometric Folded Origami Bird Facets with Paper Shading */}
                      {/* Back Wing */}
                      <polygon points="12,3 19,1 15,10" fill="#7DD3FC" opacity="0.95" />
                      {/* Front Main Wing */}
                      <polygon points="12,3 4,2 10,12" fill="#38BDF8" />
                      {/* Center Folded Body */}
                      <polygon points="12,3 10,12 14,13" fill="#0284C7" />
                      {/* Sharp Origami Tail */}
                      <polygon points="14,13 22,17 13,15" fill="#0369A1" />
                      {/* Origami Head & Neck */}
                      <polygon points="10,12 3,16 6,11" fill="#0284C7" />
                      <polygon points="3,16 1,14 4,13" fill="#0369A1" />
                      {/* Delicate Origami Crease Lines */}
                      <line x1="12" y1="3" x2="10" y2="12" stroke="#FFFFFF" strokeWidth="0.75" strokeOpacity="0.8" />
                      <line x1="10" y1="12" x2="14" y2="13" stroke="#FFFFFF" strokeWidth="0.75" strokeOpacity="0.8" />
                      <line x1="12" y1="3" x2="4" y2="2" stroke="#FFFFFF" strokeWidth="0.75" strokeOpacity="0.7" />
                    </svg>
                  </span>

                  <span className="relative whitespace-nowrap">
                    {link.label}
                    <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#0284C7] to-[#38BDF8] rounded-full transition-all duration-300 group-hover:w-full" />
                  </span>
                </button>
              ))}
            </nav>

            {/* Right Actions: Blue 24 Jam Badge + Official TikTok & Shopee Stores + Direct WA */}
            <div className="flex items-center gap-2.5">
              {/* 24 Hours Status Pill with Fresh Blue Pulse */}
              <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 border border-sky-200 text-xs text-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-ping" />
                <Clock className="w-3.5 h-3.5 text-[#0284C7]" />
                <span className="font-semibold text-[11px] text-[#0284C7]">Buka 24 Jam Nonstop</span>
              </div>

              {/* TikTok Store Link Button */}
              {COMPANY_DATA.tiktokUrl && (
                <a
                  href={COMPANY_DATA.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900 hover:bg-black text-white text-xs font-medium shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  title="Kunjungi Toko TikTok Resmi RETE. ID"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.49V8.8a8.28 8.28 0 0 0 4.81 1.52v-3.48a4.85 4.85 0 0 1-1-.15z" />
                  </svg>
                  <span>TikTok Shop</span>
                </a>
              )}

              {/* Shopee Store Link Button */}
              {COMPANY_DATA.shopeeUrl && (
                <a
                  href={COMPANY_DATA.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#EE4D2D] hover:bg-[#d73f21] text-white text-xs font-medium shadow-sm hover:shadow transition-all transform hover:-translate-y-0.5 cursor-pointer"
                  title="Kunjungi Toko Shopee Resmi RETE. ID"
                >
                  <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                    <path d="M19.8 8.4h-3.3c-.4-3.1-2-5.4-4.5-5.4s-4.1 2.3-4.5 5.4H4.2c-.7 0-1.2.6-1.2 1.3l1.5 11c.1.7.7 1.3 1.4 1.3h12.2c.7 0 1.3-.6 1.4-1.3l1.5-11c0-.7-.5-1.3-1.2-1.3zm-7.8-3.7c1.4 0 2.4 1.5 2.8 3.7H9.2c.4-2.2 1.4-3.7 2.8-3.7zm-2 10.3c-.4-.3-.6-.8-.6-1.4 0-1.1.9-2 2-2h1.6v.9h-1.6c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h.9c1.1 0 2 .9 2 2s-.9 2-2 2h-1.9v-.9h1.9c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1h-.9c-.6 0-1.1-.2-1.4-.5z" />
                  </svg>
                  <span>Shopee</span>
                </a>
              )}

              {/* Direct WhatsApp CTA Button */}
              <a
                href={`https://wa.me/${COMPANY_DATA.phone}?text=Halo%20RETE.%20ID,%20saya%20ingin%20berkonsultasi%20mengenai%20layanan%20hewan%20dan%20alam`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] hover:from-[#0369A1] hover:to-[#0284C7] text-white text-xs font-semibold tracking-wide shadow-sm hover:shadow-md transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Konsultasi WA</span>
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-slate-700 hover:text-[#0284C7] focus:outline-none cursor-pointer"
                aria-label={isMobileMenuOpen ? 'Tutup Menu' : 'Buka Menu'}
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-white border-l border-sky-100 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl">
            <div>
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-4 border-b border-sky-100">
                <div className="flex items-center gap-2.5">
                  <img
                    src="./assets/aistudio/logo_rete__1__b970e963.png"
                    alt="Logo RETE. ID"
                    className="w-8 h-8 object-contain rounded-full bg-sky-50 p-0.5"
                  />
                  <div>
                    <span className="font-heading text-lg font-bold text-slate-900 block">RETE. ID</span>
                    <span className="text-[10px] text-[#0284C7] font-medium">Animals and Nature • Ngawi</span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1 rounded text-slate-500 hover:text-slate-800"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Status pill in drawer with Blue Ping */}
              <div className="my-4 p-3 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#0284C7] animate-ping" />
                  <span className="text-xs text-slate-700 font-medium">Status Toko:</span>
                </div>
                <span className="text-xs font-bold text-[#0284C7]">Buka 24 Jam Nonstop</span>
              </div>

              {/* Online Stores Row in Drawer */}
              <div className="mb-4 space-y-2">
                <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block">
                  Toko Online Resmi:
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {COMPANY_DATA.tiktokUrl && (
                    <a
                      href={COMPANY_DATA.tiktokUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-slate-900 text-white text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64c.298-.002.595.042.88.13V9.4a6.33 6.33 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.66a6.34 6.34 0 0 0 10.82 4.49 6.27 6.27 0 0 0 1.96-4.49V8.8a8.28 8.28 0 0 0 4.81 1.52v-3.48a4.85 4.85 0 0 1-1-.15z" />
                      </svg>
                      <span>TikTok Shop</span>
                    </a>
                  )}
                  {COMPANY_DATA.shopeeUrl && (
                    <a
                      href={COMPANY_DATA.shopeeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-[#EE4D2D] text-white text-xs font-medium"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M19.8 8.4h-3.3c-.4-3.1-2-5.4-4.5-5.4s-4.1 2.3-4.5 5.4H4.2c-.7 0-1.2.6-1.2 1.3l1.5 11c.1.7.7 1.3 1.4 1.3h12.2c.7 0 1.3-.6 1.4-1.3l1.5-11c0-.7-.5-1.3-1.2-1.3zm-7.8-3.7c1.4 0 2.4 1.5 2.8 3.7H9.2c.4-2.2 1.4-3.7 2.8-3.7zm-2 10.3c-.4-.3-.6-.8-.6-1.4 0-1.1.9-2 2-2h1.6v.9h-1.6c-.6 0-1.1.5-1.1 1.1s.5 1.1 1.1 1.1h.9c1.1 0 2 .9 2 2s-.9 2-2 2h-1.9v-.9h1.9c.6 0 1.1-.5 1.1-1.1s-.5-1.1-1.1-1.1h-.9c-.6 0-1.1-.2-1.4-.5z" />
                      </svg>
                      <span>Shopee</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Navigation Links with Origami Crane Touch */}
              <div className="flex flex-col gap-1.5 mt-2">
                {navLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => handleNavClick(link.href)}
                    className="text-left py-2.5 px-3 rounded-lg text-slate-700 hover:bg-sky-50 hover:text-[#0284C7] transition-all text-sm font-medium flex items-center justify-between group cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <span
                        className="inline-flex items-center justify-center text-[#0284C7] opacity-60 group-hover:opacity-100 group-hover:animate-origami-crane transition-all duration-300"
                        aria-hidden="true"
                      >
                        <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none">
                          <polygon points="12,3 19,1 15,10" fill="#7DD3FC" opacity="0.95" />
                          <polygon points="12,3 4,2 10,12" fill="#38BDF8" />
                          <polygon points="12,3 10,12 14,13" fill="#0284C7" />
                          <polygon points="14,13 22,17 13,15" fill="#0369A1" />
                          <polygon points="10,12 3,16 6,11" fill="#0284C7" />
                        </svg>
                      </span>
                      <span>{link.label}</span>
                    </div>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-200 group-hover:bg-[#0284C7] group-hover:scale-125 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Bottom Contact CTA in Drawer */}
            <div className="pt-6 border-t border-sky-100 flex flex-col gap-3">
              <a
                href={`https://wa.me/${COMPANY_DATA.phone}?text=Halo%20RETE.%20ID,%20saya%20ingin%20konsultasi`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 rounded-xl bg-gradient-to-r from-[#0284C7] to-[#0EA5E9] text-white font-semibold text-center text-sm shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Chat WhatsApp ({COMPANY_DATA.phoneDisplay})</span>
              </a>
              <p className="text-[11px] text-center text-slate-500">
                Kedunggalar, Ngawi • Alkyy-in
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
