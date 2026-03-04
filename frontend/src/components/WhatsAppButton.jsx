import React, { useState, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

export const WhatsAppButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleWhatsApp = () => {
    window.open('https://wa.me/51966402666?text=Hola, estoy interesado en los servicios de Surcos del Peru', '_blank');
  };

  return (
    <>
      {isVisible && (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          {/* Tooltip */}
          {isHovered && (
            <div className="bg-white text-[#003366] px-4 py-2 rounded-lg shadow-lg text-sm font-medium animate-fade-in">
              ¿Necesitas ayuda? Contáctanos
            </div>
          )}
          
          {/* WhatsApp Button */}
          <button
            onClick={handleWhatsApp}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full w-16 h-16 flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 animate-bounce-slow"
            aria-label="Contactar por WhatsApp"
          >
            <MessageCircle className="w-8 h-8" />
          </button>
        </div>
      )}
    </>
  );
};