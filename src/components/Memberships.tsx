import React, { useEffect, useRef, useState } from 'react';
import { Crown, Star, Check, X, Zap, Target, Users, Award } from 'lucide-react';

const Memberships = () => {
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

  const plans = [
    {
      name: "COACHING ESTÁNDAR",
      subtitle: "Para comenzar tu transformación",
      price: "297",
      period: "/mes",
      popular: false,
      icon: Target,
      color: "gray",
      features: [
        { text: "Plan de entrenamiento personalizado", included: true },
        { text: "Plan nutricional básico", included: true },
        { text: "Seguimiento mensual", included: true },
        { text: "Acceso a la app móvil", included: true },
        { text: "Soporte por email", included: true },
        { text: "Llamadas 1:1 con Sergi", included: false },
        { text: "Ajustes semanales", included: false },
        { text: "Acceso VIP a contenido exclusivo", included: false },
        { text: "Soporte 24/7", included: false }
      ],
      cta: "COMENZAR AHORA",
      description: "Perfecto para quienes buscan una transformación guiada con los fundamentos del método Sergi Constance."
    },
    {
      name: "COACHING VIP",
      subtitle: "Transformación completa y personalizada",
      price: "997",
      period: "/mes",
      popular: true,
      icon: Crown,
      color: "gold",
      features: [
        { text: "Todo lo del plan Estándar", included: true },
        { text: "Llamadas 1:1 semanales con Sergi", included: true },
        { text: "Ajustes semanales del programa", included: true },
        { text: "Plan nutricional avanzado", included: true },
        { text: "Soporte 24/7 prioritario", included: true },
        { text: "Acceso VIP a contenido exclusivo", included: true },
        { text: "Análisis corporal detallado", included: true },
        { text: "Coaching mental personalizado", included: true },
        { text: "Garantía de resultados", included: true }
      ],
      cta: "SOLICITAR PLAZA VIP",
      description: "La experiencia completa con acceso directo a Sergi. Solo 12 plazas disponibles por trimestre.",
      badge: "MÁS POPULAR"
    },
    {
      name: "COACHING ELITE",
      subtitle: "Para atletas y competidores",
      price: "1997",
      period: "/mes",
      popular: false,
      icon: Award,
      color: "black",
      features: [
        { text: "Todo lo del plan VIP", included: true },
        { text: "Llamadas diarias con Sergi", included: true },
        { text: "Preparación para competición", included: true },
        { text: "Plan de suplementación avanzado", included: true },
        { text: "Análisis de laboratorio incluido", included: true },
        { text: "Coaching de posing (culturismo)", included: true },
        { text: "Estrategia de competición", included: true },
        { text: "Acceso a eventos exclusivos", included: true },
        { text: "Mentoría empresarial", included: true }
      ],
      cta: "APLICAR PARA ELITE",
      description: "Para atletas serios que buscan competir o alcanzar el máximo nivel físico posible.",
      badge: "SOLO ATLETAS"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-vip-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-vip-gold rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-vip-gold/10 border border-vip-gold/30 rounded-full px-6 py-3 mb-8">
              <Crown className="w-5 h-5 text-vip-gold mr-3" />
              <span className="text-vip-gold font-bold text-sm tracking-wider">PROGRAMAS EXCLUSIVOS</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white leading-tight">
              <span className="block">Elige tu</span>
              <span className="text-vip-gold">Transformación</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Tres niveles de coaching diseñados para diferentes objetivos y niveles de compromiso. 
              Todos incluyen mi método probado y garantía de resultados.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  plan.popular ? 'lg:scale-105 lg:-translate-y-4' : ''
                }`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className={`relative bg-white rounded-3xl p-8 border-2 transition-all duration-300 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-vip-gold shadow-2xl shadow-vip-gold/20' 
                    : 'border-gray-200 hover:border-vip-gold/50'
                }`}>
                  
                  {/* Popular Badge */}
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-vip-gold text-black px-6 py-2 rounded-full font-bold text-sm">
                        {plan.badge}
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                      plan.popular ? 'bg-vip-gold/20' : 'bg-gray-100'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${
                        plan.popular ? 'text-vip-gold' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-6">{plan.subtitle}</p>
                    
                    <div className="mb-6">
                      <span className="text-5xl font-black text-gray-900">€{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                    
                    <p className="text-sm text-gray-600 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 mr-3 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${
                          feature.included ? 'text-gray-900' : 'text-gray-400'
                        }`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 ${
                    plan.popular
                      ? 'bg-vip-gold text-black hover:bg-yellow-400'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Guarantee Section */}
          <div className="bg-black/50 backdrop-blur-sm border border-vip-gold/30 rounded-3xl p-12 text-center">
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-vip-gold/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-8">
                <Star className="w-10 h-10 text-vip-gold" />
              </div>
              
              <h3 className="text-3xl font-black text-white mb-6">Garantía de Satisfacción 100%</h3>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Estoy tan seguro de que mi método funcionará para ti, que ofrezco una garantía completa 
                de satisfacción de 30 días. Si no estás completamente satisfecho, te devuelvo el 100% de tu dinero.
              </p>
              
              <div className="grid md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-vip-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-vip-gold" />
                  </div>
                  <h4 className="font-bold text-white mb-2">Resultados Rápidos</h4>
                  <p className="text-gray-400 text-sm">Verás cambios en las primeras 2 semanas</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-vip-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-vip-gold" />
                  </div>
                  <h4 className="font-bold text-white mb-2">500+ Éxitos</h4>
                  <p className="text-gray-400 text-sm">Más de 500 transformaciones exitosas</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-vip-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-vip-gold" />
                  </div>
                  <h4 className="font-bold text-white mb-2">98% Satisfacción</h4>
                  <p className="text-gray-400 text-sm">Tasa de satisfacción comprobada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;