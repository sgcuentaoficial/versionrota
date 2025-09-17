import React, { useEffect, useRef, useState } from 'react';
import { Crown, Star, Check, Target, Users, Award, Calendar, Gift, ArrowRight, Sparkles } from 'lucide-react';

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

  const regularPlans = [
    {
      name: "Básica",
      subtitle: "Mensual",
      price: "89",
      originalPrice: null,
      period: "/mes",
      duration: "1 mes",
      popular: false,
      icon: Target,
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
      discount: "1 MES GRATIS",
      features: [
        "Todo del plan Semestral",
        "Llamadas 1:1 quincenales",
        "Programa 100% personalizado",
        "Revisiones corporales trimestrales",
        "Acceso a retiros exclusivos",
        "Certificado de finalización"
      ]
    }
  ];

  const vipPlan = {
    name: "VIP Elite",
    subtitle: "Exclusivo",
    price: "4.999",
    period: "/año",
    duration: "12 meses completos",
    icon: Crown,
    features: [
      "Acceso directo a Sergi 24/7",
      "Llamadas 1:1 semanales",
      "Programa 100% personalizado",
      "Visita presencial (España)",
      "Mentoría completa",
      "Acceso a eventos VIP",
      "Solo 12 plazas anuales"
    ]
  };

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
              <Sparkles className="w-5 h-5 text-gold mr-3" />
              <span className="text-gold font-bold text-sm tracking-wider">PLANES DE MEMBRESÍA</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
              <span className="block">Elige tu</span>
              <span className="text-gold">Transformación</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Planes diseñados para diferentes objetivos y presupuestos. 
              Todos incluyen mi método probado y garantía de resultados.
            </p>
          </div>

          {/* Regular Plans Grid - 4 columns vertical */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-16">
            {regularPlans.map((plan, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full flex flex-col rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-white border-4 border-gray-900 shadow-2xl transform scale-105' 
                    : 'bg-white border-2 border-gray-200 shadow-xl hover:shadow-2xl hover:border-gray-400 transition-all duration-300'
                }`}>
                  
                  {/* Discount Badge */}
                  {plan.discount && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gray-900 text-white px-6 py-2 rounded-full font-black text-sm shadow-xl">
                        {plan.discount}
                      </div>
                    </div>
                  )}

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 right-4">
                      <div className="bg-gray-900 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        MÁS POPULAR
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 ${
                      plan.popular 
                        ? 'bg-gray-100 border-2 border-gray-300'
                        : 'bg-gray-50 border-2 border-gray-200'
                    }`}>
                      <plan.icon className={`w-10 h-10 ${
                        plan.popular ? 'text-gray-900' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                    <p className={`font-bold mb-6 ${
                      plan.popular ? 'text-gray-900' : 'text-gray-600'
                    }`}>{plan.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      <div className="flex items-baseline justify-center mb-2">
                        {plan.originalPrice && (
                          <span className="text-lg text-gray-400 line-through mr-2">€{plan.originalPrice}</span>
                        )}
                        <span className="text-4xl font-black text-gray-900">€{plan.price}</span>
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
                          plan.popular 
                            ? 'bg-gray-200 border-2 border-gray-400' 
                            : 'bg-gray-100 border-2 border-gray-300'
                        }`}>
                          <Check className={`w-4 h-4 ${
                            plan.popular ? 'text-gray-900' : 'text-gray-600'
                          }`} />
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-2xl font-bold text-lg flex items-center justify-center group ${
                    plan.popular 
                      ? 'bg-gray-900 hover:bg-black text-white shadow-xl transform hover:scale-105 transition-all duration-300'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-2 border-gray-300 hover:border-gray-400 shadow-lg transform hover:scale-105 transition-all duration-300'
                  }`}>
                    <span>Seleccionar Plan</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* VIP Elite Plan - Horizontal */}
          <div className={`transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <div className="bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10 border-4 border-gold rounded-3xl p-12 shadow-2xl shadow-gold/20 relative overflow-hidden">
              
              {/* VIP Badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gold text-black px-8 py-3 rounded-full font-black text-lg shadow-xl flex items-center">
                  <Crown className="w-6 h-6 mr-2" />
                  PLAN EXCLUSIVO
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-12 items-center mt-8">
                
                {/* Left - Plan Info */}
                <div className="text-center lg:text-left">
                  <div className="bg-gold/20 w-32 h-32 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-8 border-4 border-gold/40">
                    <Crown className="w-16 h-16 text-gold" />
                  </div>
                  
                  <h3 className="text-4xl font-black text-gray-900 mb-4">{vipPlan.name}</h3>
                  <p className="text-gold font-bold text-xl mb-6">{vipPlan.subtitle}</p>
                  
                  {/* VIP Pricing */}
                  <div className="mb-8">
                    <div className="flex items-baseline justify-center lg:justify-start mb-2">
                      <span className="text-6xl font-black text-gold">€{vipPlan.price}</span>
                      <span className="text-gray-600 text-2xl ml-2">{vipPlan.period}</span>
                    </div>
                    <p className="text-lg text-gray-500 font-medium">{vipPlan.duration}</p>
                  </div>

                  {/* VIP CTA */}
                  <a 
                    href="#apply"
                    className="inline-flex items-center bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-black px-12 py-6 rounded-2xl font-black text-xl shadow-2xl hover:shadow-gold/40 transform hover:scale-105 transition-all duration-300 group"
                  >
                    <span>Solicitar Plaza VIP</span>
                    <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Center - Features */}
                <div className="lg:col-span-2">
                  <h4 className="text-2xl font-black text-gray-900 mb-8 text-center">Beneficios Exclusivos VIP</h4>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {vipPlan.features.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-gold/20 w-8 h-8 rounded-full flex items-center justify-center mr-4 flex-shrink-0 mt-1 border-2 border-gold/40">
                          <Check className="w-5 h-5 text-gold" />
                        </div>
                        <span className="text-gray-700 font-semibold leading-relaxed text-lg">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* VIP Guarantee */}
                  <div className="mt-8 bg-white/50 rounded-2xl p-6 border-2 border-gold/30">
                    <div className="flex items-center justify-center">
                      <Star className="w-8 h-8 text-gold mr-4" />
                      <div>
                        <h5 className="font-black text-gray-900 text-xl">Garantía VIP Total</h5>
                        <p className="text-gray-600 font-medium">60 días de garantía completa + seguimiento de por vida</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="bg-gold/10 border-4 border-gold/30 rounded-3xl p-12 text-center shadow-2xl mt-20">
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gold/20 w-32 h-32 rounded-3xl flex items-center justify-center mx-auto mb-8 border-4 border-gold/40 shadow-xl">
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