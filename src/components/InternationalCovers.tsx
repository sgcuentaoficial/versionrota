import React, { useEffect, useRef, useState } from 'react';
import { Globe, Star, Award, Camera, Trophy } from 'lucide-react';

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
      { threshold: 0.1 }
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
      url: "/revistas/revista 1.jpg",
      title: "Men's Health",
      country: "España",
      year: "2024"
    },
    {
      url: "/revistas/revista 2.jpg",
      title: "Muscle & Fitness",
      country: "USA",
      year: "2024"
    },
    {
      url: "/revistas/revista 3.jpg",
      title: "Iron Man Magazine",
      country: "Internacional",
      year: "2024"
    },
    {
      url: "/revistas/revista 4.jpg",
      title: "Muscular Development",
      country: "USA",
      year: "2024"
    },
    {
      url: "/revistas/revista 5.jpg",
      title: "Flex Magazine",
      country: "Europa",
      year: "2024"
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
    <section ref={sectionRef} id="covers" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <img 
                src="/corona_belegend-removebg-preview copy.png" 
                alt="Corona VIP" 
                className="w-4 h-4 mr-2"
              />
              <span className="text-gold font-bold text-xs tracking-wider">RECONOCIMIENTO MUNDIAL</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white px-4">
              <span className="block">Portadas</span>
              <span className="text-gold">Internacionales</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Reconocido mundialmente por las revistas más prestigiosas del fitness. 
              Mi experiencia y resultados hablan por sí solos.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12 lg:mb-16">
            
            {/* Magazine Covers Carousel */}
            <div>
              <div className="relative">
                
                {/* Main Cover Display */}
                <div className="relative aspect-[3/4] max-h-[500px] rounded-2xl overflow-hidden shadow-2xl mx-auto">
                  <img
                    src={covers[activeImage].url}
                    alt="Portada de revista internacional"
                    className="w-full h-full object-contain bg-gray-800 mx-auto"
                    loading="lazy"
                    decoding="async"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Cover Info */}
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-bold">{covers[activeImage].title}</h3>
                    <p className="text-sm text-gray-300">{covers[activeImage].country} • {covers[activeImage].year}</p>
                  </div>
                </div>

                {/* Thumbnails */}
                <div className="flex justify-center mt-6 space-x-3">
                  {covers.map((cover, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-12 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === index 
                          ? 'border-gold shadow-lg scale-110' 
                          : 'border-gray-600 hover:border-gold/50'
                      }`}
                    >
                      <img
                        src={cover.url}
                        alt="Portada de revista"
                        className="w-full h-full object-contain bg-gray-700"
                        loading="lazy"
                        decoding="async"
                      />
                    </button>
                  ))}
                </div>

                {/* Progress Indicators */}
                <div className="flex justify-center mt-4">
                  <div className="flex space-x-2">
                    {covers.map((_, index) => (
                      <div
                        key={index}
                        className={`h-1 rounded-full transition-all duration-300 ${
                          activeImage === index ? 'bg-gold w-6' : 'bg-gray-600 w-1'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              
              {/* Achievements */}
              <div className="space-y-6 mb-8">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-gold/20 w-12 h-12 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-white mb-2">{achievement.title}</h3>
                      <p className="text-sm text-gray-300">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="bg-black/50 backdrop-blur-md border border-gold/30 rounded-2xl p-6">
                <h3 className="text-xl font-black text-white mb-4 text-center">Presencia Internacional</h3>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-black text-gold mb-1">15+</div>
                    <div className="text-gray-300 text-xs font-medium">Revistas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gold mb-1">25+</div>
                    <div className="text-gray-300 text-xs font-medium">Portadas</div>
                  </div>
                  <div>
                    <div className="text-2xl font-black text-gold mb-1">10+</div>
                    <div className="text-gray-300 text-xs font-medium">Países</div>
                  </div>
                </div>
              </div>

              {/* Quote */}
              <div className="mt-8">
                <blockquote className="text-lg text-gray-300 italic mb-4">
                  "Ser reconocido por las revistas más prestigiosas del mundo no es casualidad. 
                  Es el resultado de años de dedicación, conocimiento y resultados reales."
                </blockquote>
                <div className="flex items-center">
                  <img
                    src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face"
                    alt="Sergi Constance"
                    className="w-10 h-10 rounded-full border-2 border-gold mr-3 object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div>
                    <p className="font-bold text-white text-sm">Sergi Constance</p>
                    <p className="text-gold text-xs">IFBB Pro & Actor de Hollywood</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-gold/10 via-gold/20 to-gold/10 border-2 border-gold/30 rounded-2xl p-6 lg:p-8">
              <h3 className="text-2xl font-black text-white mb-4 px-4">
                ¿Listo para entrenar con un profesional reconocido mundialmente?
              </h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto px-4">
                Mi experiencia internacional y método probado están a tu disposición. 
                Únete a la élite del fitness.
              </p>
              <a 
                href="#memberships"
                className="inline-flex items-center bg-gold text-black px-6 py-3 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300"
              >
                VER PLANES DE COACHING
                <Star className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InternationalCovers;