import React, { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TiHome } from "react-icons/ti";
import { FaProductHunt } from "react-icons/fa";
import  AutoProvider  from "../../Usecontext/CartProvider";
import { Button } from "@nextui-org/react";
import { FaUser } from "react-icons/fa";


const Sidebar = () => {
  const navigate = useNavigate();
  const {jwt,setJwt} =useContext(AutoProvider)
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const handExit =() =>{
    localStorage.removeItem('jwt')
    setJwt(null)
    navigate("/login")  
}

  return (
    <div className="fixed top-0 left-0 h-full border-r border-gray-300   w-64 bg-white flex flex-col justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-800 mb-6">WOLC</h1>
        <nav>
          <ul className="space-y-4">
          <ul className="space-y-2">
      <li
        className={`rounded-3xl p-2 transition-all duration-300 hover:bg-gray-300 hover:scale-105 ${
          isActive('/Dashboard/home') ? 'bg-gray-300 scale-105' : ''
        }`}
      >
        <Link 
          to="/Dashboard/home" 
          className="flex items-center text-gray-800 space-x-2"
        >
          <TiHome fontSize={20} />
          <span>Inicio</span>
        </Link>
      </li>
      <li
        className={`rounded-3xl p-2 transition-all duration-300 hover:bg-gray-300  hover:scale-105 ${
          isActive('/Dashboard/products') ? 'bg-gray-300 scale-105' : ''
        }`}
      >
        <Link 
          to="/Dashboard/products" 
          className="flex items-center text-gray-800 space-x-2"
        >
          <FaProductHunt fontSize={20} />
          <span>Productos</span>
        </Link>
      </li>
      <li
        className={`rounded-3xl p-2 transition-all duration-300 hover:bg-gray-300 hover:scale-105 ${
          isActive('/Dashboard/orders') ? 'bg-gray-300 scale-105' : ''
        }`}
      >
        <Link 
          to="/Dashboard/orders" 
          className="flex items-center text-gray-800 space-x-2"
        >
          <TiHome fontSize={20} />
          <span>Órdenes</span>
        </Link>
      </li>
      
    </ul>

          </ul>
        </nav>
      </div>
      <div>
        <div className="mb-4">
          <a href="#support" className="hover:text-blue-500 text-white">
            Support
          </a>
        </div>
        <div className="mb-4">
          <Button onClick={handExit} 
                color="danger"  className=" text-white">
            Salir
          </Button>
        </div>
        <div>
          <div  className="flex items-center space-x-4">
            <img
              src="https://catalyst-demo.tailwindui.com/users/erica.jpg"
              alt="user avatar"
              className="rounded-full"
            />
          
            <div>
              <p className="text-black">{jwt?.name}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
