import React from "react";
import web from "./img/7.png";
import { FaJava } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { FaReact } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaGitAlt, FaGithub } from "react-icons/fa";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = ({ ref3 }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="services" ref={ref3}>
        <div className="head_services" data-aos="fade-up">
          <h5>Discover my</h5>
          <h2>Skills</h2>
        </div>
        <div className="box box_feature" data-aos="zoom-in">
          <div className="left_box">
            <div className="text text_services">
              <h1>
                I build modern web applications with <span>clean and efficient</span> code
              </h1>
              <div className="feature">
                <div className="set_feature">
                  <li>
                    <FaJava className="feature_icons" />
                    <p> Java</p>
                  </li>
                  <li>
                    <FaHtml5 className="feature_icons" />
                    <p> HTML</p>
                  </li>
                  <li>
                    <FaCss3Alt className="feature_icons" />
                    <p> CSS</p>
                  </li>
                  <li>
                    <IoLogoJavascript className="feature_icons" />
                    <p> JavaScript</p>
                  </li>
                  <li>
                    <FaReact className="feature_icons" />
                    <p> React</p>
                  </li>
                  <li>
                    <SiSpring className="feature_icons" />
                    <p> Spring</p>
                  </li>
                  <li>
                    <FaGitAlt className="feature_icons" />
                    <p> Git</p>
                  </li>
                  <li>
                    <FaGithub className="feature_icons" />
                    <p> GitHub</p>
                  </li>
                </div>
              </div>
              <a href="#portfolio">
                <button className="btn">Portfolio</button>
              </a>
            </div>
          </div>
          <div className="img">
            <img src={web} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
