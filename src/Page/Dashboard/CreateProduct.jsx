import React from "react";
import Sidebar from "../../Component/Sidebar/Sidebar";
import UploadProduct from "../UploadProduct/UploadProduct";

const CreateProduct =() =>{

    return (
        <>
            <div className="flex min-h-screen   bg-[#18181b] text-white">
                <Sidebar/>
                <div className="ml-64 flex-1 p-6 ">
                    <UploadProduct />
                </div>
            </div>
      </>
    )

}

export default CreateProduct