import React, { useEffect, useRef, useState } from 'react';
import { Target, Brain, Dumbbell, Apple, BarChart, Users, CheckCircle, ArrowRight } from 'lucide-react';

const Method = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setActiveStep((prev) => (prev + 1) % 4);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isVisible]);

  const methodSteps = [
    {
      icon: Target,
      title: "Análisis Personalizado",
      subtitle: "Evaluación Completa 360°",
      description: "Análisis detallado de tu composición corporal, historial médico, objetivos y estilo de vida para crear un plan 100% personalizado.",
      features: ["Evaluación corporal completa", "Análisis de objetivos", "Historial médico", "Estilo de vida"]
    },
    {
      icon: Dumbbell,
      title: "Entrenamiento Científico",
      subtitle: "Método Probado",
      description: "Rutinas de entrenamiento basadas en ciencia deportiva, adaptadas a tu nivel y progresando semana a semana hacia tus objetivos.",
      features: ["Rutinas personalizadas", "Progresión científica", "Técnica perfecta", "Adaptación constante"]
    },
    {
      icon: Apple,
      title: "Nutrición Estratégica",
      subtitle: "Plan Nutricional Exacto",
      description: "Plan nutricional calculado al gramo, con recetas deliciosas y flexibilidad para tu estilo de vida, sin dietas extremas.",
      features: ["Macros calculados", "Recetas incluidas", "Flexibilidad total", "Sin restricciones extremas"]
    },
    {
      icon: Brain,
      title: "Coaching Mental",
      subtitle: "Mentalidad de Campeón",
      description: "Desarrollo de la mentalidad correcta, gestión de la motivación y creación de hábitos sostenibles para el éxito a largo plazo.",
      features: ["Mentalidad ganadora", "Gestión emocional", "Hábitos sostenibles", "Motivación constante"]
    }
  ];

  const pillars = [
    {
      icon: BarChart,
      title: "Seguimiento Continuo",
      description: "Monitoreo semanal de progreso con ajustes en tiempo real"
    },
    {
      icon: Users,
      title: "Soporte 24/7",
      description: "Acceso directo a mí y mi equipo para resolver cualquier duda"
    },
    {
      icon: CheckCircle,
      title: "Garantía de Resultados",
      description: "98% de tasa de éxito con garantía de satisfacción total"
    }
  ];

  return (
    <section ref={sectionRef} className="py-32 bg-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gold rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-7xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-8">
              <Target className="w-5 h-5 text-gold mr-3" />
              <span className="text-gold font-bold text-sm tracking-wider">MÉTODO EXCLUSIVO</span>
            </div>
            
            <h2 className="text-5xl lg:text-6xl font-black mb-8 text-gray-900 leading-tight">
              <span className="block">El Método</span>
              <span className="text-gold">Sergi Constance</span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Un sistema científico de 4 pilares que ha transformado más de 500 vidas. 
              No es solo entrenamiento, es una transformación completa.
            </p>
          </div>

          {/* Method Steps */}
          <div className="mb-20">
            <div className="grid lg:grid-cols-4 gap-8">
              {methodSteps.map((step, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  } ${
                    activeStep === index ? 'transform scale-105' : ''
                  }`}
                  style={{ transitionDelay: `${index * 0.2}s` }}
                >
                  <div className={`bg-white rounded-3xl p-8 border-2 transition-all duration-500 ${
                    activeStep === index 
                      ? 'border-gold shadow-2xl shadow-gold/20' 
                      : 'border-gray-200 hover:border-gold/50'
                  }`}>
                    
                    {/* Step Number */}
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors ${
                        activeStep === index ? 'bg-gold text-white' : 'bg-gold/10 text-gold'
                      }`}>
                        <step.icon className="w-6 h-6" />
                      </div>
                      <div className={`text-2xl font-black transition-colors ${
                        activeStep === index ? 'text-gold' : 'text-gray-300'
                      }`}>
                        0{index + 1}
                      </div>
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-xl font-black text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gold font-bold text-sm mb-4">{step.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{step.description}</p>
                    
                    {/* Features */}
                    <ul className="space-y-2">
                      {step.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-gold mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                {methodSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-gold w-8' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Supporting Pillars */}
          <div className="bg-white rounded-3xl p-12 border border-gold/20 shadow-xl">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-black text-gray-900 mb-4">Pilares de Soporte</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Además del método principal, estos pilares garantizan tu éxito y transformación completa.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {pillars.map((pillar, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                  }`}
                  style={{ transitionDelay: `${0.8 + index * 0.1}s` }}
                >
                  <div className="text-center group">
                    <div className="bg-gold/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors">
                      <pillar.icon className="w-8 h-8 text-gold" />
                    </div>
                    <h4 className="text-xl font-black text-gray-900 mb-4">{pillar.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h3 className="text-3xl font-black text-gray-900 mb-6">
                ¿Listo para experimentar el método que funciona?
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Solo quedan 12 plazas disponibles para el programa VIP de este trimestre.
              </p>
              <a 
                href="#apply" 
                className="inline-flex items-center bg-gold text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-gold-dark transition-all duration-300 group"
              >
                SOLICITAR MI PLAZA VIP
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;