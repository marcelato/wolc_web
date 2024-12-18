import React, { useEffect } from "react"
import Sidebar from "../../Component/Sidebar/Sidebar"
import { useSelector } from "react-redux";
import { Toaster } from "sonner";
import useCart from "../../Actions/useCart";
import moment from "moment";
import { Button } from "@nextui-org/react";
import { useNavigate } from "react-router-dom";

const Orders =()=>{

    const {OrderCart,isLoadingOrderCart,isErrorOrderCart} =useSelector((state) => state.Cart)
    const navigate = useNavigate();
    const {GetOrderCart} =useCart()

    useEffect(() =>{
        GetOrderCart()
    },[])

    const fillContent =()=>{
        if(isLoadingOrderCart){
          return <p>Cargando</p>
        }
        if(isErrorOrderCart){
          return <p>Error </p>
      }
      
      return  <tbody>
                    {OrderCart.map((order) => {

                        const HandlNextNavigate =() => {
                            navigate(`/Dashboard/orders/${order.ID}`);
                        }
    
                        const now = moment(order.order_date).format('YYYY-MM-DD HH:mm:ss');

                        return <tr key={order.ID} className="border-t border-gray-300">
                                    <td className="p-4">8B9CCE67-{order.ID}</td>
                                    <td className="p-4">{now}</td>
                                    <td className="p-4">{order.Username} {order.Lastname}</td>
                                    <td className="p-4">${parseInt(order.total_amount).toLocaleString("es-CO")}</td>
                                    <td className="p-4">
                                        <Button
                                            onClick={HandlNextNavigate}
                                            className=" w-full bg-gray-800 text-white  rounded-lg text-sm font-bold">
                                                Ver mas
                                            </Button> </td>
                                    </tr>
                            })}
                    </tbody>
    }

    return <>
        <div className="flex min-h-screen bg-gray-100  text-gray-800 ">
                <Sidebar/>
                <Toaster richColors position="top-right" />
                <div className="ml-64 flex-1 p-6 ">
                <div className=" bg-white shadow-md rounded-3xl p-6" >
                        <h3 className="text-xl font-bold mb-4">Órdenes recientes</h3>
                        <table className="w-full  rounded-3xl">
                            <thead>
                                <tr className="text-left">
                                <th className="p-4">Número de orden</th>
                                <th className="p-4">Fecha de compra</th>
                                <th className="p-4">Cliente</th>
                                <th className="p-4">Monto</th>
                                <th className="p-4">Opciones</th>
                                </tr>
                            </thead>
                        {fillContent()}
                        </table>
                </div>
                </div>
            </div>
    
    </>

}

export default Orders