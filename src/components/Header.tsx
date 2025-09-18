import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'vip-glass border-b border-vip-gold/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* VIP Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-vip-gold p-2 rounded-lg">
              <img 
                src="/corona_belegend-removebg-preview copy.png" 
                alt="Corona VIP" 
                className="w-6 h-6"
              />
            </div>
            <div>
              <span className={`font-vip-title text-xl ${
                isScrolled ? 'text-vip-gold' : 'text-white'
              }`}>
                SERGI CONSTANCE
              </span>
              <div className={`text-xs font-vip-accent ${
                isScrolled ? 'text-gray-300' : 'text-vip-gold'
              }`}>
                VIP COACHING
              </div>
            </div>
          </div>

          {/* VIP CTA */}
          <div className="flex items-center">
            <a 
              href="#memberships"
              className="vip-button px-6 py-3 rounded-lg font-vip-accent text-sm min-h-[48px] flex items-center justify-center"
            >
              <span className="hidden sm:inline">SOLICITAR CONSULTA VIP</span>
              <span className="sm:hidden">CONSULTA VIP</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;