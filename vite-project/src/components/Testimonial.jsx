import React from "react";
import "./css/testimonial.css";
import { useEffect } from "react";
import { vid, cust1, cust2, cust3, cust4, cust5, cust6 } from "../pages/assets";
import axios from "axios";
import { useState } from "react";
const Testimonial = () => {
  const [tests, setTests] = useState([]);
  const generateStars = (rating) => {
    const stars = Array.from({ length: rating }, (_, index) => (
      <span key={index} role="img" aria-label="star">
        ⭐
      </span>
    ));
    return stars;
  };
  const loadFunc = async () => {
    try {
      const resp = await axios.get(
        "http://localhost:8080/api/v1/auth/loggedin-admin/admin-panel/testimonials"
      );
      console.log(resp.data);
      setTests(resp.data);
    } catch (error) {
      console.log(`Error Found ${error}`);
    }
  };

  useEffect(() => {
    loadFunc();
  }, []);
  const filteredTests = tests.filter((usr) => usr.homepage === 1);
  return (
    <>
      {filteredTests.length == 0 ? null : (
        <div className="Test">
          {filteredTests.map((usr) => (
            <div key={usr._id} className="customer">
              <div className="id">
                <div id="h1">{usr.custname}</div>
                <div>{usr.smallintro}</div>
              </div>
              <div className="review">Rating: {generateStars(usr.rating)}</div>
            </div>
          ))}
        </div>
      )}
      {/* <div className="customer" id={cust1}>
        <div className="id">
          <h1>Customer Name 1</h1>
          <div>About Project of Customer 1</div>
        </div>
        <div className="review">5star</div>
      </div> */}
      <video id="videos-background" autoplay loop muted playsInline>
        <source src={vid} type="video/mp4" />
      </video>
    </>
  );
};

export default Testimonial;
