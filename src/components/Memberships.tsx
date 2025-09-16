import React, { useEffect, useRef, useState } from 'react';
import { Crown, Star, Check, Zap, Target, Users, Award, Calendar, Gift } from 'lucide-react';

const Memberships = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState('monthly');
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
      name: "BÁSICA MENSUAL",
      subtitle: "Perfecto para empezar",
      price: "89",
      originalPrice: null,
      period: "/mes",
      duration: "1 mes",
      totalPrice: "89€",
      popular: false,
      icon: Target,
      color: "gray",
      discount: null,
      features: [
        "Plan de entrenamiento personalizado",
        "Guía nutricional básica",
        "Acceso a la app móvil",
        "Soporte por email",
        "Videos explicativos",
        "Seguimiento básico"
      ],
      cta: "COMENZAR AHORA",
      description: "Ideal para quienes quieren probar el método Sergi Constance sin compromiso a largo plazo."
    },
    {
      name: "TRIMESTRAL",
      subtitle: "Ahorra un 5%",
      price: "84.67",
      originalPrice: "89",
      period: "/mes",
      duration: "3 meses",
      totalPrice: "254€",
      popular: true,
      icon: Calendar,
      color: "blue",
      discount: "5% DESCUENTO",
      features: [
        "Todo lo del plan Básico",
        "Plan nutricional avanzado",
        "Seguimiento semanal",
        "Ajustes mensuales",
        "Acceso a webinars exclusivos",
        "Comunidad privada",
        "Recetas personalizadas"
      ],
      cta: "AHORRAR 5%",
      description: "El plan más popular. Tiempo suficiente para ver resultados reales con descuento incluido."
    },
    {
      name: "SEMESTRAL",
      subtitle: "Ahorra un 10%",
      price: "79.83",
      originalPrice: "89",
      period: "/mes",
      duration: "6 meses",
      totalPrice: "479€",
      popular: false,
      icon: Gift,
      color: "green",
      discount: "10% DESCUENTO",
      features: [
        "Todo lo del plan Trimestral",
        "Llamadas grupales mensuales",
        "Plan de suplementación",
        "Análisis de progreso detallado",
        "Acceso a masterclasses",
        "Soporte prioritario",
        "Certificado de finalización"
      ],
      cta: "AHORRAR 10%",
      description: "Para transformaciones profundas y duraderas. El tiempo ideal para cambios permanentes."
    },
    {
      name: "ANUAL PREMIUM",
      subtitle: "1 mes GRATIS",
      price: "81.58",
      originalPrice: "89",
      period: "/mes",
      duration: "12 meses",
      totalPrice: "979€",
      popular: false,
      icon: Award,
      color: "purple",
      discount: "1 MES GRATIS",
      features: [
        "Todo lo del plan Semestral",
        "Llamada 1:1 trimestral con Sergi",
        "Plan de entrenamiento avanzado",
        "Coaching mental incluido",
        "Acceso a eventos exclusivos",
        "Material descargable premium",
        "Garantía extendida"
      ],
      cta: "1 MES GRATIS",
      description: "El compromiso completo con el máximo ahorro. Transformación garantizada en 12 meses."
    },
    {
      name: "VIP ELITE",
      subtitle: "Experiencia exclusiva",
      price: "416.67",
      originalPrice: null,
      period: "/mes",
      duration: "12 meses",
      totalPrice: "5.000€",
      popular: false,
      icon: Crown,
      color: "gold",
      discount: "EXCLUSIVO",
      features: [
        "Todo lo del plan Anual Premium",
        "Acceso directo a Sergi 24/7",
        "Llamadas 1:1 semanales",
        "Plan 100% personalizado",
        "Análisis corporal profesional",
        "Visita presencial incluida",
        "Mentoría empresarial",
        "Acceso de por vida"
      ],
      cta: "SOLICITAR PLAZA VIP",
      description: "La experiencia más exclusiva. Solo para clientes VIP que buscan el máximo nivel de atención."
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
              <span className="text-vip-gold font-bold text-sm tracking-wider">PLANES DE MEMBRESÍA</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black mb-8 text-white leading-tight">
              <span className="block">Elige tu</span>
              <span className="text-vip-gold">Membresía</span>
            </h2>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Cinco opciones diseñadas para diferentes presupuestos y objetivos. 
              Todos incluyen mi método probado y garantía de resultados.
            </p>
          </div>

          {/* Plans Grid */}
          <div className="grid lg:grid-cols-5 md:grid-cols-2 gap-6 mb-16">
            {plans.map((plan, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                } ${
                  plan.popular ? 'lg:scale-105 lg:-translate-y-4' : ''
                } ${
                  plan.name === 'VIP ELITE' ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className={`relative bg-white rounded-3xl p-6 border-2 transition-all duration-300 hover:shadow-2xl h-full flex flex-col ${
                  plan.popular 
                    ? 'border-vip-gold shadow-2xl shadow-vip-gold/20' 
                    : plan.name === 'VIP ELITE'
                    ? 'border-vip-gold bg-gradient-to-br from-white to-vip-gold/5'
                    : 'border-gray-200 hover:border-vip-gold/50'
                }`}>
                  
                  {/* Discount Badge */}
                  {plan.discount && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className={`px-4 py-1 rounded-full font-bold text-xs ${
                        plan.name === 'VIP ELITE' 
                          ? 'bg-vip-gold text-black'
                          : plan.popular
                          ? 'bg-blue-600 text-white'
                          : 'bg-green-600 text-white'
                      }`}>
                        {plan.discount}
                      </div>
                    </div>
                  )}

                  {/* Header */}
                  <div className="text-center mb-6 flex-grow">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 ${
                      plan.name === 'VIP ELITE' ? 'bg-vip-gold/20' : 
                      plan.popular ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      <plan.icon className={`w-6 h-6 ${
                        plan.name === 'VIP ELITE' ? 'text-vip-gold' :
                        plan.popular ? 'text-blue-600' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <h3 className="text-lg font-black text-gray-900 mb-1">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{plan.subtitle}</p>
                    
                    <div className="mb-4">
                      {plan.originalPrice && (
                        <div className="text-sm text-gray-400 line-through">€{plan.originalPrice}/mes</div>
                      )}
                      <span className="text-3xl font-black text-gray-900">€{plan.price}</span>
                      <span className="text-gray-600 text-sm">{plan.period}</span>
                    </div>
                    
                    <div className="text-sm text-gray-600 mb-4">
                      <div>{plan.duration}</div>
                      <div className="font-bold text-gray-900">{plan.totalPrice} total</div>
                    </div>
                    
                    <p className="text-xs text-gray-600 leading-relaxed">{plan.description}</p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                        <span className="text-xs text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className={`w-full py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                    plan.name === 'VIP ELITE'
                      ? 'bg-vip-gold text-black hover:bg-yellow-400'
                      : plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}>
                    {plan.cta}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Comparison Table for Mobile */}
          <div className="lg:hidden mb-16">
            <div className="bg-white rounded-3xl p-6 border border-vip-gold/20">
              <h3 className="text-xl font-black text-gray-900 mb-6 text-center">Comparación de Precios</h3>
              <div className="space-y-4">
                {plans.map((plan, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gray-100 last:border-b-0">
                    <div>
                      <div className="font-bold text-gray-900">{plan.name}</div>
                      <div className="text-sm text-gray-600">{plan.duration}</div>
                    </div>
                    <div className="text-right">
                      <div className="font-bold text-gray-900">€{plan.price}/mes</div>
                      <div className="text-sm text-gray-600">{plan.totalPrice} total</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Value Proposition */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-vip-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-vip-gold" />
              </div>
              <h4 className="font-bold text-white mb-2">Resultados Garantizados</h4>
              <p className="text-gray-400 text-sm">98% de tasa de éxito en todos nuestros planes</p>
            </div>
            
            <div className="text-center">
              <div className="bg-vip-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-vip-gold" />
              </div>
              <h4 className="font-bold text-white mb-2">Comunidad Exclusiva</h4>
              <p className="text-gray-400 text-sm">Acceso a nuestra comunidad de +500 miembros</p>
            </div>
            
            <div className="text-center">
              <div className="bg-vip-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-vip-gold" />
              </div>
              <h4 className="font-bold text-white mb-2">Método Probado</h4>
              <p className="text-gray-400 text-sm">15+ años de experiencia como IFBB Pro</p>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="bg-black/50 backdrop-blur-sm border border-vip-gold/30 rounded-3xl p-8 text-center">
            <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-vip-gold/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-vip-gold" />
              </div>
              
              <h3 className="text-2xl font-black text-white mb-4">Garantía de Satisfacción 30 Días</h3>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
                Si no estás completamente satisfecho con tu progreso en los primeros 30 días, 
                te devolvemos el 100% de tu dinero. Sin preguntas.
              </p>
              
              <div className="text-sm text-gray-400">
                * Aplica a todos los planes. Términos y condiciones disponibles.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;