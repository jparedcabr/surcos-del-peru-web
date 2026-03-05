import React from 'react';
import { Button } from './ui/button';
import { Mail, Phone, MapPin, MessageCircle, Globe, Send } from 'lucide-react';

export const Contact = () => {
  const handleWhatsApp = () => {
    window.open('https://wa.me/51966402666?text=Hola, estoy interesado en los servicios de Surcos del Peru', '_blank');
  };

  const handleEmail = () => {
    window.location.href = 'mailto:ventas@surcosperu.com?subject=Consulta sobre servicios de TI';
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            Hablemos de Tu Proyecto
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Agenda una reunión Discovery gratuita y descubre cómo podemos transformar tu infraestructura TI
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-[#003366] mb-4">
                Corporación Surcos del Perú
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Estamos listos para ser tu socio estratégico en TI. Contáctanos y comencemos 
                a construir la transformación tecnológica que tu empresa necesita.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#EEF5FB] rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-[#4080B0]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#003366] mb-1">Teléfono / WhatsApp</h4>
                  <p className="text-gray-600">+51 966 402 666</p>
                  <p className="text-sm text-gray-500">Lun - Vie: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#EEF5FB] rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-[#4080B0]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#003366] mb-1">Email</h4>
                  <p className="text-gray-600">ventas@surcosperu.com</p>
                  <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#EEF5FB] rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-[#4080B0]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#003366] mb-1">Ubicación</h4>
                  <p className="text-gray-600">Lima, Perú</p>
                  <p className="text-sm text-gray-500">Presencia en Perú y España</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#EEF5FB] rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-[#4080B0]" />
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-[#003366] mb-1">Sitio Web</h4>
                  <p className="text-gray-600">www.surcosperu.com</p>
                  <p className="text-sm text-gray-500">Visítanos online</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="space-y-4 pt-8">
              <Button 
                onClick={handleWhatsApp}
                size="lg"
                className="w-full bg-[#25D366] hover:bg-[#20BA5A] text-white text-lg"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contactar por WhatsApp
              </Button>
              <Button 
                onClick={handleEmail}
                size="lg"
                variant="outline"
                className="w-full border-2 border-[#003366] text-[#003366] hover:bg-[#EEF5FB] text-lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Enviar Email
              </Button>
            </div>
          </div>

          {/* Right Side - Formspree Form */}
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 relative z-10">
              <h3 className="text-2xl font-bold text-[#003366] mb-6">Envíanos un mensaje</h3>
              
              <form action="https://formspree.io/f/xlgprddb" method="POST" className="space-y-6">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">Nombre completo</label>
                  <input 
                    type="text" 
                    name="nombre" 
                    id="nombre" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4080B0] focus:border-transparent outline-none transition-all" 
                    placeholder="Tu nombre" 
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Correo electrónico</label>
                  <input 
                    type="email" 
                    name="email" 
                    id="email" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4080B0] focus:border-transparent outline-none transition-all" 
                    placeholder="tu@empresa.com" 
                  />
                </div>
                
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">Mensaje</label>
                  <textarea 
                    name="mensaje" 
                    id="mensaje" 
                    rows="4" 
                    required 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#4080B0] focus:border-transparent outline-none transition-all" 
                    placeholder="¿En qué podemos ayudarte?"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full bg-[#003366] hover:bg-[#002244] text-white text-lg mt-4"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Enviar Consulta
                </Button>
              </form>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -z-10 top-10 right-10 w-72 h-72 bg-[#4080B0] rounded-full opacity-5 blur-3xl"></div>
            <div className="absolute -z-10 bottom-10 left-10 w-64 h-64 bg-[#003366] rounded-full opacity-5 blur-3xl"></div>
          </div>

        </div>
      </div>
    </section>
  );
};