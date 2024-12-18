import React from "react";
import { FaFacebook, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import pdf from "../../image/terminoycondiciones.pdf"
import pdfPrivacidad from "../../image/privadacidad.pdf"
import cookies from "../../image/cookies.pdf"
import devolucion from "../../image/devolucion.pdf"
import preguntas from "../../image/preguntas.pdf"
import tratamiento from "../../image/tratamiento.pdf"
import { MdLocationOn, MdOutlineMail } from "react-icons/md";

const Footer = () => {



  const handleFacebook = () => {
    window.open("https://www.facebook.com/share/1BeGguHWPA/?mibextid=LQQJ4d", "_blank");
};

const handleInstagram = () => {
    window.open("https://www.instagram.com/cerraduras_wolcoficial/profilecard/?igsh=MjRzbmtpNjg2Z2Zp", "_blank");
};



  return (
    <footer className="bg-white mt-7 text-gray-800 py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <img
              src="https://github.com/rolandoto/image-pms/blob/main/PNG/LG-AZUL.png?raw=true"
              alt="Logo"
              className="h-16"
            />
          </div>
          <div  >
              <span> Contáctanos</span>
              <div className="flex space-x-4 mt-4 ">
              <a onClick={handleFacebook} >
                <i className="fab fa-facebook cursor-pointer " ><FaFacebook  color="black" fontSize={20}  /> </i>
              </a>
              <a onClick={handleInstagram}  >
                <i className="fab fa-instagram cursor-pointer "><FaInstagram  color="black" fontSize={20}  /></i>
              </a>
            </div>

          <div className="flex items-center mt-4" >
            <FaWhatsapp fontSize={20} />
              <a
                href="https://wa.me/573184636416"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline ml-3"
              >
              +57 318 4636416
              </a>
          </div>

          <div className="flex items-center mt-4" >
          <MdOutlineMail color="black"  fontSize={20} />
              <a
                 href="mailto:cerradurasdigitaleswolc@gmail.com"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-600 underline ml-3"
              >
              cerradurasdigitaleswolc@gmail.com
              </a>
          </div>

          <div className="flex items-center mt-4" >
          <MdLocationOn color="black"  fontSize={20} />
              <a
                  href="https://maps.app.goo.gl/KerAV66HMop4TgtEA?g_st=iwb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 underline text-center ml-3"
              >
                Cúcuta - Sala de Experiencia Av 2E # 13A-17 Local 4 - Caobos
              </a>
          </div>
           
          </div>
         
        </div>
        <div >
          <h4 className="text-black font-semibold mb-4">Términos y condiciones</h4>
          <ul className="space-y-2 text-gray-600">
            <li> <a href={pdf} target="_blank" rel="noopener noreferrer">Términos y condiciones</a> </li>
            <li><a href={pdfPrivacidad} target="_blank" rel="noopener noreferrer"> Política de privacidad</a></li>
            <li><a href={cookies} target="_blank" rel="noopener noreferrer">Política de cookies</a> </li>
            <li><a href={tratamiento} target="_blank" rel="noopener noreferrer">Política de datos</a> </li>
            <li><a href={devolucion} target="_blank" rel="noopener noreferrer">Política de devoluciones</a></li>
          </ul>
          <div>
            <h4 className="text-black font-semibold mb-4 mt-4 ">Centro de ayuda</h4>
            <ul className=" text-gray-600">
              <li> <a href={preguntas} target="_blank" rel="noopener noreferrer">Preguntas frecuentes</a> </li>
              <li> <a href={"/idState"} rel="noopener noreferrer" className="mt-2" >Estado del pedido</a> </li>
            </ul>
        </div>
        </div>
      </div>
      <div className="border-t border-gray-200 my-8"></div>
      <div className="container mx-auto px-4 mt-12 flex flex-col md:flex-row justify-between items-center text-sm">
        <p className="text-gray-600">© 2024  Copyright. Todos los derechos reservados.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
