import React from "react";
import web from "./img/7.png";
import { FaPython } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import { FaSearchengin } from "react-icons/fa";
import { SiFastapi } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";
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
          <h2>Services</h2>
        </div>
        <div className="box box_feature" data-aos="zoom-in">
          <div className="left_box">
            <div className="text text_services">
              <h1>
                Each of my clients vouch for the consistently top notch <span>solutions</span> that I deliver
              </h1>
              <div className="feature">
                <div className="set_feature">
                  <li>
                    <FaPython className="feature_icons" />
                    <p> Python</p>
                  </li>
                  <li>
                    <FaDiscord className="feature_icons" />
                    <p> Discord Bot Development</p>
                  </li>
                  <li>
                    <FaDatabase className="feature_icons" /> <p>Databases</p>
                  </li>
                  <li>
                    <SiFastapi className="feature_icons" />
                    <p> APIs</p>
                  </li>
                  <li>
                    <FaSearchengin className="feature_icons" />
                    <p> Web Scraping</p>
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
