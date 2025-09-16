import React from 'react';
import { ArrowLeft, Cookie, Settings, BarChart, Target } from 'lucide-react';

const PoliticaCookies = () => {
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
              <Cookie className="w-6 h-6 text-gold mr-3" />
              <h1 className="text-2xl font-bold text-gold">Política de Cookies</h1>
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
              Esta Política de Cookies explica qué son las cookies, cómo las utilizamos en nuestro 
              sitio web y cómo puedes controlar su uso.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-8">
            
            {/* Qué son las cookies */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">1. ¿Qué son las Cookies?</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando 
                  visitas un sitio web. Nos permiten recordar tus preferencias y mejorar tu experiencia 
                  de navegación.
                </p>
              </div>
            </section>

            {/* Tipos de cookies */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">2. Tipos de Cookies que Utilizamos</h2>
              <div className="space-y-6">
                
                {/* Cookies necesarias */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-green-500/30">
                  <div className="flex items-center mb-4">
                    <Settings className="w-6 h-6 text-green-400 mr-3" />
                    <h3 className="text-lg font-bold text-green-400">Cookies Necesarias</h3>
                    <span className="ml-auto bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                      SIEMPRE ACTIVAS
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Esenciales para el funcionamiento básico del sitio web. Sin estas cookies, 
                    el sitio no puede funcionar correctamente.
                  </p>
                  <div className="text-sm text-gray-400">
                    <p><strong>Ejemplos:</strong> Cookies de sesión, preferencias de idioma, carrito de compra</p>
                    <p><strong>Duración:</strong> Sesión o hasta 1 año</p>
                  </div>
                </div>

                {/* Cookies de análisis */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-blue-500/30">
                  <div className="flex items-center mb-4">
                    <BarChart className="w-6 h-6 text-blue-400 mr-3" />
                    <h3 className="text-lg font-bold text-blue-400">Cookies de Análisis</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web, 
                    proporcionando información sobre las páginas visitadas, el tiempo de permanencia, etc.
                  </p>
                  <div className="text-sm text-gray-400 space-y-2">
                    <p><strong>Proveedor:</strong> Google Analytics</p>
                    <p><strong>Finalidad:</strong> Análisis de tráfico web y comportamiento de usuarios</p>
                    <p><strong>Duración:</strong> Hasta 2 años</p>
                    <p><strong>Cookies utilizadas:</strong> _ga, _ga_*, _gid, _gat</p>
                  </div>
                </div>

                {/* Cookies de marketing */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-purple-500/30">
                  <div className="flex items-center mb-4">
                    <Target className="w-6 h-6 text-purple-400 mr-3" />
                    <h3 className="text-lg font-bold text-purple-400">Cookies de Marketing</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Utilizadas para mostrar anuncios relevantes y medir la efectividad de nuestras 
                    campañas publicitarias.
                  </p>
                  <div className="text-sm text-gray-400 space-y-2">
                    <p><strong>Proveedores:</strong> Google Ads, Facebook Pixel, Instagram</p>
                    <p><strong>Finalidad:</strong> Publicidad personalizada y remarketing</p>
                    <p><strong>Duración:</strong> Hasta 2 años</p>
                  </div>
                </div>

                {/* Cookies funcionales */}
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gold/30">
                  <div className="flex items-center mb-4">
                    <Settings className="w-6 h-6 text-gold mr-3" />
                    <h3 className="text-lg font-bold text-gold">Cookies Funcionales</h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Mejoran la funcionalidad del sitio web y permiten personalizar tu experiencia, 
                    como recordar tus preferencias de configuración.
                  </p>
                  <div className="text-sm text-gray-400">
                    <p><strong>Ejemplos:</strong> Preferencias de cookies, configuración de usuario</p>
                    <p><strong>Duración:</strong> Hasta 1 año</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Gestión de cookies */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">3. Cómo Gestionar las Cookies</h2>
              <div className="text-gray-300 space-y-4">
                <div>
                  <h3 className="font-semibold text-white mb-2">Panel de Configuración:</h3>
                  <p className="mb-4">
                    Puedes gestionar tus preferencias de cookies en cualquier momento a través de 
                    nuestro panel de configuración que aparece al visitar el sitio por primera vez.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-white mb-2">Configuración del Navegador:</h3>
                  <p className="mb-2">También puedes controlar las cookies desde tu navegador:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                    <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                    <li><strong>Edge:</strong> Configuración → Cookies y permisos del sitio</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Cookies de terceros */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">4. Cookies de Terceros</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Algunos de nuestros socios pueden establecer cookies en tu dispositivo cuando 
                  visitas nuestro sitio web:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                  <ul className="space-y-2">
                    <li><strong>Google Analytics:</strong> Análisis de tráfico web</li>
                    <li><strong>Google Ads:</strong> Publicidad y remarketing</li>
                    <li><strong>Facebook/Instagram:</strong> Integración de redes sociales</li>
                    <li><strong>YouTube:</strong> Reproducción de videos integrados</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Consecuencias de desactivar cookies */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">5. Consecuencias de Desactivar Cookies</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Si decides desactivar las cookies, algunas funcionalidades del sitio web pueden 
                  verse afectadas:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Es posible que tengas que volver a introducir tu información en cada visita</li>
                  <li>Algunas páginas pueden no funcionar correctamente</li>
                  <li>No podremos personalizar tu experiencia</li>
                  <li>Los formularios pueden no recordar la información introducida</li>
                </ul>
              </div>
            </section>

            {/* Actualizaciones */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">6. Actualizaciones de esta Política</h2>
              <div className="text-gray-300">
                <p>
                  Podemos actualizar esta Política de Cookies ocasionalmente. Te recomendamos 
                  revisarla periódicamente para estar informado sobre cómo utilizamos las cookies.
                </p>
              </div>
            </section>

            {/* Contacto */}
            <section>
              <h2 className="text-xl font-bold text-gold mb-4">7. Contacto</h2>
              <div className="text-gray-300">
                <p className="mb-4">
                  Si tienes preguntas sobre nuestra Política de Cookies, puedes contactarnos:
                </p>
                <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                  <p><strong>Email:</strong> coaching@sergiconstance.com</p>
                  <p><strong>Asunto:</strong> Consulta sobre Cookies</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PoliticaCookies;