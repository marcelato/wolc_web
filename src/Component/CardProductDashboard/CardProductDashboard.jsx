import { Button } from "@nextui-org/react"
import React, { useContext } from "react"
import useProduct from "../../Actions/useProduct"
import { useSelector } from "react-redux"
import  AutoProvider  from "../../Usecontext/CartProvider"
import { useNavigate } from "react-router-dom"

const CardProductDashboard =({ID,img,Name,Quantity,Price}) =>{
    const {isLoadingProductDelete} =useSelector((state) => state.Product)
    const {jwt} =useContext(AutoProvider)
    const {PostDeletPorductDelete} =useProduct()
    const navigate = useNavigate();

    const HandlNextUpdate =() => {
        navigate(`/Dashboard/Product/update/${ID}`);
    }

    const HandDeleteProduct =async() =>{
        await PostDeletPorductDelete({ID,user_id:jwt?.ID,record_id:ID})
    }

    return <>
            <tr key={ID} className="border-t border-gray-300 rounded-3xl ">
                <td className="p-4">
                    <img
                    src={img}
                    alt={Name}
                    className="w-12 h-12 object-cover rounded-3xl"
                    />
                </td>
                <td className="p-4">{Name}</td>
                <td className="p-4">Cerraduras</td>
                <td className="p-4">{Quantity}</td>
                <td className="p-4">${Price.toLocaleString("es-CO")}</td>
                <td className="p-4 flex space-x-2">
                
                <Button 
                    onClick={HandlNextUpdate}
                    className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-4 py-2 transition duration-300">
                    Actualizar
                </Button>
                
                <Button
                    onClick={HandDeleteProduct}
                    isLoading={isLoadingProductDelete}
                    color="danger"
                    className="">
                    Eliminar
                </Button>
                </td>
            </tr>
        </>


}

export default CardProductDashboard