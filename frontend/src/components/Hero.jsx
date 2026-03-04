import React from 'react';
import { Button } from './ui/button';
import { Shield, Zap, TrendingUp } from 'lucide-react';

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="inicio" className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center bg-[#EEF5FB] px-4 py-2 rounded-full mb-6">
              <Shield className="w-4 h-4 text-[#4080B0] mr-2" />
              <span className="text-sm font-medium text-[#003366]">
                Consultoría TI Premium
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-[#003366] mb-6 leading-tight">
              Transformamos la tecnología
              <span className="block text-[#4080B0]">en el motor estratégico de tu negocio</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Soporte técnico remoto y consultoría tecnológica para convertir la tecnología 
              en una ventaja competitiva que impulsa el crecimiento sostenible de tu empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={scrollToContact}
                size="lg"
                className="bg-[#003366] hover:bg-[#004488] text-white text-lg px-8 py-6"
              >
                Solicitar Consultoría Gratuita
              </Button>
              <Button 
                onClick={() => document.getElementById('planes').scrollIntoView({ behavior: 'smooth' })}
                variant="outline"
                size="lg"
                className="border-2 border-[#003366] text-[#003366] hover:bg-[#EEF5FB] text-lg px-8 py-6"
              >
                Ver Planes
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 bg-[#EEF5FB] rounded-lg">
                <div className="flex justify-center mb-2">
                  <Zap className="w-8 h-8 text-[#4080B0]" />
                </div>
                <div className="text-3xl font-bold text-[#003366]">Rápido</div>
                <div className="text-sm text-gray-600">Respuesta</div>
              </div>
              <div className="text-center p-4 bg-[#EEF5FB] rounded-lg">
                <div className="flex justify-center mb-2">
                  <Shield className="w-8 h-8 text-[#4080B0]" />
                </div>
                <div className="text-3xl font-bold text-[#003366]">Seguro</div>
                <div className="text-sm text-gray-600">Protección</div>
              </div>
              <div className="text-center p-4 bg-[#EEF5FB] rounded-lg">
                <div className="flex justify-center mb-2">
                  <TrendingUp className="w-8 h-8 text-[#4080B0]" />
                </div>
                <div className="text-3xl font-bold text-[#003366]">Crecimiento</div>
                <div className="text-sm text-gray-600">Escalable</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80"
                alt="Equipo de trabajo colaborativo"
                className="rounded-2xl shadow-2xl"
              />
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
