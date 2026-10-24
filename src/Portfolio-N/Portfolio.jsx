import React from "react";
import "./portfolio.css";
import { FaExternalLinkAlt, FaLinkedin } from "react-icons/fa";
import { IoMdSquare } from "react-icons/io";
import AOS from "aos";
import { FaGithub, FaDiscord, FaLinkedinIn } from "react-icons/fa";

import "aos/dist/aos.css";
import { useEffect } from "react";
const Portfolio = ({ ref4 }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  const data = [];

  const dataP = [
    {
      id: 1,
      name: "More projects coming soon",
      desc: "Currently building and will update this section with new projects.",
      live: "https://github.com/aditydavvv",
      github: "https://github.com/aditydavvv",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const dataTestimonials = [
  ];

  return (
    <>
      <section className="Portfolio-container" ref={ref4} id="portfolio">
        <div className="head_services" data-aos="fade-up">
          <h5>My recent work</h5>
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio_wraper">
          {data.map((val, ind) => (
            <div className="elements-box" data-aos="zoom-in" key={ind}>
              <div className={`desc-box ${ind % 2 === 0 ? 'align-left' : 'align-right'}`}>
                <div className="logos-links">
                  <p>{val.name}</p>
                  <IoMdSquare
                    style={{ transform: "rotate(45deg)" }}
                    className="point-stopper"
                  />
                  <a
                    href={val.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  {/* Render Discord icon if discord link exists */}
                    {val.discord && (
                      <a href={val.discord} target="_blank" rel="noopener noreferrer">
                        <FaDiscord /> {/* Assuming FaDiscord is the correct icon for Discord */}
                      </a>
                    )}

                    {/* Render GitHub icon if github link exists */}
                    {val.github && (
                      <a href={val.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    )
                  }
                  </a>
                  <a href={val.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="dec-p">
                  <p>{val.desc}</p>
                </div>
              </div>
              <div className="project-img">
                <img
                  src={
                    val.img
                      ? val.img
                      : "https://i.pinimg.com/564x/c6/8a/76/c68a76b53574a65a366b6556cdd8edf0.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          ))}
          <div className="head_services" data-aos="fade-up">
            <h5>Personal</h5>
            <h2>Projects</h2>
            {/* <h2>Portfolio</h2> */}
          </div>
          {dataP.map((val, ind) => (
            <div className="elements-box" data-aos="zoom-in" key={ind}>
              <div className={`desc-box ${ind % 2 === 0 ? 'align-left' : 'align-right'}`}>
                <div className="logos-links">
                  <p>{val.name}</p>
                  <IoMdSquare
                    style={{ transform: "rotate(45deg)" }}
                    className="point-stopper"
                  />
                  <a
                    href={val.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  {/* Render Discord icon if discord link exists */}
                  {val.discord && (
                      <a href={val.discord} target="_blank" rel="noopener noreferrer">
                        <FaDiscord /> {/* Assuming FaDiscord is the correct icon for Discord */}
                      </a>
                    )}

                    {/* Render GitHub icon if github link exists */}
                    {val.github && (
                      <a href={val.github} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    )
                  }
                  </a>
                  <a href={val.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="dec-p">
                  <p>{val.desc}</p>
                </div>
              </div>
              <div className="project-img">
                <img
                  src={
                    val.img
                      ? val.img
                      : "https://i.pinimg.com/564x/c6/8a/76/c68a76b53574a65a366b6556cdd8edf0.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          ))}
          <div className="head_services" data-aos="fade-up">
            <h5>Client</h5>
            <h2>Testimonials</h2>
            {/* <h2>Portfolio</h2> */}
          </div>
          {dataTestimonials.map((val, ind) => (
            <div className="elements-box" data-aos="zoom-in" key={ind}>
              <div className={`desc-box ${ind % 2 === 0 ? 'align-left' : 'align-right'}`}>
                <div className="logos-links">
                  <p>{val.name}</p>
                  <IoMdSquare
                    style={{ transform: "rotate(45deg)" }}
                    className="point-stopper"
                  />
                  <a
                    href={val.discord}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                  {/* Render Discord icon if discord link exists */}
                  {val.linkedin && (
                      <a href={val.discord} target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn /> {/* Assuming FaDiscord is the correct icon for Discord */}
                      </a>
                    )
                  }
                  </a>
                  <a href={val.live} target="_blank" rel="noopener noreferrer">
                    <FaExternalLinkAlt />
                  </a>
                </div>
                <div className="dec-p">
                  <p className="large_content">{val.desc}</p>
                </div>
              </div>
              <div className="project-img">
                <img
                  src={
                    val.img
                      ? val.img
                      : "https://i.pinimg.com/564x/c6/8a/76/c68a76b53574a65a366b6556cdd8edf0.jpg"
                  }
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
