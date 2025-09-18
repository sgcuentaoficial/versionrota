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
      { threshold: 0.1 }
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
    <section ref={sectionRef} id="method" className="py-16 sm:py-20 lg:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <Target className="w-4 h-4 text-gold mr-2" />
              <span className="text-gold font-bold text-xs tracking-wider">MÉTODO EXCLUSIVO</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-gray-900 px-4">
              <span className="block">El Método</span>
              <span className="text-gold">Sergi Constance</span>
            </h2>
            
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Un sistema científico de 4 pilares desarrollado durante 15+ años como IFBB Pro. 
              No es solo entrenamiento, es una transformación completa.
            </p>
          </div>

          {/* Method Steps */}
          <div className="mb-12 lg:mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {methodSteps.map((step, index) => (
                <div key={index} className={`bg-white rounded-2xl p-6 border-2 transition-all duration-500 ${
                  activeStep === index 
                    ? 'border-gold shadow-xl shadow-gold/20' 
                    : 'border-gray-200 hover:border-gold/50'
                }`}>
                  
                  {/* Step Number */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      activeStep === index ? 'bg-gold text-white' : 'bg-gold/10 text-gold'
                    }`}>
                      <step.icon className="w-5 h-5" />
                    </div>
                    <div className={`text-xl font-black transition-colors ${
                      activeStep === index ? 'text-gold' : 'text-gray-300'
                    }`}>
                      0{index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-black text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gold font-bold text-sm mb-3">{step.subtitle}</p>
                  <p className="text-sm text-gray-600 mb-4">{step.description}</p>
                  
                  {/* Features */}
                  <ul className="space-y-2">
                    {step.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-xs text-gray-600">
                        <CheckCircle className="w-3 h-3 text-gold mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center mt-8">
              <div className="flex space-x-2">
                {methodSteps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      activeStep === index ? 'bg-gold w-6' : 'bg-gray-300'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          {/* Supporting Pillars */}
          <div className="bg-white rounded-2xl p-6 lg:p-8 border border-gold/20 shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-black text-gray-900 mb-3">Pilares de Soporte</h3>
              <p className="text-gray-600 max-w-2xl mx-auto px-4">
                Además del método principal, estos pilares garantizan tu éxito y transformación completa.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {pillars.map((pillar, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gold/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <pillar.icon className="w-6 h-6 text-gold" />
                  </div>
                  <h4 className="text-lg font-black text-gray-900 mb-3">{pillar.title}</h4>
                  <p className="text-sm text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-black text-gray-900 mb-4 px-4">
              ¿Listo para experimentar el método que funciona?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto px-4">
              Solo quedan 12 plazas disponibles para el programa VIP de este trimestre.
            </p>
            <a 
              href="https://wa.me/34614428420?text=Hola%20Sergi,%20estoy%20interesado%20en%20el%20coaching%20VIP%20Elite.%20Me%20gustaría%20agendar%20una%20consulta%20para%20conocer%20más%20detalles."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gold text-white px-6 py-3 rounded-xl font-bold hover:bg-gold-dark transition-all duration-300"
            >
              SOLICITAR MI PLAZA VIP
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Method;