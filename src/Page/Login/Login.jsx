import React, { useEffect, useState } from 'react';
import useFormValues from '../../Hooks/useFormValues';
import UseUsers from '../../Hooks/UseUsers';
import useValidation from '../../Hooks/useValidation';
import { useNavigate } from 'react-router-dom';
import Header from '../../Component/Header/Header';
import ShoppingCart from '../../Component/ShoppingCart/ShoppingCart';
import Footer from '../../Component/Footer/Footer';

const Login =() =>{

    const {login,isError,isLoading,isLogin} = UseUsers()
    const [formErrors, setFormErrors] = useState({});
    const [formValues, handleChange] = useFormValues();
    const validate = useValidation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate(formValues);
        setFormErrors(errors);
        if (Object.keys(errors).length === 0){
          login({username:formValues.username,password:formValues.passaword,hotel:formValues.userTypeHotel})
        }
        //login({ username: email, password }); // puedes incluir `password` y otros datos si es necesario
      };

    useEffect(() =>{
        if(isLogin){
            navigate("/Dashboard/home");
        }
    },[isLogin])

    return (
        <>
        <Header/>
        <ShoppingCart />
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
            <div className="min-h-screen flex   items-center justify-center ">
            <div className="max-w-md w-full space-y-8 p-10  bg-white shadow-2xl text-white rounded-3xl ">
                <div className="text-center">
                <img
                    className="mx-auto h-16 w-auto"
                    src="https://github.com/rolandoto/image-pms/blob/main/PNG/LG-AZUL.png?raw=true"
                    alt="Cloudbeds Logo"
                />
                <h2 className="mt-6 text-center text-1xl font-extrabold text-black">
                    Ingresar a su cuenta
                </h2>
                </div>
                <form className="mt-8 space-y-6"  onSubmit={handleSubmit}>
                <div className="rounded-md shadow-sm -space-y-px">
                    <div>
                    <label htmlFor="email-address" className="sr-only">
                        Correo electrónico
                    </label>
                    <input
                        type="text"
                        autoComplete="Nombre"
                        name="username"
                        value={formValues.username}
                        onChange={handleChange}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Usuario"
                    />
                        
                        {formErrors.username && <p className="text-red-500  text-1xl">{formErrors.username}</p>}
                    </div>
                    <div>
                    <label htmlFor="password" className="sr-only">
                        Contraseña
                    </label>
                    <input
                        type='password'
                        autoComplete="current-password"
                        name="passaword"
                        value={formValues.passaword}
                        onChange={handleChange}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        placeholder="Contraseña"
                    />
                    {formErrors.passaword && <p className="text-red-500 text-1xl">{formErrors.passaword}</p>}
                    </div>
                </div>
                
                <div>
                    <button
                    type="submit"
                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-lg text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 bg-gray-800"
                    >
                    Iniciar sesión
                    </button>
                </div>
                {isError && <p className="text-red-500 text-center text-1xl">Error de contraseña o usuario</p>}
                </form>
                <p className="mt-6 text-center text-black text-1xl" >
                    {isLoading  ? <h1>Cargando... </h1> : <span> Wolc</span>}
                </p>
            </div> 
            </div>
            <Footer />
            </>
    )
}   

export default  Login