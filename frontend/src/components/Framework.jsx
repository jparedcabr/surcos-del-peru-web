import React from 'react';
import { Card, CardContent } from './ui/card';
import { Search, Map, Rocket, TrendingUp } from 'lucide-react';

export const Framework = () => {
  const steps = [
    {
      number: "01",
      icon: <Search className="w-10 h-10 text-[#4080B0]" />,
      title: "Discovery & Assessment",
      description: "Ejecutamos un levantamiento técnico exhaustivo (Gap Analysis) para identificar vulnerabilidades críticas y cuellos de botella en tu infraestructura tecnológica."
    },
    {
      number: "02",
      icon: <Map className="w-10 h-10 text-[#4080B0]" />,
      title: "Arquitectura & Roadmap",
      description: "Diseñamos la estrategia de solución y el cronograma, priorizando acciones de alto impacto bajo estándares técnicos corporativos."
    },
    {
      number: "03",
      icon: <Rocket className="w-10 h-10 text-[#4080B0]" />,
      title: "Despliegue & Estabilización",
      description: "Implementamos las soluciones y políticas de seguridad asegurando una transición fluida (Seamless Transition) y homologación de equipos."
    },
    {
      number: "04",
      icon: <TrendingUp className="w-10 h-10 text-[#4080B0]" />,
      title: "Optimización Continua",
      description: "Analizamos métricas de rendimiento para aplicar mejoras proactivas y asegurar que la tecnología escale con tu negocio."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            FrameWork: Gestión Integral
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nuestro proceso probado de 4 pasos que garantiza rigor técnico, seguridad y resultados medibles
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-[#4080B0] opacity-20 z-0"></div>

          {steps.map((step, index) => (
            <Card 
              key={index}
              className="relative hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-white border-none z-10"
            >
              <CardContent className="pt-8 pb-6">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#003366] rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>

                {/* Icon */}
                <div className="flex justify-center mb-6 mt-4">
                  <div className="w-20 h-20 bg-[#EEF5FB] rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-[#003366] mb-3 text-center">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed text-sm">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 bg-[#EEF5FB] rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-[#003366] mb-4">
            Proceso Estructurado, Resultados Garantizados
          </h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Nuestro framework garantiza que cada implementación siga estándares corporativos de clase mundial, 
            minimizando riesgos y maximizando el retorno de inversión en tecnología.
          </p>
        </div>
      </div>
    </section>
  );
};