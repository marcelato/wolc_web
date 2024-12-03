
import React from "react"
import  AutoProvider  from "../../Usecontext/CartProvider";
import { FiShoppingCart } from "react-icons/fi";
import ShoppingCart from "../../Component/ShoppingCart/ShoppingCart.jsx";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";

const HeaderIsLogin =() =>{

    const navigate = useNavigate();

    const {totalItems, setIsCartOpen,isCartOpen,jwt,setJwt } =useContext(AutoProvider)

    const toggleCart = () => {
        setIsCartOpen(!isCartOpen);
    };

   
    const handExit =() =>{
        localStorage.removeItem('jwt')
        setJwt(null)
        navigate("/login")  
    }


    return  <>
    
    <header className="w-full bg-gray-800 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl font-bold">

        <Link to="/"   >
          <img className="mx-auto h-12 w-auto"  src="https://github.com/rolandoto/image-pms/blob/main/LG-BLANCO%20(1).png?raw=true" alt="" />
         </Link>
        </h1>

        {/* Nombre de usuario y logout */}
        <div className="flex items-center space-x-4">
          <span className="text-sm font-medium">
            Bienvenido, <span className="font-bold">{jwt?.name}</span>
          </span>
         
          <button
            className="relative flex items-center justify-center"
          >
            <span className="material-icons text-2xl">
              <FiShoppingCart />
            </span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-2">
                {totalItems}
              </span>
            )}
          </button>
          <button
                onClick={handExit}
                className="bg-red-500 hover:bg-red-600 text-white text-sm px-4 py-2 rounded"
                >
                Salir
        </button>

        </div>
      </div>

      {/* Modal del carrito */}
      {isCartOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end">
          <div className="w-full max-w-md bg-white h-full shadow-lg">
            <button
              onClick={toggleCart}
              className="absolute top-4 right-4 text-gray-600 text-2xl"
            >
              &times;
            </button>
            <ShoppingCart />
          </div>
        </div>
      )}
    </header>
    </>

}

export default HeaderIsLogin