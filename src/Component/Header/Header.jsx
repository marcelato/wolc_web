import React, { useContext, useState } from "react";
import ShoppingCart from "../ShoppingCart/ShoppingCart.jsx";
import { FiShoppingCart } from "react-icons/fi";
import  AutoProvider  from "../../Usecontext/CartProvider.js";
import { Link, useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { Dialog, DialogPanel } from '@headlessui/react'
import { BsHandbag } from "react-icons/bs";

const Header = () => {

  const navigate = useNavigate();
  const {totalItems, setIsCartOpen ,isCartOpen} =useContext(AutoProvider)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)


  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

 
const navigation = [
  { name: 'Producto', href: '/product' },
  { name: 'Carateristicas', href: '#' },
  { name: 'Ecommerce', href: '#' },
  { name: 'Compania', href: '#' },
]

  return (
    <header className="">
       <header className="absolute z-30  inset-x-0 top-0 ">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5 cursor-pointer ">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://github.com/rolandoto/image-pms/blob/main/PNG/LG-AZUL.png?raw=true"
                className="h-20 w-auto"
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <FaUser aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm/6 cursor-pointer  font-semibold text-gray-900">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center space-x-4">
          <Link to="/login" className="text-sm font-semibold text-gray-900 flex items-center">
            Ingresar <span aria-hidden="true" className="ml-1">&rarr;</span>
          </Link>
          <div className="flex items-center space-x-2 cursor-pointer " onClick={toggleCart} >
            <BsHandbag fontSize={25} />
            <span className="text-sm font-medium">{totalItems}</span>
          </div>
        </div>
        </nav>
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <FaUser aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                   Ingresar
                  </a>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </header>
  );
};

export default Header;
