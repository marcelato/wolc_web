
import {configureStore } from '@reduxjs/toolkit'
import {ProductSlice} from '../reducers/ProductSlice';
import {CartSlice} from '../reducers/CartSilce';

const persistanceLocalStorageMiddleware = (store) => (next) => (action) => {
	next(action);
	localStorage.setItem("redux", JSON.stringify(store.getState()));
};

const store = configureStore ({
    reducer:{
    Product:ProductSlice.reducer,
    Cart:CartSlice.reducer
},
    devTools:true,
    middleware: [persistanceLocalStorageMiddleware],
})

export const RootState = store.getState

export const  AppDispatch = typeof store.dispatch

export default store