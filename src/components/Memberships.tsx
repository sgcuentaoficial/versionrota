import React, { useEffect, useRef, useState } from 'react';
import { Crown, Star, Check, Zap, Target, Users, Award, Calendar, Gift, ArrowRight, Sparkles, CheckCircle } from 'lucide-react';

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
      color: "gray",
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
      color: "blue",
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
      color: "emerald",
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
      color: "purple",
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
      icon: Crown,
      color: "gold",
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

  const getColorClasses = (color: string, type: 'bg' | 'border' | 'text' | 'gradient') => {
    const colorMap = {
      gray: {
        bg: 'bg-gray-50',
        border: 'border-gray-200',
        text: 'text-gray-600',
        gradient: 'from-gray-600 to-gray-700'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        text: 'text-blue-600',
        gradient: 'from-blue-600 to-blue-700'
      },
      emerald: {
        bg: 'bg-emerald-50',
        border: 'border-emerald-200',
        text: 'text-emerald-600',
        gradient: 'from-emerald-600 to-emerald-700'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        text: 'text-purple-600',
        gradient: 'from-purple-600 to-purple-700'
      },
      gold: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-300',
        text: 'text-yellow-600',
        gradient: 'from-yellow-500 to-yellow-600'
      }
    };
    return colorMap[color as keyof typeof colorMap]?.[type] || colorMap.gray[type];
  };
  return (
    <section ref={sectionRef} className="py-32 bg-white relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/30 via-white to-blue-50/20"></div>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-gold/3 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-500/3 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gradient-to-r from-gold/10 to-blue-500/10 border border-gold/20 rounded-full px-8 py-4 mb-8 backdrop-blur-sm">
              <Sparkles className="w-6 h-6 text-gold mr-3" />
              <span className="text-gray-800 font-bold text-sm tracking-wider">PLANES DE MEMBRESÍA</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
              <span className="block mb-2">Elige tu</span>
              <span className="bg-gradient-to-r from-gold via-yellow-500 to-gold bg-clip-text text-transparent">
                Transformación
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Cinco opciones cuidadosamente diseñadas para diferentes objetivos y presupuestos. 
              Todos incluyen mi método probado y garantía de resultados.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 mb-20">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  plan.popular ? 'lg:scale-105 z-10' : ''
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`relative h-full flex flex-col rounded-2xl p-6 transition-all duration-300 hover:shadow-xl bg-white border-2 ${getColorClasses(plan.color, 'border')} hover:scale-105 ${
                  plan.popular ? 'ring-2 ring-blue-500/20 shadow-lg' : ''
                } ${
                  plan.color === 'gold' ? 'ring-2 ring-yellow-500/20 shadow-lg' : ''
                }`}>
                  
                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg">
                        MÁS POPULAR
                      </div>
                    </div>
                  )}

                  {/* Elite Badge */}
                  {plan.color === 'gold' && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white px-4 py-2 rounded-full font-bold text-xs shadow-lg">
                        EXCLUSIVO
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 ${getColorClasses(plan.color, 'bg')}`}>
                      <plan.icon className={`w-8 h-8 ${getColorClasses(plan.color, 'text')}`} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      {plan.originalPrice && (
                        <div className="text-sm text-gray-400 line-through mb-1">€{plan.originalPrice}/mes</div>
                      )}
                      <div className="flex items-baseline justify-center mb-2">
                        <span className="text-3xl font-bold text-gray-900">€{plan.price}</span>
                        <span className="text-gray-600 ml-1">{plan.period}</span>
                      </div>
                      <div className="text-sm text-gray-600">{plan.totalPrice} total</div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-6 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <CheckCircle className={`w-4 h-4 mr-2 flex-shrink-0 mt-0.5 ${getColorClasses(plan.color, 'text')}`} />
                        <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center group bg-gradient-to-r ${getColorClasses(plan.color, 'gradient')} text-white shadow-lg hover:shadow-xl`}>
                    <span>Seleccionar Plan</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              { icon: Zap, title: "Resultados Garantizados", desc: "98% de tasa de éxito comprobada", color: "text-yellow-600" },
              { icon: Users, title: "Comunidad Exclusiva", desc: "Acceso a +500 miembros exitosos", color: "text-blue-600" },
              { icon: Award, title: "Método Científico", desc: "15+ años de experiencia IFBB Pro", color: "text-purple-600" }
            ].map((item, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-gray-200 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Guarantee */}
          <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 border border-yellow-200 rounded-2xl p-8 text-center">
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-yellow-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-yellow-600" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Garantía de Satisfacción</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
                Si no estás completamente satisfecho con tu progreso en los primeros 30 días, 
                te devolvemos el <span className="font-bold text-yellow-600">100% de tu dinero</span>. Sin preguntas.
              </p>
              
              <div className="inline-flex items-center bg-white border border-yellow-200 rounded-full px-4 py-2">
                <Check className="w-4 h-4 text-yellow-600 mr-2" />
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