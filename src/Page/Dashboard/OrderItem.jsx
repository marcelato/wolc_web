import React, { useEffect } from 'react'
import Sidebar from '../../Component/Sidebar/Sidebar'
import {useParams } from 'react-router-dom';
import useCart from '../../Actions/useCart';
import { useSelector } from 'react-redux';
import moment from 'moment';
import OrderCard from '../../Component/OrderCard/OrderCard';

const OrderItem =() =>{
    const {id} =useParams()
    const {OrderDetail,isLoadingOrderDetail,isErrorOrderDetail} =useSelector((state) => state.Cart)

    const {GetOrderCartDeatil} =useCart()

    useEffect(() =>{
        GetOrderCartDeatil({id})
    },[])

    const fillContent =()=>{
        const now = moment(OrderDetail?.transition?.created_at).format('YYYY-MM-DD');

        if(isLoadingOrderDetail){
          return <p>Cargando</p>
        }
        if(isErrorOrderDetail){
          return <p>Error </p>
      }

      return  <div className="ml-64 flex-1 p-6 ">   
          <div className=" text-gray-800 min-h-screen flex justify-center items-center">
                      <div className="w-full  rounded-lg p-6">
                          <div className="flex bg-white shadow-md rounded-3xl p-6  justify-between items-center">
                          <h1 className="text-gray-600 text-sm">Orden 8B9CCE67-{OrderDetail?.customer?.ID}</h1>
                          <span
                          className={`text-white text-sm px-3 py-1 rounded-lg ${
                              OrderDetail?.transition?.status === "DECLINED"
                              ? "bg-red-500"
                              : OrderDetail?.transition?.status === "APPROVED"
                              ? "bg-green-500"
                              : "bg-gray-500"
                          }`}
                          >
                          {OrderDetail?.transition?.status === "DECLINED" && "Rechazado"}
                          {OrderDetail?.transition?.status === "APPROVED" && "Aprobado"}
                          </span>
                          </div>

                          <div className="mt-4 p-6 bg-white shadow-md rounded-3xl flex justify-between items-center ">
                                <div>
                                <p className='text-gray-600 text-sm' >${(parseInt(OrderDetail?.transition?.amount_in_cents) / 100).toLocaleString()}</p>
        
                                    <p className="text-gray-600 text-sm">{OrderDetail?.transition?.payment_method?.extra?.brand} •••• {OrderDetail?.transition?.payment_method?.extra?.last_four}</p>
                                </div>
                                <p className='text-gray-600 text-sm' >{now}</p>
                          </div>

                          
                          <div className="pt-4">
                            <OrderCard
                            OrderDetail={OrderDetail} />
                          </div>
                         
                          <div className="mt-6 p-6 bg-white shadow-md rounded-3xl    border-gray-700 pt-6">
                            <h2 className="text-gray-600 text-sm">Metodo de pago</h2>
                            <div className="mt-4 space-y-3">
                                <div className="flex justify-between">
                                <p className='text-gray-600 text-sm' >Transicion ID</p>
                                <p className='text-gray-600 text-sm'>{OrderDetail?.transition?.id}</p>
                                </div>
                                <div className="flex justify-between">
                                <p className='text-gray-600 text-sm' >Numero de tarjeta</p>
                                <p className='text-gray-600 text-sm' >•••• {OrderDetail?.transition?.payment_method?.extra?.last_four}</p>
                                </div>
                                <div className="flex justify-between">
                                <p className='text-gray-600 text-sm' >Tipo tarjeta</p>
                                <p className='text-gray-600 text-sm'>{OrderDetail.transition?.payment_method?.type}</p>
                                </div>
                            </div>
                          </div>  
                      </div>
                      </div>
          </div>
      
    }

    
    return <> 
        <div className="flex min-h-screen  bg-gray-100 text-gray-800">
        <Sidebar/>
        {fillContent()}
        </div>
        </>

}

export default OrderItem