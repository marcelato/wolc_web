import {createSlice} from "@reduxjs/toolkit"

export const initialState = {
    CreateCustomer: [],          // lista de productos creados
    isLoadingCustomer: false, // estado de carga para la creación de producto
    isErrorCustomer: false,     // estado de error en la creación de producto
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

    }   
})

export const {  
                //CreateCart
                setisLoadingCreateCustomer,
                setcreatedCustomer,
                setIsErrorCustomer

} = CartSlice.actions

export default  CartSlice.reducer