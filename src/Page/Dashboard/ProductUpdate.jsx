import React from  "react"
import Sidebar from "../../Component/Sidebar/Sidebar"
import FormProductUpdate from "../../Component/FormProducUpdate/FormProductUpdate"

const ProductUpdate =() =>{

    return <>
            <div className="flex min-h-screen   bg-[#18181b] text-white">
                <Sidebar/>
                    <div className="ml-64 flex-1 p-6 ">
                        <FormProductUpdate />
                    </div>
                </div>
            </>
}

export default  ProductUpdate