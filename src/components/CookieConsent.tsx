import React, { useState, useEffect } from 'react';
import { Cookie, X, Settings } from 'lucide-react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
    functional: false
  });

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setIsVisible(false);
  };

  const acceptSelected = () => {
    const selectedPreferences = {
      ...preferences,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(selectedPreferences));
    setIsVisible(false);
  };

  const rejectAll = () => {
    const rejected = {
      necessary: true,
      analytics: false,
      marketing: false,
      functional: false,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('cookieConsent', JSON.stringify(rejected));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-end lg:items-center justify-center p-4">
      <div className="bg-gray-900 border-2 border-gold/30 rounded-t-3xl lg:rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="p-4 lg:p-6 border-b border-gold/20">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-gold/20 p-3 rounded-full mr-4">
                <Cookie className="w-6 h-6 text-gold" />
              </div>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-gold">Configuración de Cookies</h3>
                <p className="text-gray-400 text-sm">Respetamos tu privacidad</p>
              </div>
            </div>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-400 hover:text-gold transition-colors p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 lg:p-6">
          <p className="text-gray-300 mb-6 leading-relaxed text-sm lg:text-base">
            Utilizamos cookies para mejorar tu experiencia en nuestra web, analizar el tráfico y personalizar el contenido. 
            Puedes elegir qué tipos de cookies aceptar.
          </p>

          {!showSettings ? (
            /* Simple View */
            <div className="space-y-3">
              <button
                onClick={acceptAll}
                className="w-full bg-gold text-black px-6 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 text-base min-h-[56px]"
              >
                Aceptar Todas
              </button>
              <button
                onClick={rejectAll}
                className="w-full border-2 border-gray-600 text-gray-300 px-6 py-4 rounded-xl font-bold hover:border-gold hover:text-gold transition-all duration-300 text-base min-h-[56px]"
              >
                Rechazar Todas
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="w-full border border-gold/30 text-gold px-6 py-4 rounded-xl font-medium hover:bg-gold/10 transition-all duration-300 flex items-center justify-center text-base min-h-[56px]"
              >
                <Settings className="w-4 h-4 mr-2" />
                Configurar Cookies
              </button>
            </div>
          ) : (
            /* Detailed Settings */
            <div className="space-y-4">
              {/* Necessary Cookies */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-sm lg:text-base">Cookies Necesarias</h4>
                  <div className="bg-green-600 text-white px-2 py-1 rounded text-xs font-bold">
                    SIEMPRE ACTIVAS
                  </div>
                </div>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Esenciales para el funcionamiento básico del sitio web.
                </p>
              </div>

              {/* Analytics Cookies */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-sm lg:text-base">Cookies de Análisis</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({...preferences, analytics: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                  </label>
                </div>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Google Analytics para entender cómo interactúas con el sitio.
                </p>
              </div>

              {/* Marketing Cookies */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-sm lg:text-base">Cookies de Marketing</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) => setPreferences({...preferences, marketing: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                  </label>
                </div>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Para mostrar anuncios relevantes y medir campañas.
                </p>
              </div>

              {/* Functional Cookies */}
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gold/20">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-white text-sm lg:text-base">Cookies Funcionales</h4>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({...preferences, functional: e.target.checked})}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-600 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-gold"></div>
                  </label>
                </div>
                <p className="text-gray-400 text-xs lg:text-sm">
                  Mejoran la funcionalidad y personalizan tu experiencia.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={acceptSelected}
                  className="w-full bg-gold text-black px-6 py-4 rounded-xl font-bold hover:bg-yellow-400 transition-all duration-300 text-base min-h-[56px]"
                >
                  Guardar Preferencias
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="w-full border border-gold/30 text-gold px-6 py-4 rounded-xl font-medium hover:bg-gold/10 transition-all duration-300 text-base min-h-[56px]"
                >
                  Volver
                </button>
              </div>
            </div>
          )}

          {/* Legal Links */}
          <div className="mt-6 pt-4 border-t border-gold/20">
            <p className="text-gray-400 text-xs text-center">
              Para más información, consulta nuestra{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); window.open('/politica-privacidad', '_blank'); }} className="text-gold hover:underline cursor-pointer">
                Política de Privacidad
              </a>{' '}
              y{' '}
              <a href="#" onClick={(e) => { e.preventDefault(); window.open('/politica-cookies', '_blank'); }} className="text-gold hover:underline cursor-pointer">
                Política de Cookies
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;