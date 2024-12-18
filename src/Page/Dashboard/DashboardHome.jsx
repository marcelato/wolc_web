import { useContext, useEffect } from "react";
import AutoProvider  from "../../Usecontext/CartProvider";
import useCart from "../../Actions/useCart";
import { useSelector } from "react-redux";
import moment from "moment";

const DashboardHome = () => {

    const {jwt} =useContext(AutoProvider)
    const {OrderCart,isLoadingOrderCart,isErrorOrderCart} =useSelector((state) => state.Cart)

    const {GetOrderCart} =useCart()

    useEffect(() =>{
        GetOrderCart()
    },[])

     const totalIngresos = OrderCart.reduce((acc, order) => acc + parseFloat(order.total_amount), 0);

    const ordenesPorCliente = OrderCart.reduce((acc, order) => {
      acc[order.Username] = (acc[order.Username] || 0) + 1;
      return acc;
    }, {});

    const promedioMonto = totalIngresos / OrderCart.length || 0;

    const totalOrdenes = OrderCart.length;

    const fillContent =()=>{

        if(isLoadingOrderCart){
          return <p>Cargando</p>
        }
        if(isErrorOrderCart){
          return <p>Error </p>
      }

      return    <tbody> 
                {OrderCart.slice(0, 2).map((order) => {

                const now = moment(order.order_date).format('YYYY-MM-DD HH:mm:ss');

                  return  <tr key={order.id} className="border-t border-gray-300">
                      <td className="p-4">#8B9CCE67-{order.ID}</td>
                      <td className="p-4">{now}</td>
                      <td className="p-4">{order.Username} {order.Lastname}</td>
                      <td className="p-4">${parseInt(order.total_amount ).toLocaleString()}</td>
                    </tr>
                    })}
              </tbody>
    }

   
    return (

    <div className="ml-64 flex-1 p-6  bg-gray-100  text-gray-800 ">
    <div className="flex-1 p-6">
    <h2 className="text-3xl font-bold mb-6">Bienvenido, {jwt?.name}</h2>
  
    <div className="grid bg-white shadow-md rounded-3xl p-6 grid-cols-3 gap-4 mb-6">
    <div className="p-4 rounded-3xl">
        <h3>Ingresos totales</h3>
        <p className="text-2xl font-bold">${parseInt(totalIngresos).toLocaleString("es-CO")}</p>
        <p className="text-green-500">+4.5% desde la semana pasada</p>
      </div>
      <div className="p-4 rounded-3xl">
        <h3>Valor promedio de pedido</h3>
        <p className="text-2xl font-bold">${parseInt(promedioMonto).toLocaleString("es-CO")}</p>
        <p className="text-red-500">-0.5% desde la semana pasada</p>
      </div>
      <div className="p-4 rounded-3xl">
        <h3>Entradas vendidas</h3>
        <p className="text-2xl font-bold">{totalOrdenes}</p>
        <p className="text-green-500">+4.5% desde la semana pasada</p>
      </div>
    
  </div>
    <div  className="bg-white shadow-md rounded-3xl p-6" >
      <h3 className="text-xl font-bold mb-4">Órdenes recientes</h3>
        <table className="w-full  rounded-3xl">
          <thead>
            <tr className="text-left">
              <th className="p-4">Número de orden</th>
              <th className="p-4">Fecha de compra</th>
              <th className="p-4">Cliente</th>
              <th className="p-4">Monto</th>
            </tr>
          </thead>
          {fillContent()}
        </table>
    </div>
     
    </div>
    </div>
    );
  };
  

  export default  DashboardHome