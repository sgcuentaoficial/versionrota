import React from 'react';
import { ArrowLeft, RefreshCw, CheckCircle, XCircle, Clock } from 'lucide-react';

const PoliticaReembolso = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gold/20 py-6">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <a href="/" className="flex items-center text-gold hover:text-yellow-400 transition-colors mr-6">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Volver al inicio
            </a>
            <div className="flex items-center">
              <RefreshCw className="w-6 h-6 text-gold mr-3" />
              <h1 className="text-2xl font-bold text-gold">Política de Reembolso</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gold/20">
          
          {/* Introduction */}
          <div className="mb-8">
            <p className="text-gray-300 leading-relaxed">
              <strong className="text-gold">Última actualización:</strong> 15 de enero de 2025
            </p>
            <p className="text-gray-300 leading-relaxed mt-4">
              En Sergi Constance Elite Coaching, estamos comprometidos con tu satisfacción. 
              Esta política explica nuestras condiciones de reembolso y garantías.
            </p>
          </div>

          {/* Guarantee Banner */}
          <div className="bg-gradient-to-r from-green-600/20 to-green-500/20 border-2 border-green-500/50 rounded-2xl p-6 mb-8">
            <div className="flex items-center mb-4">
              <CheckCircle className="w-8 h-8 text-green-400 mr-4" />
              <h2 className="text-2xl font-bold text-green-400">Garantía de Satisfacción 100%</h2>
            </div>
            <p className="text-white text-lg">
              Ofrecemos una garantía completa de satisfacción de 30 días en todos nuestros programas de coaching.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            
            {/* Garantía de 30 días */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4 flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                1. Garantía de 30 Días
              </h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  <strong>Todos nuestros programas de coaching incluyen una garantía de satisfacción de 30 días.</strong>
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/30">
                  <h3 className="font-semibold text-green-400 mb-3">¿Cómo funciona?</h3>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Tienes 30 días naturales desde el inicio del programa</li>
                    <li>Si no estás completamente satisfecho, te devolvemos el 100% de tu dinero</li>
                    <li>Sin preguntas, sin complicaciones</li>
                    <li>Proceso de reembolso en 5-7 días hábiles</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Derecho de desistimiento */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">2. Derecho de Desistimiento (14 días)</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Según la legislación española, tienes derecho a desistir del contrato dentro 
                  de los 14 días naturales siguientes a la contratación del servicio.
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                  <h3 className="font-semibold text-white mb-2">Condiciones:</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Plazo: 14 días naturales desde la contratación</li>
                    <li>No necesitas justificar la decisión</li>
                    <li>Reembolso completo garantizado</li>
                    <li>Comunicación por escrito a coaching@sergiconstance.com</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Condiciones para reembolso */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">3. Condiciones para Solicitar Reembolso</h2>
              <div className="text-gray-300 space-y-6">
                
                {/* Casos que SÍ aplican */}
                <div className="bg-green-600/10 border border-green-500/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="font-bold text-green-400">Casos que SÍ aplican para reembolso:</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    <li>No estás satisfecho con el programa dentro de los primeros 30 días</li>
                    <li>El servicio no cumple con lo prometido</li>
                    <li>Problemas técnicos que impiden acceder al contenido</li>
                    <li>Cancelación dentro del período de desistimiento (14 días)</li>
                    <li>Problemas de salud que impiden continuar (con justificante médico)</li>
                  </ul>
                </div>

                {/* Casos que NO aplican */}
                <div className="bg-red-600/10 border border-red-500/30 rounded-xl p-6">
                  <div className="flex items-center mb-4">
                    <XCircle className="w-6 h-6 text-red-400 mr-3" />
                    <h3 className="font-bold text-red-400">Casos que NO aplican para reembolso:</h3>
                  </div>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Falta de adherencia al programa por parte del cliente</li>
                    <li>No seguir las indicaciones del coach</li>
                    <li>Expectativas no realistas sobre los resultados</li>
                    <li>Cambio de opinión después de los 30 días</li>
                    <li>Uso indebido o compartir el contenido con terceros</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Proceso de reembolso */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">4. Proceso de Reembolso</h2>
              <div className="text-gray-300 space-y-4">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gold/20 text-center">
                    <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gold font-bold">1</span>
                    </div>
                    <h3 className="font-bold text-white mb-2">Solicitud</h3>
                    <p className="text-sm">Envía un email a coaching@sergiconstance.com con tu solicitud</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gold/20 text-center">
                    <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gold font-bold">2</span>
                    </div>
                    <h3 className="font-bold text-white mb-2">Revisión</h3>
                    <p className="text-sm">Revisamos tu caso en un plazo máximo de 48 horas</p>
                  </div>
                  
                  <div className="bg-gray-800/50 rounded-xl p-6 border border-gold/20 text-center">
                    <div className="bg-gold/20 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-gold font-bold">3</span>
                    </div>
                    <h3 className="font-bold text-white mb-2">Reembolso</h3>
                    <p className="text-sm">Procesamos el reembolso en 5-7 días hábiles</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Información requerida */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">5. Información Requerida</h2>
              <div className="text-gray-300">
                <p className="mb-4">Para procesar tu solicitud de reembolso, necesitamos:</p>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gold/20">
                  <ul className="list-disc list-inside space-y-2">
                    <li><strong>Nombre completo</strong> y email utilizado en la contratación</li>
                    <li><strong>Número de factura</strong> o comprobante de pago</li>
                    <li><strong>Fecha de contratación</strong> del servicio</li>
                    <li><strong>Motivo del reembolso</strong> (opcional pero recomendado)</li>
                    <li><strong>Datos bancarios</strong> para el reembolso (si es diferente al método de pago original)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Métodos de reembolso */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">6. Métodos de Reembolso</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Los reembolsos se procesarán utilizando el mismo método de pago original:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                    <h3 className="font-semibold text-white mb-2">Tarjeta de Crédito/Débito:</h3>
                    <p className="text-sm">5-7 días hábiles (puede tardar hasta 2 ciclos de facturación)</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                    <h3 className="font-semibold text-white mb-2">PayPal:</h3>
                    <p className="text-sm">3-5 días hábiles</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                    <h3 className="font-semibold text-white mb-2">Transferencia Bancaria:</h3>
                    <p className="text-sm">3-5 días hábiles</p>
                  </div>
                  <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                    <h3 className="font-semibold text-white mb-2">Otros métodos:</h3>
                    <p className="text-sm">Consultar tiempos específicos</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Reembolsos parciales */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">7. Reembolsos Parciales</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  En algunos casos, podemos ofrecer reembolsos parciales:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Cancelación después de los 30 días pero antes de completar el 50% del programa</li>
                  <li>Circunstancias excepcionales evaluadas caso por caso</li>
                  <li>Problemas de salud que impiden continuar (con justificante médico)</li>
                </ul>
              </div>
            </section>

            {/* Contacto */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">8. Contacto para Reembolsos</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Para solicitar un reembolso o resolver dudas sobre esta política:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gold/20">
                  <div className="space-y-2">
                    <p><strong>Email:</strong> coaching@sergiconstance.com</p>
                    <p><strong>Asunto:</strong> Solicitud de Reembolso - [Tu Nombre]</p>
                    <p><strong>Tiempo de respuesta:</strong> Máximo 48 horas</p>
                  </div>
                  
                  <div className="mt-4 p-4 bg-green-600/20 rounded-lg border border-green-500/30">
                    <p className="text-green-400 font-semibold text-sm">
                      💡 Consejo: Antes de solicitar un reembolso, contacta con nuestro equipo. 
                      Muchas veces podemos resolver cualquier problema y ayudarte a alcanzar tus objetivos.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PoliticaReembolso;