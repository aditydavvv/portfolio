import React from "react";
// import { Link } from "react-router-dom";
import web from "../src/img/vid.webm";
import Component from "./Component";
const Home = ({ ref1 }) => {
  return (
    <>
      <section id="HOME" ref={ref1}>
        <Component tone={"HI,"} ttwo={"I'm Aditya Yadav"} img={web} />
      </section>
    </>
  );
};

export default Home;
