import React from "react";
import "../styles/About.css";
import Gradimg from "../assets/Gradimg.jpg";
export const AboutContent = () => {
  return (
    <div className="aboutContentContainer">
      <h3 id="aboutHead">
        <mark>About</mark> Me
      </h3>
      <div className="aboutContentImg">
        <img src={Gradimg} autoPlay muted loop className="aboutImg"></img>
      </div>
      <hr id="aboutHr"></hr>

      <h5 id="aboutBlurb">
        Beyond aspiring to become a software engineer, I have a very musical
        background as I am a trumpet player with 6 years of experience. Some of
        the programming languages I'm confident in are Python, and JavaScript.
      </h5>
    </div>
  );
};
