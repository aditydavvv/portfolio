import React from "react";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
var currentDate = new Date();
var currentYear = currentDate.getFullYear();
const Footer = () => {
  return (
    <>
      {/* <hr /> */}
      <section id="footer">
        <p>
          <AiOutlineCopyrightCircle /> {currentYear} Aditya Yadav. All right reserved |
          Term and Condition{" "}
        </p>
      </section>
    </>
  );
};

export default Footer;
