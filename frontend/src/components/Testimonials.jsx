import React from 'react';
import { Card, CardContent } from './ui/card';
import { Star, Quote } from 'lucide-react';

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Mendoza",
      position: "CEO",
      company: "Grupo Industrial del Sur",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
      text: "Surcos del Perú transformó completamente nuestra infraestructura TI. Su equipo profesional nos brindó soluciones estratégicas que mejoraron nuestra eficiencia operativa.",
      rating: 5
    },
    {
      name: "Patricia Rojas",
      position: "Directora de TI",
      company: "Clínica San Gabriel",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
      text: "La continuidad operativa que nos garantizan es real. En el sector salud no podemos permitirnos tiempos de inactividad y ellos lo entienden perfectamente.",
      rating: 5
    },
    {
      name: "Roberto Silva",
      position: "Gerente General",
      company: "Exportadora del Norte",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
      text: "El servicio de consultoría estratégica superó nuestras expectativas. Nos ayudaron a modernizar nuestros sistemas y mejorar la seguridad de nuestros datos.",
      rating: 5
    }
  ];

  const clients = [
    { name: "Vodafone", logo: "V" },
    { name: "Protecnova", logo: "P" }
  ];

  return (
    <section className="py-20 bg-[#EEF5FB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#003366] mb-4">
            Nuestros Clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            La confianza de nuestros clientes es nuestro mayor activo
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="hover:shadow-xl transition-all duration-300 border-none bg-white relative"
            >
              <CardContent className="pt-8">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4">
                  <Quote className="w-8 h-8 text-[#4080B0] opacity-20" />
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#4080B0] text-[#4080B0]" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-gray-700 italic mb-6 leading-relaxed text-center">
                  "{testimonial.text}"
                </p>

                {/* Author Info */}
                <div className="flex flex-col items-center">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mb-3 border-2 border-[#4080B0]"
                  />
                  <h4 className="font-bold text-[#003366]">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.position}
                  </p>
                  <p className="text-sm text-[#4080B0] font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Client Logos */}
        <div className="text-center">
          <h3 className="text-2xl font-bold text-[#003366] mb-8">
            Empresas que Confían en Nosotros
          </h3>
          <div className="flex flex-wrap justify-center gap-12 items-center mb-8">
            <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_agricultura-peru/artifacts/0chnrdb5_image.png"
                alt="Vodafone"
                className="h-16 w-auto object-contain"
              />
            </div>
            <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-6">
              <img 
                src="https://customer-assets.emergentagent.com/job_agricultura-peru/artifacts/abglqu6y_image.png"
                alt="Protecnova"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
          <p className="text-gray-600 mt-8">
            Empresas de diversos sectores confían en nuestras soluciones: <strong>Telecomunicaciones</strong>, 
            <strong> Salud</strong>, <strong> Industria</strong>, <strong> Finanzas</strong>, 
            <strong> Seguridad</strong> y más.
          </p>
        </div>
      </div>
    </section>
  );
};