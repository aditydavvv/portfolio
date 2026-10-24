import React, { useEffect, useState } from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Component = (prop) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div id="home">
        <div className="cv">
          <a href="/#eabout" target="_blank" download className="btn1 download">
            <p>About Me</p>
          </a>
          <div className="btn1 talk">
            <a href="#contact">
              <p>Kickstart Your Project</p>
            </a>
          </div>
        </div>
        <div className="right">
          <a
            href="https://github.com/aditydavvv"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub className="right_social_icons" />
          </a>
          <a
            href="https://www.linkedin.com/in/aditya-yadav-a0a61232b"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin className="right_social_icons" />
          </a>
          <a
            href="https://leetcode.com/u/aditydavvv"
            target="_blank"
            rel="noreferrer"
          >
            <span className="right_social_icons" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>LC</span>
          </a>
        </div>
        <div className="box">
          <div
            className="text"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <h1>
              {prop.tone}
              <br />
              <span>{prop.ttwo}</span>
            </h1>
            <p style={{ fontFamily: "serif" }}>{"Software Developer"}</p>
            <p>
            I build web applications and software solutions to solve real problems and deliver reliable, efficient results.
            </p>
            <a href="#services">
              <button className="btn">Services</button>
            </a>
          </div>
          <div className="img">
            <video alt="" autoPlay loop muted id="video">
              <source src={prop.img} type="video/webm"/>
            </video>
          </div>
        </div>
        <div className="left">
          <a href="#eabout">Scroll down</a>
        </div>
      </div>
    </>
  );
};
export default Component;
