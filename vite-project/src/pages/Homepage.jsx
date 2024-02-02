import React from "react";
import { Layout, Marquee, Testimonial } from "../components";
import "./css/Home.css";
import { vid } from "./assets";
import { useEffect } from "react";
import { cross, homepge } from "../assets";
import { Link } from "react-router-dom";
import { butt } from "../assets";
import { multimedia } from "../assets";
import { useState } from "react";
const Homepage = () => {
  const [popupVisible, setPopupVisible] = useState(false);

  const toggleWindow = () => {
    setPopupVisible(!popupVisible);
    if (popupVisible) {
      const pops = document.getElementById("popsup");
      pops.style.display = "block";
    }
  };
  const closeWind = () => {
    setPopupVisible(false);
    if (!popupVisible) {
      const pops = document.getElementById("popsup");
      pops.style.display = "none";
    }
  };

  useEffect(() => {
    const content = document.getElementById("video-background").play();
    const mainb = document.getElementById("main-bg");
    mainb.style.backgroundImage = `url(${homepge})`;
    mainb.style.backgroundSize = "cover";
    const footr = document.getElementById("btsbacks");
    // console.log(footr);
    footr.style.backgroundImage = `url(${butt})`;
    footr.style.backgroundSize = "cover";
  }, []);
  return (
    <Layout>
      <div className="main">
        <div className="topbody" id="main-bg">
          {/* <div className="leftbody">
            Sundown is a multi-disciplinary studio focused on creating unique,
            end-to-end experiences and environments.
          </div> */}
          <video id="video-background" autoplay loop muted playsInline>
            <source src={vid} type="video/mp4" />
          </video>
          <div className="rightbody">SPACES THAT INSPIRE</div>
        </div>
        <div className="bottombody" id="btsbacks">
          <div className="buzz">
            <div className="head">Here are a few of my favorite works</div>
            <div className="body">
              I possess expertise in creating captivating videos, including
              cosplay videos, while also demonstrating versatility in handling
              various video types and styles.{" "}
            </div>
            <div className="buttons">
              <div className="left_buttons">
                <Link className="btn" id="btn1" onClick={toggleWindow}>
                  <button>
                    <img src={multimedia} height="20px" alt="image" /> Reels
                    Content
                  </button>
                </Link>
                <Link className="btn" id="btn2" onClick={toggleWindow}>
                  <button>
                    <img src={multimedia} height="20px" alt="image" />{" "}
                    Documentary
                  </button>
                </Link>
                <Link className="btn" id="btn3" onClick={toggleWindow}>
                  <button>
                    <img src={multimedia} height="20px" alt="image" /> Tech
                    Videos
                  </button>
                </Link>
                <Link className="btn" id="btn4" onClick={toggleWindow}>
                  <button>
                    <img src={multimedia} height="20px" alt="image" /> Script
                    Writing
                  </button>
                </Link>
              </div>
              <div className="right_buttons">
                <Link className="btn" id="btn5" onClick={toggleWindow}>
                  <button>
                    <img src={multimedia} height="20px" alt="image" /> Manhwa
                    Videos
                  </button>
                </Link>
                <Link className="btn" id="btn6" onClick={toggleWindow}>
                  <button>
                    <img src={multimedia} height="20px" alt="image" /> Product
                    Animation
                  </button>
                </Link>
                <Link className="btn" id="btn7" onClick={toggleWindow}>
                  <button>
                    <img src={multimedia} height="20px" alt="image" /> 2D
                    Animation
                  </button>
                </Link>
                <Link className="btn" id="btn8" onClick={toggleWindow}>
                  <button>
                    <img src={multimedia} height="20px" alt="image" /> Blog
                    Writing
                  </button>
                </Link>
                <div className="popup-outer" id="popsup">
                  <img
                    id="cross"
                    src={cross}
                    onClick={closeWind}
                    alt="close_here"
                  />
                  <div className="popup"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="clicked-btn">
          <div className="buzz">
            <div className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore
              sit, veritatis molestiae, molestias laboriosam aspernatur deserunt
              magnam tempore quaerat error odio. Ipsum aut magnam sed
              perferendis? Iure repellat provident sint aperiam soluta,
              obcaecati modi voluptas enim reprehenderit aut amet qui minima
              error laudantium impedit quaerat sit porro maxime eos eaque
              cupiditate ipsam? Doloremque veritatis quo ex architecto rem ab
              tenetur. Officia iste qui ea harum in?
            </div>
          </div>
        </div>
        {/* <Marquee /> */}
        <Testimonial />
      </div>
    </Layout>
  );
};

export default Homepage;
