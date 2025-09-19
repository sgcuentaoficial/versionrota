import React, { useEffect, useRef, useState } from 'react';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
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

  const faqs = [
    {
      question: "¿Qué hace diferente el coaching de Sergi Constance?",
      answer: "Mi enfoque combina 15+ años de experiencia como IFBB Pro, conocimiento científico actualizado, y un método probado con más de 500 transformaciones exitosas. No es solo entrenamiento, es una transformación completa que incluye mentalidad, nutrición y estilo de vida. Además, tienes acceso directo a mí, no a un asistente."
    },
    {
      question: "¿Necesito experiencia previa en el gimnasio?",
      answer: "No es necesario. Mi método se adapta a todos los niveles, desde principiantes completos hasta atletas avanzados. Cada programa se personaliza según tu experiencia, condición física actual y objetivos específicos. Lo importante es tu compromiso y ganas de cambiar."
    },
    {
      question: "¿Cuánto tiempo necesito entrenar por día?",
      answer: "Depende de tu nivel y objetivos, pero generalmente entre 45-90 minutos, 4-6 días por semana. Diseño los entrenamientos para ser eficientes y efectivos. La calidad siempre supera a la cantidad. También adapto el programa a tu horario disponible."
    },
    {
      question: "¿El plan nutricional es muy restrictivo?",
      answer: "Para nada. Creo en la flexibilidad y sostenibilidad. Mi enfoque nutricional incluye alimentos que disfrutas, con opciones para diferentes estilos de vida. No hay alimentos 'prohibidos', sino estrategias inteligentes para alcanzar tus objetivos sin sacrificar tu vida social."
    },
    {
      question: "¿Qué pasa si no veo resultados?",
      answer: "Ofrezco una garantía de satisfacción de 30 días. Si sigues el programa al 100% y no estás satisfecho con los resultados, te devuelvo el dinero completo. En 15 años de coaching, esto ha pasado menos del 2% de las veces porque mi método funciona cuando se aplica correctamente."
    },
    {
      question: "¿Puedo hacer el programa desde casa?",
      answer: "Sí, adapto los programas tanto para gimnasio como para casa. Si entrenas en casa, diseño rutinas con el equipamiento que tengas disponible, desde peso corporal hasta equipamiento básico. Lo importante es la consistencia, no el lugar."
    },
    {
      question: "¿Con qué frecuencia tendré contacto contigo?",
      answer: "Depende del plan elegido. En el VIP tienes llamadas semanales conmigo, soporte 24/7 y ajustes constantes. En el plan Estándar, seguimiento mensual y soporte por email. En Elite, contacto diario. Siempre estoy disponible para mis clientes."
    },
    {
      question: "¿Qué incluye exactamente el programa?",
      answer: "Cada programa incluye: plan de entrenamiento personalizado, plan nutricional detallado, seguimiento de progreso, soporte continuo, acceso a mi app exclusiva, y coaching mental. Los planes VIP y Elite incluyen llamadas directas conmigo y contenido exclusivo adicional."
    },
    {
      question: "¿Hay límite de edad para el programa?",
      answer: "Trabajo con clientes desde los 16 hasta los 70+ años. Cada programa se adapta a la edad, condición física y necesidades específicas. Lo importante es tener la motivación para cambiar y el compromiso para seguir el programa."
    },
    {
      question: "¿Qué pasa si tengo lesiones o limitaciones físicas?",
      answer: "Trabajo con muchos clientes que tienen lesiones o limitaciones. Siempre recomiendo consultar con tu médico primero, y luego adapto completamente el programa a tus necesidades específicas. Mi experiencia me permite crear alternativas seguras y efectivas."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`max-w-5xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-6 sm:mb-8 px-4">
              Preguntas Frecuentes
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Las respuestas a las preguntas más comunes sobre mi método de coaching 
              y cómo puede transformar tu vida.
            </p>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className={`transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="bg-white border-2 border-gray-100 rounded-2xl overflow-hidden hover:border-gold/30 transition-all duration-300">
                  
                  {/* Question */}
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 pr-4">{faq.question}</h3>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 border-gold flex items-center justify-center transition-all duration-300 ${
                      openFAQ === index ? 'bg-gold rotate-180' : 'bg-white'
                    }`}>
                      {openFAQ === index ? (
                        <Minus className="w-4 h-4 text-white" />
                      ) : (
                        <Plus className="w-4 h-4 text-gold" />
                      )}
                    </div>
                  </button>

                  {/* Answer */}
                  <div className={`overflow-hidden transition-all duration-500 ${
                    openFAQ === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6">
                      <div className="border-t border-gray-100 pt-6">
                        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-16 text-center">
            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 lg:p-12 border border-gold/20">
                <h3 className="text-2xl sm:text-3xl font-black text-gray-900 mb-6 px-4">¿Tienes más preguntas?</h3>
                <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto px-4">
                  Estoy aquí para resolver cualquier duda que tengas sobre mi método de coaching 
                  y cómo puede ayudarte a alcanzar tus objetivos.
                </p>
                <a 
                  href="https://wa.me/34614428420?text=Hola%20Sergi,%20tengo%20algunas%20preguntas%20sobre%20tu%20método%20de%20coaching.%20Me%20gustaría%20resolver%20mis%20dudas."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-gold text-white px-6 sm:px-8 py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gold-dark transition-all duration-300"
                >
                  Contactar Directamente
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;