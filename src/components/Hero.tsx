import React, { useEffect, useRef, useState } from 'react';
import { Crown, Star, Play, ArrowRight } from 'lucide-react';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentStat, setCurrentStat] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const stats = [
    { number: "500+", label: "Transformaciones Exitosas" },
    { number: "15+", label: "Años de Experiencia" },
    { number: "98%", label: "Tasa de Éxito" },
    { number: "12", label: "Plazas Disponibles" }
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % stats.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop"
          alt="Sergi Constance"
          className="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Content */}
            <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              
              {/* VIP Badge */}
              <div className="inline-flex items-center bg-vip-gold/20 border border-vip-gold/50 rounded-full px-6 py-3 mb-8">
                <Crown className="w-5 h-5 text-vip-gold mr-3" />
                <span className="text-vip-gold font-bold text-sm tracking-wider">COACHING VIP EXCLUSIVO</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
                <span className="text-white">Transforma tu</span>
                <span className="block text-vip-gold">FÍSICO</span>
                <span className="block text-white">para siempre</span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
                Coaching personalizado con <strong className="text-vip-gold">Sergi Constance</strong>, 
                IFBB Pro y Actor de Hollywood (Zeus en Justice League). 
                <span className="block mt-2 text-vip-gold font-semibold">Solo 12 plazas disponibles.</span>
              </p>

              {/* Social Proof */}
              <div className="flex items-center mb-10">
                <div className="flex -space-x-2 mr-4">
                  {[1,2,3,4,5].map((i) => (
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
                <div>
                  <div className="flex items-center mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-vip-gold fill-current" />
                    ))}
                    <span className="text-vip-gold font-bold ml-2">5.0</span>
                  </div>
                  <p className="text-gray-400 text-sm">+500 transformaciones exitosas</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a 
                  href="#apply" 
                  className="bg-vip-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center group"
                >
                  SOLICITAR PLAZA VIP
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <button className="border-2 border-vip-gold text-vip-gold px-8 py-4 rounded-xl font-bold text-lg hover:bg-vip-gold hover:text-black transition-all duration-300 flex items-center justify-center group">
                  <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                  VER TRANSFORMACIONES
                </button>
              </div>

              {/* Animated Stats */}
              <div className="bg-black/50 backdrop-blur-sm border border-vip-gold/30 rounded-2xl p-6">
                <div className="text-center">
                  <div className="text-4xl font-black text-vip-gold mb-2">
                    {stats[currentStat].number}
                  </div>
                  <div className="text-gray-300 font-medium">
                    {stats[currentStat].label}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Additional Visual Elements */}
            <div className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Achievement Cards */}
              <div className="space-y-6">
                <div className="bg-black/60 backdrop-blur-sm border border-vip-gold/30 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-vip-gold/20 p-3 rounded-full mr-4">
                      <Crown className="w-6 h-6 text-vip-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">IFBB Pro</h3>
                      <p className="text-gray-400">Competidor Profesional</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Más de 15 años compitiendo al más alto nivel internacional
                  </p>
                </div>

                <div className="bg-black/60 backdrop-blur-sm border border-vip-gold/30 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-vip-gold/20 p-3 rounded-full mr-4">
                      <Star className="w-6 h-6 text-vip-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Actor de Hollywood</h3>
                      <p className="text-gray-400">Zeus en Justice League</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    Experiencia en producciones de Warner Bros y DC Comics
                  </p>
                </div>

                <div className="bg-black/60 backdrop-blur-sm border border-vip-gold/30 rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-vip-gold/20 p-3 rounded-full mr-4">
                      <Crown className="w-6 h-6 text-vip-gold" />
                    </div>
                    <div>
                      <h3 className="text-white font-bold text-lg">Coach Elite</h3>
                      <p className="text-gray-400">500+ Transformaciones</p>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">
                    98% de tasa de éxito en transformaciones corporales
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-vip-gold rounded-full flex justify-center">
          <div className="w-1 h-3 bg-vip-gold rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;