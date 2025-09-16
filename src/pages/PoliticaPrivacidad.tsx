import React from 'react';
import { ArrowLeft, Shield, Eye, Lock, Mail } from 'lucide-react';

const PoliticaPrivacidad = () => {
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
              <Shield className="w-6 h-6 text-gold mr-3" />
              <h1 className="text-2xl font-bold text-gold">Política de Privacidad</h1>
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
              En Sergi Constance Elite Coaching, respetamos tu privacidad y nos comprometemos a proteger 
              tus datos personales. Esta Política de Privacidad explica cómo recopilamos, utilizamos y 
              protegemos tu información personal.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            
            {/* Responsable del tratamiento */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4 flex items-center">
                <Eye className="w-5 h-5 mr-2" />
                1. Responsable del Tratamiento
              </h2>
              <div className="text-gray-300 space-y-2">
                <p><strong>Responsable:</strong> Sergi Constance</p>
                <p><strong>Email:</strong> coaching@sergiconstance.com</p>
                <p><strong>Sitio web:</strong> www.sergiconstance.com</p>
              </div>
            </section>

            {/* Datos que recopilamos */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">2. Datos que Recopilamos</h2>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">Datos de contacto:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Nombre completo</li>
                    <li>Dirección de correo electrónico</li>
                    <li>Número de teléfono</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Datos de navegación:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Dirección IP</li>
                    <li>Tipo de navegador</li>
                    <li>Páginas visitadas</li>
                    <li>Tiempo de permanencia</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Finalidad del tratamiento */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">3. Finalidad del Tratamiento</h2>
              <div className="text-gray-300">
                <p className="mb-4">Utilizamos tus datos personales para:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Responder a tus consultas y solicitudes de información</li>
                  <li>Proporcionar nuestros servicios de coaching</li>
                  <li>Enviar comunicaciones comerciales (con tu consentimiento)</li>
                  <li>Mejorar nuestros servicios y experiencia de usuario</li>
                  <li>Cumplir con obligaciones legales</li>
                </ul>
              </div>
            </section>

            {/* Base legal */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">4. Base Legal</h2>
              <div className="text-gray-300">
                <p className="mb-4">El tratamiento de tus datos se basa en:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Consentimiento:</strong> Para comunicaciones comerciales</li>
                  <li><strong>Ejecución contractual:</strong> Para la prestación de servicios</li>
                  <li><strong>Interés legítimo:</strong> Para mejorar nuestros servicios</li>
                  <li><strong>Cumplimiento legal:</strong> Para obligaciones fiscales y contables</li>
                </ul>
              </div>
            </section>

            {/* Conservación de datos */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">5. Conservación de Datos</h2>
              <div className="text-gray-300">
                <p className="mb-4">Conservamos tus datos personales durante:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Datos de contacto:</strong> Hasta que solicites su eliminación</li>
                  <li><strong>Datos contractuales:</strong> Durante la relación comercial y 6 años adicionales</li>
                  <li><strong>Datos de navegación:</strong> Máximo 2 años</li>
                </ul>
              </div>
            </section>

            {/* Derechos del usuario */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">6. Tus Derechos</h2>
              <div className="text-gray-300">
                <p className="mb-4">Tienes derecho a:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong>Acceso:</strong> Conocer qué datos tenemos sobre ti</li>
                  <li><strong>Rectificación:</strong> Corregir datos inexactos</li>
                  <li><strong>Supresión:</strong> Solicitar la eliminación de tus datos</li>
                  <li><strong>Limitación:</strong> Restringir el tratamiento</li>
                  <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                  <li><strong>Oposición:</strong> Oponerte al tratamiento</li>
                </ul>
                <p className="mt-4">
                  Para ejercer estos derechos, contacta con nosotros en: 
                  <a href="mailto:coaching@sergiconstance.com" className="text-gold hover:underline ml-1">
                    coaching@sergiconstance.com
                  </a>
                </p>
              </div>
            </section>

            {/* Seguridad */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4 flex items-center">
                <Lock className="w-5 h-5 mr-2" />
                7. Seguridad de los Datos
              </h2>
              <div className="text-gray-300">
                <p>
                  Implementamos medidas técnicas y organizativas apropiadas para proteger tus datos 
                  personales contra el acceso no autorizado, alteración, divulgación o destrucción.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">8. Cookies</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Utilizamos cookies para mejorar tu experiencia de navegación. Puedes consultar 
                  información detallada en nuestra{' '}
                  <a href="/politica-cookies" className="text-gold hover:underline">
                    Política de Cookies
                  </a>.
                </p>
              </div>
            </section>

            {/* Cambios en la política */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">9. Cambios en esta Política</h2>
              <div className="text-gray-300">
                <p>
                  Nos reservamos el derecho a modificar esta Política de Privacidad. Te notificaremos 
                  cualquier cambio significativo a través de nuestro sitio web o por correo electrónico.
                </p>
              </div>
            </section>

            {/* Contacto */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4 flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                10. Contacto
              </h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Si tienes preguntas sobre esta Política de Privacidad o sobre el tratamiento de 
                  tus datos personales, puedes contactarnos:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                  <p><strong>Email:</strong> coaching@sergiconstance.com</p>
                  <p><strong>Asunto:</strong> Consulta sobre Privacidad</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PoliticaPrivacidad;