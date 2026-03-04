import React, { useState } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img 
              src="https://customer-assets.emergentagent.com/job_6e019615-2ed5-4447-8d0e-105a2a948351/artifacts/kzxlkg0u_LOGO%20SURCOS.png" 
              alt="Surcos del Peru" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('inicio')}
              className="text-gray-700 hover:text-[#003366] transition-colors font-medium"
            >
              Inicio
            </button>
            <button 
              onClick={() => scrollToSection('nosotros')}
              className="text-gray-700 hover:text-[#003366] transition-colors font-medium"
            >
              Nosotros
            </button>
            <button 
              onClick={() => scrollToSection('servicios')}
              className="text-gray-700 hover:text-[#003366] transition-colors font-medium"
            >
              Servicios
            </button>
            <button 
              onClick={() => scrollToSection('planes')}
              className="text-gray-700 hover:text-[#003366] transition-colors font-medium"
            >
              Planes
            </button>
            <button 
              onClick={() => scrollToSection('proyectos')}
              className="text-gray-700 hover:text-[#003366] transition-colors font-medium"
            >
              Proyectos
            </button>
            <Button 
              onClick={() => scrollToSection('contacto')}
              className="bg-[#003366] hover:bg-[#004488] text-white"
            >
              Contáctanos
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('inicio')}
                className="text-left text-gray-700 hover:text-[#4A9FD8] transition-colors font-medium"
              >
                Inicio
              </button>
              <button 
                onClick={() => scrollToSection('nosotros')}
                className="text-left text-gray-700 hover:text-[#4A9FD8] transition-colors font-medium"
              >
                Nosotros
              </button>
              <button 
                onClick={() => scrollToSection('servicios')}
                className="text-left text-gray-700 hover:text-[#4A9FD8] transition-colors font-medium"
              >
                Servicios
              </button>
              <button 
                onClick={() => scrollToSection('planes')}
                className="text-left text-gray-700 hover:text-[#4A9FD8] transition-colors font-medium"
              >
                Planes
              </button>
              <button 
                onClick={() => scrollToSection('proyectos')}
                className="text-left text-gray-700 hover:text-[#4A9FD8] transition-colors font-medium"
              >
                Proyectos
              </button>
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-[#003366] hover:bg-[#004488] text-white w-full"
              >
                Contáctanos
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
