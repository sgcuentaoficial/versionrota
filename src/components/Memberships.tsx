import React, { useEffect, useRef, useState } from 'react';
import { Crown, Star, Check, Zap, Target, Users, Award, Calendar, Gift, ArrowRight, Sparkles } from 'lucide-react';

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
      subtitle: "Perfecto para empezar",
      price: "89",
      originalPrice: null,
      period: "/mes",
      duration: "1 mes",
      totalPrice: "89€",
      popular: false,
      icon: Target,
      features: [
        "Plan de entrenamiento personalizado",
        "Guía nutricional básica",
        "Acceso a la app móvil",
        "Soporte por email",
        "Videos explicativos",
        "Seguimiento básico"
      ]
    },
    {
      name: "Trimestral",
      subtitle: "Más popular",
      price: "84.67",
      originalPrice: "89",
      period: "/mes",
      duration: "3 meses",
      totalPrice: "254€",
      popular: true,
      icon: Calendar,
      features: [
        "Todo lo del plan Básico",
        "Plan nutricional avanzado",
        "Seguimiento semanal",
        "Ajustes mensuales",
        "Acceso a webinars exclusivos",
        "Comunidad privada",
        "Recetas personalizadas"
      ]
    },
    {
      name: "Semestral",
      subtitle: "Mejor valor",
      price: "79.83",
      originalPrice: "89",
      period: "/mes",
      duration: "6 meses",
      totalPrice: "479€",
      popular: false,
      icon: Gift,
      features: [
        "Todo lo del plan Trimestral",
        "Llamadas grupales mensuales",
        "Plan de suplementación",
        "Análisis de progreso detallado",
        "Acceso a masterclasses",
        "Soporte prioritario",
        "Certificado de finalización"
      ]
    },
    {
      name: "Anual Premium",
      subtitle: "1 mes gratis",
      price: "81.58",
      originalPrice: "89",
      period: "/mes",
      duration: "12 meses",
      totalPrice: "979€",
      popular: false,
      icon: Award,
      features: [
        "Todo lo del plan Semestral",
        "Llamada 1:1 trimestral con Sergi",
        "Plan de entrenamiento avanzado",
        "Coaching mental incluido",
        "Acceso a eventos exclusivos",
        "Material descargable premium",
        "Garantía extendida"
      ]
    },
    {
      name: "VIP Elite",
      subtitle: "Experiencia exclusiva",
      price: "416.67",
      originalPrice: null,
      period: "/mes",
      duration: "12 meses",
      totalPrice: "5.000€",
      popular: false,
      vip: true,
      icon: Crown,
      features: [
        "Todo lo del plan Anual Premium",
        "Acceso directo a Sergi 24/7",
        "Llamadas 1:1 semanales",
        "Plan 100% personalizado",
        "Análisis corporal profesional",
        "Visita presencial incluida",
        "Mentoría empresarial",
        "Acceso de por vida"
      ]
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
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
              Cinco opciones cuidadosamente diseñadas para diferentes objetivos y presupuestos. 
              Todos incluyen mi método probado y garantía de resultados.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-8 mb-20">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  plan.popular ? 'lg:scale-105 lg:-translate-y-4 z-10' : ''
                } ${
                  plan.vip ? 'lg:scale-105 lg:-translate-y-4' : ''
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full flex flex-col bg-white rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl border-2 ${
                  plan.vip 
                    ? 'border-gold/30 shadow-xl shadow-gold/10 hover:shadow-gold/20 ring-2 ring-gold/20'
                    : plan.popular
                    ? 'border-gray-300 shadow-xl hover:shadow-gray-500/20 ring-2 ring-gray-300'
                    : 'border-gray-200 shadow-lg hover:shadow-gray-500/10'
                } hover:scale-105`}>
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gray-900 text-white px-6 py-2 rounded-full font-bold text-xs shadow-lg">
                        MÁS POPULAR
                      </div>
                    </div>
                  )}

                  {/* VIP Badge */}
                  {plan.vip && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-gold to-yellow-500 text-black px-6 py-2 rounded-full font-bold text-xs shadow-lg">
                        EXCLUSIVO
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 ${
                      plan.vip 
                        ? 'bg-gold/10 border border-gold/30'
                        : 'bg-gray-100 border border-gray-200'
                    }`}>
                      <plan.icon className={`w-10 h-10 ${
                        plan.vip ? 'text-gold' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 font-semibold mb-6">{plan.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="mb-6">
                      {plan.originalPrice && (
                        <div className="text-lg text-gray-400 line-through mb-2">€{plan.originalPrice}/mes</div>
                      )}
                      <div className="flex items-baseline justify-center mb-4">
                        <span className="text-4xl font-black text-gray-900">€{plan.price}</span>
                        <span className="text-gray-600 text-lg ml-1">{plan.period}</span>
                      </div>
                    </div>
                    
                    <div className={`rounded-2xl p-4 mb-6 border ${
                      plan.vip 
                        ? 'bg-gold/5 border-gold/20'
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="text-sm text-gray-600 mb-1">{plan.duration}</div>
                      <div className="font-black text-gray-900 text-xl">{plan.totalPrice} total</div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 ${
                          plan.vip ? 'bg-gold/20 border border-gold/30' : 'bg-gray-100 border border-gray-200'
                        }`}>
                          <Check className={`w-4 h-4 ${
                            plan.vip ? 'text-gold' : 'text-gray-600'
                          }`} />
                        </div>
                        <span className="text-gray-700 font-medium leading-relaxed text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center group ${
                    plan.vip 
                      ? 'bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-black shadow-gold/30'
                      : plan.popular 
                      ? 'bg-gray-900 hover:bg-gray-800 text-white'
                      : 'bg-white hover:bg-gray-50 text-gray-900 border-2 border-gray-200 hover:border-gray-300'
                  }`}>
                    <span>Seleccionar Plan</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              { icon: Zap, title: "Resultados Garantizados", desc: "98% de tasa de éxito comprobada" },
              { icon: Users, title: "Comunidad Exclusiva", desc: "Acceso a +500 miembros exitosos" },
              { icon: Award, title: "Método Científico", desc: "15+ años de experiencia IFBB Pro" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 border border-gray-200 group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  <item.icon className="w-12 h-12 text-gold" />
                </div>
                <h4 className="font-black text-gray-900 mb-3 text-xl">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="bg-gradient-to-r from-gold/10 via-yellow-50 to-gold/10 border-2 border-gold/30 rounded-3xl p-12 text-center shadow-2xl">
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gold/10 w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-8 border border-gold/30">
                <Star className="w-12 h-12 text-gold" />
              </div>
              
              <h3 className="text-4xl font-black text-gray-900 mb-6">Garantía de Satisfacción</h3>
              <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
                Si no estás completamente satisfecho con tu progreso en los primeros 30 días, 
                te devolvemos el <span className="font-black text-gold">100% de tu dinero</span>. Sin preguntas.
              </p>
              
              <div className="inline-flex items-center bg-white/60 border border-gold/20 rounded-full px-6 py-3">
                <Check className="w-5 h-5 text-gold mr-2" />
                <span className="text-gray-700 font-semibold">30 días de garantía total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;