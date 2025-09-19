import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Star, Award, Target, Users, Crown } from 'lucide-react';

const Authority = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const achievements = [
    {
      icon: Crown,
      title: "IFBB Pro",
      subtitle: "Competidor Profesional",
      description: "Más de 15 años compitiendo al más alto nivel internacional en el culturismo profesional.",
      stats: "15+ años de experiencia"
    },
    {
      icon: Star,
      title: "Actor de Hollywood",
      subtitle: "Zeus en Justice League",
      description: "Experiencia en producciones de Warner Bros, DC Comics y otras grandes producciones cinematográficas.",
      stats: "Múltiples películas"
    },
    {
      icon: Trophy,
      title: "Coach de Elite",
      subtitle: "Coaching Personalizado",
      description: "Método científico personalizado para ayudar a personas de todo el mundo a alcanzar su mejor versión física.",
      stats: "Método probado"
    }
  ];

  const credentials = [
    { icon: Award, text: "Certificación IFBB Pro" },
    { icon: Target, text: "Especialista en Transformación Corporal" },
    { icon: Users, text: "Coach Personalizado" },
    { icon: Star, text: "Actor Profesional de Hollywood" }
  ];

  return (
    <section ref={sectionRef} id="authority" className="py-16 sm:py-20 lg:py-24 bg-white">
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
              <span className="text-gold font-bold text-xs tracking-wider">AUTORIDAD MUNDIAL</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-gray-900 px-4">
              <span className="block">¿Por qué</span>
              <span className="text-gold">Sergi Constance?</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              No soy solo otro coach. Soy un profesional con credenciales reales, 
              resultados comprobados y más de 15 años de experiencia como IFBB Pro.
            </p>
          </div>

          {/* Main Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white border-2 border-gold/20 rounded-2xl p-6 hover:border-gold/50 hover:shadow-xl transition-all duration-300">
                
                {/* Icon */}
                <div className="bg-gold/10 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <achievement.icon className="w-6 h-6 text-gold" />
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-black text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gold font-bold mb-3">{achievement.subtitle}</p>
                <p className="text-sm text-gray-600 mb-4">{achievement.description}</p>
                
                {/* Stats */}
                <div className="bg-gold/5 rounded-lg p-3 border border-gold/20">
                  <p className="text-gold font-bold text-center text-sm">{achievement.stats}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Credentials Section */}
          <div className="bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gold/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-3">Credenciales y Certificaciones</h3>
              <p className="text-gray-600 max-w-2xl mx-auto px-4">
                Mi experiencia está respaldada por años de formación, competición y resultados reales.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {credentials.map((credential, index) => (
                <div key={index} className="text-center">
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3 border border-gold/20">
                    <credential.icon className="w-6 h-6 text-gold" />
                  </div>
                  <p className="font-bold text-gray-900 text-sm">{credential.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-16 text-center">
            <blockquote className="text-xl lg:text-2xl font-bold text-gray-900 mb-6 max-w-4xl mx-auto px-4">
              "No se trata solo de entrenar duro. Se trata de entrenar <span className="text-gold">inteligente</span>, 
              con un método probado y la mentalidad correcta."
            </blockquote>
            <div className="flex items-center justify-center">
              <img
                src="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Foto-14-12-19-15-39-12-scaled.jpg"
                alt="Sergi Constance"
                className="w-12 h-12 rounded-full border-2 border-gold mr-3 object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="text-left">
                <p className="font-bold text-gray-900">Sergi Constance</p>
                <p className="text-gold text-sm">IFBB Pro & Actor de Hollywood</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Authority;