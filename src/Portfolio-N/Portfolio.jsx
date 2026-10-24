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
    {
      id: 1,
      name: "3 day official valorant event - Riot Games",
      desc: 'Engineered a custom bot for seamless organization of the 3-day official Valorant event - " The Northern Showdown"',
      live: "https://playvalorant.com/en-gb/northern-showdown/",
      img: "https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt94abc0b40f198340/64c7935461d28745ee85692f/nt_keyart.jpg",
    },
    {
      id: 2,
      name: "Matchmaking Queue Bot - Battle for GioStone",
      desc: "Developed a Discord bot to custom-create in-house queues, a wager system and challenges for the battles of GioStone.",
      live: "https://battleforgiostone.com/",
      discord: "https://discord.com/invite/bfgiostone",
      img: "https://i.ytimg.com/vi/5iEYSI-s0JY/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCd4DsIYxjKsTVHqS61nO3A7NcsKg",
    },
    {
      id: 3,
      name: "Queue Bot - InHouseQueue",
      desc: `Built a discord bot to streamline game organisation within communities by providing automated features including leaderboards, a matchmaking algorithm using Microsoft's TrueSkill, and more.`,
      live: "https://inhousequeue.xyz/",
      img: "https://i.imgur.com/3jaMxvS.png",
      discord: "https://discord.gg/VgKhPtZGDQ",
    },
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
      name: "Tata Silver ETF Predictor",
      desc: "Predictive tool for Tata Silver ETF built with React and Vite. Leverages data analysis to forecast trends and assist with investment insights.",
      live: "https://github.com/aditydavvv/tata-etf-predictor",
      github: "https://github.com/aditydavvv/tata-etf-predictor",
      img: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Cohort",
      desc: "Web application project built as part of cohort work.",
      live: "https://github.com/aditydavvv/cohort",
      github: "https://github.com/aditydavvv/cohort",
      img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "DSA Practice",
      desc: "Data structures and algorithms practice repository.",
      live: "https://github.com/aditydavvv/dsa-prac",
      github: "https://github.com/aditydavvv/dsa-prac",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  const dataTestimonials = [
    {
      id: 1,
      name: "Henry Koleoso - InHouseQueue",
      desc: `"Extreme young talent - I had a very ambitious project that I wanted to complete. Aarno delivered, and more. Within a week.

      Apart from his brilliant programming knowledge and talent, his attention to detail and creativity during the entire process stood out to me the most. 
      
      A true master of his craft. Will be working with you again soon. Highly recommend."`,
      live: "https://inhousequeue.xyz/",
      img: "https://i.imgur.com/3jaMxvS.png",
      linkedin: "https://www.linkedin.com/in/henrykoleoso/"
    },
    {
      id: 2,
      name: "Leon Muench - nexalink",
      desc: `"I've been working closely with Aarno for the past quarter on our public Discord bot project, and I wholeheartedly recommend him. Aarno is exceptionally proficient in Python, discord.py, and API development. His contributions to our main code base have been outstanding, showcasing his technical prowess and commitment to delivering high-quality results. What sets Aarno apart is not just his technical skills but also his clear communication and dedication to project goals. He consistently meets deadlines and maintains a high level of professionalism. In summary, Aarno is a skilled and dedicated developer whom I look forward to continuing working with."`,
      live: "https://www.linkedin.com/company/nexalinkdiscord/",
      img: "https://i.imgur.com/j49BXxK.png",
      linkedin: "https://www.linkedin.com/in/leon-m%C3%BCnch-6316541b2/"
    },
    
    {
      id: 3,
      name: "Maxime - Turbosmurfs",
      desc: `"Aarno is a talented and efficient coder that manages to get your projects done swiftly. I highly recommend his services for a serious professional work with great communication. I am personally very pleased by the Discord bot he and his partner made for me."`,
      live: "https://turbosmurfs.gg/",
      img: "https://i.imgur.com/m2aF76q.png",
    }
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
