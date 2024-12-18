import React, { useContext, useEffect } from "react"
import { useSelector } from "react-redux"
import useProduct from "../../Actions/useProduct"
import { Link, useNavigate } from "react-router-dom"
import AutoProvider from "../../Usecontext/CartProvider"

const SliceProduct =() =>{

    const {products,isLoadingProducts,productsError} =useSelector((state) => state.Product)
    const {GetCreateProduct} =useProduct()
    const { addToCart } = useContext(AutoProvider); // Obtener la función para agregar al carrito

 

    const navigate = useNavigate();

    const HandlProduct =() => {
        navigate("/product");
    }

    const fetData =async() =>{
        await GetCreateProduct()
    }
  
    useEffect(() =>{
        fetData()
    },[])
  
  const fillContent =()=>{
        if(isLoadingProducts){
        return <p>Cargando</p>
        }
        if(productsError){
        return <p>Error </p>
        }

        return  <div className="">
                    <div className="mx-auto mt-10  max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Products</h2>
                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {products.slice(0, 4).map((product) => (
                        <div  className="group">
                            <Link
                                to={`/DetailProduct/${product.ID}`}
                                className="group cursor-pointer relative  p-2 rounded-3xl"
                                >
                                <img
                                    alt={product.Name}
                                    src={product.img}
                                    className="aspect-square shadow-2xl  w-full rounded-3xl object-cover group-hover:opacity-75 xl:aspect-[7/8]"
                                />
                                </Link>
                
                            <h3 className="mt-4 text-sm text-gray-700">{product.Name}</h3>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.Code}</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">{product.Brand}</p>
                            <p className="mt-1 text-lg font-medium text-gray-900">${product.Price.toLocaleString("es-CO")}</p>
                            <button
                                 onClick={() => addToCart(product)}
                                className="mt-4 w-full bg-gray-800 text-white text-sm font-medium py-4 px-4 rounded-lg ">
                            Agregar al carrito
                            </button>
                        </div>
                        ))}
                    </div>
                        <div className="flex justify-center mt-7" >
                            <button
                                onClick={HandlProduct}
                                className="px-4    py-2  text-white  rounded-lg shadow-md bg-gray-800 ocus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
                                Ver más
                            </button>
                        </div>
                    </div>
                 </div>
            
    }
    return  <>{fillContent()} </>
}

export default SliceProduct