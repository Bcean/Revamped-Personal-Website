import React from "react";
import "../styles/About.css";
export const AboutContent = () => {
  return (
    <div className="aboutContentContainer">
      <div className="aboutContentImg">
        <img></img>
      </div>
      <hr></hr>
      <h3>
        <mark>About</mark> Me
      </h3>
      <h5 id="aboutBlurb">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
        ultricies erat. Vivamus auctor efficitur erat id mattis. Fusce blandit
        in erat porta malesuada.highlight languages
      </h5>
    </div>
  );
};
