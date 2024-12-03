import { Link, useLocation } from "react-router-dom";
import React from "react"
const HyperNavigation = () => {
  const location = useLocation();

  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <header className="border-b">
    <div className=" flex justify-center items-center gap-2 px-4 py-2 text-sm text-gray-600 ">
    <div className="bg-white border-b shadow-sm">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600">
        <Link to="/" className="flex items-center text-gray-800 hover:underline">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5 mr-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 9.75V6a3 3 0 013-3h12a3 3 0 013 3v3.75"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 15.75L7.5 12l-3 3.75"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21h-9m6 0a6 6 6 0 10-12 0h12z"
            />
          </svg>
          Inicio
        </Link>
        {pathSegments.length > 0 && <span className="text-gray-500">›</span>}
      </div>
    </div>
    </div>
    </header>
  );
};


export default HyperNavigation

