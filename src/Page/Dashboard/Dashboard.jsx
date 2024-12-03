import React, { useContext } from "react"
import { LiaProductHunt } from "react-icons/lia";
import HeaderIsLogin from "../../Component/Header/HeaderIsLogin";
import { useNavigate } from "react-router-dom";
import Sidebar from "../../Component/Sidebar/Sidebar";
import DashboardHome from "./DashboardHome";

const Dashboard = () => {

    const navigate = useNavigate();

    const HandlCheckout =() => {
        navigate("/UploadProduct");
    }

  return (
    <>
      <div className="flex h-screen bg-[#18181b] text-white">
      <Sidebar />
      <DashboardHome />
    </div>
    </>
  );
};

export default Dashboard;





  
  