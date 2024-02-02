import React from "react";
import { Layout } from "../components";
import TestimonialForm from "./TestimonialForm";
import TestimonialsList from "./TestimonialsList";
import AdminPanel from "../components/AdminPanel";
import "./css/Admin.css";
import { useEffect } from "react";
import { Admin_bg } from "../assets";
const Admin = () => {
  useEffect(() => {
    const item = document.getElementById("bgimg");
    item.style.backgroundImage = `url(${Admin_bg})`;
    item.style.backgroundSize = "cover";
  }, []);
  return (
    <Layout>
      <div className="admin">
        <div className="admin-left">
          <AdminPanel />
        </div>
        <div className="admin-right" id="bgimg"></div>
      </div>
    </Layout>
  );
};

export default Admin;
