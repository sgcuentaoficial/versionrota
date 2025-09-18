import React, { useEffect, useRef, useState } from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const testimonials = [
    {
      name: "Carlos M.",
      age: "34 años",
      profession: "Ejecutivo",
      duration: "6 meses",
      result: "-18kg de grasa, +8kg de músculo",
      quote: "Sergi no solo transformó mi físico, cambió completamente mi mentalidad. Su método es científico, personalizado y, sobre todo, sostenible. Los resultados hablan por sí solos.",
      beforeImage: "https://images.pexels.com/photos/1431282/pexels-photo-1431282.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      afterImage: "https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      name: "Ana R.",
      age: "28 años",
      profession: "Médica",
      duration: "4 meses",
      result: "-12kg, definición muscular",
      quote: "Como médica, aprecio el enfoque científico de Sergi. Cada recomendación tiene fundamento, cada ajuste tiene propósito. Es coaching de verdad, no improvisación.",
      beforeImage: "https://images.pexels.com/photos/3768916/pexels-photo-3768916.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      afterImage: "https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    },
    {
      name: "Miguel S.",
      age: "42 años",
      profession: "Empresario",
      duration: "8 meses",
      result: "Transformación completa",
      quote: "A los 42 pensé que era tarde para cambiar. Sergi me demostró que nunca es tarde cuando tienes el método correcto y la guía adecuada. Mejor forma física de mi vida.",
      beforeImage: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
      afterImage: "https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop"
    }
  ];

  return (
    <section ref={sectionRef} id="testimonials" className="py-16 sm:py-20 lg:py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 text-white px-4">
              <span className="block">Resultados</span>
              <span className="text-gold">Reales</span>
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto px-4">
              Estas son transformaciones reales de clientes reales. 
              Sin trucos, sin filtros, solo trabajo duro y método correcto.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="space-y-12 lg:space-y-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                
                {/* Before/After Images */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="grid grid-cols-2 gap-4">
                    {/* Before */}
                    <div className="relative">
                      <img
                        src={testimonial.beforeImage}
                        alt={`${testimonial.name} antes`}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded text-xs font-bold">
                        ANTES
                      </div>
                    </div>
                    
                    {/* After */}
                    <div className="relative">
                      <img
                        src={testimonial.afterImage}
                        alt={`${testimonial.name} después`}
                        className="w-full h-64 object-cover rounded-lg shadow-lg"
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="absolute top-3 left-3 bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                        DESPUÉS
                      </div>
                    </div>
                  </div>
                  
                  {/* Results */}
                  <div className="mt-4 text-center">
                    <div className="text-xl font-black text-gold mb-1">{testimonial.result}</div>
                    <div className="text-gray-400 text-sm">en {testimonial.duration}</div>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="relative">
                    <Quote className="w-8 h-8 text-gold/20 mb-4" />
                    
                    <blockquote className="text-lg text-gray-300 mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="border-l-4 border-gold pl-4">
                      <div className="font-bold text-lg text-white mb-1">{testimonial.name}</div>
                      <div className="text-gray-400 mb-1">{testimonial.age} • {testimonial.profession}</div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 text-gold fill-current" />
                        ))}
                        <span className="ml-2 text-gray-400 text-sm">Programa VIP</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 pt-6 border-t border-gold/20">
            <p className="text-center text-gray-400 text-sm max-w-4xl mx-auto px-4">
              * Los resultados pueden variar según el individuo. Estas transformaciones son el resultado 
              de seguir el programa completo, mantener la disciplina nutricional y realizar el entrenamiento 
              según las indicaciones. No se garantizan resultados específicos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;