import React from 'react';
import { Star, ArrowRight, CheckCircle, Award, Trophy } from 'lucide-react';

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-800 pt-20"
      style={{ 
        minHeight: '100vh',
        width: '100%',
        display: 'block',
        visibility: 'visible',
        opacity: 1,
        backgroundColor: '#000000'
      }}
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{ 
          display: 'block',
          visibility: 'visible',
          opacity: 1
        }}
      >
        <img
          src="https://sergiconstance-9fn0dyoiqm.live-website.com/wp-content/uploads/2025/09/Foto-14-12-19-15-39-12-scaled.jpg"
          alt="Sergi Constance"
          className="w-full h-full object-cover object-center"
          style={{ 
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
          loading="eager"
          decoding="async"
        />
        <div 
          className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.7), rgba(0,0,0,0.4))',
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
        ></div>
        <div 
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20"
          style={{ 
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent, rgba(0,0,0,0.2))',
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
        ></div>
      </div>

      {/* Content */}
      <div 
        className="container mx-auto px-4 relative z-10 py-8"
        style={{ 
          width: '100%',
          maxWidth: '80rem',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '1rem',
          paddingRight: '1rem',
          position: 'relative',
          zIndex: 10,
          display: 'block',
          visibility: 'visible',
          opacity: 1
        }}
      >
        <div 
          className="max-w-7xl mx-auto"
          style={{ 
            maxWidth: '80rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'block',
            visibility: 'visible',
            opacity: 1
          }}
        >
          <div 
            className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 lg:mb-20"
            style={{ 
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}
          >
            
            {/* Left Column - Main Content */}
            <div 
              className="text-center lg:text-left"
              style={{ 
                textAlign: 'center',
                display: 'block',
                visibility: 'visible',
                opacity: 1
              }}
            >
              
              {/* Main Headline */}
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 leading-tight text-white"
                style={{ 
                  fontSize: '2.25rem',
                  fontWeight: 900,
                  marginBottom: '2rem',
                  lineHeight: 1.1,
                  color: '#ffffff',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <span 
                  className="block mb-2"
                  style={{ 
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#ffffff',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  Elite
                </span>
                <span 
                  className="text-vip-gold block mb-2"
                  style={{ 
                    display: 'block',
                    marginBottom: '0.5rem',
                    color: '#D4AF37',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  Transformation
                </span>
                <span 
                  className="text-white/90 block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light"
                  style={{ 
                    display: 'block',
                    fontSize: '1.875rem',
                    fontWeight: 300,
                    color: 'rgba(255,255,255,0.9)',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  Coaching
                </span>
              </h1>

              {/* Professional Subheadline */}
              <p 
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 lg:mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
                style={{ 
                  fontSize: '1.125rem',
                  color: '#d1d5db',
                  marginBottom: '2rem',
                  lineHeight: 1.6,
                  maxWidth: '42rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  fontWeight: 300,
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                Coaching personalizado de élite con{' '}
                <span 
                  className="text-vip-gold font-semibold"
                  style={{ 
                    color: '#D4AF37',
                    fontWeight: 600,
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  Sergi Constance
                </span>
                <br />
                <span 
                  className="text-white/80"
                  style={{ 
                    color: 'rgba(255,255,255,0.8)',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  IFBB Pro & Zeus en Justice League
                </span>
              </p>

              {/* Professional CTAs */}
              <div 
                className="flex flex-col sm:flex-row gap-4 mb-8 lg:mb-12 justify-center lg:justify-start"
                style={{ 
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  marginBottom: '2rem',
                  justifyContent: 'center',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <a 
                  href="#memberships"
                  className="inline-flex items-center justify-center bg-vip-gold text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-400 transition-all duration-300 group shadow-xl min-h-[56px]"
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: '#D4AF37',
                    color: '#000000',
                    padding: '1rem 2rem',
                    borderRadius: '0.75rem',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    minHeight: '56px',
                    textDecoration: 'none',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <span>Solicitar Consulta VIP</span>
                  <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="#method" 
                  className="inline-flex items-center justify-center border-2 border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm min-h-[56px]"
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid rgba(255,255,255,0.3)',
                    color: '#ffffff',
                    padding: '1rem 2rem',
                    borderRadius: '0.75rem',
                    fontWeight: 600,
                    fontSize: '1.125rem',
                    minHeight: '56px',
                    textDecoration: 'none',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  Ver Método
                </a>
              </div>

              {/* Trust Indicators */}
              <div 
                className="flex flex-wrap gap-4 lg:gap-8 text-sm text-gray-400 justify-center lg:justify-start"
                style={{ 
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '1rem',
                  fontSize: '0.875rem',
                  color: '#9ca3af',
                  justifyContent: 'center',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <div 
                  className="flex items-center"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-vip-gold mr-3" />
                  <span>15+ años IFBB Pro</span>
                </div>
                <div 
                  className="flex items-center"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-vip-gold mr-3" />
                  <span>Actor Hollywood</span>
                </div>
                <div 
                  className="flex items-center"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <CheckCircle className="w-5 h-5 text-vip-gold mr-3" />
                  <span>Garantía 30 días</span>
                </div>
              </div>
            </div>

            {/* Right Column - Video */}
            <div 
              className="text-center mt-8 lg:mt-0"
              style={{ 
                textAlign: 'center',
                marginTop: '2rem',
                display: 'block',
                visibility: 'visible',
                opacity: 1
              }}
            >
              <div 
                className="relative w-full max-w-md mx-auto lg:max-w-none"
                style={{ 
                  position: 'relative',
                  width: '100%',
                  maxWidth: '28rem',
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <div 
                  className="relative w-full h-0 pb-[56.25%] rounded-2xl overflow-hidden shadow-2xl group"
                  style={{ 
                    position: 'relative',
                    width: '100%',
                    height: 0,
                    paddingBottom: '56.25%',
                    borderRadius: '1rem',
                    overflow: 'hidden',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <iframe
                    src="https://www.youtube.com/embed/UFDfl-9b2G8?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=UFDfl-9b2G8&iv_load_policy=3&fs=0&disablekb=1&cc_load_policy=0&playsinline=1"
                    title="Sergi Constance - Transformación Elite"
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ 
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      border: 'none',
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                
                {/* Professional Badge */}
                <div 
                  className="flex justify-center mt-6"
                  style={{ 
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: '1.5rem',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <div 
                    className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-3"
                    style={{ 
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      backdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '1rem',
                      padding: '0.75rem 1.5rem',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    <Award className="w-6 h-6 text-vip-gold mr-3" />
                    <span 
                      className="text-white font-semibold text-sm tracking-wide"
                      style={{ 
                        color: '#ffffff',
                        fontWeight: 600,
                        fontSize: '0.875rem',
                        letterSpacing: '0.025em',
                        visibility: 'visible',
                        opacity: 1
                      }}
                    >
                      IFBB PRO • HOLLYWOOD
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stats & Social Proof */}
          <div 
            className="w-full"
            style={{ 
              width: '100%',
              display: 'block',
              visibility: 'visible',
              opacity: 1
            }}
          >
            <div 
              className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
              style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                gap: '1rem',
                marginBottom: '3rem',
                visibility: 'visible',
                opacity: 1
              }}
            >
              <div 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <div 
                  className="text-4xl font-black text-vip-gold mb-2"
                  style={{ 
                    fontSize: '2.25rem',
                    fontWeight: 900,
                    color: '#D4AF37',
                    marginBottom: '0.5rem',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  15+
                </div>
                <div 
                  className="text-gray-300 font-medium text-sm"
                  style={{ 
                    color: '#d1d5db',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  Años Pro
                </div>
              </div>
              <div 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <div 
                  className="text-4xl font-black text-vip-gold mb-2"
                  style={{ 
                    fontSize: '2.25rem',
                    fontWeight: 900,
                    color: '#D4AF37',
                    marginBottom: '0.5rem',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  98%
                </div>
                <div 
                  className="text-gray-300 font-medium text-sm"
                  style={{ 
                    color: '#d1d5db',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  Tasa Éxito
                </div>
              </div>
              <div 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <div 
                  className="text-4xl font-black text-vip-gold mb-2"
                  style={{ 
                    fontSize: '2.25rem',
                    fontWeight: 900,
                    color: '#D4AF37',
                    marginBottom: '0.5rem',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  12
                </div>
                <div 
                  className="text-gray-300 font-medium text-sm"
                  style={{ 
                    color: '#d1d5db',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  Plazas VIP
                </div>
              </div>
              <div 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 text-center"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  textAlign: 'center',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <div 
                  className="text-4xl font-black text-vip-gold mb-2"
                  style={{ 
                    fontSize: '2.25rem',
                    fontWeight: 900,
                    color: '#D4AF37',
                    marginBottom: '0.5rem',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  VIP
                </div>
                <div 
                  className="text-gray-300 font-medium text-sm"
                  style={{ 
                    color: '#d1d5db',
                    fontWeight: 500,
                    fontSize: '0.875rem',
                    display: 'block',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  Coaching
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div 
              className="flex justify-center"
              style={{ 
                display: 'flex',
                justifyContent: 'center',
                visibility: 'visible',
                opacity: 1
              }}
            >
              <div 
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 max-w-md w-full"
                style={{ 
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  maxWidth: '28rem',
                  width: '100%',
                  display: 'block',
                  visibility: 'visible',
                  opacity: 1
                }}
              >
                <div 
                  className="flex items-center justify-center mb-4"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <div 
                    className="flex -space-x-2 mr-4"
                    style={{ 
                      display: 'flex',
                      marginRight: '1rem',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    {[1,2,3,4].map((i) => (
                      <img
                        key={i}
                        src={`https://images.pexels.com/photos/${1000000 + i}/pexels-photo-${1000000 + i}.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop&crop=face`}
                        alt={`Cliente ${i}`}
                        className="w-12 h-12 rounded-full border-2 border-vip-gold object-cover"
                        style={{ 
                          width: '3rem',
                          height: '3rem',
                          borderRadius: '50%',
                          border: '2px solid #D4AF37',
                          objectFit: 'cover',
                          marginLeft: '-0.5rem',
                          display: 'block',
                          visibility: 'visible',
                          opacity: 1
                        }}
                        loading="lazy"
                        decoding="async"
                      />
                    ))}
                  </div>
                  <div 
                    className="text-left"
                    style={{ 
                      textAlign: 'left',
                      display: 'block',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    <div 
                      className="flex items-center mb-1"
                      style={{ 
                        display: 'flex',
                        alignItems: 'center',
                        marginBottom: '0.25rem',
                        visibility: 'visible',
                        opacity: 1
                      }}
                    >
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-vip-gold fill-current" />
                      ))}
                      <span 
                        className="text-vip-gold font-bold ml-2"
                        style={{ 
                          color: '#D4AF37',
                          fontWeight: 700,
                          marginLeft: '0.5rem',
                          visibility: 'visible',
                          opacity: 1
                        }}
                      >
                        5.0
                      </span>
                    </div>
                    <p 
                      className="text-gray-300 text-sm"
                      style={{ 
                        color: '#d1d5db',
                        fontSize: '0.875rem',
                        display: 'block',
                        visibility: 'visible',
                        opacity: 1
                      }}
                    >
                      500+ clientes
                    </p>
                  </div>
                </div>
                
                <div 
                  className="flex items-center justify-center gap-4"
                  style={{ 
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '1rem',
                    visibility: 'visible',
                    opacity: 1
                  }}
                >
                  <Trophy className="w-6 h-6 text-vip-gold" />
                  <span 
                    className="text-white font-semibold text-sm"
                    style={{ 
                      color: '#ffffff',
                      fontWeight: 600,
                      fontSize: '0.875rem',
                      visibility: 'visible',
                      opacity: 1
                    }}
                  >
                    Coaching Elite
                  </span>
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