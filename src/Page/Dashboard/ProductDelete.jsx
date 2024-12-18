import React, { useEffect } from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
import Navigate from "../../Component/Navigate/Navigate";
import { useSelector } from "react-redux";
import useProduct from "../../Actions/useProduct";
import { useNavigate } from "react-router-dom";
import CardProductDelete from "../../Component/CardProductDelete/CardProductDelete";

const ProductDelete =() =>{
  const {productHistory,isLoadingProductHistory,productHistoryError} =useSelector((state) => state.Product)

  
  const fillContent =()=>{
      if(isLoadingProductHistory){
        return <p>Cargando</p>
      }
      if(productHistoryError){
        return <p>Error </p>
    }
    
    return <tbody>
              {productHistory.map((product) => (
                <CardProductDelete key={product.ID} {...product} />
                ))}
            </tbody>
  }

    const {GetCreateProductHistory} =useProduct()

    const fetData =async() =>{
        await GetCreateProductHistory()
    }

    useEffect(() =>{
        fetData()
    },[])
    
    return <>
         <div className="flex min-h-screen   bg-gray-100  text-gray-800">
          <Sidebar/>
          <div className="ml-64 flex-1 p-6 ">   
             <Navigate title={"Productos"} /> 
            <h2 className="text-3xl  mb-6">Productos eliminados </h2>
            <div className="bg-white shadow-md rounded-3xl p-6" >
              <h3 className="text-xl font-bold  mb-4">Lista Productos eliminados</h3>
              <table className="w-full   rounded-3xl  ">
                <thead>
                  <tr className="text-left">
                    <th className="p-4">Usuario</th>
                    <th className="p-4">Acción</th>
                    <th className="p-4">Imagenes</th>
                    <th className="p-4">Producto Nombre</th>
                    <th className="p-4">Categoria</th>
                    <th className="p-4">Cantidad</th>
                    <th className="p-4">Precio</th>
                    <th className="p-4">Estado</th>
                  </tr>
                </thead>
                {fillContent()}
              </table>
            </div>
          </div>
        </div>
    </>
}

export default ProductDelete