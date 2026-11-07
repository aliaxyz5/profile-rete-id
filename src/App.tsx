import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { FeaturesSection } from './components/FeaturesSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { LocationSection } from './components/LocationSection';
import { ContactFaqSection } from './components/ContactFaqSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { CloudCursor } from './components/CloudCursor';

export default function App() {
  const scrollToAbout = () => {
    const el = document.getElementById('tentang');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F0F9FF] text-slate-800 relative selection:bg-[#38BDF8] selection:text-slate-900 font-sans">
      {/* 0. Custom Mini Cloud Cursor (for pointer devices) */}
      <CloudCursor />

      {/* 1. Floating Fresh Light Glassmorphism Navbar */}
      <Navbar />

      {/* 2. Fullscreen Avian 3D Hero Section */}
      <main className="flex-1">
        <Hero onExploreClick={scrollToAbout} />

        {/* 3. About Section (Filosofi & Nilai Brand) */}
        <AboutSection />

        {/* 4. Features Section (4 Keunggulan 24 Jam & Mutu) */}
        <FeaturesSection />

        {/* 5. Testimonials Section (Suara Penghobi & Komunitas) */}
        <TestimonialsSection />

        {/* 6. Location & Google Maps Section (Kedunggalar, Ngawi) */}
        <LocationSection />

        {/* 7. FAQ & Contact Section */}
        <ContactFaqSection />
      </main>

      {/* 8. Minimalist Clean White & Light Blue Footer */}
      <Footer />

      {/* 9. Floating 24 Jam WhatsApp Action */}
      <FloatingWhatsApp />
    </div>
  );
}
