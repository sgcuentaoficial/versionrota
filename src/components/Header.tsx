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
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'vip-glass border-b border-vip-gold/30' 
          : 'bg-transparent'
      }`}
      style={{
        position: 'fixed',
        width: '100%',
        top: 0,
        zIndex: 50,
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        backgroundColor: isScrolled ? 'rgba(0, 0, 0, 0.8)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        borderBottom: isScrolled ? '1px solid rgba(212, 175, 55, 0.3)' : 'none'
      }}
    >
      <div 
        className="container mx-auto px-4 py-4"
        style={{
          width: '100%',
          maxWidth: '80rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          paddingTop: '1rem',
          paddingBottom: '1rem',
          display: 'block',
          visibility: 'visible',
          opacity: 1
        }}
      >
        <div 
          className="flex items-center justify-between"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            visibility: 'visible',
            opacity: 1
          }}
        >
          {/* VIP Logo */}
          <div 
            className="flex items-center space-x-3"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              visibility: 'visible',
              opacity: 1
            }}
          >
            <div 
              className="bg-vip-gold p-2 rounded-lg"
              style={{
                backgroundColor: '#D4AF37',
                padding: '0.5rem',
                borderRadius: '0.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                visibility: 'visible',
                opacity: 1
              }}
            >
              <img 
                src="/corona_belegend-removebg-preview copy.png" 
                alt="Corona VIP" 
                className="w-6 h-6"
                style={{
                  width: '1.5rem',
                  height: '1.5rem',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              />
            </div>
            <div
              style={{
                display: 'block',
                visibility: 'visible',
                opacity: 1
              }}
            >
              <span 
                className={`font-vip-title text-xl ${
                  isScrolled ? 'text-vip-gold' : 'text-white'
                }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 900,
                  fontSize: '1.25rem',
                  color: isScrolled ? '#D4AF37' : '#ffffff',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                SERGI CONSTANCE
              </span>
              <div 
                className={`text-xs font-vip-accent ${
                  isScrolled ? 'text-gray-300' : 'text-vip-gold'
                }`}
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 700,
                  fontSize: '0.75rem',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  color: isScrolled ? '#d1d5db' : '#D4AF37',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                VIP COACHING
              </div>
            </div>
          </div>

          {/* VIP CTA */}
          <div 
            className="flex items-center"
            style={{
              display: 'flex',
              alignItems: 'center',
              visibility: 'visible',
              opacity: 1
            }}
          >
            <a 
              href="#memberships"
              className="vip-button px-6 py-3 rounded-lg font-vip-accent text-sm min-h-[48px] flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, #D4AF37, #E6C757)',
                color: '#000000',
                fontWeight: 700,
                paddingLeft: '1.5rem',
                paddingRight: '1.5rem',
                paddingTop: '0.75rem',
                paddingBottom: '0.75rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                minHeight: '48px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                textDecoration: 'none',
                fontFamily: 'Inter, sans-serif',
                letterSpacing: '0.05em',
                textTransform: 'uppercase',
                visibility: 'visible',
                opacity: 1
              }}
            >
              <span 
                className="hidden sm:inline"
                style={{
                  display: 'none',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                SOLICITAR CONSULTA VIP
              </span>
              <span 
                className="sm:hidden"
                style={{
                  display: 'inline',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                CONSULTA VIP
              </span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;