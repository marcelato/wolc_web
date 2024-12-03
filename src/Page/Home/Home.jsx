import React, { useEffect } from "react"
import Header from "../../Component/Header/Header"
import { useSelector } from "react-redux";
import useProduct from "../../Actions/useProduct";
import ProductCard from "../../Component/CardProduct/ProductCard";
import Footer from "../../Component/Footer/Footer";
import ShoppingCart from "../../Component/ShoppingCart/ShoppingCart";
const Home =() =>{
const {products,isLoadingProducts,productsError} =useSelector((state) => state.Product)
const {GetCreateProduct} =useProduct()

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

  return    <ProductCard products={products} /> 
          
  }
  
    return <>
        <Header/>
        <ShoppingCart/>
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

}

export default Home