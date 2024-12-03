import React from 'react';

const OfertaNocturna = () => {
  const categorias = [
    {
      nombre: "calzado",
      descuento: "45% OFF",
      imagen: "https://http2.mlstatic.com/D_NQ_NP2X_999524-MLA80623239116_112024-B.webp", // reemplaza con tu imagen
    },
    {
      nombre: "audio",
      descuento: "45% OFF",
      imagen: "https://http2.mlstatic.com/D_NQ_NP2X_999524-MLA80623239116_112024-B.webp", // reemplaza con tu imagen
    },
    {
      nombre: "celulares",
      descuento: "50% OFF",
      imagen: "https://http2.mlstatic.com/D_NQ_NP2X_999524-MLA80623239116_112024-B.webp", // reemplaza con tu imagen
    },
    {
      nombre: "smartwatches",
      descuento: "35% OFF",
      imagen: "https://http2.mlstatic.com/D_NQ_NP2X_999524-MLA80623239116_112024-B.webp", // reemplaza con tu imagen
    },
  ];

  return (
    <div className=" text-white p-6">
      {/* sección principal */}
      <img 
        src='https://http2.mlstatic.com/D_NQ_NP_2X_861875-MLA80947122701_112024-OO.webp'
       className="relative z-10  bg-gray-900  rounded-md">
       
          
      </img>

      {/* categorías */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
        {categorias.map((categoria, index) => (
          <img
            key={index}
            src={categoria.imagen}
            alt={categoria.nombre}
            className="bg-gray-800 rounded-md text-center shadow-lg"
          >
            
           
          </img>
        ))}
      </div>
    </div>
  );
};

export default OfertaNocturna;
