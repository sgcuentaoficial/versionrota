import React from 'react';
import { Mail, Phone, MapPin, Trophy, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-vip-gold/20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-vip-mesh"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main Footer */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-8">
                <div className="bg-vip-gold p-3 rounded-lg">
                  <img 
                    src="/corona_belegend-removebg-preview copy.png" 
                    alt="Corona VIP" 
                    className="w-6 h-6"
                  />
                </div>
                <div>
                  <span className="text-2xl font-vip-title text-vip-gold">SERGI CONSTANCE</span>
                  <div className="text-gray-400 text-sm font-vip-accent">VIP COACHING</div>
                </div>
              </div>
              
              <p className="text-gray-300 mb-8 leading-relaxed max-w-md font-vip-subtitle">
                Coaching VIP exclusivo para transformaciones reales. 
                IFBB Pro, Actor de Hollywood, y coach personalizado de élite.
              </p>

              <div className="space-y-4">
                <div className="flex items-center text-gray-300 hover:text-vip-gold transition-colors">
                  <Mail className="w-5 h-5 mr-4 text-vip-gold" />
                  <span className="font-vip-subtitle">coaching@sergiconstance.com</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Phone className="w-5 h-5 mr-4 text-vip-gold" />
                  <span className="font-vip-subtitle">Solo clientes activos</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <MapPin className="w-5 h-5 mr-4 text-vip-gold" />
                  <span className="font-vip-subtitle">España • Coaching Online Mundial</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-vip-title text-vip-gold mb-6 flex items-center">
                <Star className="w-5 h-5 mr-2" />
                ENLACES
              </h4>
              <ul className="space-y-3">
                <li><a href="#home" className="text-gray-300 hover:text-vip-gold transition-colors font-vip-subtitle">Inicio</a></li>
                <li><a href="#authority" className="text-gray-300 hover:text-vip-gold transition-colors font-vip-subtitle">Sobre Sergi</a></li>
                <li><a href="#method" className="text-gray-300 hover:text-vip-gold transition-colors font-vip-subtitle">Método</a></li>
                <li><a href="#testimonials" className="text-gray-300 hover:text-vip-gold transition-colors font-vip-subtitle">Testimonios</a></li>
                <li><a href="#apply" className="text-gray-300 hover:text-vip-gold transition-colors font-vip-subtitle">Únete</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="text-lg font-vip-title text-vip-gold mb-6 flex items-center">
                <Trophy className="w-5 h-5 mr-2" />
                LEGAL
              </h4>
              <ul className="space-y-3">
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.open('/politica-privacidad', '_blank'); }} className="text-gray-300 hover:text-vip-gold transition-colors font-vip-subtitle cursor-pointer">Política de Privacidad</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.open('/politica-cookies', '_blank'); }} className="text-gray-300 hover:text-vip-gold transition-colors font-vip-subtitle cursor-pointer">Política de Cookies</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.open('/terminos-condiciones', '_blank'); }} className="text-gray-300 hover:text-vip-gold transition-colors font-vip-subtitle cursor-pointer">Términos y Condiciones</a></li>
                <li><a href="#" onClick={(e) => { e.preventDefault(); window.open('/politica-reembolso', '_blank'); }} className="text-gray-300 hover:text-vip-gold transition-colors font-vip-subtitle cursor-pointer">Política de Reembolso</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-vip-gold/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 font-vip-subtitle">
              © 2025 Sergi Constance VIP Coaching. Todos los derechos reservados.
            </p>
            
            <div className="flex items-center mt-4 md:mt-0 vip-glass px-4 py-2 rounded-lg">
              <img 
                src="/corona_belegend-removebg-preview copy.png" 
                alt="Corona VIP" 
                className="w-5 h-5 mr-2"
              />
              <span className="text-vip-gold font-vip-accent text-sm">
                IFBB PRO • ZEUS • VIP COACH
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;