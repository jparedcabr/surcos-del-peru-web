import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Check } from 'lucide-react';

export const Plans = () => {
  const plans = [
    {
      name: "Excelencia Operativa",
      subtitle: "Nivel de Entrada",
      badge: "Estabilidad Básica",
      price: "Consultar",
      users: "30-50 usuarios",
      features: [
        "Mesa de Ayuda Prioritaria",
        "Soporte Remoto Ilimitado",
        "Seguridad TI Básica",
        "Gestión de Puestos de Trabajo",
        "SLA Definidos (8hrs alta / 12hrs media)",
        "1 Visita Técnica Mensual",
        "Monitoreo de Infraestructura"
      ],
      highlight: false
    },
    {
      name: "Optimización de Negocios",
      subtitle: "Escalabilidad y Agilidad",
      badge: "Más Popular",
      price: "Consultar",
      users: "50-80 usuarios",
      features: [
        "Todo lo incluido en Excelencia Operativa +",
        "Canales Dedicados de Soporte",
        "SLA Mejorados (4hrs alta / 8hrs media)",
        "Gestión de Proveedores TI",
        "Logística de Equipos y Compras",
        "Infraestructura Híbrida (Nube + On-Premise)",
        "2 Visitas Técnicas Mensuales"
      ],
      highlight: true
    },
    {
      name: "Asociación Estratégica",
      subtitle: "Departamento TI Completo Premium",
      badge: "VIP",
      price: "Consultar",
      users: "+80 usuarios",
      features: [
        "Todo lo incluido en Optimización +",
        "Priorización Absoluta (Atención VIP)",
        "Plan de Mejora Continua",
        "Atención On-Demand",
        "Estrategia Trimestral (QBR)",
        "Gestión Integral de Activos",
        "CIO Virtual (vCIO) y Gobierno de TI"
      ],
      highlight: false
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contacto');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="planes" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            Service Model
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elige el modelo de servicio que mejor se adapte a las necesidades y objetivos de tu empresa
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative overflow-hidden transition-all duration-300 ${
                plan.highlight 
                  ? 'border-[#4080B0] border-2 shadow-2xl scale-105' 
                  : 'hover:shadow-xl hover:-translate-y-1 border-gray-200'
              }`}
            >
              {plan.highlight && (
                <div className="absolute top-0 right-0 bg-[#4080B0] text-white px-4 py-1 text-sm font-semibold">
                  Recomendado
                </div>
              )}
              
              <CardHeader className="text-center pb-4 bg-[#EEF5FB]">
                <Badge 
                  variant="secondary" 
                  className="mb-3 mx-auto bg-white text-[#4080B0] border border-[#4080B0]"
                >
                  {plan.badge}
                </Badge>
                <h3 className="text-3xl font-bold text-[#003366] mb-2">
                  {plan.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 min-h-[40px]">
                  {plan.subtitle}
                </p>
                <div className="text-3xl font-bold text-[#4080B0] mb-2">
                  {plan.price}
                </div>
                <p className="text-sm font-medium text-[#003366] mt-2">
                  {plan.users}
                </p>
              </CardHeader>

              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="w-5 h-5 text-[#4080B0] mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter className="pt-6">
                <Button 
                  onClick={scrollToContact}
                  className={`w-full ${
                    plan.highlight
                      ? 'bg-[#003366] hover:bg-[#004488] text-white'
                      : 'border-2 border-[#003366] text-[#003366] hover:bg-[#EEF5FB]'
                  }`}
                  variant={plan.highlight ? "default" : "outline"}
                >
                  Solicitar Cotización
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-[#003366] rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">
            Métodos de Contratación Flexibles
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div>
              <h4 className="font-bold text-[#4080B0] mb-2">Por Demanda</h4>
              <p className="text-sm text-gray-200">Pago por uso de servicios específicos</p>
            </div>
            <div>
              <h4 className="font-bold text-[#4080B0] mb-2">Híbrido</h4>
              <p className="text-sm text-gray-200">Combinación de servicios recurrentes y proyectos</p>
            </div>
            <div>
              <h4 className="font-bold text-[#4080B0] mb-2">Remoto & Presencial</h4>
              <p className="text-sm text-gray-200">Soporte 100% remoto con visitas programadas</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};