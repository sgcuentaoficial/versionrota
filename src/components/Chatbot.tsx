import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Star, Crown, Zap } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Mensaje de bienvenida
      setTimeout(() => {
        addBotMessage(
          "¡Hola! 👋 Soy el asistente virtual de Sergi Constance. Estoy aquí para resolver todas tus dudas sobre el coaching VIP Elite. ¿En qué puedo ayudarte?",
          [
            "💪 ¿Qué incluye el coaching?",
            "💰 Precios y planes",
            "🏆 Sobre Sergi Constance",
            "📞 Agendar consulta VIP",
            "❓ Preguntas frecuentes"
          ]
        );
      }, 500);
    }
  }, [isOpen]);

  const addBotMessage = (text: string, options?: string[]) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: true,
      timestamp: new Date(),
      options
    };
    setMessages(prev => [...prev, message]);
  };

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      isBot: false,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const simulateTyping = () => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const getBotResponse = (userInput: string): { text: string; options?: string[] } => {
    const input = userInput.toLowerCase();

    // Respuestas sobre el coaching
    if (input.includes('coaching') || input.includes('incluye') || input.includes('qué es')) {
      return {
        text: "🎯 El Coaching VIP Elite de Sergi Constance incluye:\n\n✅ Acceso directo a Sergi 24/7\n✅ Llamadas 1:1 semanales personalizadas\n✅ Programa 100% personalizado\n✅ Plan nutricional exacto\n✅ Seguimiento diario\n✅ Coaching mental\n✅ Visita presencial en España\n✅ Solo 12 plazas anuales\n\n¿Te gustaría conocer más detalles sobre algún aspecto específico?",
        options: ["💰 Ver precios", "📞 Agendar consulta", "🏋️ Método de entrenamiento", "🍎 Nutrición personalizada"]
      };
    }

    // Respuestas sobre precios
    if (input.includes('precio') || input.includes('costo') || input.includes('cuánto') || input.includes('planes')) {
      return {
        text: "💰 **PLANES DISPONIBLES:**\n\n📦 **BÁSICA** - €89/mes\n• Plan personalizado básico\n• Soporte por email\n\n🔥 **TRIMESTRAL** - €84.67/mes (5% OFF)\n• Todo lo anterior + seguimiento semanal\n\n⭐ **SEMESTRAL** - €79.83/mes (10% OFF)\n• + Llamadas 1:1 mensuales\n\n👑 **PREMIUM ANUAL** - €81.58/mes (1 mes GRATIS)\n• + Programa 100% personalizado\n\n🏆 **VIP ELITE** - Consulta personalizada\n• Acceso directo a Sergi\n• Solo 12 plazas anuales\n\n¿Cuál te interesa más?",
        options: ["👑 VIP Elite", "📦 Ver plan básico", "🔥 Plan trimestral", "📞 Consulta gratuita"]
      };
    }

    // Respuestas sobre Sergi Constance
    if (input.includes('sergi') || input.includes('quien') || input.includes('experiencia') || input.includes('credenciales')) {
      return {
        text: "🏆 **SERGI CONSTANCE - AUTORIDAD MUNDIAL:**\n\n👑 **IFBB Pro** - 15+ años compitiendo profesionalmente\n🎬 **Actor de Hollywood** - Zeus en Justice League\n📚 **500+ transformaciones** exitosas\n🌍 **Reconocimiento internacional** - Portadas en las mejores revistas\n🎯 **98% tasa de éxito** con método científico\n\nNo es solo otro coach, es un profesional con credenciales reales y resultados comprobados.",
        options: ["🎬 Ver películas", "🏆 Logros deportivos", "📊 Método científico", "💪 Solicitar coaching"]
      };
    }

    // Respuestas sobre el método
    if (input.includes('método') || input.includes('entrenamiento') || input.includes('cómo funciona')) {
      return {
        text: "🔬 **EL MÉTODO SERGI CONSTANCE:**\n\n**4 PILARES CIENTÍFICOS:**\n\n1️⃣ **Análisis Personalizado 360°**\n• Evaluación corporal completa\n• Historial médico y objetivos\n\n2️⃣ **Entrenamiento Científico**\n• Rutinas basadas en ciencia deportiva\n• Progresión semanal adaptada\n\n3️⃣ **Nutrición Estratégica**\n• Plan calculado al gramo\n• Recetas deliciosas incluidas\n\n4️⃣ **Coaching Mental**\n• Mentalidad de campeón\n• Hábitos sostenibles\n\n✅ Seguimiento continuo 24/7\n✅ Ajustes en tiempo real",
        options: ["🏋️ Ver rutinas", "🍎 Plan nutricional", "🧠 Coaching mental", "📞 Empezar ahora"]
      };
    }

    // Respuestas sobre nutrición
    if (input.includes('nutrición') || input.includes('dieta') || input.includes('comida') || input.includes('alimentación')) {
      return {
        text: "🍎 **NUTRICIÓN ESTRATÉGICA:**\n\n✅ **Plan personalizado** calculado exactamente para ti\n✅ **Macros precisos** - proteínas, carbos, grasas\n✅ **Recetas deliciosas** incluidas\n✅ **Flexibilidad total** - sin restricciones extremas\n✅ **Ajustes semanales** según progreso\n✅ **Lista de compras** incluida\n\nNo hay alimentos 'prohibidos', solo estrategias inteligentes para alcanzar tus objetivos sin sacrificar tu vida social.",
        options: ["📋 Ver ejemplo de plan", "🛒 Lista de compras", "💪 Empezar coaching", "❓ Más preguntas"]
      };
    }

    // Respuestas sobre consulta/contacto
    if (input.includes('consulta') || input.includes('contacto') || input.includes('agendar') || input.includes('hablar')) {
      return {
        text: "📞 **AGENDAR CONSULTA VIP GRATUITA:**\n\n🎯 **Consulta de 15 minutos GRATIS** para:\n• Evaluar tus objetivos\n• Conocer tu situación actual\n• Determinar el mejor plan para ti\n• Resolver todas tus dudas\n\n⚡ **Solo 12 plazas VIP disponibles este trimestre**\n\n¿Listo para dar el primer paso hacia tu transformación?",
        options: ["📱 WhatsApp directo", "📋 Formulario completo", "💰 Ver precios primero", "🏆 Más sobre Sergi"]
      };
    }

    // Respuestas sobre garantía
    if (input.includes('garantía') || input.includes('reembolso') || input.includes('seguro')) {
      return {
        text: "🛡️ **GARANTÍA TOTAL DE SATISFACCIÓN:**\n\n✅ **30 días de garantía completa**\n✅ **100% de reembolso** si no estás satisfecho\n✅ **Sin preguntas** - proceso simple\n✅ **98% de tasa de éxito** - rara vez se solicita\n\nEn 15 años de coaching, menos del 2% ha solicitado reembolso porque el método funciona cuando se aplica correctamente.",
        options: ["💪 Empezar ahora", "📊 Ver testimonios", "❓ Más preguntas", "📞 Consulta gratuita"]
      };
    }

    // Respuestas sobre testimonios/resultados
    if (input.includes('testimonios') || input.includes('resultados') || input.includes('funciona') || input.includes('casos')) {
      return {
        text: "🌟 **RESULTADOS REALES:**\n\n📊 **500+ transformaciones exitosas**\n📈 **98% tasa de éxito**\n⭐ **5.0 estrellas** promedio\n\n**EJEMPLOS REALES:**\n• Carlos M. (34): -18kg grasa, +8kg músculo en 6 meses\n• Ana R. (28): -12kg, definición perfecta en 4 meses\n• Miguel S. (42): Mejor forma física de su vida en 8 meses\n\n🏆 **Sin trucos, sin filtros** - solo trabajo duro y método correcto.",
        options: ["📸 Ver más casos", "💪 Empezar mi transformación", "📞 Consulta gratuita", "💰 Ver precios"]
      };
    }

    // Respuestas sobre tiempo/duración
    if (input.includes('tiempo') || input.includes('cuánto') || input.includes('duración') || input.includes('rápido')) {
      return {
        text: "⏰ **TIEMPOS Y DURACIÓN:**\n\n🎯 **Primeros resultados:** 2-3 semanas\n📈 **Cambios notables:** 4-6 semanas\n🏆 **Transformación completa:** 3-6 meses\n\n**TIEMPO DE ENTRENAMIENTO:**\n• 45-90 minutos por sesión\n• 4-6 días por semana\n• Adaptado a tu horario\n\n✅ **Calidad > Cantidad** - entrenamientos eficientes\n✅ **Flexible** - se adapta a tu vida",
        options: ["🏋️ Ver rutinas", "📅 Planificar horarios", "💪 Empezar ahora", "❓ Más dudas"]
      };
    }

    // Respuestas sobre edad/limitaciones
    if (input.includes('edad') || input.includes('años') || input.includes('mayor') || input.includes('joven') || input.includes('limitaciones')) {
      return {
        text: "👥 **PARA TODAS LAS EDADES:**\n\n✅ **16-70+ años** - todos los niveles\n✅ **Principiantes** bienvenidos\n✅ **Atletas avanzados** también\n✅ **Con lesiones** - adaptamos todo\n✅ **Limitaciones físicas** - soluciones personalizadas\n\n🎯 **Lo importante es tu motivación y compromiso**\n\nCada programa se personaliza 100% según tu edad, condición y necesidades específicas.",
        options: ["🏥 Tengo lesiones", "💪 Soy principiante", "🏆 Soy avanzado", "📞 Consulta personalizada"]
      };
    }

    // Respuestas sobre ubicación/online
    if (input.includes('online') || input.includes('presencial') || input.includes('dónde') || input.includes('ubicación')) {
      return {
        text: "🌍 **COACHING GLOBAL:**\n\n💻 **100% Online** - desde cualquier parte del mundo\n🏠 **Entrenamientos:** Casa o gimnasio\n📱 **Soporte 24/7** vía app exclusiva\n📞 **Llamadas regulares** según tu plan\n\n🇪🇸 **VIP ELITE incluye:**\n• Visita presencial en España\n• Sesión de entrenamiento personal\n• Análisis corporal completo\n\n✅ **Adaptable** a tu ubicación y equipamiento",
        options: ["🏠 Entrenar en casa", "🏋️ Necesito gimnasio", "👑 VIP presencial", "📞 Más información"]
      };
    }

    // WhatsApp directo
    if (input.includes('whatsapp') || input.includes('directo') || input.includes('contactar')) {
      return {
        text: "📱 **CONTACTO DIRECTO:**\n\n¡Perfecto! Te voy a conectar directamente con Sergi por WhatsApp.\n\n✅ **Respuesta garantizada** en menos de 2 horas\n✅ **Consulta gratuita** de 15 minutos\n✅ **Sin compromiso**\n\nHaz click en el botón para abrir WhatsApp con un mensaje pre-escrito:",
        options: ["📱 Abrir WhatsApp", "📋 Formulario completo", "💰 Ver precios primero"]
      };
    }

    // Respuesta por defecto
    return {
      text: "🤔 Interesante pregunta. Te puedo ayudar con información sobre:\n\n• El coaching VIP Elite de Sergi\n• Precios y planes disponibles\n• Método de entrenamiento\n• Nutrición personalizada\n• Testimonios y resultados\n• Agendar consulta gratuita\n\n¿Sobre qué te gustaría saber más?",
      options: ["💪 El coaching", "💰 Precios", "🏆 Sobre Sergi", "📞 Consulta gratuita", "🌟 Testimonios"]
    };
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    addUserMessage(inputValue);
    simulateTyping();

    setTimeout(() => {
      const response = getBotResponse(inputValue);
      addBotMessage(response.text, response.options);
    }, 1000 + Math.random() * 1000);

    setInputValue('');
  };

  const handleOptionClick = (option: string) => {
    addUserMessage(option);
    simulateTyping();

    setTimeout(() => {
      let response;
      
      if (option.includes('WhatsApp') || option.includes('📱')) {
        window.open('https://wa.me/34614428420?text=Hola%20Sergi,%20vengo%20del%20chatbot%20de%20tu%20web%20y%20me%20gustaría%20agendar%20una%20consulta%20VIP%20gratuita%20para%20conocer%20más%20sobre%20tu%20coaching.', '_blank');
        response = {
          text: "¡Perfecto! 🚀 Te he redirigido a WhatsApp. Sergi te responderá personalmente en menos de 2 horas.\n\n¿Hay algo más en lo que pueda ayudarte mientras tanto?",
          options: ["💰 Ver precios", "🏆 Más sobre Sergi", "📊 Ver testimonios", "❓ Otras preguntas"]
        };
      } else if (option.includes('Formulario') || option.includes('📋')) {
        document.getElementById('apply')?.scrollIntoView({ behavior: 'smooth' });
        response = {
          text: "📋 Te he llevado al formulario completo donde puedes enviar toda tu información detallada.\n\n¡Es la mejor forma de que Sergi conozca tu situación específica!",
          options: ["💪 Más sobre coaching", "💰 Ver precios", "🌟 Testimonios", "❓ Más preguntas"]
        };
      } else if (option.includes('precios') || option.includes('💰')) {
        document.getElementById('memberships')?.scrollIntoView({ behavior: 'smooth' });
        response = {
          text: "💰 Te he llevado a la sección de precios donde puedes ver todos los planes disponibles.\n\n¿Tienes alguna pregunta específica sobre los planes?",
          options: ["👑 VIP Elite", "📦 Plan básico", "📞 Consulta gratuita", "❓ Más información"]
        };
      } else {
        response = getBotResponse(option);
      }
      
      addBotMessage(response.text, response.options);
    }, 1000 + Math.random() * 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`w-16 h-16 rounded-full shadow-2xl transition-all duration-300 flex items-center justify-center group touch-manipulation ${
            isOpen 
              ? 'bg-gray-800 hover:bg-gray-700' 
              : 'bg-gradient-to-r from-gold to-yellow-400 hover:from-yellow-400 hover:to-gold'
          }`}
        >
          {isOpen ? (
            <X className="w-6 h-6 text-white" />
          ) : (
            <>
              <MessageCircle className="w-6 h-6 text-black group-hover:scale-110 transition-transform" />
              {/* Notification dot */}
              <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-2 left-2 sm:right-4 sm:left-auto sm:w-96 h-[70vh] sm:h-[600px] max-w-none sm:max-w-md bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col overflow-hidden">
          
          {/* Header */}
          <div className="bg-gradient-to-r from-gold to-yellow-400 p-4 flex items-center">
            <div className="bg-black/20 p-2 rounded-full mr-3">
              <img 
                src="/corona_belegend-removebg-preview copy.png" 
                alt="Corona VIP" 
                className="w-6 h-6"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-black text-base">Asistente VIP</h3>
              <p className="text-black/80 text-sm">Sergi Constance Coaching</p>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-black text-xs font-medium">Online</span>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3 sm:space-y-4 bg-gray-50 overscroll-contain">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-[85%] sm:max-w-[80%] ${message.isBot ? 'order-2' : 'order-1'}`}>
                  
                  {/* Avatar */}
                  <div className={`flex items-end space-x-2 ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.isBot ? 'bg-gold' : 'bg-gray-600'
                    }`}>
                      {message.isBot ? (
                        <Bot className="w-4 h-4 text-black" />
                      ) : (
                        <User className="w-4 h-4 text-white" />
                      )}
                    </div>
                    
                    <div className={`rounded-2xl px-4 py-3 ${
                      message.isBot 
                        ? 'bg-white border border-gray-200 text-gray-800'
                        : 'bg-gold text-black'
                    }`}>
                      <p className="text-sm leading-relaxed whitespace-pre-line">{message.text}</p>
                      
                      {/* Options */}
                      {message.options && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option, index) => (
                            <button
                              key={index}
                              onClick={() => handleOptionClick(option)}
                              className="block w-full text-left px-3 py-2 bg-gray-100 hover:bg-gold/20 rounded-lg text-xs sm:text-sm font-medium transition-colors border border-gray-200 hover:border-gold/30 min-h-[44px] flex items-center"
                            >
                              {option}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  {/* Timestamp */}
                  <p className={`text-xs text-gray-500 mt-1 ${message.isBot ? 'ml-8 sm:ml-10' : 'mr-8 sm:mr-10 text-right'}`}>
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-end space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gold flex items-center justify-center">
                    <Bot className="w-4 h-4 text-black" />
                  </div>
                  <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200 bg-white">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Escribe tu pregunta..."
                className="flex-1 px-3 sm:px-4 py-3 border border-gray-300 rounded-xl focus:border-gold focus:ring-2 focus:ring-gold/20 outline-none text-sm min-h-[48px]"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="w-12 h-12 bg-gold hover:bg-yellow-400 disabled:bg-gray-300 rounded-xl flex items-center justify-center transition-colors touch-manipulation"
              >
                <Send className="w-5 h-5 text-black" />
              </button>
            </div>
            
            {/* Quick Actions */}
            <div className="flex flex-wrap gap-2 mt-3">
              <button
                onClick={() => handleOptionClick("📞 Agendar consulta VIP")}
                className="px-3 py-2 bg-gold/10 hover:bg-gold/20 text-gold text-xs font-medium rounded-full border border-gold/30 transition-colors min-h-[36px] flex items-center"
              >
                📞 Consulta VIP
              </button>
              <button
                onClick={() => handleOptionClick("💰 Precios y planes")}
                className="px-3 py-2 bg-gold/10 hover:bg-gold/20 text-gold text-xs font-medium rounded-full border border-gold/30 transition-colors min-h-[36px] flex items-center"
              >
                💰 Precios
              </button>
              <button
                onClick={() => handleOptionClick("📱 WhatsApp directo")}
                className="px-3 py-2 bg-gold/10 hover:bg-gold/20 text-gold text-xs font-medium rounded-full border border-gold/30 transition-colors min-h-[36px] flex items-center"
              >
                📱 WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;