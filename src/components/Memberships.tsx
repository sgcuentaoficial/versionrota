import React, { useEffect, useRef, useState } from 'react';
import { Crown, Star, Check, Target, Users, Award, Calendar, Gift, ArrowRight, Sparkles, Zap } from 'lucide-react';

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
      name: "Básica",
      subtitle: "Mensual",
      price: "89",
      originalPrice: null,
      period: "/mes",
      duration: "1 mes",
      popular: false,
      icon: Target,
      color: "gray",
      discount: null,
      features: [
        "Plan de entrenamiento personalizado",
        "Guía nutricional básica",
        "Soporte por email",
        "Seguimiento mensual",
        "Acceso a la comunidad"
      ]
    },
    {
      name: "Trimestral",
      subtitle: "Ahorra 5%",
      price: "84.67",
      originalPrice: "89",
      period: "/mes",
      duration: "3 meses (254€ total)",
      popular: true,
      icon: Calendar,
      color: "blue",
      discount: "5% OFF",
      features: [
        "Todo del plan Básico",
        "Seguimiento semanal",
        "Plan nutricional avanzado",
        "Llamadas grupales mensuales",
        "Soporte prioritario",
        "Acceso a masterclasses"
      ]
    },
    {
      name: "Semestral",
      subtitle: "Ahorra 10%",
      price: "79.83",
      originalPrice: "89",
      period: "/mes",
      duration: "6 meses (479€ total)",
      popular: false,
      icon: Gift,
      color: "purple",
      discount: "10% OFF",
      features: [
        "Todo del plan Trimestral",
        "Llamadas 1:1 mensuales",
        "Plan de suplementación personalizado",
        "Análisis corporal detallado",
        "Coaching mental incluido",
        "Acceso a eventos exclusivos"
      ]
    },
    {
      name: "Premium Anual",
      subtitle: "1 mes GRATIS",
      price: "81.58",
      originalPrice: "89",
      period: "/mes",
      duration: "12 meses (979€ total)",
      popular: false,
      icon: Award,
      color: "green",
      discount: "1 MES GRATIS",
      features: [
        "Todo del plan Semestral",
        "Llamadas 1:1 quincenales",
        "Programa 100% personalizado",
        "Revisiones corporales trimestrales",
        "Acceso a retiros exclusivos",
        "Certificado de finalización"
      ]
    },
    {
      name: "VIP Elite",
      subtitle: "Exclusivo",
      price: "4.999",
      originalPrice: null,
      period: "/año",
      duration: "12 meses completos",
      popular: false,
      vip: true,
      icon: Crown,
      color: "gold",
      discount: "EXCLUSIVO",
      features: [
        "Acceso directo a Sergi 24/7",
        "Llamadas 1:1 semanales",
        "Programa 100% personalizado",
        "Visita presencial (España)",
        "Mentoría completa",
        "Acceso a eventos VIP",
        "Solo 12 plazas anuales"
      ]
    }
  ];

  const getCardStyles = (plan: any) => {
    if (plan.vip) {
      return "bg-gradient-to-br from-yellow-50 to-amber-50 border-4 border-gold shadow-2xl shadow-gold/30 ring-4 ring-gold/20 transform scale-105";
    }
    if (plan.popular) {
      return "bg-gradient-to-br from-blue-50 to-indigo-50 border-4 border-blue-500 shadow-2xl shadow-blue-500/20 ring-4 ring-blue-500/20 transform scale-102";
    }
    return "bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-300";
  };

  const getButtonStyles = (plan: any) => {
    if (plan.vip) {
      return "bg-gradient-to-r from-gold via-yellow-400 to-gold hover:from-yellow-400 hover:via-gold hover:to-yellow-400 text-black shadow-xl hover:shadow-gold/40 transform hover:scale-105";
    }
    if (plan.popular) {
      return "bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white shadow-xl hover:shadow-blue-500/40 transform hover:scale-105";
    }
    return "bg-gray-900 hover:bg-black text-white shadow-lg hover:shadow-xl transform hover:scale-105";
  };

  const getDiscountBadgeStyles = (plan: any) => {
    if (plan.vip) {
      return "bg-gradient-to-r from-gold to-yellow-400 text-black";
    }
    if (plan.popular) {
      return "bg-gradient-to-r from-blue-600 to-blue-700 text-white";
    }
    if (plan.discount) {
      return "bg-gradient-to-r from-green-600 to-green-700 text-white";
    }
    return "bg-gray-900 text-white";
  };

  return (
    <section ref={sectionRef} className="py-32 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-gold/20 to-yellow-400/20 border-2 border-gold/40 rounded-full px-8 py-4 mb-8 shadow-lg">
              <Sparkles className="w-6 h-6 text-gold mr-4" />
              <span className="text-gold font-black text-lg tracking-wider">PLANES DE MEMBRESÍA</span>
            </div>
            
            <h2 className="text-6xl lg:text-7xl font-black mb-8 text-gray-900 leading-tight">
              <span className="block">Elige tu</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-yellow-500 to-gold">Transformación</span>
            </h2>
            
            <p className="text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-medium">
              Planes diseñados para diferentes objetivos y presupuestos. 
              <span className="text-gold font-bold"> Todos incluyen mi método probado y garantía de resultados.</span>
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full flex flex-col rounded-3xl p-8 transition-all duration-500 hover:scale-105 ${getCardStyles(plan)}`}>
                  
                  {/* Discount Badge */}
                  {plan.discount && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className={`px-6 py-2 rounded-full font-black text-sm shadow-xl ${getDiscountBadgeStyles(plan)}`}>
                        {plan.discount}
                      </div>
                    </div>
                  )}

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        POPULAR
                      </div>
                    </div>
                  )}

                  {/* VIP Badge */}
                  {plan.vip && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-gold to-yellow-400 text-black px-6 py-2 rounded-full font-black text-sm shadow-xl flex items-center">
                        <Crown className="w-4 h-4 mr-2" />
                        EXCLUSIVO
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 ${
                      plan.vip 
                        ? 'bg-gradient-to-br from-gold/30 to-yellow-400/30 border-2 border-gold/50'
                        : plan.popular
                        ? 'bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300'
                        : 'bg-gradient-to-br from-gray-100 to-gray-200 border-2 border-gray-300'
                    }`}>
                      <plan.icon className={`w-10 h-10 ${
                        plan.vip ? 'text-gold' : plan.popular ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                    <p className={`font-bold mb-6 ${
                      plan.vip ? 'text-gold' : plan.popular ? 'text-blue-600' : 'text-gray-600'
                    }`}>{plan.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center mb-2">
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-400 line-through mr-2">€{plan.originalPrice}</span>
                        )}
                        <span className={`text-4xl font-black ${plan.vip ? 'text-gold' : 'text-gray-900'}`}>€{plan.price}</span>
                        <span className="text-gray-600 text-lg ml-1">{plan.period}</span>
                      </div>
                      <p className="text-sm text-gray-500 font-medium">{plan.duration}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 ${
                          plan.vip 
                            ? 'bg-gold/20 border-2 border-gold/40' 
                            : plan.popular
                            ? 'bg-blue-100 border-2 border-blue-300'
                            : 'bg-gray-100 border-2 border-gray-300'
                        }`}>
                          <Check className={`w-4 h-4 ${
                            plan.vip ? 'text-gold' : plan.popular ? 'text-blue-600' : 'text-gray-600'
                          }`} />
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 flex items-center justify-center group ${getButtonStyles(plan)}`}>
                    <span>{plan.vip ? 'Solicitar Plaza VIP' : 'Seleccionar Plan'}</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Award, title: "Resultados Garantizados", desc: "98% de tasa de éxito comprobada", color: "text-gold" },
              { icon: Users, title: "Comunidad Exclusiva", desc: "Acceso a +500 miembros exitosos", color: "text-blue-600" },
              { icon: Zap, title: "Método Científico", desc: "15+ años de experiencia IFBB Pro", color: "text-purple-600" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 border-2 border-gray-200 group-hover:shadow-2xl transition-all duration-300 group-hover:scale-110 group-hover:border-gray-300">
                  <item.icon className={`w-12 h-12 ${item.color}`} />
                </div>
                <h4 className="font-black text-gray-900 mb-3 text-xl">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="bg-gradient-to-r from-gold/20 via-yellow-50 to-gold/20 border-4 border-gold/40 rounded-3xl p-12 text-center shadow-2xl">
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-br from-gold/20 to-yellow-400/20 w-32 h-32 rounded-3xl flex items-center justify-center mx-auto mb-8 border-4 border-gold/40 shadow-xl">
                <Star className="w-16 h-16 text-gold" />
              </div>
              
              <h3 className="text-5xl font-black text-gray-900 mb-6">Garantía de Satisfacción</h3>
              <p className="text-2xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed font-medium">
                Si no estás completamente satisfecho con tu progreso en los primeros 30 días, 
                te devolvemos el <span className="font-black text-gold text-3xl">100% de tu dinero</span>. Sin preguntas.
              </p>
              
              <div className="inline-flex items-center bg-white/80 border-2 border-gold/30 rounded-full px-8 py-4 shadow-lg">
                <Check className="w-6 h-6 text-gold mr-3" />
                <span className="text-gray-700 font-bold text-lg">30 días de garantía total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;