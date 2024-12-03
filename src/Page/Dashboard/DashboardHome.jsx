import { useContext } from "react";
import AutoProvider  from "../../Usecontext/CartProvider";

const DashboardHome = () => {

  const {jwt} =useContext(AutoProvider)

    const recentOrders = [
      { id: 3000, date: 'May 9, 2024', customer: 'Leslie Alexander', event: 'Bear Hug: Live in Concert', amount: '$80.00' },
      { id: 3001, date: 'May 5, 2024', customer: 'Michael Foster', event: 'Six Fingers — DJ Set', amount: '$299.00' },
      // agrega más datos según sea necesario
    ];
  
    return (

    <div className="ml-64 flex-1 p-6 ">
     <div className="flex-1 p-6">
        <h2 className="text-3xl font-bold mb-6">Bievenido, {jwt?.name}</h2>
        <div className="grid grid-cols-4 gap-4 mb-6">
          <div className=" p-4 rounded-3xl">
            <h3>Total revenue</h3>
            <p className="text-2xl font-bold">$2.6M</p>
            <p className="text-green-500">+4.5% from last week</p>
          </div>
          <div className=" p-4 rounded-3xl">
            <h3>Average order value</h3>
            <p className="text-2xl font-bold">$455</p>
            <p className="text-red-500">-0.5% from last week</p>
          </div>
          <div className=" p-4 rounded-3xl">
            <h3>Tickets sold</h3>
            <p className="text-2xl font-bold">5,888</p>
            <p className="text-green-500">+4.5% from last week</p>
          </div>
          <div className=" p-4 rounded-3xl">
            <h3>Pageviews</h3>
            <p className="text-2xl font-bold">823,067</p>
            <p className="text-green-500">+21.2% from last week</p>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-bold mb-4">Recent orders</h3>
          <table className="w-full  rounded-3xl">
            <thead>
              <tr className="text-left">
                <th className="p-4">Order number</th>
                <th className="p-4">Purchase date</th>
                <th className="p-4">Customer</th>
                <th className="p-4">Event</th>
                <th className="p-4">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentOrders.map((order) => (
                <tr key={order.id} className="border-t border-gray-700">
                  <td className="p-4">{order.id}</td>
                  <td className="p-4">{order.date}</td>
                  <td className="p-4">{order.customer}</td>
                  <td className="p-4">{order.event}</td>
                  <td className="p-4">{order.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
    );
  };
  

  export default  DashboardHome