import React from "react"
import Header from "../../Component/Header/Header"
import Footer from "../../Component/Footer/Footer"
import { FaWhatsapp } from "react-icons/fa";
import { MdLocationOn, MdOutlineMail } from "react-icons/md";
import ShoppingCart from "../../Component/ShoppingCart/ShoppingCart";

const Contact =() =>{

    return <>
    <Header />
    <ShoppingCart />
    <div className="mt-40 py-10">
      <div className="max-w-7xl mx-auto text-center px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Contáctanos</h2>
        <div className="flex flex-wrap justify-center space-x-0 sm:space-x-10 gap-y-8">
          <div className="flex flex-col items-center w-full sm:w-auto">
            <div className="text-green-500 text-4xl mb-2">
              <FaWhatsapp fontSize={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Escríbenos</h3>
            <a
              href="https://wa.me/573184636416"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 underline"
            >
              WhatsApp: +57 318 4636416
            </a>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <div className="text-blue-500 text-4xl mb-2">
              <MdOutlineMail fontSize={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Email</h3>
            <a
              href="mailto:cerradurasdigitaleswolc@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 underline"
            >
              cerradurasdigitaleswolc@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center w-full sm:w-auto">
            <div className="text-blue-500 text-4xl mb-2">
              <MdLocationOn fontSize={40} />
            </div>
            <h3 className="text-lg font-semibold text-gray-700">Dirección</h3>
            <a
                href="https://maps.app.goo.gl/KerAV66HMop4TgtEA?g_st=iwb"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 underline text-center"
            >
              Cúcuta - Sala de Experiencia Av 2E # 13A-17 Local 4 - Caobos
            </a>
          </div>
        </div>
      </div>
    </div>

    <Footer/>
    </>

}

export default Contact