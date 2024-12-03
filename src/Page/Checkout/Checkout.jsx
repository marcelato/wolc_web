import React, { useContext, useState } from "react";
import HyperNavigation from "../../Component/HyperNavigation/HyperNavigation";
import Header from "../../Component/Header/Header";
import  AutoProvider  from "../../Usecontext/CartProvider";
import { useNavigate } from "react-router-dom";
import Footer from "../../Component/Footer/Footer";
import ShoppingCart from "../../Component/ShoppingCart/ShoppingCart";

const OrderList = () => {
  const orders = [
    {
      orderNumber: 'WU88191111',
      datePlaced: 'Jul 6, 2021',
      totalAmount: 160.0,
      items: [
        {
          name: 'Micro Backpack',
          description:
            'Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.',
          price: 70.0,
          image: 'https://tailwindui.com/plus/img/ecommerce-images/order-history-page-03-product-01.jpg',
          deliveryDate: 'July 12, 2021',
        },
        {
          name: 'Nomad Shopping Tote',
          description:
            'This durable shopping tote is perfect for the world traveler. Its yellow canvas construction is water, fray, tear resistant. The matching handle, backpack straps, and shoulder loops provide multiple carry options for a day out on your next adventure.',
          price: 90.0,
          image: 'https://tailwindui.com/plus/img/ecommerce-images/order-history-page-03-product-03.jpg',
          deliveryDate: 'July 12, 2021',
        },
      ],
    },
    {
      orderNumber: 'AT84441546',
      datePlaced: 'Dec 22, 2020',
      totalAmount: 40.0,
      items: [
        {
          name: 'Double Stack Clothing Bag',
          description:
            'Save space and protect your favorite clothes in this double-layer garment bag. Each compartment easily holds multiple pairs of jeans or tops, while keeping your items neatly folded throughout your trip.',
          price: 40.0,
          image: 'https://tailwindui.com/plus/img/ecommerce-images/order-history-page-03-product-03.jpg',
          deliveryDate: 'January 5, 2021',
        },
      ],
    },
  ];

  return (
    <div className="p-6 mt-32 space-y-6">
      {orders.map((order, index) => (
        <OrderCard key={index} order={order} />
      ))}
    </div>
  );
};
const OrderCard = ({ order }) => {
  return (
    <div className="border border-gray-300 rounded-lg shadow-sm p-4 bg-white">
      <div className="flex justify-between items-center mb-4">
        <div>
          <p className="text-sm font-medium text-gray-700">
            Order number: <span className="font-semibold">{order.orderNumber}</span>
          </p>
          <p className="text-sm text-gray-500">Date placed: {order.datePlaced}</p>
          <p className="text-sm text-gray-500">Total amount: ${order.totalAmount.toFixed(2)}</p>
        </div>
        <div className="space-x-2">
          <button className="text-sm text-blue-500 hover:underline">View Order</button>
          <button className="text-sm text-blue-500 hover:underline">View Invoice</button>
        </div>
      </div>
      <div className="space-y-4">
        {order.items.map((item, index) => (
          <OrderItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const OrderItem = ({ item }) => {
  return (
    <div className="flex items-start space-x-4">
      <img
        src={item.image}
        alt={item.name}
        className="w-16 h-16 object-cover rounded-md"
      />
      <div>
        <p className="text-sm font-medium text-gray-800">{item.name}</p>
        <p className="text-sm text-gray-600">{item.description}</p>
        <p className="text-sm font-medium mt-2">${item.price.toFixed(2)}</p>
        <p className="text-sm text-green-600 mt-1">
          Delivered on {item.deliveryDate}
        </p>
        <div className="mt-2 space-x-4">
          <button className="text-sm text-blue-500 hover:underline">View Product</button>
          <button className="text-sm text-blue-500 hover:underline">Buy Again</button>
        </div>
      </div>
    </div>
  );
};


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
    <OrderList />
    <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        >
        <div
        style={{
            clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#001f3f] to-[#005f9e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
        </div>
    <div className=" mt-32 max-w-7xl mx-auto px-4 py-8">

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2 bg-white shadow rounded-lg p-4">
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
  
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-bold mb-4">Total</h2>
          <input
            type="text"
            placeholder="Código de descuento"
            className="w-full border rounded-lg p-2 mb-4"
          />
          <button className="w-full bg-black  text-white py-2 rounded mb-4">
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
              <a href="#" className="text-blue-600 underline">
                Términos y Condiciones
              </a>
            </label>
            
          </div>
          {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
          <button 
             onClick={handleSubmit}
          className="w-full py-2 bg-black text-white rounded" >
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
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Order Details</h2>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-500 font-medium">Order number</p>
                <p>WU88191111</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Date placed</p>
                <p>Jul 6, 2021</p>
              </div>
              <div>
                <p className="text-gray-500 font-medium">Total amount</p>
                <p>${160.00}</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h2 className="text-2xl font-bold mb-4">Micro Backpack</h2>
            <div className="flex items-center">
              <img src="/micro-backpack.jpg" alt="Micro Backpack" className="w-24 h-24 rounded-lg mr-4" />
              <div>
                <p className="text-lg font-medium">${70.00}</p>
                <p className="text-gray-500">
                  Are you a minimalist looking for a compact carry option? The Micro Backpack is the perfect size for your essential everyday carry items. Wear it like a backpack or carry it like a satchel for all-day use.
                </p>
                <div className="flex justify-end">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Buy again</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h2 className="text-2xl font-bold mb-4">Nomad Shopping Tote</h2>
            <div className="flex items-center">
              <img src="/nomad-tote.jpg" alt="Nomad Shopping Tote" className="w-24 h-24 rounded-lg mr-4" />
              <div>
                <p className="text-lg font-medium">${90.00}</p>
                <p className="text-gray-500">
                  This durable shopping tote is perfect for the world traveler. Its yellow canvas construction is water, fray, tear resistant. The matching handle, backpack straps, and shoulder loops provide multiple carry options for a day out on your next adventure.
                </p>
                <div className="flex justify-end">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Buy again</button>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg mt-4">
            <h2 className="text-2xl font-bold mb-4">Double Stack Clothing Bag</h2>
            <div className="flex items-center">
              <img src="/double-stack-bag.jpg" alt="Double Stack Clothing Bag" className="w-24 h-24 rounded-lg mr-4" />
              <div>
                <p className="text-lg font-medium">${40.00}</p>
                <p className="text-gray-500">
                  Save space and protect your favorite clothes in this double-layer garment bag. Each compartment easily holds multiple pairs of jeans or tops, while keeping your items neatly folded throughout your trip.
                </p>
                <div className="flex justify-end">
                  <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg">Buy again</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Checkout;
