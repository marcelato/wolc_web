import { useSelector } from "react-redux";
import Sidebar from "../../Component/Sidebar/Sidebar";
import useProduct from "../../Actions/useProduct";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@nextui-org/react";
import { Toaster } from "sonner";
import CardProductDashboard from "../../Component/CardProductDashboard/CardProductDashboard";

const Products = () => {

    const {products,isLoadingProducts,productsError} =useSelector((state) => state.Product)
    const {productDelete} =useSelector((state) => state.Product)
    const {GetCreateProduct} =useProduct()

    const fetData =async() =>{
        await GetCreateProduct()
    }

    useEffect(() =>{
        fetData()
    },[productDelete])
    
    const navigate = useNavigate();

    const HandlNextNavigate =() => {
        navigate("/Dashboard/products/delete");
    }

    const HandlNextCreateProduct =() => {
      navigate("/Dashboard/Product/CreateProduct");
  }


    const fillContent =()=>{
        if(isLoadingProducts){
          return <p>Cargando</p>
        }
        if(productsError){
          return <p>Error </p>
      }
      
      return <tbody>
                {products.map((product) => (
                  <CardProductDashboard key={product.ID} {...product} />
                  ))}
              </tbody>
    }
    return (
        <>
        <Toaster richColors position="top-right" />
        <div className="flex min-h-screen   bg-[#18181b] text-white">
          <Sidebar/>
          <div className="ml-64 flex-1 p-6 ">
            <h2 className="text-3xl  text-white mb-6">Productos </h2>
            <div>
              <h3 className="text-xl font-bold text-white mb-4">Lista Productos</h3>
              <table className="w-full   rounded-3xl  text-white">
                <thead>
                  <tr className="text-left">
                    <th className="p-4">Imagenes</th>
                    <th className="p-4">Producto Nombre</th>
                    <th className="p-4">Categoria</th>
                    <th className="p-4">Cantidad</th>
                    <th className="p-4">Precio</th>
                    <th className="p-4">Acción</th>
                  </tr>
                </thead>
                {fillContent()}
                <div className="flex space-x-4">
                      <Button 
                        color="success"
                        onClick={HandlNextCreateProduct}
                        className="text-white bg-green-500 hover:bg-green-600 focus:ring-4 focus:ring-green-300 font-medium rounded-lg px-4 py-2 transition duration-300">
                        Crear nuevo producto
                      </Button>
                      <Button 
                        color="danger"
                        onClick={HandlNextNavigate}
                        className="text-white ocus:ring-4  font-medium rounded-lg px-4 py-2 transition duration-300">
                        Productos eliminados
                      </Button>
                </div>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  };
  export default Products
  
