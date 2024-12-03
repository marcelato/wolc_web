import  { useCallback, useContext, useState } from "react"
import  AutoProvider  from "../Usecontext/CartProvider"
import HttpClient from "../HttpClient/HttpClient"

const UseUsers =() =>{

    const {jwt,setJwt} = useContext(AutoProvider)
    const [state,setState] = useState({loading:false,error:false})
    
    const login = useCallback(({username,password,hotel}) =>{
        setState({loading:true,error:false})
        HttpClient.LoginService({username,password,hotel}).then(index =>{
            localStorage.setItem('jwt',JSON.stringify(index))
            setJwt(index)
            setState({loading:true,error:false})   
        }).catch((e) =>{
            setState({loading:false,error:true})
        })
    },[setJwt])

    return  {
        login,
        isLogin:Boolean(jwt),
        isLoading:state.loading,
        isError:state.error,
    }

}

export default  UseUsers