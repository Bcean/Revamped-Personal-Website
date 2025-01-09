import React from "react";
import "../styles/Home.css";

export const HomeContent = () => {
  return (
    <div className="homeContentContainer">
      <h1 className="contentHead">
        Hi I'm <br />
        <mark>Britney</mark>
      </h1>
      <h5 id="homeBlurb">
        I'm currently a freshman studying Computer Engineering at Missouri
        University of Science and Technology. I've created this personal website
        to display some of my past, present and future software development
        projects. This website was built with react so there are some fun
        interactive buttons you can play with.{" "}
      </h5>
    </div>
  );
};
