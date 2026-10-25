import React from "react";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { FaHackerrank } from "react-icons/fa";
import { SiCodechef } from "react-icons/si";
import { SiLeetcode } from "react-icons/si";
import me from "./img/profile.jpg";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Eabout = ({ ref2 }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section id="eabout" ref={ref2}>
        <div id="intro">
          <div className="about_head_text" data-aos="fade-up">
            <h5>Get to know</h5>
            <h2>About Me</h2>
          </div>
          <div id="about">
            <div className="my_profile" data-aos="zoom-in">
              <div className="me">
                <img src={me} alt="Aditya Yadav" />
              </div>
            </div>
            <div className="about_left" data-aos="zoom-in">
              <div className="about_text">
                <div className="about_boxes" data-aos="zoom-in">
                  <FaAward className="contact_icons eabout_icons" />
                  <h5>Experience</h5>
                  <p>2+ Years Working</p>
                </div>
                <div className="about_boxes" data-aos="zoom-in">
                  <FiUsers className="contact_icons eabout_icons" />
                  <h5>Clients</h5>
                  <p>50+ Worldwide</p>
                </div>
                <div className="about_boxes" data-aos="zoom-in">
                  <VscFolderLibrary className="contact_icons eabout_icons" />
                  <h5>Projects</h5>
                  <p>60+ Completed</p>
                </div>
              </div>
              <div className="about_desc">
                <p>
                I'm Aditya Yadav, a software developer focused on building clean, efficient web applications. I enjoy turning ideas into functional, user-friendly solutions. <br/>
                <br/>Let's connect and build something great together.
                </p>
              </div>
              <a href="#contact">
                <button className="btn btn_about">Kickstart Your Project</button>{" "}
              </a>
            </div>
          </div>
        </div>
        {/* <div id="skills">
          <div className="about_head_text about_head_text_skill">
            <h5>What skill I have</h5>
            <h2>My Experience</h2>
          </div>
          <div className="skill_box">
            <div className="webd skill_box_list">
              <div className="skill_head">
                <h4>Development</h4>
              </div>
              <div className="skill_list">
                <div className="first_skill_list">
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      HTML<p>Intermediate</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      Javascrpit<p>Intermediate</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      React Js<p>Intermediate</p>
                    </small>
                  </li>
                </div>
                <div className="second_skill_list">
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      CSS<p>Experience</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      Bootstarp<p>Intermediate</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      Node Js<p>Intermediate</p>
                    </small>
                  </li>
                </div>
              </div>
            </div>
            <div className="cp skill_box_list">
              <div className="skill_head">
                <h4>Programming</h4>
              </div>
              <div className="skill_list">
                <div className="first_skill_list">
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      C<p>Basics</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      Data Structure<p>Intermediate</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      Object Oriented Programming<p>Intermediate</p>
                    </small>
                  </li>
                </div>
                <div className="second_skill_list">
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      C++<p>Experience</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      Algorithm<p>Intermediate</p>
                    </small>
                  </li>
                </div>
              </div>
            </div>
            <div className="cp skill_box_list">
              <div className="skill_head">
                <h4>Other Skills</h4>
              </div>
              <div className="skill_list">
                <div className="first_skill_list">
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      Git<p>Basic</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      Postman<p>Intermediate</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      competitive programming<p>Intermediate</p>
                    </small>
                  </li>
                </div>
                <div className="second_skill_list">
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      MongoDb<p>Intermediate</p>
                    </small>
                  </li>
                  <li>
                    <BsPatchCheckFill className="skill_verify_icons" />
                    <small>
                      Figma<p>Intermediate</p>
                    </websmall>
                  </li>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Eabout;
