import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";
import "./css/foot.css";
import { contact, mosque } from "../assets";
import { foot } from "../assets";
import { useEffect } from "react";
const Footer = () => {
  // useEffect(() => {
  //   const footr = document.getElementById("backs");
  //   console.log(footr);
  //   footr.style.backgroundImage = `url(${foot})`;
  //   footr.style.backgroundSize = "cover";
  // }, []);

  return (
    <div className="container" id="backs">
      <div className="top">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </div>
        <div className="contact">
          <img src={contact} className="ico" alt="Contact Us" />
          <span>+91 9431303037</span>
          <div>info@digitalgetwayllp.com</div>
        </div>
        <div className="address">
          <img src={mosque} className="ico" alt="Address" />
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea ducimus
            accusantium tenetur quas consequuntur velit facere error quae quam
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="bottom-left">
          <h1>About</h1>
          <p>happy Birthday</p>
        </div>
        <div className="bottom-right">
          <h1>Servies</h1>
          <span>SEO</span>
          <span>Content Wring</span>
          <span>Socaial Media</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
