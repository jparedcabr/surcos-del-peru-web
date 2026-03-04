import React from 'react';
import { Card, CardHeader, CardContent } from './ui/card';
import { Brain, Activity, Shield, Users } from 'lucide-react';

export const Benefits = () => {
  const benefits = [
    {
      icon: <Brain className="w-12 h-12 text-[#4080B0]" />,
      title: "Asesoramiento Psicológico",
      subtitle: "Alianza con Psicointegra",
      description: "Ofrecemos un espacio de acompañamiento individualizado para el manejo del estrés, toma de decisiones y resolución de conflictos.",
      details: [
        "Atención personalizada con profesionales especializados",
        "15 sesiones para contratos de 3 meses",
        "Hasta 70 sesiones para contratos anuales",
        "Enfoque preventivo y terapéutico"
      ]
    },
    {
      icon: <Activity className="w-12 h-12 text-[#4080B0]" />,
      title: "Pausas Activas",
      subtitle: "Bienestar Físico",
      description: "Realizamos una sesión semanal de ejercicios físicos y técnicas de relajación para reducir el estrés laboral y los efectos del sedentarismo.",
      details: [
        "Sesiones semanales programadas",
        "Ejercicios físicos guiados",
        "Técnicas de relajación y mindfulness",
        "Prevención de lesiones laborales"
      ]
    },
    {
      icon: <Shield className="w-12 h-12 text-[#4080B0]" />,
      title: "Boletines Preventivos",
      subtitle: "Cultura de Seguridad",
      description: "Emitimos boletines de TI cada 15 días con alertas de seguridad, actualizaciones y buenas prácticas para prevenir incidentes tecnológicos.",
      details: [
        "Boletines quincenales especializados",
        "Alertas de seguridad actualizadas",
        "Buenas prácticas tecnológicas",
        "Prevención proactiva de incidentes"
      ]
    }
  ];

  return (
    <section className="py-20 bg-[#003366] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <Users className="w-16 h-16 text-[#4080B0]" />
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">
            Benefits Surcos
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Bienestar & Prevención: Cuidamos de tu equipo porque sabemos que el talento humano es el motor de toda organización exitosa
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <Card 
              key={index}
              className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <CardHeader>
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[#4080B0] text-center font-semibold mb-4">
                  {benefit.subtitle}
                </p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-200 text-center mb-6 leading-relaxed">
                  {benefit.description}
                </p>
                <ul className="space-y-2">
                  {benefit.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-300">
                      <span className="text-[#4080B0] mr-2">✓</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partner Logo Section */}
        <div className="mt-16 text-center bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6">
            En Alianza con Psicointegra
          </h3>
          <div className="flex justify-center mb-6">
            <img 
              src="https://customer-assets.emergentagent.com/job_agricultura-peru/artifacts/wqfyzpeu_WhatsApp%20Image%202026-02-27%20at%206.08.08%20PM.jpeg"
              alt="Psicointegra"
              className="h-24 w-auto bg-white p-4 rounded-lg"
            />
          </div>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Trabajamos con <strong>Psicointegra</strong>, líder en servicios de acompañamiento psicológico empresarial, 
            para garantizar el bienestar integral de los equipos de nuestros clientes.
          </p>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-gray-300 italic">
            "Creemos que la tecnología funciona mejor cuando las personas están bien. Por eso invertimos en el bienestar 
            de quienes hacen posible la transformación digital."
          </p>
        </div>

        {/* CTA Section - Contact Now */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-3xl font-bold mb-4">
            ¿Listo para Transformar tu Infraestructura TI?
          </h3>
          <p className="text-xl text-gray-200 mb-6 max-w-2xl mx-auto">
            Agenda una reunión Discovery gratuita y descubre cómo podemos impulsar el crecimiento de tu empresa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => window.open('https://wa.me/51966402666?text=Hola, estoy interesado en los servicios de Surcos del Peru', '_blank')}
              className="bg-[#25D366] hover:bg-[#20BA5A] text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center justify-center gap-2"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Contáctanos por WhatsApp
            </button>
            <button
              onClick={() => document.getElementById('contacto').scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-[#003366] hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Ver Más Opciones de Contacto
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};