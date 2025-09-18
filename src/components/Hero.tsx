import React from 'react';
import { Star, ArrowRight, CheckCircle, Award, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Foto-14-12-19-15-39-12-scaled.jpg"
          alt="Sergi Constance"
          className="w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20">
            
            {/* Left Column - Main Content */}
            <div className="text-center lg:text-left">
              
              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-white">
                <span className="block mb-2">Elite</span>
                <span className="text-gold block mb-2">Transformation</span>
                <span className="text-white/90 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light">Coaching</span>
              </h1>

              {/* Professional Subheadline */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light px-4">
                Coaching personalizado de élite con{' '}
                <span className="text-gold font-semibold">Sergi Constance</span>
                <br />
                <span className="text-white/80">IFBB Pro & Zeus en Justice League</span>
              </p>

              {/* Professional CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12 justify-center lg:justify-start px-4">
                <a 
                  href="#memberships"
                  className="inline-flex items-center justify-center bg-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 group shadow-xl min-h-[56px]"
                >
                  <span>Solicitar Consulta VIP</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#method" 
                  className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm min-h-[56px]"
                >
                  Ver Método
                </a>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-4 lg:gap-8 text-sm text-gray-400 justify-center lg:justify-start px-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>15+ años IFBB Pro</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>Actor Hollywood</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-gold mr-3" />
                  <span>Garantía 30 días</span>
                </div>
              </div>
            </div>

            {/* Right Column - Video */}
            <div className="text-center mt-8 lg:mt-0">
              <div className="relative w-full max-w-md mx-auto lg:max-w-none">
                <div className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl group">
                  <iframe
                    src="https://www.youtube.com/embed/UFDfl-9b2G8?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=UFDfl-9b2G8&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&playsinline=1"
                    title="Sergi Constance - Transformación Elite"
                    className="absolute top-0 left-0 w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Professional Badge */}
                <div className="flex justify-center mt-6">
                  <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3">
                    <Award className="w-6 h-6 text-gold mr-3" />
                    <span className="text-white font-semibold text-sm tracking-wide">IFBB PRO • HOLLYWOOD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Social Proof */}
          <div className="w-full">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-gold mb-2">15+</div>
                <div className="text-gray-300 font-medium text-sm">Años Pro</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-gold mb-2">98%</div>
                <div className="text-gray-300 font-medium text-sm">Tasa Éxito</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-gold mb-2">12</div>
                <div className="text-gray-300 font-medium text-sm">Plazas VIP</div>
              </div>
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center">
                <div className="text-4xl font-black text-gold mb-2">VIP</div>
                <div className="text-gray-300 font-medium text-sm">Coaching</div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="flex justify-center">
              <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-md w-full">
                <div className="flex items-center justify-center mb-4">
                  <div className="flex -space-x-2 mr-4">
                    {[1,2,3,4].map((i) => (
                      <img
                        key={i}
                        src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face`}
                        alt={`Cliente ${i}`}
                        className="w-12 h-12 rounded-full border-2 border-gold object-cover"
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                  <div className="text-left">
                    <div className="flex items-center mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-current" />
                      ))}
                      <span className="text-gold font-bold ml-2">5.0</span>
                    </div>
                    <p className="text-gray-300 text-sm">500+ clientes</p>
                  </div>
                </div>
                
                <div className="flex items-center justify-center gap-4">
                  <Trophy className="w-6 h-6 text-gold" />
                  <span className="text-white font-semibold text-sm">Coaching Elite</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;