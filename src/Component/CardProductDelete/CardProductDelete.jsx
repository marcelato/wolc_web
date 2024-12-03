
import React from "react"

const CardProductDelete =({ID,img,Name,Quantity,Price,username,description,action}) =>{

    return ( <tr key={ID} className="border-t rounded-3xl border-gray-700">
                <td className="p-4 flex items-center space-x-4">
                    <img
                        src="https://catalyst-demo.tailwindui.com/events/bear-hug.jpg"
                        alt={Name}
                        className="w-12 h-12 object-cover rounded-3xl"
                    />
                    <span className="ml-2">{username}</span>
                </td>
                <td className="p-4">{description}</td>
                <td className="p-4">
                    <img
                    src={img}
                    alt={Name}
                    className="w-12   h-12 object-cover rounded-3xl"
                    />
                </td>
                <td className="p-4">{Name}</td>
                <td className="p-4">Cerraduras</td>
                <td className="p-4">{Quantity}</td>
                <td className="p-4">${Price.toLocaleString("es-CO")}</td>
                <td className="p-4 text-[#f31260]"> {action =="DELETE"  && "Eliminado"}</td>    
            </tr>
    )
}

export default CardProductDelete