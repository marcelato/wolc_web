import {createSlice} from "@reduxjs/toolkit"

export const initialState = {
    CreateCustomer: "",          // lista de productos creados
    isLoadingCustomer: false, // estado de carga para la creación de producto
    isErrorCustomer: false,     // estado de error en la creación de producto

    OrderCart: [],          // lista de productos creados
    isLoadingOrderCart: false, // estado de carga para la creación de producto
    isErrorOrderCart: false,     // estado de error en la creación de producto

    OrderDetail:[],
    isLoadingOrderDetail:false,
    isErrorOrderDetail:false,

    OrderDetailupdate:[],
    isLoadingOrderDetailupdate:false,
    isErrorOrderDetailupdate:false
};

export const CartSlice = createSlice({
    name:"Cart",
    initialState,
    reducers:{
        setisLoadingCreateCustomer:(state) =>{
            state.isLoadingCustomer=true
            state.isErrorCustomer= null
        },
        setcreatedCustomer:(state,action) =>{
            state.CreateCustomer =action.payload
            state.isLoadingCustomer= false
        },
        setIsErrorCustomer:(state) =>{
            state.isLoadingCustomer = false
            state.isErrorCustomer = true
        },

        setisLoadingOrderCart:(state) =>{
            state.isLoadingOrderCart=true
            state.isErrorOrderCart= null
        },
        setcreatedOrderCart:(state,action) =>{
            state.OrderCart =action.payload
            state.isLoadingOrderCart= false
        },
        setIsErrorOrderCart:(state) =>{
            state.isLoadingOrderCart = false
            state.isErrorOrderCart = true
        },
        setisLoadingOrderDetail:(state) =>{
            state.isLoadingOrderDetail=true
            state.isErrorOrderDetail= null
        },
        setcreatedOrderDeatil:(state,action) =>{
            state.OrderDetail =action.payload
            state.isLoadingOrderDetail= false
        },
        setIsErrorOrderDetail:(state) =>{
            state.isLoadingOrderDetail = false
            state.isErrorOrderDetail = true
        },



        setisLoadingOrderDetailupdate:(state) =>{
            state.isLoadingOrderDetailupdate=true
            state.isErrorOrderDetailupdate= null
        },
        setcreatedOrderDeatilupdate:(state,action) =>{
            state.OrderDetailupdate =action.payload
            state.isLoadingOrderDetailupdate= false
        },
        setIsErrorOrderDetailupdate:(state) =>{
            state.isLoadingOrderDetailupdate = false
            state.isErrorOrderDetailupdate = true
        },

        

    }   
})

export const {  
                //CreateCart
                setisLoadingCreateCustomer,
                setcreatedCustomer,
                setIsErrorCustomer,

                setisLoadingOrderCart,
                setcreatedOrderCart,
                setIsErrorOrderCart,

                setisLoadingOrderDetail,
                setcreatedOrderDeatil,
                setIsErrorOrderDetail,

                setisLoadingOrderDetailupdate,
                setcreatedOrderDeatilupdate,
                setIsErrorOrderDetailupdate

} = CartSlice.actions

export default  CartSlice.reducer