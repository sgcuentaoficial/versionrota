import React from 'react';
import { ArrowLeft, FileText, Scale, AlertTriangle } from 'lucide-react';

const TerminosCondiciones = () => {
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
              <FileText className="w-6 h-6 text-gold mr-3" />
              <h1 className="text-2xl font-bold text-gold">Términos y Condiciones</h1>
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
              Estos Términos y Condiciones regulan el uso de los servicios de coaching ofrecidos 
              por Sergi Constance Elite Coaching. Al contratar nuestros servicios, aceptas estos términos.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            
            {/* Información general */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">1. Información General</h2>
              <div className="text-gray-300 space-y-2">
                <p><strong>Prestador de servicios:</strong> Sergi Constance</p>
                <p><strong>Actividad:</strong> Servicios de coaching deportivo y nutricional</p>
                <p><strong>Email:</strong> coaching@sergiconstance.com</p>
                <p><strong>Sitio web:</strong> www.sergiconstance.com</p>
              </div>
            </section>

            {/* Servicios */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">2. Descripción de los Servicios</h2>
              <div className="text-gray-300 space-y-4">
                <p>
                  Ofrecemos servicios de coaching personalizado que incluyen:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Planes de entrenamiento personalizados</li>
                  <li>Asesoramiento nutricional</li>
                  <li>Seguimiento y apoyo continuo</li>
                  <li>Coaching mental y motivacional</li>
                  <li>Acceso a contenido exclusivo</li>
                </ul>
              </div>
            </section>

            {/* Contratación */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">3. Proceso de Contratación</h2>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">3.1 Consulta inicial:</h3>
                  <p>
                    Todos los clientes deben completar una consulta inicial gratuita de 15 minutos 
                    para evaluar sus objetivos y determinar el programa más adecuado.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">3.2 Confirmación del servicio:</h3>
                  <p>
                    Una vez acordado el programa, se enviará un contrato específico con los detalles 
                    del servicio, duración y precio.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">3.3 Pago:</h3>
                  <p>
                    El pago se realizará según las condiciones acordadas en el contrato específico, 
                    generalmente de forma mensual por adelantado.
                  </p>
                </div>
              </div>
            </section>

            {/* Precios y pagos */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">4. Precios y Forma de Pago</h2>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">4.1 Precios:</h3>
                  <p>
                    Los precios están claramente indicados en nuestra web y incluyen todos los 
                    impuestos aplicables. Los precios pueden modificarse con previo aviso.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">4.2 Formas de pago:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Transferencia bancaria</li>
                    <li>Tarjeta de crédito/débito</li>
                    <li>PayPal</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">4.3 Facturación:</h3>
                  <p>
                    Se emitirá factura por cada pago realizado, que será enviada por correo electrónico.
                  </p>
                </div>
              </div>
            </section>

            {/* Obligaciones del cliente */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">5. Obligaciones del Cliente</h2>
              <div className="text-gray-300">
                <p className="mb-4">El cliente se compromete a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Proporcionar información veraz y completa sobre su estado de salud</li>
                  <li>Seguir las indicaciones y recomendaciones del coach</li>
                  <li>Comunicar cualquier problema de salud o lesión</li>
                  <li>Realizar los pagos en las fechas acordadas</li>
                  <li>Mantener la confidencialidad de los materiales proporcionados</li>
                </ul>
              </div>
            </section>

            {/* Responsabilidades */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4 flex items-center">
                <AlertTriangle className="w-5 h-5 mr-2" />
                6. Limitación de Responsabilidad
              </h2>
              <div className="text-gray-300 space-y-4">
                <div className="bg-yellow-600/20 border border-yellow-600/50 rounded-xl p-4">
                  <p className="font-semibold text-yellow-400 mb-2">IMPORTANTE:</p>
                  <p>
                    Los servicios de coaching no sustituyen el consejo médico profesional. 
                    Recomendamos consultar con un médico antes de comenzar cualquier programa 
                    de entrenamiento o cambio nutricional.
                  </p>
                </div>
                <p>
                  Sergi Constance Elite Coaching no se hace responsable de:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Lesiones derivadas del incumplimiento de las indicaciones</li>
                  <li>Problemas de salud no comunicados previamente</li>
                  <li>Resultados no obtenidos por falta de adherencia al programa</li>
                  <li>Daños indirectos o consecuenciales</li>
                </ul>
              </div>
            </section>

            {/* Cancelación y reembolsos */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">7. Cancelación y Reembolsos</h2>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">7.1 Derecho de desistimiento:</h3>
                  <p>
                    Tienes derecho a cancelar el servicio dentro de los primeros 14 días naturales 
                    desde la contratación, sin necesidad de justificación.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">7.2 Garantía de satisfacción:</h3>
                  <p>
                    Ofrecemos una garantía de satisfacción de 30 días. Si no estás satisfecho 
                    con el servicio, puedes solicitar el reembolso completo.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">7.3 Cancelación por el cliente:</h3>
                  <p>
                    Puedes cancelar el servicio en cualquier momento con 30 días de antelación. 
                    No se reembolsarán los pagos ya realizados por servicios prestados.
                  </p>
                </div>
              </div>
            </section>

            {/* Propiedad intelectual */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">8. Propiedad Intelectual</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Todos los materiales proporcionados (planes de entrenamiento, guías nutricionales, 
                  videos, etc.) son propiedad exclusiva de Sergi Constance y están protegidos por 
                  derechos de autor.
                </p>
                <p>
                  Queda prohibida la reproducción, distribución o uso comercial de estos materiales 
                  sin autorización expresa por escrito.
                </p>
              </div>
            </section>

            {/* Modificaciones */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">9. Modificaciones</h2>
              <div className="text-gray-300">
                <p>
                  Nos reservamos el derecho a modificar estos términos y condiciones en cualquier 
                  momento. Los cambios serán comunicados con al menos 30 días de antelación y 
                  entrarán en vigor para nuevos contratos.
                </p>
              </div>
            </section>

            {/* Ley aplicable */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4 flex items-center">
                <Scale className="w-5 h-5 mr-2" />
                10. Ley Aplicable y Jurisdicción
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Estos términos y condiciones se rigen por la legislación española. Para la 
                  resolución de cualquier controversia, las partes se someten a los juzgados 
                  y tribunales de España.
                </p>
              </div>
            </section>

            {/* Contacto */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">11. Contacto</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Para cualquier consulta sobre estos términos y condiciones:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                  <p><strong>Email:</strong> coaching@sergiconstance.com</p>
                  <p><strong>Asunto:</strong> Consulta sobre Términos y Condiciones</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TerminosCondiciones;