import React, { useEffect, useRef, useState } from 'react';
import { Crown, Star, ArrowRight, CheckCircle, Award, Trophy } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20 md:pt-0"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Foto-14-12-19-15-39-12-scaled.jpg"
          alt="Sergi Constance"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-8 md:py-0">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
              
              {/* Left Column - Main Content */}
              <div className="text-left">
                
                {/* Professional Badge */}
                <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 md:px-6 py-2 md:py-3 mb-6 md:mb-8">
                  <Award className="w-5 h-5 text-vip-gold mr-3" />
                  <span className="text-white font-semibold text-xs md:text-sm tracking-wide">IFBB PRO • HOLLYWOOD ACTOR</span>
                </div>

                {/* Main Headline */}
                <h1 className="text-4xl md:text-5xl lg:text-7xl font-black mb-6 md:mb-8 leading-[0.9]">
                  <span className="text-white block mb-1 md:mb-2">Elite</span>
                  <span className="text-vip-gold block mb-1 md:mb-2">Transformation</span>
                  <span className="text-white/90 block text-3xl md:text-4xl lg:text-5xl font-light">Coaching</span>
                </h1>

                {/* Professional Subheadline */}
                <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-12 leading-relaxed max-w-2xl font-light">
                  Coaching personalizado de élite con <span className="text-vip-gold font-semibold">Sergi Constance</span>
                  <br className="hidden lg:block" />
                  <span className="text-white/80">IFBB Pro & Zeus en Justice League</span>
                </p>

                {/* Professional CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-8 md:mb-12">
                  <a 
                    href="#apply" 
                    className="inline-flex items-center justify-center bg-vip-gold text-black px-6 md:px-8 py-3 md:py-4 rounded-xl font-bold text-base md:text-lg hover:bg-yellow-400 transition-all duration-300 group shadow-xl hover:shadow-vip-gold/30"
                  >
                    <span className="hidden sm:inline">Solicitar Consulta VIP</span>
                    <span className="sm:hidden">Consulta VIP</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a 
                    href="#method" 
                    className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                  >
                    Ver Método
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 md:gap-6 text-xs md:text-sm text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-vip-gold mr-2" />
                    <span>15+ años IFBB Pro</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-vip-gold mr-2" />
                    <span>Actor de Hollywood</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-vip-gold mr-2" />
                    <span>Garantía 30 días</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Stats & Social Proof */}
              <div className="text-center lg:text-right mt-8 lg:mt-0">
                
                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 md:gap-8 mb-8 md:mb-12">
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-vip-gold mb-1 md:mb-2">500+</div>
                    <div className="text-gray-300 font-medium text-xs md:text-sm">Transformaciones</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-vip-gold mb-1 md:mb-2">15+</div>
                    <div className="text-gray-300 font-medium text-xs md:text-sm">Años Pro</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-vip-gold mb-1 md:mb-2">98%</div>
                    <div className="text-gray-300 font-medium text-xs md:text-sm">Tasa Éxito</div>
                  </div>
                  <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6">
                    <div className="text-2xl md:text-3xl lg:text-4xl font-black text-vip-gold mb-1 md:mb-2">12</div>
                    <div className="text-gray-300 font-medium text-xs md:text-sm">Plazas VIP</div>
                  </div>
                </div>

                {/* Social Proof */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 md:p-6">
                  <div className="flex items-center justify-center lg:justify-end mb-4">
                    <div className="flex -space-x-2 mr-4">
                      {[1,2,3,4].map((i) => (
                        <img
                          key={i}
                          src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face`}
                          alt={`Cliente ${i}`}
                          className="w-10 md:w-12 h-10 md:h-12 rounded-full border-2 border-vip-gold object-cover"
                          loading="lazy"
                          decoding="async"
                        />
                      ))}
                    </div>
                    <div className="text-left">
                      <div className="flex items-center mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-vip-gold fill-current" />
                        ))}
                        <span className="text-vip-gold font-bold ml-2">5.0</span>
                      </div>
                      <p className="text-gray-300 text-xs md:text-sm">500+ clientes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center lg:justify-end gap-4">
                    <Trophy className="w-5 h-5 text-vip-gold" />
                    <span className="text-white font-semibold text-xs md:text-sm">98% Tasa de Éxito</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border border-white/30 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-1 h-3 bg-vip-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;