import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/573184636416/" // Cambia esto por tu enlace de WhatsApp
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 z-50 right-4 bg-green-500 hover:bg-green-600 text-white w-16 h-16 flex items-center justify-center rounded-full shadow-lg"
    >
    <FaWhatsapp color="white" fontSize={40}  />    
    </a>
  );
};

export default WhatsAppButton;
