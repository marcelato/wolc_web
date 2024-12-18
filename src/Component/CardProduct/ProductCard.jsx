import React, { useContext } from "react";
import { Link } from "react-router-dom";
import  AutoProvider  from "../../Usecontext/CartProvider";

const ProductCard = ({products}) => {

  const { addToCart } = useContext(AutoProvider); // Obtener la función para agregar al carrito
 
  return (
    <div className="bg-gradient-to-b from-white to-gray-300">
    <div className="mx-auto mt-10  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Products</h2>
      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div  className="group">
              <Link
                  to={`/DetailProduct/${product.ID}`}
                  className="group cursor-pointer relative  p-2 rounded-3xl"
                >
                  <img
                    alt={product.Name}
                    src={product.img}
                    className="aspect-square shadow-2xl w-full rounded-3xl bg-white object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                  />
                </Link>

            <h3 className="mt-4 text-sm text-gray-700">{product.Name}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.Code}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">{product.Brand}</p>
            <p className="mt-1 text-lg font-medium text-gray-900">${product.Price.toLocaleString("es-CO")}</p>
            <button
                  onClick={() => addToCart(product)}
                  className="mt-4 w-full bg-gray-800 text-white text-sm font-medium py-4 px-4 rounded-lg ">
             Agregar al carrito
            </button>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default ProductCard;
