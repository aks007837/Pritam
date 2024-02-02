import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import "./css/nav.css";
const Navbar = () => {
  return (
    <nav className="nav">
      <div className="logo left">
        <Link to="/">
          <img id="mainlogo" src={logo} alt="HTSL" />
        </Link>
      </div>
      <div className="right">
        <Link to="/">
          <button id="btn">Home</button>
        </Link>
        <Link to="/testimonials">
          <button id="btn">Testimonials</button>
        </Link>
        <Link to="/aboutus">
          <button id="btn">About Us </button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
