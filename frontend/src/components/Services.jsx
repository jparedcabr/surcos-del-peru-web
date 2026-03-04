import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Headset, Shield, Server, Lightbulb } from 'lucide-react';

export const Services = () => {
  const services = [
    {
      icon: <Headset className="w-12 h-12 text-[#4080B0]" />,
      title: "Service Desk & Tickets",
      description: "Sistema centralizado de gestión de incidentes con SLAs definidos. Soporte técnico prioritario para resolución rápida de problemas operativos."
    },
    {
      icon: <Shield className="w-12 h-12 text-[#4080B0]" />,
      title: "Ciber Defensa Proactiva",
      description: "Protocolos de seguridad perimetral y respuesta inmediata ante amenazas. Protegemos tu información crítica con monitoreo 24/7."
    },
    {
      icon: <Server className="w-12 h-12 text-[#4080B0]" />,
      title: "Ciclo de Vida de Infraestructura",
      description: "Gestión proactiva de tu infraestructura tecnológica. Health Check periódico para prevenir obsolescencia y garantizar continuidad."
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-[#4080B0]" />,
      title: "vCIO & Estrategia",
      description: "CIO Virtual para consultoría de alto nivel. Alineamos tu tecnología con los objetivos estratégicos de tu negocio."
    }
  ];

  return (
    <section id="servicios" className="py-20 bg-[#EEF5FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            Pilares de Gestión
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios fundamentales que garantizan la continuidad operativa y el crecimiento de tu empresa
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white border-none"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="text-xl font-bold text-[#003366] mb-3 text-center">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Services Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-[#003366] mb-8 text-center">
            Servicios Adicionales
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#4080B0] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-[#003366] mb-1">SAP / ERP Consulting</h4>
                <p className="text-sm text-gray-600">Consultoría especializada y desarrollo ABAP</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#4080B0] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-[#003366] mb-1">Automatización con IA</h4>
                <p className="text-sm text-gray-600">Soluciones RPA y bots inteligentes</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#4080B0] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-[#003366] mb-1">Ciberseguridad Ofensiva</h4>
                <p className="text-sm text-gray-600">Pentesting y ethical hacking</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#4080B0] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-[#003366] mb-1">Migraciones Cloud</h4>
                <p className="text-sm text-gray-600">Transición segura a la nube</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#4080B0] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-[#003366] mb-1">Infraestructura Híbrida</h4>
                <p className="text-sm text-gray-600">Gestión Nube + On-Premise</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-[#4080B0] rounded-full mt-2"></div>
              <div>
                <h4 className="font-semibold text-[#003366] mb-1">DRP</h4>
                <p className="text-sm text-gray-600">Plan de Recuperación ante Desastres</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};