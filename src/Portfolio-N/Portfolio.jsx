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
  const data = [
  ];
    // {
    //   id: 4,
    //   name: "InHouse Queue Bot - Turbosmurfs",
    //   desc: "Built a discord bot to organize queues, used Riot API for automated tournament generation along with webhook creation for callback & to fetch player statistics.",
    //   live: "https://turbosmurfs.gg/",
    //   discord: "https://discord.gg/turbosmurfsgg",
    //   img: "https://i.imgur.com/m2aF76q.png",
    // },
    {
      id: 4,
      name: "Top Tier Signals",
      desc: `Developed a Discord bot to calculate and showcase profits from crypto and stock trades, utilizing the "Top Tier Signals" trading algorithm for decision-making.`,
      live: "https://whop.com/marketplace/top-tier-signals/",
      discord: "https://discord.gg/toptiersignals",
      img: "https://i.imgur.com/5d0Tpfq.jpg",
    },
    {
      id: 5,
      name: "Discord Security Bot - nexalink",
      desc: 'Built a security bot that consisted of real-time threat detection, captcha verification, etc. for discord. Also, created an API for utilization in web dashboard.',
      live: "https://www.linkedin.com/company/nexalinkdiscord/",
      img: "https://i.imgur.com/j49BXxK.png",
    },
    {
      id: 6,
      name: "Discord-Zendesk Connector - Gamee",
      desc: `Developed a program that enabled support agents to efficiently read and respond to Discord-generated tickets via Zendesk.`,
      live: "https://www.gamee.com/",
      discord: "https://discord.gg/gamee",
      img: "https://i.imgur.com/LBkhRZY.jpg",
    },
    {
      id: 7,
      name: "Schedular System - Sneaker News",
      desc: "Developed a bot for scheduling recurring or non-recurring notifications for their discord community.",
      live: "https://sneakernews.com/",
      github: "https://github.com/DorianAarno/SchedulerBot",
      img: "https://i.imgur.com/VRfVhnt.png",
    },
    {
      id: 8,
      name: "Custom Economy Bot - MetaGoons",
      desc: "Developed an economy bot for a discord server that allowed user-score tracking. It consisted of leaderboard and shops for virtual purchases.",
      live: "https://metagoons.gg/",
      github: "https://github.com/DorianAarno/PointsBot",
      img: "https://freight.cargo.site/i/1a2754e5b6c0e31442af95a7e913ff0bb45c49e90665da946d601457464d93ae/Metagoons_Thumb.jpg",
    },
  ];
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
