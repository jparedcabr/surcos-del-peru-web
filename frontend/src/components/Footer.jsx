import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram } from 'lucide-react';
import { Separator } from './ui/separator';

export const Footer = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-[#003366] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src="https://customer-assets.emergentagent.com/job_6e019615-2ed5-4447-8d0e-105a2a948351/artifacts/kzxlkg0u_LOGO%20SURCOS.png" 
              alt="Surcos del Peru" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-300 text-sm leading-relaxed">
              Tu socio estratégico en TI. Transformamos la tecnología en el motor 
              estratégico de tu negocio para impulsar el crecimiento sostenible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#4080B0]">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('nosotros')}
                  className="text-gray-300 hover:text-[#4080B0] transition-colors text-sm"
                >
                  Sobre Nosotros
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('servicios')}
                  className="text-gray-300 hover:text-[#4080B0] transition-colors text-sm"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('planes')}
                  className="text-gray-300 hover:text-[#4080B0] transition-colors text-sm"
                >
                  Planes
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('proyectos')}
                  className="text-gray-300 hover:text-[#4080B0] transition-colors text-sm"
                >
                  Proyectos Especializados
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#4080B0]">Nuestros Servicios</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>Service Desk & Tickets</li>
              <li>Ciber Defensa Proactiva</li>
              <li>Gestión de Infraestructura</li>
              <li>vCIO & Estrategia</li>
              <li>SAP / ERP Consulting</li>
              <li>Automatización con IA</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4 text-[#4080B0]">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-[#4080B0] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+51 966 402 666</span>
              </li>
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-[#4080B0] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">jparedes@surcosperu.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-[#4080B0] mt-1 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Lima, Perú | España</span>
              </li>
            </ul>

            {/* Social Media */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 hover:bg-[#4080B0] rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 hover:bg-[#4080B0] rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-white/10 hover:bg-[#4080B0] rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <Separator className="bg-white/20 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-300 text-sm">
            © {new Date().getFullYear()} Corporación Surcos del Perú. Todos los derechos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-gray-300 hover:text-[#4080B0] transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-300 hover:text-[#4080B0] transition-colors">
              Términos de Servicio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};