
import React, { useState } from "react"
import useCart from "../../Actions/useCart";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Button } from "@nextui-org/react";

const OrderCard =({OrderDetail}) =>{
const {id} =useParams()
const {PostOrderCartDeatilUpdate} =useCart()
const [currentStage, setCurrentStage] = useState(OrderDetail?.customer?.status);
const {isLoadingOrderDetailupdate} =useSelector((state) => state.Cart)


const handSaveOrder=async() =>{
    await  PostOrderCartDeatilUpdate({status:currentStage,productId:id})
}

const handleStageChangeBack = async() => {
    setCurrentStage((prev) => Math.max(prev - 1, 0))
  };
  const handleStageChangeNext = async() => {
    setCurrentStage((prev) => Math.min(prev + 1, stages.length - 1))
    };

  // Etapas del pedido
const stages = ["Pedido realizado", "Procesando", "Enviado", "Entregado"];

  // Calcular el progreso dinámico en porcentaje
const progressPercentage = (currentStage / (stages.length - 1)) * 100;

return ( <div className="max-w-6xl mx-auto  bg-white shadow-md rounded-3xl">
            <div className="block ">
                    {OrderDetail?.order?.map((item) =>{
                        return  <div className="text-black p-6 border-b border-gray-300 flex items-center  ">
                                    <img
                                        src={item.img}
                                        alt="Reloj Minimalista"
                                        className="w-24 h-24 object-cover rounded-md"
                                        />
                                    <div className="">
                                        <h2 className="text-sm font-semibold text-gray-700 ">Producto:{item.Name}</h2>
                                        <p className="text-gray-500 text-sm ">Cantidad:{item.quantity}</p>
                                        <p className="text-gray-500 text-sm">Descripción:{item.Description}</p>
                                        <p className="mt-2 text-gray-500 font-bold text-sm ">${parseInt(item?.unit_price).toLocaleString("es-CO")}</p>
                                    </div>
                                </div>
                    })}
            </div>

            <div className="flex justify-between items-start " >
                    <div className=" p-6 ">
                        <h3 className="text-sm font-semibold text-gray-700">Dirección de entrega</h3>
                        <p className="text-gray-600  text-sm">{OrderDetail?.customer?.city}</p>
                        <p className="text-gray-600 text-sm">{OrderDetail?.customer?.address}</p>
                        <p className="text-gray-600 text-sm">{OrderDetail?.customer?.postalCode}</p>
                        <p className="text-gray-600 text-sm">{OrderDetail?.customer?.state}</p>
                    </div>

                    <div className="p-6" >
                        <h3 className="text-sm font-semibold text-gray-700 mt-4">Datos del cliente</h3>
                        <p className="text-gray-600">{OrderDetail?.customer?.Username} {OrderDetail?.customer?.Lastname}</p>
                        <p className="text-gray-600">{OrderDetail?.customer?.Email}</p>
                        <p className="text-gray-600">{OrderDetail?.customer?.Phone}</p>
                    
                    </div>
            </div>
                
            <div className="mt-6 p-6">
           

            <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
                {stages.map((stage, index) => (
                <span
                    key={index}
                    className={index <= currentStage ? "text-blue-600" : ""}
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

  
      <div className="flex justify-between mt-4">
        <Button
         isLoading={isLoadingOrderDetailupdate}
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
          disabled={currentStage === 0}
          onClick={handleStageChangeBack}
        >
          Retroceder
        </Button>
        <Button
        isLoading={isLoadingOrderDetailupdate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          disabled={currentStage === stages.length - 1}
          onClick={handleStageChangeNext}
        >
          Avanzar
        </Button>
      </div>

      <div className="flex justify-between mt-4">
        <Button
            isLoading={isLoadingOrderDetailupdate}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          onClick={handSaveOrder}
        >
          Guardar cambios
        </Button>
      </div>
    </div>
        </div>
    )  
}

export default OrderCard