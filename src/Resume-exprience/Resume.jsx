import React from "react";
import "./resume.css";
import { FaSquareFull } from "react-icons/fa";
import { BiSquare } from "react-icons/bi";
import { useEffect } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Resume = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="Resume-container">
        <div className="about_head_text" data-aos="fade-up">
          <h5>My work</h5>
          <h2>Experience</h2>
        </div>
        <div className="resume-wrapper">
        <div className="elemnt-resume-box">
            <div className="resumedesc" data-aos="flip-right">
              <a href="/" target="_blank">
                <div className="namelink">
                  <h4>Freelancer Backend Developer</h4>
                  <FaExternalLinkAlt />
                </div>
              </a>
              <span>
                <li>
                  {" "}
                  <FaSquareFull /> Python
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> SQL
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> Selenium
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> FastAPI
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> Playwright
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> Discord Bots
                </li>
              </span>
              <p>
                I specialize in creating efficient APIs, engaging discord bots & smart automations while focusing on practicality, adaptability and technological diversity.
              </p>
            </div>
            <div className="line-sep">
              <div className="top-stop">
                <FaSquareFull />
              </div>
              <BiSquare className="seprator" />
              <div className="top-bottom">
                <FaSquareFull />
              </div>
            </div>
            <div className="p-date">
              <span>2022</span>
              <span>-</span>
              <span>Present</span>
            </div>
          </div>

          <div className="elemnt-resume-box">
            <div className="resumedesc" data-aos="flip-left">
              <a
                href="https://nexalink.xyz"
                target="_blank"
              >
                <div className="namelink">
                  <h4>Technical Lead at nexalink.xyz - Freelance</h4>
                  <FaExternalLinkAlt />
                </div>
              </a>
              <span>
                <li>
                  {" "}
                  <FaSquareFull /> Python
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> Git
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> FastAPI
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> Discord Bot
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> Linux
                </li>
                <li>
                  {" "}
                  <FaSquareFull /> Web Scraping
                </li>
              </span>
              <p>
                Building Discord bots, APIs and Web Scrapers to ensure smooth operations in all our partnered communites!{" "}
              </p>
            </div>
            <div className="line-sep">
              <div className="top-stop">
                <FaSquareFull />
              </div>
              <BiSquare className="seprator" />
              <div className="top-bottom">
                <FaSquareFull />
              </div>
            </div>
            <div className="p-date">
              <span>Sep 2023</span>
              <span>-</span>
              <span>Present</span>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Resume;
