import React, { useContext, useState } from "react";
import Header from "../../Component/Header/Header";
import AutoProvider  from "../../Usecontext/CartProvider";
import HyperNavigation from "../../Component/HyperNavigation/HyperNavigation";
import ShoppingCart from "../../Component/ShoppingCart/ShoppingCart";
import Footer from "../../Component/Footer/Footer";
import useCart from "../../Actions/useCart";
import { Button } from "@nextui-org/react";
import { useSelector } from "react-redux";
import useFormValuesCheckout from "../../Hooks/useFormValuesCheckout";

const CheckoutEmail = () => {

    const {cartItems} =useContext(AutoProvider)
    const {PostCreateCart} =useCart()
    const {isLoadingCustomer} =useSelector((state) => state.Cart)
    const [form, handleChange] = useFormValuesCheckout();
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
        const cardNumberRegex = /^(?:\d{4} ){3}\d{3,4}$|^\d{15,16}$/;
        if (!form.email){
            newErrors.email = "Este campo es obligatorio.";
        } 
        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
            newErrors.email = 'Email no es válido';
        }
        if (!form.firstName) newErrors.firstName = "Este campo es obligatorio.";
        if (!form.lastName) newErrors.lastName = "Este campo es obligatorio.";
        if (!form.id) newErrors.id = "Este campo es obligatorio.";
        if (!form.phone) newErrors.phone = "Este campo es obligatorio.";
        if (!form.cardName) newErrors.cardName = 'Este campo es obligatorio.';
        if (!form.cardNumber) {
          newErrors.cardNumber = 'Este campo es obligatorio.';
        } else if (!cardNumberRegex.test(form.cardNumber)) {
          newErrors.cardNumber = 'Número de la tarjeta no es válido';
        }
        if (!form.expiryMonth) newErrors.expiryMonth = 'Este campo es obligatorio.';
        if (!form.expiryYear) newErrors.expiryYear = 'Este campo es obligatorio.';
        if (!form.cvc) {
          newErrors.cvc = 'CVC es requerido';
        } else if (!/^\d{3,4}$/.test(form.cvc)) {
          newErrors.cvc = 'CVC no es válido';
        }
        if(!form.address) newErrors.address = 'Este campo es obligatorio.';
        if(!form.city) newErrors.city = 'Este campo es obligatorio.';
        if(!form.state) newErrors.state = 'Este campo es obligatorio.';
        if(!form.postalCode) newErrors.postalCode = 'Este campo es obligatorio.';
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const subtotal = cartItems.reduce(
      (total, producto) => total + producto.Price * producto.quantity,
      0
    );


    /*
     <div className="min-h-screen mt-32  bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl flex flex-col md:flex-row">
        <div className="p-6 w-full md:w-2/3">
          <h2 className="text-xl font-bold mb-4">1. Identificación</h2>
          <p className="text-gray-600 mb-6">
            Solicitamos únicamente la información esencial para la finalización de la compra.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Correo
                </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleInputChange}
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleInputChange}
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                 {errors.lastName && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cédula de Ciudadanía
                </label>
                <input
                  type="text"
                  name="id"
                  value={form.id}
                  onChange={handleInputChange}
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.id ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.id && (
                  <p className="text-sm text-red-500 mt-1">{errors.id}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono / Móvil
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  className={`mt-1  p-2 block w-full rounded-md border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
            <Button
              type="submit"
              isLoading={isLoadingCustomer} 
              className="mt-6 w-full bg-black text-white py-3 rounded-lg text-sm font-bold">
              Continuar con los detalles de envío
            </Button>
          </form>
        </div>
        <div className="p-6 w-full md:w-1/3 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">Resumen de la compra</h2>
      <div className="space-y-4">
        {cartItems.map((producto) => (
          <div
            key={producto.id}
            className="flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
            
              <div className="relative w-16 h-16">
                <img
                  src={producto.img}
                  alt={producto.Name}
                  className="w-full h-full object-cover rounded-md"
                />
                <div className="absolute top-0 right-0 bg-black text-white text-xs rounded-full px-2 py-0.5">
                  {producto.quantity}
                </div>
              </div>
             
              <span>{producto.Name}</span>
            </div>
          
            <span>${producto.Price.toLocaleString("es-CO")}</span>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700">
          Código de descuento
        </label>
        <div className="flex mt-2">
          <input
            type="text"
            className="block p-2 w-full rounded-l-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
          <Button  
              className="bg-black text-white px-4 rounded-r-md text-sm font-bold">
            Aplicar
          </Button>
        </div>
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center">
          <span>Subtotal</span>
          <span>${subtotal.toLocaleString("es-CO")}</span>
        </div>
        <div className="flex justify-between items-center mt-2 font-bold">
          <span>Total</span>
          <span>${subtotal.toLocaleString("es-CO")}</span>
        </div>
      </div>
    </div>
      </div>
    </div>
 
     */

    const handleSubmit = async(e) => {
        e.preventDefault();
        if (validateForm()) {
          await PostCreateCart({Username:form.firstName,
                                Lastname:form.lastName,
                                ID_card:form.id,
                                Email:form.email,
                                Phone:form.phone,
                                total_amount:subtotal})
        }
    };

  return (
  <>
  <Header/>
  <ShoppingCart />
   
  <div className="min-h-screen  mt-32 bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2">
      <form onSubmit={handleSubmit}>
        <div className="p-6 space-y-6">
          <h2 className="text-lg font-semibold text-gray-800">contact information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Correo
                </label>
                <input
                  type="text"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.firstName ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.firstName && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.firstName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Apellido
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                 {errors.lastName && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.lastName}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Cédula de Ciudadanía
                </label>
                <input
                  type="text"
                  name="id"
                  value={form.id}
                  onChange={handleChange}
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.id ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.id && (
                  <p className="text-sm text-red-500 mt-1">{errors.id}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Teléfono / Móvil
                </label>
                <input
                  type="text"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`mt-1  p-2 block w-full rounded-md border ${
                    errors.phone ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                />
                {errors.phone && (
                  <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
                )}
              </div>
            </div>
          
          <h2 className="text-lg font-semibold text-gray-800">payment details</h2>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">Titular de la tarjeta (obligatorio)</span>
              <input
                type="text"
                name="cardName"
                value={form.cardName}
                onChange={handleChange}
                className={`mt-1 p-2 block w-full rounded-md border ${
                  errors.cardName ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
               {errors.cardName && (
                  <p className="text-sm text-red-500 mt-1">{errors.cardName}</p>
                )}
            </label>
            <label className="block">
              <span className="text-sm font-medium text-gray-700">card number</span>
              <input
                 name="cardNumber"
                 value={form.cardNumber}
                 onChange={handleChange}
                 className={`mt-1 p-2 block w-full rounded-md border ${
                   errors.cardNumber ? "border-red-500" : "border-gray-300"
                 } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
              />
               {errors.cardNumber && (
                  <p className="text-sm text-red-500 mt-1">{errors.cardNumber}</p>
                )}
            </label>
            <div className="flex space-x-2 mb-4">
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" >
                                Expira el
                                </label>
                                <select 
                                name="expiryMonth"
                                className={`mt-1 p-2 block w-full rounded-md border ${
                                  errors.expiryMonth ? "border-red-500" : "border-gray-300"
                                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                value={form.expiryMonth}
                                onChange={handleChange}
                                >
                                <option value={""} >Mes</option>
                                    {[...Array(12).keys()].map(month => {
                                    const monthValue = (month + 1).toString().padStart(2, '0');
                                    return (
                                        <option key={monthValue} value={monthValue}>
                                        {monthValue}
                                        </option>
                                    );
                                    })}
                                </select>
                                {errors.expiryMonth && (
                                  <p className="text-sm text-red-500 mt-1">{errors.expiryMonth}</p>
                                )}
                            </div>
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="expiryYear">
                                Año
                                </label>
                                <select 
                                className={`mt-1 p-2 block w-full rounded-md border ${
                                  errors.expiryYear ? "border-red-500" : "border-gray-300"
                                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                name='expiryYear'
                                value={form.expiryYear}
                                onChange={handleChange}
                                >
                                    <option value={""} >Año</option>
                                    {[...Array(13).keys()].map(year => {
                                    const yearValue = 23 + year; // Años del 2024 al 2036
                                    return (
                                    <option key={`year-${yearValue}`} value={yearValue}>
                                        {yearValue}
                                    </option>
                                    );
                                })}
                                </select>
                                {errors.expiryYear && (
                                  <p className="text-sm text-red-500 mt-1">{errors.expiryYear}</p>
                                )}
                            </div>
                            <div className="w-1/3">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="cvc">
                                CVC
                                </label>
                                <input 
                                className={`mt-1 p-2 block w-full rounded-md border ${
                                  errors.cvc ? "border-red-500" : "border-gray-300"
                                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                                  type="text" 
                                name='cvc'
                                value={form.cvc}
                                onChange={handleChange}
                                placeholder="123" 
                                />
                                {errors.cvc && (
                                  <p className="text-sm text-red-500 mt-1">{errors.cvc}</p>
                                )}
                            </div>
                            </div>
          </div>

          <h2 className="text-lg font-semibold text-gray-800">shipping address</h2>
          <div className="space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-gray-700">address</span>
              <input
                type="text"
                className={`mt-1 p-2 block w-full rounded-md border ${
                  errors.address ? "border-red-500" : "border-gray-300"
                } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                name='address'
                value={form.address}
                onChange={handleChange}
              />
              {errors.cvc && (
                <p className="text-sm text-red-500 mt-1">{errors.address}</p>
              )}
            </label>
            <div className="flex space-x-4">
              <label className="flex-1 block">
                <span className="text-sm font-medium text-gray-700">city</span>
                <input
                  type="text"
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.city ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  name='city'
                  value={form.city}
                  onChange={handleChange}
                />
                 {errors.city && (
                <p className="text-sm text-red-500 mt-1">{errors.city}</p>
              )}
              </label>
              <label className="block w-1/3">
                <span 
                
                className="text-sm font-medium text-gray-700">state / province</span>
                <input
                  type="text"
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.state ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  name='state'
                  value={form.state}
                  onChange={handleChange}
                />
                                 {errors.state && (
                <p className="text-sm text-red-500 mt-1">{errors.state}</p>
              )}
              </label>
              <label className="block w-1/3">
                <span className="text-sm font-medium text-gray-700">postal code</span>
                <input
                  type="text"
                  className={`mt-1 p-2 block w-full rounded-md border ${
                    errors.postalCode ? "border-red-500" : "border-gray-300"
                  } shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm`}
                  name='postalCode'
                  value={form.postalCode}
                  onChange={handleChange}
                />
                 {errors.postalCode && (
                <p className="text-sm text-red-500 mt-1">{errors.postalCode}</p>
              )}
              </label>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <span className="text-sm text-gray-700">same as shipping information</span>
          </div>

          <Button
              type="submit"
              isLoading={isLoadingCustomer} 
              className="mt-6 w-full bg-indigo-700 text-white py-3 rounded-lg text-sm font-bold">
              Continuar con los detalles de envío
            </Button>
        </div>
        </form> 
        <div className="bg-indigo-700 text-white p-6 space-y-6">
          <h2 className="text-lg font-semibold">amount due</h2>
          <p className="text-3xl font-bold">${subtotal.toLocaleString("es-CO")}</p>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex border- items-center">
                  <img
                    src={item.img}
                    alt={item.Name}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div className="ml-4">
                    <p>{item.Name}</p>
                    <p className="text-sm text-gray-300">{item.Brand}</p>
                    <p className="text-sm text-gray-300">Cantidad: {item.quantity}</p>
                  </div>
                </div>
                <p>${item.Price.toLocaleString("es-CO")}</p>
              </div>
            ))}
          </div>
          <div className="space-y-2 border-t-lime-50	">
            <div className="flex justify-between">
              <span>subtotal</span>
              <span>${subtotal.toLocaleString("es-CO")}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>total</span>
              <span>${subtotal.toLocaleString("es-CO")}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default CheckoutEmail;
