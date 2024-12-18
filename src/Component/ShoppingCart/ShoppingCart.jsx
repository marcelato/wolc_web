import React, { useContext, useState } from "react";
import AutoProvider  from "../../Usecontext/CartProvider";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { Button } from "@nextui-org/react";

const ShoppingCart = () => {
    const {cartItems,setCartItems,isCartOpen,setIsCartOpen} =useContext(AutoProvider)

    const navigate = useNavigate();

    const HandlCheckout =() => {
        setIsCartOpen(false)
        navigate("/Checkout");
    }

    const handleQuantityChange = (id, newQuantity) => {
        setCartItems((prevItems) =>
        prevItems.map((item) =>
            item.ID === id ? { ...item, quantity: newQuantity } : item
        )
        );
    };

    const handleRemoveItem = (id) => {
      setCartItems((prevItems) => prevItems.filter((item) => item.ID !== id));
    };

    const subtotal = cartItems.reduce(
      (total, item) => total + item.Price * item.quantity,
      0
    );

  return (
    <Dialog open={isCartOpen} onClose={setIsCartOpen} className="relative z-50">
    <DialogBackdrop
      transition
      className="fixed inset-0 bg-gray-500/75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
    />
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
          <DialogPanel
            transition
            className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700">
            <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
              <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                <div className="flex items-start justify-between">
                  <DialogTitle className="text-lg font-medium text-gray-900">Carrito</DialogTitle>
                  <div className="ml-3 flex h-7 items-center">
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                    > 
                    </button>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="flow-root">
                    <ul role="list" className="-my-6 divide-y divide-gray-200">
                      {cartItems.map((product) => (
                        <li key={product.ID} className="flex py-6">
                          <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                            <img alt={product.Name} src={product.img} className="size-full object-cover" />
                          </div>

                          <div className="ml-4 flex flex-1 flex-col">
                            <div>
                              <div className="flex justify-between text-base font-medium text-gray-900">
                                <h3>
                                  <a href={product.href}>{product.Name}</a>
                                </h3>
                                <p className="ml-4">${product.Price.toLocaleString("es-CO")}</p>
                              </div>
                              <p className="mt-1 text-sm text-gray-500">{product.Code}</p>
                            </div>
                            <div className="flex flex-1 items-end justify-between text-sm">
                              <p className="text-gray-500">Cantidad {product.quantity}</p>

                              <div className="flex">
                                <button  onClick={() => handleRemoveItem(product.ID)} type="button" className="font-medium text-blue-600">
                                  Remove
                                </button>
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Subtotal</p>
                  <p>${subtotal.toLocaleString("es-CO")}</p>
                </div>
                <p className="mt-0.5 text-sm text-gray-500">Gastos de envío e impuestos calculados al finalizar la compra</p>
                <div className="mt-6">
                  <Button
                    onClick={HandlCheckout}
                    className="flex items-center w-full justify-center rounded-md border border-transparent bg-gray-800  px-6 py-3 text-base font-medium text-white shadow-sm "
                  >Checkout
                  </Button>
                </div>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                  <p>
                    <button
                      type="button"
                      onClick={() => setIsCartOpen(false)}
                      className="font-medium text-black ">
                      Continuar Comprando
                      <span aria-hidden="true"> &rarr;</span>
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </div>
  </Dialog>
  );
};

export default ShoppingCart;
