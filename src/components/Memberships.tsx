import React, { useEffect, useRef, useState } from 'react';
import { Star, Check, Target, Calendar, Gift, Award, ArrowRight, Sparkles } from 'lucide-react';
import { useLocationTranslation } from '../hooks/useLocationTranslation';

const Memberships = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { t } = useLocationTranslation();

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

  return (
    <section ref={sectionRef} id="memberships" className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-8">
              <Sparkles className="w-5 h-5 text-gold mr-3" />
              <span className="text-gold font-bold text-sm tracking-wider">PLANES DE MEMBRESÍA</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-gray-900 leading-tight">
              <span className="block">Elige tu</span>
              <span className="text-gold">Transformación</span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Planes diseñados para diferentes objetivos y presupuestos. Todos incluyen mi método probado y garantía de resultados.
            </p>
          </div>

          {/* Regular Plans Grid - 4 columns vertical */}
         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
            {regularPlans.map((plan, index) => (
              <div key={index} className="relative">
                <div className={`relative h-full flex flex-col rounded-3xl p-8 ${
                  plan.popular 
                    ? 'bg-gray-900 border-2 border-gold shadow-2xl transform scale-105 z-10' 
                    : 'bg-white border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-gray-300 transition-all duration-300'
                }`}>
                  
                  {/* Discount Badge */}
                  {plan.discount && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                      <div className="bg-gold text-black px-4 py-1 rounded-full font-bold text-xs shadow-lg">
                        {plan.discount}
                      </div>
                    </div>
                  )}

                  {/* Popular Badge */}
                  {plan.popular && (
                    <div className="absolute -top-3 right-4 z-20">
                      <div className="bg-gold text-black px-3 py-1 rounded-full font-bold text-xs shadow-lg flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        MÁS POPULAR
                      </div>
                    </div>
                  )}

                  {/* Plan Header */}
                  <div className="text-center mb-8">
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 ${
                      plan.popular 
                        ? 'bg-gold/20'
                        : 'bg-gray-50 border-2 border-gray-200'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${
                        plan.popular ? 'text-gold' : 'text-gray-600'
                      }`} />
                    </div>
                    
                    <h3 className={`text-lg sm:text-xl font-black mb-2 ${
                      plan.popular ? 'text-white' : 'text-gray-900'
                    }`}>{plan.name}</h3>
                    <p className={`font-semibold mb-4 text-sm ${
                      plan.popular ? 'text-gold' : 'text-gray-600'
                    }`}>{plan.subtitle}</p>
                    
                    {/* Pricing */}
                    <div className="mb-4">
                      <div className="flex items-baseline justify-center mb-2">
                        {plan.originalPrice && (
                          <span className={`text-sm line-through mr-2 ${
                            plan.popular ? 'text-gray-400' : 'text-gray-400'
                          }`}>€{plan.originalPrice}</span>
                        )}
                        <span className={`text-3xl font-black ${
                          plan.popular ? 'text-white' : 'text-gray-900'
                        }`}>€{plan.price}</span>
                        <span className={`text-sm ml-1 ${
                          plan.popular ? 'text-gray-300' : 'text-gray-600'
                        }`}>{plan.period}</span>
                      </div>
                      <p className={`text-xs sm:text-sm font-medium ${
                        plan.popular ? 'text-gray-300' : 'text-gray-500'
                      }`}>{plan.duration}</p>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8 flex-grow">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-0.5 ${
                          plan.popular 
                            ? 'bg-gold/20' 
                            : 'bg-gray-100'
                        }`}>
                          <Check className={`w-3 h-3 ${
                            plan.popular ? 'text-gold' : 'text-gray-600'
                          }`} />
                        </div>
                        <span className={`font-medium leading-relaxed text-sm ${
                          plan.popular ? 'text-gray-200' : 'text-gray-700'
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <a 
                    href={
                      index === 0 ? "https://buy.stripe.com/test_3cIeVd6RGclpazLgrN5wI00" :
                      index === 1 ? "https://buy.stripe.com/test_cNiaEX8ZO0CHbDP1wT5wI01" :
                      index === 2 ? "https://buy.stripe.com/test_cNiaEXa3Sclp9vH6Rd5wI02" :
                      "https://buy.stripe.com/test_cNidR9gsgdpt5fr8Zl5wI03"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-4 rounded-2xl font-bold text-base sm:text-lg flex items-center justify-center group ${
                    plan.popular 
                      ? 'bg-gold hover:bg-yellow-400 text-black shadow-lg transition-all duration-300'
                      : 'bg-gray-900 hover:bg-black text-white shadow-md transition-all duration-300'
                  }`}
                  >
                    <span>Seleccionar Plan</span>
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* VIP Elite Plan - Horizontal */}
          <div className="bg-gradient-to-r from-gold/5 via-gold/10 to-gold/5 border-2 border-gold/30 rounded-3xl p-6 sm:p-8 lg:p-12 shadow-xl relative overflow-visible mt-8">
            
            {/* VIP Badge */}
            <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-10">
              <div className="bg-gold text-black px-6 py-2 rounded-full font-black text-sm shadow-lg flex items-center">
                <img 
                  src="/corona_belegend-removebg-preview copy.png" 
                  alt="Corona VIP" 
                  className="w-6 h-6 mr-2"
                />
                EXCLUSIVO
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center mt-4">
              
              {/* Left - Plan Info */}
              <div className="text-center lg:text-left">
                <div className="bg-black w-24 h-24 lg:w-32 lg:h-32 rounded-3xl flex items-center justify-center mx-auto lg:mx-0 mb-6 border-2 border-gold/40">
                  <img 
                    src="/corona_belegend-removebg-preview copy.png" 
                    alt="Corona VIP" 
                    className="w-12 h-12 lg:w-16 lg:h-16 brightness-0 invert"
                  />
                </div>
                
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-3">VIP Elite</h3>
                <p className="text-gold font-bold text-lg mb-6">{t('memberships.exclusive')}</p>
                
                {/* VIP Call to Action */}
                <div className="mb-8">
                  <div className="text-center lg:text-left">
                    <h4 className="text-xl sm:text-2xl lg:text-3xl font-black text-gray-900 mb-2">Solicitar Consulta VIP</h4>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-600 font-medium">Agenda una llamada para conocer los detalles</p>
                  </div>
                </div>

                {/* VIP CTA */}
                <a 
                  href="https://wa.me/34614428420?text=Hola%20Sergi,%20estoy%20interesado%20en%20el%20coaching%20VIP%20Elite.%20Me%20gustaría%20agendar%20una%20consulta%20para%20conocer%20más%20detalles."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold text-black px-6 sm:px-8 lg:px-12 py-4 lg:py-6 rounded-2xl font-black text-base sm:text-lg lg:text-xl shadow-xl transition-all duration-300 group"
                >
                  <span>Agendar Llamada</span>
                  <ArrowRight className="w-5 h-5 lg:w-6 lg:h-6 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Center - Features */}
              <div className="lg:col-span-2">
                <h4 className="text-lg sm:text-xl lg:text-2xl font-black text-gray-900 mb-6 lg:mb-8 text-center lg:text-left">Beneficios Exclusivos VIP</h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                  {[
                    "Acceso directo a Sergi 24/7",
                    "Llamadas 1:1 semanales",
                    "Programa 100% personalizado",
                    "Visita presencial (España)",
                    "Mentoría completa",
                    "Acceso a eventos VIP",
                    "Solo 12 plazas anuales"
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gold/20 w-6 h-6 rounded-full flex items-center justify-center mr-3 flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-gold" />
                      </div>
                      <span className="text-gray-700 font-semibold leading-relaxed text-xs sm:text-sm lg:text-base">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* VIP Guarantee */}
                <div className="mt-6 lg:mt-8 bg-white/50 rounded-2xl p-4 sm:p-6 border border-gold/30">
                  <div className="flex items-center justify-center">
                    <Star className="w-6 h-6 lg:w-8 lg:h-8 text-gold mr-3 lg:mr-4" />
                    <div>
                      <h5 className="font-black text-gray-900 text-base sm:text-lg lg:text-xl">Garantía VIP Total</h5>
                      <p className="text-gray-600 font-medium text-xs sm:text-sm lg:text-base">60 días de garantía completa + seguimiento de por vida</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Guarantee Section */}
          <div className="bg-gold/10 border-2 border-gold/30 rounded-3xl p-6 sm:p-8 lg:p-12 text-center shadow-xl mt-12 sm:mt-16 lg:mt-20">
            <div className="bg-gold/20 w-20 h-20 lg:w-24 lg:h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 lg:mb-8 border-2 border-gold/40">
              <Star className="w-10 h-10 lg:w-12 lg:h-12 text-gold" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-gray-900 mb-4 lg:mb-6 px-4">Garantía de Satisfacción</h3>
            <p className="text-base sm:text-lg lg:text-xl text-gray-700 mb-6 lg:mb-8 max-w-4xl mx-auto leading-relaxed font-medium px-4">
              Si no estás completamente satisfecho con tu progreso en los primeros 30 días, te devolvemos el <span className="font-black text-gold text-lg sm:text-xl lg:text-2xl">100% de tu dinero</span>. Sin preguntas.
            </p>
            
            <div className="inline-flex items-center bg-white/80 border border-gold/30 rounded-full px-6 py-3 shadow-lg">
              <Check className="w-5 h-5 text-gold mr-3" />
              <span className="text-gray-700 font-bold text-sm sm:text-base lg:text-lg">30 días de garantía total</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memberships;