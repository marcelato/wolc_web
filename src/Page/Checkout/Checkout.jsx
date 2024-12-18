import React, { useContext, useState } from "react";
import HyperNavigation from "../../Component/HyperNavigation/HyperNavigation";
import Header from "../../Component/Header/Header";
import  AutoProvider  from "../../Usecontext/CartProvider";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import ShoppingCart from "../../Component/ShoppingCart/ShoppingCart";
import pdf from "../../image/termino.pdf"




const Checkout = () => {

    const {cartItems,setCartItems} = useContext(AutoProvider)
    const navigate = useNavigate();
    const [isAccepted, setIsAccepted] = useState(false);
    const [error, setError] = useState("");
  
    const handleCheckboxChange = (e) => {
      setIsAccepted(e.target.checked);
      if (e.target.checked) {
        setError(""); // Limpia el error si el checkbox está marcado
      }
    };

    const handleSubmit = () => {
      if (!isAccepted) {
        setError("Debes aceptar los Términos y Condiciones para continuar.");
      } else {
        navigate("/CheckoutEmail");
        // Lógica para avanzar
      }
    };

  const handleRemoveItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.ID !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, product) => acc + product.Price * product.quantity,
    0
  );

  return (
    <> 
    <Header /> 
    <ShoppingCart/>
    <div className=" mt-32 max-w-7xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white shadow-2xl border rounded-3xl p-4">
            <div className="flex justify-between" >
                    <h2 className="text-sm">Producto(s)</h2>
                <h2 className="text-sm">Cantidad</h2>
                <h2 className="text-sm">Precio</h2>
            </div>
          {cartItems.map((product) => (
            <div
              key={product.id}
              className="flex items-center justify-between border-b py-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.img}
                  alt={product.Name}
                  className="w-16 h-16 object-cover"
                />
                <div>
                  <h3 className="text-sm font-medium">{product.Name}</h3>
                  <p className="text-xs text-gray-500">{product.Brand}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">

                <span>{product.quantity}</span>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-sm font-bold">
                  ${product.Price.toLocaleString()}
                </p>
                <button
                  onClick={() => handleRemoveItem(product.ID)}
                  className="text-gray-500 hover:text-red-600"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
  
        <div className="bg-white shadow-2xl border rounded-3xl p-4">
          <h2 className="text-xl font-bold mb-4">Total</h2>
          <input
            type="text"
            placeholder="Código de descuento"
            className="w-full border rounded-lg p-2 mb-4"
          />
          <button className="w-full bg-gray-800  text-white py-2 rounded mb-4">
            Aplicar
          </button>
          <div className="flex justify-between items-center mb-4">
            <span>Subtotal</span>
            <span>${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex justify-between items-center mb-4">
            <span>Total</span>
            <span className="text-xl font-bold">${subtotal.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2 mb-4">
            <input type="checkbox" id="terms" className="w-4 h-4" 
             checked={isAccepted}
             onChange={handleCheckboxChange}/>
            <label htmlFor="terms" className="text-sm">
              Acepto los{" "}
              <a target="_blank" href={pdf} className="text-blue-600 underline">
                Términos y Condiciones
              </a>
            </label>
            
          </div>
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          <button 
             onClick={handleSubmit}
          className="w-full py-2 bg-gray-800 text-white rounded" >
            Proceder a identificación
          </button>
          <div className="mt-4" >
              <span className="mt-8" >Aceptamos</span>
          </div>
          <div className="flex mt-4 " >
            <img className="h-8" src="https://co.hm.com/arquivos/amex-logo.png" alt="" />
            <img className="h-8" src="https://co.hm.com/arquivos/visa-logo.png" alt="" />
            <img className="h-8" src="https://co.hm.com/arquivos/diners-club-iso.png" alt="" />
            <img className="h-8" src="https://co.hm.com/arquivos/mastercard-logo.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Checkout;
