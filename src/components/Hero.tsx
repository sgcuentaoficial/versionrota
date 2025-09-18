import React, { useEffect, useRef, useState } from 'react';
import { Star, ArrowRight, CheckCircle, Award, Trophy } from 'lucide-react';
import { useLocationTranslation } from '../hooks/useLocationTranslation';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLocationTranslation();

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-16 sm:pt-20 md:pt-24 lg:pt-32"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Foto-14-12-19-15-39-12-scaled.jpg"
          alt="Sergi Constance"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-8 sm:py-12 md:py-16 lg:py-0">
        <div className="max-w-7xl mx-auto">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
              
              {/* Left Column - Main Content */}
              <div className="text-left">
                
                {/* Main Headline */}
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 md:mb-10 leading-[0.85]">
                  <span className="text-white block mb-2">Elite</span>
                  <span className="text-vip-gold block mb-2">Transformation</span>
                  <span className="text-white/90 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">Coaching</span>
                </h1>

                {/* Professional Subheadline */}
                <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 sm:mb-10 md:mb-12 leading-relaxed max-w-2xl font-light">
                  Coaching personalizado de élite con <span className="text-vip-gold font-semibold">Sergi Constance</span>
                  <br className="hidden lg:block" />
                  <span className="text-white/80">IFBB Pro & Zeus en Justice League</span>
                </p>

                {/* Professional CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 md:gap-6 mb-8 sm:mb-10 md:mb-12">
                  <a 
                    href="#memberships"
                    className="inline-flex items-center justify-center bg-vip-gold text-black px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-xl font-bold text-base sm:text-lg md:text-xl hover:bg-yellow-400 transition-all duration-300 group shadow-xl hover:shadow-vip-gold/30 min-h-[56px]"
                  >
                    <span className="hidden sm:inline">Solicitar Consulta VIP</span>
                    <span className="sm:hidden">Consulta VIP</span>
                    <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                  
                  <a 
                    href="#method" 
                    className="inline-flex items-center justify-center border-2 border-white/30 text-white px-6 sm:px-8 md:px-10 py-4 md:py-5 rounded-xl font-semibold text-base sm:text-lg md:text-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm min-h-[56px]"
                  >
                    Ver Método
                  </a>
                </div>

                {/* Trust Indicators */}
                <div className="flex flex-wrap gap-4 sm:gap-6 md:gap-8 text-sm sm:text-base text-gray-400">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-vip-gold mr-3" />
                    <span className="whitespace-nowrap">15+ años IFBB Pro</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-vip-gold mr-3" />
                    <span className="whitespace-nowrap">Actor Hollywood</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-vip-gold mr-3" />
                    <span className="whitespace-nowrap">Garantía 30 días</span>
                  </div>
                </div>
              </div>

              {/* Right Column - Video */}
              <div className="text-center lg:text-right mt-8 sm:mt-12 lg:mt-0">
                <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl group">
                  <iframe
                    src="https://www.youtube.com/embed/UFDfl-9b2G8?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=UFDfl-9b2G8&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&playsinline=1"
                    title="Sergi Constance - Transformación Elite"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                  
                  {/* Custom Video Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="bg-black/50 backdrop-blur-sm rounded-lg p-3">
                        <h3 className="text-white font-bold text-sm mb-1">Transformación Elite</h3>
                        <p className="text-gray-300 text-xs">IFBB Pro & Actor de Hollywood</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Custom Play Button Overlay (appears when paused) */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-vip-gold/90 backdrop-blur-sm rounded-full p-4 shadow-xl">
                      <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>
                
                {/* Professional Badge - Below Video */}
                <div className="flex justify-center mt-6">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3">
                    <Award className="w-6 h-6 text-vip-gold mr-3" />
                    <span className="text-white font-semibold text-sm tracking-wide">IFBB PRO • HOLLYWOOD</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats & Social Proof - Full Width Below */}
            <div className="w-full">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mb-8 sm:mb-12">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 lg:p-6 text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-vip-gold mb-2">15+</div>
                  <div className="text-gray-300 font-medium text-sm">Años Pro</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 lg:p-6 text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-vip-gold mb-2">98%</div>
                  <div className="text-gray-300 font-medium text-sm">Tasa Éxito</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 lg:p-6 text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-vip-gold mb-2">12</div>
                  <div className="text-gray-300 font-medium text-sm">Plazas VIP</div>
                </div>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-4 lg:p-6 text-center">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-black text-vip-gold mb-2">VIP</div>
                  <div className="text-gray-300 font-medium text-sm">Coaching</div>
                </div>
              </div>

              {/* Social Proof - Centered */}
              <div className="flex justify-center">
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-md">
                  <div className="flex items-center justify-center mb-4">
                    <div className="flex -space-x-2 mr-4">
                      {[1,2,3,4].map((i) => (
                        <img
                          key={i}
                          src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face`}
                          alt={`Cliente ${i}`}
                          className="w-12 h-12 rounded-full border-2 border-vip-gold object-cover"
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
                        <span className="text-vip-gold font-bold ml-2 text-base">5.0</span>
                      </div>
                      <p className="text-gray-300 text-sm">500+ clientes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-center gap-4">
                    <Trophy className="w-6 h-6 text-vip-gold" />
                    <span className="text-white font-semibold text-sm">Coaching Elite</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;