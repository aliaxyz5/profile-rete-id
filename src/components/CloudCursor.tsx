import React, { useEffect, useState } from 'react';

export const CloudCursor: React.FC = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable custom cloud cursor on devices with fine pointer (mouse/trackpad)
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: fine)').matches) {
      setIsPointerDevice(true);
    }

    const handleMouseMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.documentElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.documentElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [visible]);

  if (!isPointerDevice || !visible) return null;

  return (
    <div
      className="pointer-events-none fixed z-[9999] transition-transform duration-75 ease-out select-none will-change-transform"
      style={{
        transform: `translate3d(${pos.x + 10}px, ${pos.y + 10}px, 0)`
      }}
      aria-hidden="true"
    >
      {/* Mini Cloud Logo Graphic */}
      <div className="relative flex items-center justify-center filter drop-shadow-[0_2px_6px_rgba(2,132,199,0.25)] animate-float-calm">
        <svg
          className="w-6 h-6 text-[#38BDF8]"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          {/* Stylized Cloud with faceted origami-like curved paths */}
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z" />
          <path
            d="M8 13c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.8"
          />
        </svg>

        {/* Subtle cyan sparkle indicator */}
        <span className="absolute -top-1 -right-1 w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-ping" />
      </div>
    </div>
  );
};
