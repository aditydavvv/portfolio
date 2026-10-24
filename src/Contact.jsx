import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaDiscord } from "react-icons/fa";
import { useState } from "react";
import { BsLinkedin } from "react-icons/bs";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = ({ ref5 }) => {
  useEffect(() => {
    AOS.init();
  }, []);
  // const [value, setvalue] = useState();
  const [contactdetail, setcontactdetails] = useState({
    name: "",
    email: "",
    comment: "",
  });
  const form = useRef();

  const setchange = (e) => {
    const { name, value } = e.target;
    setcontactdetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <>
      <section id="contact" ref={ref5}>
        <div className="head_text" data-aos="fade-up">
          <h5>Get in Touch</h5>
          <h2>Contact Me</h2>
        </div>
        <div className="contact_option">
          <div className="direct_contact">
            <article className="contact__option" data-aos="zoom-in">
              <MdOutlineEmail className="contact_icons" />
              <h4>Email</h4>
              <h5>adityadav1482@gmail.com</h5>
              <a
                href="mailto:adityadav1482@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                send a message
              </a>
            </article>
            <article className="contact__option" data-aos="zoom-in">
              <BsLinkedin className="contact_icons" />
              <h4>LinkedIn</h4>
              <h5>Aditya Yadav</h5>
              <a
                href="https://www.linkedin.com/in/aditya-yadav"
                target="_blank"
                rel="noreferrer"
              >
                send a message
              </a>
            </article>
            <article className="contact__option" data-aos="zoom-in">
              <BsGithub className="contact_icons" />
              <h4>GitHub</h4>
              <h5>aditydavvv</h5>
              <a
                href="https://github.com/aditydavvv"
                target="_blank"
                rel="noreferrer"
              >
                send a message
              </a>
            </article>
            </article>
          </div>
          {/* <form className="contact_form" data-aos="zoom-in">
            <input
              type="text"
              name="name"
              required
              placeholder="Your full name"
              value={contactdetail.name}
              onChange={setchange}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={contactdetail.email}
              onChange={setchange}
              required
            />
            <textarea
              name="comment"
              placeholder="Your Message"
              rows="7"
              required
              value={contactdetail.comment}
              onChange={setchange}
            ></textarea>
            <button type="submit" className="btn btn_form">
              Send message
            </button>
          </form> */}
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Contact;
