import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useCart from "../../Actions/useCart";
import { Button } from "@nextui-org/react";
import Header from "../../Component/Header/Header";
import Footer from "../../Component/Footer/Footer";
import moment from "moment";

const IdState = () => {
  const [orderId, setOrderId] = useState("");
  const [showDetails, setShowDetails] = useState(false); // Controla si se muestran los detalles del pedido

  const { OrderDetail, isLoadingOrderDetail, isErrorOrderDetail } = useSelector(
    (state) => state.Cart
  );

  const updatedDate = moment(OrderDetail?.customer?.order_date).subtract(0, 'days'); // 79 días entre el 18 de diciembre y el 30 de septiembre

  // Formatear la fecha como "30 de septiembre de 2024"
  const formattedDate = updatedDate.format('DD [de] MMMM [de] YYYY');
  const stages = ["Pedido realizado", "Procesando", "Enviado", "Entregado"];
  const progressPercentage = (OrderDetail?.customer?.status / (stages.length - 1)) * 100;

  const { GetOrderCartDeatil,isFlipped } = useCart();

  // Maneja el envío del formulario de rastreo
  const handleTrackOrder = async (e) => {
    e.preventDefault();
    await GetOrderCartDeatil({ id: orderId });
  };

  
  useEffect(() =>{
    GetOrderCartDeatil({ id: orderId });
},[isFlipped])


  // Contenido del formulario de rastreo
  const renderTrackingForm = () => (
    <>
     <Header />
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="relative w-full max-w-md">
        {/* Contenedor con flip */}
        <div
          className={`transform transition-transform duration-700 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Cara frontal */}
          <div className=" backface-hidden w-full bg-white p-6 rounded-3xl shadow-2xl">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Estado del pedido
            </h2>
            <p className="text-sm text-gray-600 mb-6">
              Para rastrear tu pedido, ingresa el ID del pedido en el siguiente
              cuadro y presiona el botón «Rastrear». El ID se te proporcionó en
              el correo electrónico de confirmación de tu compra.
            </p>
            <form onSubmit={handleTrackOrder}>
              <div className="mb-4">
                <label
                  htmlFor="orderId"
                  className="block text-gray-700 text-sm font-semibold mb-2"
                >
                  Numero del pedido

                </label>
                <input
                  id="orderId"
                  type="text"
                  placeholder="123456"
                  value={orderId}
                  onChange={(e) => setOrderId(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>

              <Button
                type="submit"
                isLoading={isLoadingOrderDetail}
                className="w-full bg-gray-800 text-white py-2 rounded-lg font-semibold hover:bg-gray-700 transition duration-200"
              >
                Rastrear →
              </Button>
              {isErrorOrderDetail && <p className="text-red-500" >Error al al buscar tu pedid</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );




  // Contenido de los detalles del pedido
  const renderOrderDetails = () => (
    <>    <Header />
    <div className="max-w-7xl mt-36 mx-auto p-6 bg-gray-50 shadow-2xl rounded-3xl">
      {/* Fecha de compra */}
      <div className="text-right mb-4 text-sm text-gray-500">
        Fecha de compra:{" "}
        <span className="font-semibold">{formattedDate}</span>
      </div>
      <div className="grid grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-gray-700 font-semibold">DIRECCIÓN</h3>
            <p className="text-gray-600 mt-2">
            <p className="text-gray-600">{OrderDetail?.customer?.Username} {OrderDetail?.customer?.Lastname}</p>
            <p className="text-gray-600">{OrderDetail?.customer?.Email}</p>
            <p className="text-gray-600">{OrderDetail?.customer?.Phone}</p>
            <p className="text-gray-600  text-sm">{OrderDetail?.customer?.city}</p>
            <p className="text-gray-600 text-sm">{OrderDetail?.customer?.address}</p>
            <p className="text-gray-600 text-sm">{OrderDetail?.customer?.postalCode}</p>
            <p className="text-gray-600 text-sm">{OrderDetail?.customer?.state}</p>
          </p>
        </div>

        <div>
          <h3 className="text-gray-700 font-semibold">FORMA DE PAGO</h3>
          <p className="text-gray-600 text-sm">{OrderDetail?.transition?.payment_method?.extra?.brand}  ${(parseInt(OrderDetail?.transition?.amount_in_cents) / 100).toLocaleString()}</p>
        </div>
      </div>

      {/* Resumen */}
      <div className="mb-6 border-t pt-4">
        <h3 className="text-gray-700 font-semibold mb-2">RESUMEN</h3>
        <div className="flex justify-between text-gray-600">
          <span>Subtotal</span>
          <span>${(parseInt(OrderDetail?.transition?.amount_in_cents) / 100).toLocaleString()}</span>
        </div>
        <div className="flex justify-between font-semibold text-gray-800">
          <span>Total</span>
          <span>${(parseInt(OrderDetail?.transition?.amount_in_cents) / 100).toLocaleString()}</span>
        </div>
      </div>

      <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
                {stages.map((stage, index) => (
                <span
                    key={index}
                    className={index <=OrderDetail?.customer?.status  ? "text-blue-600" : ""}
                >
                    {stage}
                </span>
                ))}
            </div>
            <div className="relative w-full h-2 bg-gray-200 rounded-full">
                <div
                className="absolute top-0 left-0 h-2 bg-blue-600 rounded-full"
                style={{ width: `${progressPercentage}%` }}
                ></div>
            </div>


     
        <div className="text-black  mt-4 flex justify-between w-full items-center  ">
            <div className="">
                <h2 className="text-gray-700 font-semibold">Producto</h2>
                
            </div>
            <div className="">
                <h2 className="text-gray-700 font-semibold">Producto</h2>
                
            </div>
            <div className="">
                <p className="text-gray-700 font-semibold">Precio</p>
            </div>
        </div>


      <div className="flex ">
                    {OrderDetail?.order?.map((item) =>{
                        return  <div className="text-black  border-b border-gray-300 flex justify-between w-full items-center  ">
                                    <img
                                        src={item.img}
                                        alt="Reloj Minimalista"
                                        className="w-24 h-24 object-cover rounded-md"
                                        />
                                    <div className="">
                                        <h2 className="text-black font-semibold">{item.Name}</h2>
                                        
                                    </div>
                                    <div className="">
                                        <p className="text-black font-semibold">${parseInt(item?.unit_price).toLocaleString("es-CO")}</p>
                                    </div>
                                </div>
                    })}
        </div>
    </div>
    <Footer/>
    </>

  );

  // Renderiza dependiendo del estado
  return isFlipped ? renderOrderDetails() : renderTrackingForm();
};

export default IdState;
