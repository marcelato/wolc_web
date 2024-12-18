import { useDispatch } from "react-redux"
import HttpClient from "../HttpClient/HttpClient"
import { toast } from "sonner"
import { setIsErrorCustomer, setIsErrorOrderCart, setIsErrorOrderDetail, setIsErrorOrderDetailupdate, setcreatedCustomer, setcreatedOrderCart, setcreatedOrderDeatil, setcreatedOrderDeatilupdate, setisLoadingCreateCustomer, setisLoadingOrderCart, setisLoadingOrderDetail, setisLoadingOrderDetailupdate } from "../reducers/CartSilce"
import { useContext, useState } from "react"
import  AutoProvider  from "../Usecontext/CartProvider"

const  useCart =() =>{

    const dispatch =  useDispatch()
    const {setCartItems} = useContext(AutoProvider)
    const [isFlipped, setIsFlipped] = useState(false);

    const PostCreateCart =async({Username,Lastname,ID_card,Phone,Email,total_amount,  address,
                                city,
                                state,
                                postalCode,
                                cartItems,
                                number,
                                exp_month,
                                exp_year,
                                cvc,
                                card_holder}) =>{
        dispatch(setisLoadingCreateCustomer())
        try {
            const response = await HttpClient.PostCartProduct({Username,Lastname,ID_card,Phone,Email,total_amount,
                                                                address,
                                                                city,
                                                                state,
                                                                postalCode,
                                                                cartItems,
                                                                number,
                                                                exp_month,
                                                                exp_year,
                                                                cvc,
                                                                card_holder
            })
            console.log(response)
           if(response){
                dispatch(setcreatedCustomer(response)) 
                setCartItems([])
                toast.success("creado cliente creacdo correctamente")
           }else{
                dispatch(setIsErrorCustomer("no found"))
                toast.error("error")
           }
        } catch (error) {
                console.log(error)
                dispatch(setIsErrorCustomer("no found"))
                toast.error("error el el servicio",error)
        }
    }



    const GetOrderCart =async() =>{
        dispatch(setisLoadingOrderCart())
        try {
           const response = await HttpClient.GetOrdersCart()
           if(response){
                dispatch(setcreatedOrderCart(response)) 
               
           }else{
                dispatch(setIsErrorOrderCart("no found"))
               
           }
        } catch (error) {
                dispatch(setIsErrorOrderCart("no found"))
        
        }
    }

    const GetOrderCartDeatil =async({id}) =>{
        dispatch(setisLoadingOrderDetail())
        try {
           const response = await HttpClient.GetOrdersCartDetail({id})
           if(response){
               setIsFlipped(true)
                dispatch(setcreatedOrderDeatil(response))    
           }else{
                dispatch(setIsErrorOrderDetail("no found"))   
           }
        } catch (error) {
                dispatch(setIsErrorOrderDetail("no found"))
        }
    }


    const PostOrderCartDeatilUpdate =async({status,productId}) =>{
        dispatch(setisLoadingOrderDetailupdate())
        try {
           const response = await HttpClient.PostOrderUpdate({status,productId})
           if(response){
                dispatch(setcreatedOrderDeatilupdate(response))
                toast.success("Cambios guardados correctamente")    
           }else{
                dispatch(setIsErrorOrderDetailupdate("no found"))   
                toast.error("Error")    
           }
        } catch (error) {
                dispatch(setIsErrorOrderDetailupdate("no found"))
                toast.error("Error")   
        }
    }



    return {
        PostCreateCart,
        GetOrderCart,
        GetOrderCartDeatil,
        isFlipped,
        PostOrderCartDeatilUpdate
    }

}

export default useCart