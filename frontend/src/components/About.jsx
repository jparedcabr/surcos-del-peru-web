import React from 'react';
import { Target, Eye, Globe } from 'lucide-react';
import { Card, CardContent } from './ui/card';

export const About = () => {
  return (
    <section id="nosotros" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            ¿Quiénes Somos?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Somos Corporación Surcos del Perú, tu socio estratégico en TI para impulsar el crecimiento sostenible de tu negocio
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80"
              alt="Equipo Surcos del Peru"
              className="rounded-2xl shadow-xl"
            />
          </div>
          
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-[#003366]">
              Transformamos la tecnología en el motor estratégico de tu negocio
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              En Corporación Surcos del Perú, ofrecemos soporte técnico remoto y consultoría 
              tecnológica especializada para convertir la tecnología en una ventaja competitiva 
              que impulsa el crecimiento sostenible de tu empresa.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Nuestra misión es garantizar que tu infraestructura tecnológica no solo funcione, 
              sino que sea una herramienta estratégica que asegure continuidad, seguridad y 
              eficiencia en cada operación.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Con un enfoque en la innovación y la adaptabilidad, diseñamos soluciones personalizadas 
              que se alinean perfectamente con tus objetivos de negocio.
            </p>
          </div>
        </div>

        {/* Mission, Vision, Global Presence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-t-4 border-t-[#4080B0] hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <Target className="w-12 h-12 text-[#4080B0]" />
              </div>
              <h4 className="text-xl font-bold text-[#003366] mb-3 text-center">
                Misión
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Convertir la tecnología en una ventaja competitiva estratégica que impulse el 
                crecimiento sostenible, la eficiencia operativa y la seguridad de nuestros clientes.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#4080B0] hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <Eye className="w-12 h-12 text-[#4080B0]" />
              </div>
              <h4 className="text-xl font-bold text-[#003366] mb-3 text-center">
                Visión
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Ser el socio tecnológico estratégico líder para empresas que buscan transformación 
                digital, innovación continua y excelencia operativa en Latinoamérica.
              </p>
            </CardContent>
          </Card>

          <Card className="border-t-4 border-t-[#4080B0] hover:shadow-lg transition-shadow">
            <CardContent className="pt-8">
              <div className="flex justify-center mb-4">
                <Globe className="w-12 h-12 text-[#4080B0]" />
              </div>
              <h4 className="text-xl font-bold text-[#003366] mb-3 text-center">
                Presencia Global
              </h4>
              <p className="text-gray-600 text-center leading-relaxed">
                Operamos en <strong>Perú</strong> y <strong>España</strong>, brindando soluciones 
                tecnológicas de clase mundial con alcance internacional.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mt-16 bg-[#EEF5FB] rounded-2xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-[#003366] mb-8 text-center">
            Nuestros Valores
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4080B0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h4 className="font-bold text-[#003366] mb-2">Excelencia</h4>
              <p className="text-sm text-gray-600">Compromiso con la calidad en cada servicio</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4080B0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h4 className="font-bold text-[#003366] mb-2">Innovación</h4>
              <p className="text-sm text-gray-600">Soluciones tecnológicas de vanguardia</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4080B0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h4 className="font-bold text-[#003366] mb-2">Confianza</h4>
              <p className="text-sm text-gray-600">Relaciones transparentes y duraderas</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#4080B0] rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h4 className="font-bold text-[#003366] mb-2">Compromiso</h4>
              <p className="text-sm text-gray-600">Dedicación al éxito de nuestros clientes</p>
            </div>
          </div>
        </div>

        {/* Leadership Section */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-[#003366] mb-8 text-center">
            Liderazgo Estratégico
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="border-2 border-[#4080B0] hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">SV</span>
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-2">
                  Shyan Verastegui
                </h4>
                <p className="text-[#4080B0] font-semibold mb-3">
                  Project Manager
                </p>
                <p className="text-sm text-gray-600">
                  Lidera la planificación estratégica y ejecución de proyectos tecnológicos de alto impacto
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-[#4080B0] hover:shadow-xl transition-shadow">
              <CardContent className="pt-8 text-center">
                <div className="w-24 h-24 bg-[#003366] rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-white">JP</span>
                </div>
                <h4 className="text-xl font-bold text-[#003366] mb-2">
                  Jeison Paredes
                </h4>
                <p className="text-[#4080B0] font-semibold mb-3">
                  Project Lead
                </p>
                <p className="text-sm text-gray-600">
                  Dirige la implementación técnica y garantiza la excelencia operativa en cada entrega
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};