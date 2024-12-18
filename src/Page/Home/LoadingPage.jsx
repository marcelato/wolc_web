import React, { useRef } from 'react'
import ShoppingCart from '../../Component/ShoppingCart/ShoppingCart';
import Footer from '../../Component/Footer/Footer';
import SliceProduct from '../../Component/CardProduct/SliceProduct';
import TitleWelcome from '../../Component/TitleWelcome/TitleWelcome';
import People from '../../Component/People/People';
import Gallery from '../../Component/Gallery/Gallery';
import Feature from '../../Component/Feature/Feature';
import Specifications from '../../Component/Specifications/Specifications';
import { FaFacebook } from 'react-icons/fa';

const LoadingPage =() =>{

  const roomSectionRef = useRef(null);
     
  const scrollToRoomSection = () => {
      if (roomSectionRef.current) {
          roomSectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
  };

  const features = [
    {
      title: "Cristal",
      image:
        "https://github.com/rolandoto/image-pms/blob/main/Captura%20de%20pantalla%202024-12-13%20a%20la(s)%201.11.39%20p.m..png?raw=true", // Imagen de Apple
     
    },
    {
      title: "Madera",
      image:
        "https://github.com/rolandoto/image-pms/blob/main/Captura%20de%20pantalla%202024-12-13%20a%20la(s)%201.17.36%20p.m..png?raw=true", // Imagen de Apple
     
    },
    {
      title: "Metal",
      subtitle: "Fast that lasts.",
      image:
        "https://github.com/rolandoto/image-pms/blob/main/Captura%20de%20pantalla%202024-12-13%20a%20la(s)%201.21.54%20p.m..png?raw=true", // Imagen de Apple
    },
    {
        title: "intemperie",
        image:
          "https://github.com/rolandoto/image-pms/blob/main/Captura%20de%20pantalla%202024-12-13%20a%20la(s)%201.25.34%20p.m..png?raw=true", // Imagen de Apple
      },
  ];


  const testimonials = [
    {
      id: 1,
      name: "Manuel Leonardo",
      text: "Súper recomendado. Desde hace más de 4 años adquirí sus equipos incluida la mano de obra para varios clientes y aún están funcionando perfectamente",

    },
    {
        id: 2,
        name: "Alejo Restrepo",
        text: "Más de 2 años con una cerradura de Wolc y cero inconvenientes , recomendados al 💯",
      },
      {
        id: 3,
        name: "Lucrecia Moreno Rangel",
        text: "Recomendadisimo, una excelente atención y orientación, muy buen producto.",
      },
      {
        id: 4,
        name: "Brian Fernando Franco Guio",
        text: "Compré una de sus cerraduras en el mes de Octubre de 2023 y me ha ido muy bien, desde la instalación, funcionamiento y el soporte técnico. Los recomiendo.",
      },
      {
        id:5,
        name: "Herley Rodriguez",
        text: "calidad ,tecnologia y excelente atención",
      },
      {
        id:6,
        name: "Maria E Memca",
        text: "Excelentes productos. Excelente asesoría Excelente Acompañamiento. Que es lo que se necesita para adquirir estos novedosos productos.",
      },
      {
        id:7,
        name: "Erica Velasquez",
        text: "Excelente servicio y asesoría, hemos adquirido dos cerraduras y un juego de cámaras y el servicio tanto del personal como de los equipos es muy bueno.",
      }
    // Agrega más testimonios aquí
  ];
  
  


    return <>
    <ShoppingCart />
    <TitleWelcome scrollToRoomSection={scrollToRoomSection} />
    
    <p className="mx-auto mt-2 max-w-lg text-balance text-center text-4xl font-semibold tracking-tight text-gray-950 sm:text-5xl">
    Encuentra tú Cerradura ideal
    </p>
    <div className="flex flex-col md:flex-row gap-6 p-6">
  {features.map((feature, index) => (
    <div
      key={index}
      className="relative flex flex-col rounded-3xl overflow-hidden shadow-lg w-full md:w-1/3 h-[700px]"
    >
      {/* Imagen de fondo */}
      <img
        src={feature.image}
        alt={feature.title}
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-white p-6">
        <h3 className="text-[50px] font-semibold uppercase tracking-wide">
          {feature.title}
        </h3>
      </div>
    </div>
  ))}
</div>


    <Gallery />
    <Feature />
    <Specifications />      
    <div ref={roomSectionRef} >
    <SliceProduct />    
    </div>
    <section className="bg-gradient-to-b from-white to-gray-800 py-12">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">
        Testimoniales
        </h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="p-6 bg-white rounded-3xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <p className="text-gray-600 mb-4">&quot;{testimonial.text}&quot;</p>
              <div className="flex items-center mt-4">
               <FaFacebook  className="w-12 h-12 rounded-full mr-4"  color="#0866ff" fontSize={30}  />
                <div>
                  <h4 className="font-bold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.username}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
        </>

}

export default LoadingPage