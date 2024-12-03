import {createSlice} from "@reduxjs/toolkit"

export const initialState = {
    createdProducts: [],          // lista de productos creados
    isLoadingCreateProduct: false, // estado de carga para la creación de producto
    createProductError: false,     // estado de error en la creación de producto

    products: [],          // lista de productos creados
    isLoadingProducts: false, // estado de carga para la creación de producto
    productsError: false,

    productDetail: [],          // lista de productos creados
    isLoadingProductDetail: false, // estado de carga para la creación de producto
    productDetailError: false,

    productDelete:false,
    isLoadingProductDelete:false,
    productDeleteError:false,


    productHistory:[],
    isLoadingProductHistory:false,
    productHistoryError:false
};

export const ProductSlice = createSlice({
    name:"Producto",
    initialState,
    reducers:{
        setisLoadingCreateProduct:(state) =>{
            state.isLoadingCreateProduct=true
            state.createProductError= null
        },
        setcreatedProduct:(state,action) =>{
            state.createdProducts =action.payload
            state.isLoadingCreateProduct= false
        },
        setcreateProductError:(state) =>{
            state.isLoadingCreateProduct = false
            state.createProductError = true
        },

        //products
        setisLoadingProducts:(state) =>{
            state.isLoadingProducts=true
            state.productsError= null
        },
        setProduct:(state,action) =>{
            state.products =action.payload
            state.isLoadingProducts= false
        },
        setProductError:(state) =>{
            state.isLoadingProducts = false
            state.productsError = true
        },

        //detail product
        setisLoadingProductDetail:(state) =>{
            state.isLoadingProductDetail=true
            state.productDetailError= null
        },
        setProductDetail:(state,action) =>{
            state.productDetail =action.payload
            state.isLoadingProductDetail= false
        },
        setProductDetailError:(state) =>{
            state.isLoadingProductDetail = false
            state.productDetailError = true
        },
        //delete product
        setisLoadingProductDelete:(state) =>{
            state.productDelete =false
            state.isLoadingProductDelete = true
            state.productDeleteError = false
        },
        setProductDelete:(state,action) =>{
            state.productDelete =true
            state.isLoadingProductDelete= false
        },
        setProductDeleteError:(state) =>{
            state.isLoadingProductDelete = false
            state.productDetailError = true
        },



         //history product
        setisLoadingProductHistory:(state) =>{
            state.isLoadingProductHistory = true
            state.productHistoryError = false
        },
        setProductHistory:(state,action) =>{
            state.productHistory =action.payload
            state.isLoadingProductHistory= false
        },
        setProductHistoryError:(state) =>{
            state.isLoadingProductHistory = false
            state.productHistoryError = true
        },
        
    }   
})


export const {  
                //CreateProduct
                setisLoadingCreateProduct,
                setcreatedProduct,
                setcreateProductError,

                //product
                setisLoadingProducts,
                setProduct,
                setProductError,

                //productDetail
                setisLoadingProductDetail,
                setProductDetail,
                setProductDetailError,


                //delete
                setisLoadingProductDelete,
                setProductDelete,
                setProductDeleteError,

                //history
                setisLoadingProductHistory,
                setProductHistory,
                setProductHistoryError

} = ProductSlice.actions

export default  ProductSlice.reducer