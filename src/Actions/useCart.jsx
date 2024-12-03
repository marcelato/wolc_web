import { useDispatch } from "react-redux"
import HttpClient from "../HttpClient/HttpClient"
import { toast } from "sonner"
import { setIsErrorCustomer, setcreatedCustomer, setisLoadingCreateCustomer } from "../reducers/CartSilce"

const  useCart =() =>{

    const dispatch =  useDispatch()

    const PostCreateCart =async({Username,Lastname,ID_card,Phone,Email,total_amount}) =>{
        dispatch(setisLoadingCreateCustomer())
        try {
            const response = await HttpClient.PostCartProduct({Username,Lastname,ID_card,Phone,Email,total_amount})
            console.log(response)
           if(response){
                dispatch(setcreatedCustomer(response)) 
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

    return {
        PostCreateCart
    }

}

export default useCart