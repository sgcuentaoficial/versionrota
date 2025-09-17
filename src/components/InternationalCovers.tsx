import React, { useEffect, useRef, useState } from 'react';
import { Globe, Star, Award, Camera, Trophy, Crown } from 'lucide-react';

const InternationalCovers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveImage((prev) => (prev + 1) % covers.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const covers = [
    {
      url: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/revista-6.jpg",
      title: "Muscular Development",
      country: "USA",
      year: "2023"
    },
    {
      url: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/revista-5.jpg",
      title: "Muscle & Fitness",
      country: "Europa",
      year: "2023"
    },
    {
      url: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/revista-4.jpg",
      title: "Iron Man Magazine",
      country: "Internacional",
      year: "2023"
    },
    {
      url: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/revista-3.jpg",
      title: "Flex Magazine",
      country: "USA",
      year: "2022"
    },
    {
      url: "https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/revista-2.jpg",
      title: "Fitness RX",
      country: "Internacional",
      year: "2022"
    }
  ];

  const achievements = [
    {
      icon: Globe,
      title: "Reconocimiento Mundial",
      description: "Portadas en las revistas más prestigiosas del fitness internacional"
    },
    {
      icon: Camera,
      title: "Presencia Mediática",
      description: "Apariciones regulares en medios especializados de todo el mundo"
    },
    {
      icon: Trophy,
      title: "Referente Global",
      description: "Considerado una autoridad mundial en culturismo y fitness"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-8">
              <img 
                src="/corona_belegend-removebg-preview copy.png" 
                alt="Corona VIP" 
                className="w-5 h-5 mr-3"
              />
              <span className="text-gold font-bold text-sm tracking-wider">RECONOCIMIENTO MUNDIAL</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white leading-tight">
              <span className="block">Portadas</span>
              <span className="text-gold">Internacionales</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Reconocido mundialmente por las revistas más prestigiosas del fitness. 
              Mi experiencia y resultados hablan por sí solos.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            
            {/* Magazine Covers Carousel */}
            <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <div className="relative">
                
                {/* Main Cover Display */}
                <div className="relative h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
                  <img
                    src={covers[activeImage].url}
                    alt="Portada de revista internacional"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center mt-8 space-x-4">
                  {covers.map((cover, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-20 h-28 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === index 
                          ? 'border-gold shadow-lg shadow-gold/30 scale-110' 
                          : 'border-gray-600 hover:border-gold/50'
                      }`}
                    >
                      <img
                        src={cover.url}
                        alt="Portada de revista"
                        className="w-full h-full object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-2">
                    {covers.map((_, index) => (
                      <div
                        key={index}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          activeImage === index ? 'bg-gold w-8' : 'bg-gray-600 w-2'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              
              {/* Achievements */}
              <div className="space-y-8 mb-12">
                {achievements.map((achievement, index) => (
                  <div 
                    key={index}
                    className={`transition-all duration-500 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                    }`}
                    style={{ transitionDelay: `${0.5 + index * 0.1}s` }}
                  >
                    <div className="flex items-start group">
                      <div className="bg-gold/20 w-16 h-16 rounded-2xl flex items-center justify-center mr-6 flex-shrink-0 group-hover:bg-gold/30 transition-colors">
                        <achievement.icon className="w-8 h-8 text-gold" />
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-white mb-3">{achievement.title}</h3>
                        <p className="text-gray-300 leading-relaxed">{achievement.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="bg-black/50 backdrop-blur-md border border-gold/30 rounded-3xl p-8">
                <h3 className="text-2xl font-black text-white mb-6 text-center">Presencia Internacional</h3>
                
                <div className="grid grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-black text-gold mb-2">15+</div>
                    <div className="text-gray-300 text-sm font-medium">Revistas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-gold mb-2">25+</div>
                    <div className="text-gray-300 text-sm font-medium">Portadas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-black text-gold mb-2">10+</div>
                    <div className="text-gray-300 text-sm font-medium">Países</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-12">
                <blockquote className="text-xl text-gray-300 italic leading-relaxed mb-6">
                  "Ser reconocido por las revistas más prestigiosas del mundo no es casualidad. 
                  Es el resultado de años de dedicación, conocimiento y resultados reales."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                    alt="Sergi Constance"
                    className="w-12 h-12 rounded-full border-2 border-gold mr-4 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-bold text-white">Sergi Constance</p>
                    <p className="text-gold text-sm">IFBB Pro & Actor de Hollywood</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-2 border-gold/30 rounded-3xl p-12">
                <h3 className="text-3xl font-black text-white mb-6">
                  ¿Listo para entrenar con un profesional reconocido mundialmente?
                </h3>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  Mi experiencia internacional y método probado están a tu disposición. 
                  Únete a la élite del fitness.
                </p>
                <a 
                  href="#memberships" 
                  className="inline-flex items-center bg-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 group shadow-xl"
                >
                  VER PLANES DE COACHING
                  <Star className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalCovers;