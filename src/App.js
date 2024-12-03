import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Page/Home/Home';
import DetailProduct from './Page/DetailProduct/DetailProduct';
import UploadProduct from './Page/UploadProduct/UploadProduct';
import { Provider } from "react-redux";
import store from './Store/Store';
import { AutoProvider } from './Usecontext/CartProvider';
import Checkout from './Page/Checkout/Checkout';
import CheckoutEmail from './Page/CheckoutEmail/CheckoutEmail';
import Login from './Page/Login/Login';
import Dashboard from './Page/Dashboard/Dashboard';
import { PrivateRoute } from './Usecontext/PrivateRoute';
import Products from './Page/Dashboard/Products';
import CreateProduct from './Page/Dashboard/CreateProduct';
import ProductDelete from './Page/Dashboard/ProductDelete';
import ProductUpdate from './Page/Dashboard/ProductUpdate';
import LoadingPage from './Page/Home/LoadingPage';
import NoFound from './Page/Nofound/NoFound';
import { Toaster } from 'sonner';
import ShoppingCart from './Component/ShoppingCart/ShoppingCart';

function App() {

  return (
    <Provider store={store}  >
        <Toaster richColors position="top-right" />
        <AutoProvider>
        <BrowserRouter> 
          <Routes>
          <Route exact path="*" element={<NoFound/> } />
            <Route exact path="/" element={<LoadingPage/> } />
            <Route exact path="/Product" element={<Home/> } />
            <Route exact path="/DetailProduct/:id" element={<DetailProduct/> } />
            <Route exact path="/Checkout" element={<Checkout/> } />
            <Route exact path="/CheckoutEmail" element={<CheckoutEmail/> } />
            <Route exact path="/Login" element={<Login/> } />
            <Route exact path="/UploadProduct"  element={
              <PrivateRoute>
                  <UploadProduct />
              </PrivateRoute>}   />
            <Route
             path="/Dashboard/home"
            element={
              <PrivateRoute>
                <Dashboard />
                </PrivateRoute>}
            />


          <Route
             path="/Dashboard/products"
            element={
              <PrivateRoute>
                <Products />
                </PrivateRoute>}
            />

          <Route
             path="/Dashboard/products/delete"
            element={
              <PrivateRoute>
                <ProductDelete />
                </PrivateRoute>}
            />

            <Route
             path="/Dashboard/Product/CreateProduct"
            element={
              <PrivateRoute>
                <CreateProduct />
                </PrivateRoute>}
            />
            <Route
             path="/Dashboard/Product/update/:id"
            element={
              <PrivateRoute>
                <ProductUpdate />
                </PrivateRoute>}
            />
          </Routes> 
        </BrowserRouter>
      </AutoProvider>
      </Provider>
  );
}

export default App;
