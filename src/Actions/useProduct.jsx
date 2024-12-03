import { useDispatch } from "react-redux"
import HttpClient from "../HttpClient/HttpClient"
import { toast } from "sonner"
import { setProduct, setProductDelete, setProductDeleteError, setProductDetail, setProductDetailError, setProductError, setProductHistory, setProductHistoryError, setcreateProductError, setcreatedProduct, setisLoadingCreateProduct, setisLoadingProductDelete, setisLoadingProductDetail, setisLoadingProductHistory, setisLoadingProducts } from "../reducers/ProductSlice"

const useProduct =() =>{

    const dispatch =  useDispatch()
    
    const PostCreateProduct =async({name,description,Supplier_reference,Brand,quantity,images,price,fecha,code,type,ID}) =>{
      
        dispatch(setisLoadingCreateProduct())
        try {
           const response = await HttpClient.PostCreateProduct({name,description,Supplier_reference,Brand,quantity,images,price,fecha,code,type,ID})
           if(response){
                dispatch(setcreatedProduct(response)) 
                toast.success("creado el producto correctamente asdsadsa")
                window.location.href="/Dashboard/products"
           }else{
            dispatch(setcreateProductError("no found"))
                    toast.error("error")
           }
        } catch (error) {
                console.log(error)
                    dispatch(setcreateProductError("no found"))
                    toast.error("error el el servicio",error)
        }
    }

    
    const GetCreateProduct =async() =>{
        dispatch(setisLoadingProducts())
        try {
           const response = await HttpClient.GetProduct()
           if(response){
                dispatch(setProduct(response)) 
               
           }else{
            dispatch(setProductError("no found"))
                    toast.error("error")
           }
        } catch (error) {
                console.log(error)
                    dispatch(setProductError("no found"))
                    toast.error("error el el servicio",error)
        }
    }

    const GetCreateProductHistory =async() =>{
        dispatch(setisLoadingProductHistory())
        try {
           const response = await HttpClient.GetProductHistory()
           if(response){
                dispatch(setProductHistory(response)) 
              
           }else{
            dispatch(setProductHistoryError("no found"))
                    toast.error("error")
           }
        } catch (error) {
                console.log(error)
                    dispatch(setProductHistoryError("no found"))
                    toast.error("error el el servicio",error)
        }
    }

    const GetCreateProductDetail =async({id}) =>{
        dispatch(setisLoadingProductDetail())
        try {
           const response = await HttpClient.GetProductDetail({id})
           if(response){
                dispatch(setProductDetail(response)) 
               
           }else{
                dispatch(setProductDetailError("no found"))
                toast.error("error")
           }
        } catch (error) {
                dispatch(setProductDetailError("no found"))
                toast.error("error el el servicio",error)
        }
    }

    const PostDeletPorductDelete =async({ID,user_id,record_id}) =>{
        dispatch(setisLoadingProductDelete())
        try {
           const response = await HttpClient.PostProductDelete({ID,user_id,record_id})
           if(response){
                dispatch(setProductDelete(response)) 
                toast.success("Eliminado correctamente")
           }else{
                dispatch(setProductDeleteError("no found"))
                toast.error("error el borrar el producto")
           }
        } catch (error) {
                dispatch(setProductDeleteError("no found"))
                toast.error("error el el servicio",error)
        }
    }

    return {PostCreateProduct,
            GetCreateProduct,
            GetCreateProductDetail,
            PostDeletPorductDelete,
            GetCreateProductHistory
    }

}

export default useProduct