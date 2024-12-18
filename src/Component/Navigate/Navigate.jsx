import React from "react"
import { useNavigate } from "react-router-dom";

const Navigate= ({title}) =>{

    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1); // Esto te lleva a la página anterior
    };
  
    return (<button 
        onClick={handleGoBack}
        className="flex items-center z-50 space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
        <span className="text-gray-800" >{title}</span>
      </button>)

}

export default Navigate