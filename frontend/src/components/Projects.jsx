import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Database, Bot, Shield as ShieldIcon, Server } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      icon: <Database className="w-12 h-12 text-[#4080B0]" />,
      title: "SAP / ERP Consulting",
      subtitle: "Desarrollo ABAP & Integraciones",
      description: "Consultoría especializada en SAP y desarrollo ABAP para integraciones complejas. Optimizamos tus procesos empresariales críticos con soluciones a medida.",
      price: "Desde S/ 15,000"
    },
    {
      icon: <Bot className="w-12 h-12 text-[#4080B0]" />,
      title: "Automatización & IA",
      subtitle: "Soluciones RPA",
      description: "Implementación de bots RPA y soluciones de inteligencia artificial para automatizar tareas repetitivas y mejorar significativamente la productividad operativa.",
      price: "Desde S/ 8,000"
    },
    {
      icon: <ShieldIcon className="w-12 h-12 text-[#4080B0]" />,
      title: "Ciberseguridad Ofensiva",
      subtitle: "Pentesting (Ethical Hacking)",
      description: "Identificamos vulnerabilidades en tu infraestructura antes que los atacantes. Auditorías de seguridad exhaustivas con reportes detallados y plan de remediación.",
      price: "Desde S/ 12,000"
    },
    {
      icon: <Server className="w-12 h-12 text-[#4080B0]" />,
      title: "DRP - Disaster Recovery",
      subtitle: "Plan de Recuperación ante Desastres",
      description: "Diseño e implementación de planes de continuidad de negocio. Asegura que tu empresa se recupere rápidamente ante cualquier contingencia crítica.",
      price: "Desde S/ 18,000"
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="proyectos" className="py-20 bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Proyectos Especializados
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Soluciones tecnológicas avanzadas para desafíos empresariales complejos
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center p-6">
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {project.title}
                </h3>
                <p className="text-[#4080B0] text-center font-semibold">
                  {project.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-center mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="text-center mb-4">
                  <span className="text-2xl font-bold text-[#4080B0]">
                    {project.price}
                  </span>
                  <span className="text-gray-300 ml-2">por proyecto</span>
                </div>
                <Button 
                  onClick={scrollToContact}
                  className="w-full bg-[#4080B0] hover:bg-[#5090C0] text-white"
                >
                  Solicitar Información
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-3xl font-bold mb-4">
            ¿Tienes un proyecto específico en mente?
          </h3>
          <p className="text-xl text-gray-200 mb-6">
            Nuestro equipo de expertos está listo para diseñar una solución personalizada para tu empresa
          </p>
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-[#003366] hover:bg-gray-100 text-lg px-8"
          >
            Agendar Reunión Discovery
          </Button>
        </div>
      </div>
    </section>
  );
};