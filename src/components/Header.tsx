import React, { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';
import LanguageSelector from './LanguageSelector';
import { useLocationTranslation } from '../hooks/useLocationTranslation';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useLocationTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'vip-glass border-b border-vip-gold/30' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* VIP Logo */}
          <div className="flex items-center space-x-3 animate-vip-slide-in">
            <div className="bg-vip-gold p-2 rounded-lg">
              <Crown className="w-6 h-6 text-black" />
            </div>
            <div>
              <span className={`text-xl font-vip-title ${
                isScrolled ? 'text-vip-gold' : 'text-white'
              }`}>
                SERGI CONSTANCE
              </span>
              <div className={`text-xs font-vip-accent ${
                isScrolled ? 'text-gray-300' : 'text-vip-gold'
              }`}>
                {t('footer.coaching')}
              </div>
            </div>
          </div>

          {/* Language Selector & VIP CTA */}
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <a href="#apply" className="vip-button px-6 py-3 rounded-lg font-vip-accent text-sm">
              {t('hero.cta.primary')}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;