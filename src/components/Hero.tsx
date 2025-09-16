import React, { useEffect, useRef, useState } from 'react';
import { Crown, Star, ArrowRight, CheckCircle } from 'lucide-react';

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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Sergi Constance"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            
            {/* VIP Badge */}
            <div className="inline-flex items-center bg-vip-gold/10 backdrop-blur-sm border border-vip-gold/30 rounded-full px-8 py-4 mb-12">
              <Crown className="w-6 h-6 text-vip-gold mr-4" />
              <span className="text-vip-gold font-bold text-lg tracking-wider">COACHING VIP EXCLUSIVO</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-6xl lg:text-8xl font-black mb-12 leading-tight">
              <span className="text-white block mb-4">Transforma tu</span>
              <span className="text-vip-gold block mb-4">FÍSICO</span>
              <span className="text-white block">para siempre</span>
            </h1>

            {/* Subheadline */}
            <p className="text-2xl lg:text-3xl text-gray-300 mb-16 leading-relaxed max-w-4xl mx-auto font-light">
              Coaching personalizado con <strong className="text-vip-gold font-bold">Sergi Constance</strong><br/>
              IFBB Pro y Actor de Hollywood (Zeus en Justice League)
            </p>

            {/* Key Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-vip-gold mb-2">500+</div>
                <div className="text-gray-300 font-medium">Transformaciones</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-vip-gold mb-2">15+</div>
                <div className="text-gray-300 font-medium">Años Pro</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-vip-gold mb-2">98%</div>
                <div className="text-gray-300 font-medium">Tasa Éxito</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-black text-vip-gold mb-2">12</div>
                <div className="text-gray-300 font-medium">Plazas VIP</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex items-center justify-center mb-16">
              <div className="flex -space-x-3 mr-6">
                {[1,2,3,4,5].map((i) => (
                  <img
                    key={i}
                    src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face`}
                    alt={`Cliente ${i}`}
                    className="w-16 h-16 rounded-full border-3 border-vip-gold object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                ))}
              </div>
              <div className="text-left">
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-vip-gold fill-current" />
                  ))}
                  <span className="text-vip-gold font-bold ml-3 text-xl">5.0</span>
                </div>
                <p className="text-gray-300 text-lg">+500 transformaciones exitosas</p>
              </div>
            </div>

            {/* Main CTA */}
            <div className="mb-16">
              <a 
                href="#apply" 
                className="inline-flex items-center bg-vip-gold text-black px-12 py-6 rounded-2xl font-black text-xl hover:bg-yellow-400 transition-all duration-300 group shadow-2xl hover:shadow-vip-gold/30 hover:scale-105"
              >
                SOLICITAR PLAZA VIP
                <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-vip-gold mr-2" />
                <span>IFBB Pro Certificado</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-vip-gold mr-2" />
                <span>Actor de Hollywood</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-vip-gold mr-2" />
                <span>Garantía 30 días</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-vip-gold/50 rounded-full flex justify-center backdrop-blur-sm">
          <div className="w-2 h-4 bg-vip-gold rounded-full mt-3 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;