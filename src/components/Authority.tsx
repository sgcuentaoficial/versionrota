import React, { useEffect, useRef, useState } from 'react';
import { Trophy, Star, Award, Target, Users } from 'lucide-react';

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
      { threshold: 0.3 }
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
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
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
              <span className="text-gold font-bold text-sm tracking-wider">AUTORIDAD MUNDIAL</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
              <span className="block">¿Por qué</span>
              <span className="text-gold">Sergi Constance?</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              No soy solo otro coach. Soy un profesional con credenciales reales, 
              resultados comprobados y más de 15 años de experiencia como IFBB Pro.
            </p>
          </div>

          {/* Main Achievements Grid */}
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {achievements.map((achievement, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white border-2 border-gold/20 rounded-3xl p-8 hover:border-gold/50 hover:shadow-2xl transition-all duration-300 group">
                  
                  {/* Icon */}
                  <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <achievement.icon className="w-8 h-8 text-gold" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-2xl font-black text-gray-900 mb-2">{achievement.title}</h3>
                  <p className="text-gold font-bold mb-4">{achievement.subtitle}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{achievement.description}</p>
                  
                  {/* Stats */}
                  <div className="bg-gold/5 rounded-xl p-4 border border-gold/20">
                    <p className="text-gold font-bold text-center">{achievement.stats}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Credentials Section */}
          <div className="bg-gray-50 rounded-3xl p-12 border border-gold/20">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-4">Credenciales y Certificaciones</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Mi experiencia está respaldada por años de formación, competición y resultados reales.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {credentials.map((credential, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-center group">
                    <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gold/20 group-hover:border-gold/50 transition-colors">
                      <credential.icon className="w-8 h-8 text-gold" />
                    </div>
                    <p className="font-bold text-gray-900 text-sm">{credential.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote Section */}
          <div className="mt-20 text-center">
            <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <blockquote className="text-2xl lg:text-3xl font-bold text-gray-900 mb-8 leading-relaxed max-w-4xl mx-auto">
                "No se trata solo de entrenar duro. Se trata de entrenar <span className="text-gold">inteligente</span>, 
                con un método probado y la mentalidad correcta."
              </blockquote>
              <div className="flex items-center justify-center">
                <img
                  src="https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=80&h=80&fit=crop&crop=face"
                  alt="Sergi Constance"
                  className="w-16 h-16 rounded-full border-2 border-gold mr-4 object-cover"
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
      </div>
    </section>
  );
};

export default Authority;