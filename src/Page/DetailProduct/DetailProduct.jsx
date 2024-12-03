import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useProduct from "../../Actions/useProduct";
import { useSelector } from "react-redux";
import Header from "../../Component/Header/Header";
import  AutoProvider  from "../../Usecontext/CartProvider";
import HyperNavigation from "../../Component/HyperNavigation/HyperNavigation";
import ShoppingCart from "../../Component/ShoppingCart/ShoppingCart";
import Footer from "../../Component/Footer/Footer";

const DetailProduct = () => {
  const { addToCart } = useContext(AutoProvider);
  const {id} = useParams()
  const {productDetail,isLoadingProductDetail,productDetailError} =useSelector((state) => state.Product)
  const {GetCreateProductDetail} =useProduct()
  const {images} =productDetail
  
  const fetData =async() =>{
    await GetCreateProductDetail({id})
  }

  useEffect(() =>{
    fetData()
  },[id])

  const [selectedImage, setSelectedImage] = useState(() => {
    // Verifica que `images` esté definido y sea un array antes de buscar
    if (Array.isArray(images) && images.length > 0) {
      // Encuentra la imagen principal, si existe
      const mainImage = images.find(image => image.isMain);
      return mainImage ? mainImage.img : images[0].img; // Si existe imagen principal, la devuelve, sino, la primera imagen
    }
    // Si no hay imágenes o `images` es undefined/null, se retorna null o una imagen por defecto
    return null; // Aquí puedes colocar una URL por defecto si lo deseas
  });


  const routeTitles = {
    DetailProduct: "Detalle del Producto",
    57: "Producto 57",
    Checkout: "Pagar",
  };

  const fillContent =()=>{
    if(isLoadingProductDetail){
      return <p>Cargando</p>
    }
    if(productDetailError){
      return <p>Error </p>
  }

  return   <>
          <ShoppingCart />
          <div className=" mt-32 min-h-screen p-6">
            
            <div className="max-w-5xl mx-auto bg-white p-6 rounded-3xl shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <div className="flex flex-col gap-2">
                    {images?.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Producto ${index + 1}`}
                        onClick={() => setSelectedImage(img)}
                        className={`w-16 h-16 object-cover cursor-pointer rounded-lg ${
                          selectedImage === img ? 'border-2 border-black' : 'border'
                        }`}
                      />
                    ))}
                  </div>
              <div className="flex-1">
                 <img 
                      src={selectedImage || productDetail?.img || '/default-image.jpg'} // Imagen por defecto si no hay imagen seleccionada
                      alt="Imagen seleccionada"
                      className="w-full h-full object-contain"
                    />
              </div>
            </div>
                <div>
                  <p className="text-gray-500 uppercase">{productDetail.Brand}</p>
                  <h2 className="text-2xl font-semibold">{productDetail.Name}</h2>
                  <p className="text-gray-600">REF: {productDetail.SupplierReference}</p>
                  <p className="text-gray-600">SKU: FF-{productDetail.Code}</p>
                  <p className="text-3xl font-bold my-4">$  {productDetail?.Price?.toLocaleString('es-CO')} </p>
                  <button  onClick={() => addToCart(productDetail)}   className="w-full bg-[#f3f4f6] text-black py-3 rounded-lg font-semibold"  >
                    Agregar al Carro
                  </button>
                </div>
              </div>
              {/* Sección de especificaciones y descripción */}
              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Especificaciones</h3>
                <table className="w-full text-sm mt-4">
                  <tbody>
                    <tr>
                      <td className="p-2 font-semibold">Código</td>
                      <td className="p-2">0000047681</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-semibold">Marca</td>
                      <td className="p-2"> {productDetail.Brand}</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-semibold">Presentación</td>
                      <td className="p-2">Presentación 1 Und</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-semibold">Referencia proveedor</td>
                      <td className="p-2">HC-121</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold">Información Adicional</h3>
                <p className="mt-4">
                  <strong>Descripción:</strong><br />
                 {productDetail.Description}
                </p>
              </div>
            </div>
          </div>
          </>

}

 
  return (

    <>
        <Header/>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        >
        <div
        style={{
            clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#001f3f] to-[#005f9e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-40"
        >
        <div
        style={{
            clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#001f3f] to-[#005f9e] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
        </div>
        {fillContent()}
        <Footer />
     </>
  );
};

export default DetailProduct;
