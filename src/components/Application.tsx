import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Clock, Users, Star, Crown } from 'lucide-react';

const Application = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    age: '',
    experience: '',
    goals: '',
    commitment: '',
    budget: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Crear mensaje para WhatsApp con todos los datos
    const message = `Hola Sergi, soy ${formData.name} y estoy interesado en el coaching VIP Elite.

📋 MIS DATOS:
• Nombre: ${formData.name}
• Edad: ${formData.age} años
• Email: ${formData.email}
• Teléfono: ${formData.phone}

🏋️ EXPERIENCIA:
• Nivel: ${formData.experience}

🎯 OBJETIVOS:
${formData.goals}

⏰ COMPROMISO:
• Disponibilidad: ${formData.commitment}

💰 PRESUPUESTO:
• Rango mensual: ${formData.budget}

Me gustaría agendar una consulta para conocer más detalles del programa VIP.`;

    // Codificar el mensaje para URL
    const encodedMessage = encodeURIComponent(message);
    
    // Redirigir a WhatsApp
    window.open(`https://wa.me/34614428420?text=${encodedMessage}`, '_blank');
  };

  const benefits = [
    {
      icon: Crown,
      title: "Acceso Directo a Sergi",
      description: "Llamadas personales semanales y soporte prioritario 24/7"
    },
    {
      icon: CheckCircle,
      title: "Método Probado",
      description: "Sistema desarrollado durante 15+ años como IFBB Pro"
    },
    {
      icon: Star,
      title: "Garantía Total",
      description: "30 días de garantía de satisfacción o te devolvemos el dinero"
    }
  ];

  const urgencyFactors = [
    { icon: Users, text: "Solo 12 plazas disponibles", color: "text-red-500" },
    { icon: Clock, text: "Próximo grupo inicia en 7 días", color: "text-orange-500" },
    { icon: Star, text: "Lista de espera de 200+ personas", color: "text-yellow-500" }
  ];

  return (
    <section id="apply" className="py-16 sm:py-24 lg:py-32 bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900"></div>
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-96 h-96 bg-vip-gold rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-72 h-72 bg-vip-gold rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <div className="inline-flex items-center bg-gold/10 border border-gold/30 rounded-full px-6 py-3 mb-8">
              <img 
                src="/corona_belegend-removebg-preview copy.png" 
                alt="Corona VIP" 
                className="w-5 h-5 mr-3"
              />
              <span className="text-gold font-bold text-sm tracking-wider">SOLICITUD VIP</span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 sm:mb-8 text-white leading-tight">
              <span className="block">Solicita tu</span>
              <span className="text-gold">Plaza VIP</span>
            </h2>
            
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-6 sm:mb-8 px-4">
              Solo acepto 12 clientes VIP por trimestre para garantizar resultados excepcionales. 
              Completa esta solicitud para ser considerado.
            </p>

            {/* Urgency Indicators */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-6 mb-8 sm:mb-12">
              {urgencyFactors.map((factor, index) => (
                <div key={index} className="flex items-center bg-black/50 backdrop-blur-sm border border-gold/30 rounded-full px-4 py-2">
                  <factor.icon className={`w-4 h-4 mr-2 ${factor.color}`} />
                  <span className="text-white text-sm font-medium">{factor.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
            
            {/* Application Form */}
            <div>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">Formulario de Solicitud</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-gray-700 mb-2">Edad *</label>
                      <input
                        type="number"
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Teléfono *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Experiencia en Entrenamiento *</label>
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      required
                    >
                      <option value="">Selecciona tu nivel</option>
                      <option value="principiante">Principiante (0-1 año)</option>
                      <option value="intermedio">Intermedio (1-3 años)</option>
                      <option value="avanzado">Avanzado (3+ años)</option>
                      <option value="competidor">Competidor/Atleta</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Objetivos Principales *</label>
                    <textarea
                      name="goals"
                      value={formData.goals}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all resize-none"
                      placeholder="Describe tus objetivos específicos..."
                      required
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Nivel de Compromiso *</label>
                    <select
                      name="commitment"
                      value={formData.commitment}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      required
                    >
                      <option value="">¿Cuánto tiempo puedes dedicar?</option>
                      <option value="3-4-dias">3-4 días por semana</option>
                      <option value="5-6-dias">5-6 días por semana</option>
                      <option value="todos-dias">Todos los días</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Presupuesto Mensual *</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none transition-all"
                      required
                    >
                      <option value="">Selecciona tu rango</option>
                      <option value="297-500">€297 - €500</option>
                      <option value="500-1000">€500 - €1000</option>
                      <option value="1000-2000">€1000 - €2000</option>
                      <option value="2000+">€2000+</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gold text-white py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gold-dark transition-all duration-300 flex items-center justify-center group min-h-[56px]"
                  >
                    ENVIAR SOLICITUD VIP
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <p className="text-xs text-gray-500 text-center">
                    * Al enviar esta solicitud, aceptas ser contactado para una consulta gratuita de 15 minutos.
                  </p>
                </form>
              </div>
            </div>

            {/* Benefits & Social Proof */}
            <div>
              
              {/* What You Get */}
              <div className="bg-black/50 backdrop-blur-sm border border-gold/30 rounded-3xl p-6 sm:p-8 mb-8">
                <h3 className="text-xl sm:text-2xl font-black text-white mb-6">Lo que obtienes como VIP:</h3>
                
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-gold/20 w-12 h-12 rounded-2xl flex items-center justify-center mr-4 flex-shrink-0">
                        <benefit.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h4 className="font-bold text-white mb-2">{benefit.title}</h4>
                        <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Process */}
              <div className="bg-white rounded-3xl p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 mb-6">Proceso de Selección:</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="bg-gold w-8 h-8 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">1</div>
                    <p className="text-sm sm:text-base text-gray-700">Envías tu solicitud</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gold w-8 h-8 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">2</div>
                    <p className="text-sm sm:text-base text-gray-700">Revisión en 24-48 horas</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gold w-8 h-8 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">3</div>
                    <p className="text-sm sm:text-base text-gray-700">Consulta gratuita de 15 min</p>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-gold w-8 h-8 rounded-full flex items-center justify-center mr-4 text-white font-bold text-sm">4</div>
                    <p className="text-sm sm:text-base text-gray-700">Inicio inmediato si eres seleccionado</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Application;