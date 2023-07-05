import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Home.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";

const Home = () => {
  useEffect(() => {
    const handleMouseMoveOver = () => {
      document.querySelector(".center-up").style.height = "60vh";
      document.querySelector(".center-down").style.height = "60vh";
      document.querySelector(".upper-h1").style.filter = "blur(5px)";
      document.querySelector(".lower-h1").style.filter = "blur(5px)";

      const link = document.querySelectorAll(".custom-link");
      link.forEach((link) => {
        link.style.opacity = "1";
      });

      const images = document.querySelectorAll(".img");
      images.forEach((image) => {
        image.style.width = "30vh";
        image.style.height = "20vh";
        image.style.opacity = "1";
      });
    };

    const handleMouseMoveOut = () => {
      document.querySelector(".center-up").style.height = "0vh";
      document.querySelector(".center-down").style.height = "0vh";
      document.querySelector(".upper-h1").style.filter = "blur(0px)";
      document.querySelector(".lower-h1").style.filter = "blur(0px)";

      const link = document.querySelectorAll(".custom-link");
      link.forEach((link) => {
        link.style.opacity = "0";
      });

      const images = document.querySelectorAll(".img");
      images.forEach((image) => {
        image.style.width = "0vh";
        image.style.height = "0vh";
        image.style.opacity = "0";
      });
    };

    const homeAreaRight = document.querySelector(".home-area-right");
    homeAreaRight.addEventListener("mousemove", handleMouseMoveOver);
    homeAreaRight.addEventListener("mouseout", handleMouseMoveOut);

    // Clean up the event listeners when the component unmounts
    return () => {
      homeAreaRight.removeEventListener("mousemove", handleMouseMoveOver);
      homeAreaRight.removeEventListener("mouseout", handleMouseMoveOut);
    };
  }, []);

  const images = [img1, img2, img3];
  const images2 = [img3, img2, img1];
  const images3 = [img2, img3, img1];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, [images.length]);

  return (
    <div className="home">
      <div className="home-container">
        <div className="home-area-left">
          <div className="text-area">
            <h1>Hi,</h1>
            <h2>
              I'm
              <span className="name-k">K</span>
              rishna
            </h2>
            <h4>Full Stack Developer | Student </h4>
          </div>
        </div>
        <div className="home-area-right">
          <div className="upper">
            <h1 className="upper-h1">Explore</h1>
          </div>
          <div className="center-up"></div>
          <div className="center-down"></div>
          <div className="lower">
            <h1 className="lower-h1">Me</h1>
          </div>
          <div id="one" className="img-all img-one">
            <img
              className="img img-1"
              src={images[currentIndex]}
              alt="Changing"
            />
            <Link to="/about" className="custom-link">
              <h1>Projects</h1>
            </Link>
          </div>
          <div id="two" className="img-all img-two">
            <img
              className="img img-2"
              src={images2[currentIndex]}
              alt="Changing"
            />
            <Link to="/about" className="custom-link">
              <h1>Skills</h1>
            </Link>
          </div>
          <div id="three" className="img-all img-three">
            <img
              className="img img-3"
              src={images3[currentIndex]}
              alt="Changing"
            />
            <Link to="/about" className="custom-link">
              <h1>Photos</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
