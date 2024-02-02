import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Homepage from "./pages/Homepage.jsx";
import About from "./pages/About.jsx";
import Testimonials from "./pages/Testimonials";
import Error404 from "./pages/Error404.jsx";
import { useEffect } from "react";
import Login from "./pages/Login.jsx";
import Admin from "./pages/Admin.jsx";
import Register from "./pages/Register.jsx";
import TestimonialForm from "./pages/TestimonialForm.jsx";
import TestimonialList from "./pages/TestimonialsList.jsx";
import UserPanel from "./pages/UserPanel.jsx";
import DelTestimonial from "./pages/DelTestimonial.jsx";
import UpdateTestimonial from "./pages/UpdateTestimonial.jsx";

function App() {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]");
    const cursorBorder = document.querySelector("[data-cursor-border]");
    window.addEventListener("mousemove", function (e) {
      const posX = e.clientX;
      const posY = e.clientY;

      cursorDot.style.left = `${posX}px`;
      cursorDot.style.top = `${posY}px`;
      cursorBorder.style.left = `${posX}px`;
      cursorBorder.style.top = `${posY}px`;
    });
  }, []);

  return (
    <BrowserRouter>
      <div className="cursor-dot" data-cursor-dot></div>
      <div className="cursor-border" data-cursor-border></div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/aboutus" element={<About />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/login-admin" element={<Login />} />
        <Route path="/register-admin" element={<Register />} />
        <Route path="/loggedin-admin/admin-panel" element={<Admin />} />
        <Route
          path="/loggedin-admin/admin-panel/add-testimonials"
          element={<TestimonialForm />}
        />
        <Route
          path="/loggedin-admin/admin-panel/del-testimonials"
          element={<DelTestimonial />}
        />
        <Route
          path="/loggedin-admin/admin-panel/update-testimonials"
          element={<UpdateTestimonial />}
        />
        <Route
          path="/loggedin-admin/admin-panel/get-testimonials"
          element={<TestimonialList />}
        />
        <Route
          path="/loggedin-admin/admin-panel/show-users"
          element={<UserPanel />}
        />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
