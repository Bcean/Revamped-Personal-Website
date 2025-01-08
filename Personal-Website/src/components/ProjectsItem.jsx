import React from "react";
import "../styles/Projects.css";

export const ProjectsItem = ({ animationDelaySecs }) => {
  return (
    <div
      className="projectItemContainer projectItem"
      style={{ animationDelay: `${animationDelaySecs}s`, opacity: 0 }}
    >
      <div className="projectsItemImg">
        <img></img>
      </div>
      <hr></hr>
      <h3>Project #1</h3>
      <h5 id="projectItemBlurb">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
        ultricies erat. Vivamus auctor efficitur erat id mattis. Fusce blandit
        in erat porta malesuada.highlight languages
      </h5>
      <button id="sourceCodeBtn">Source Code</button>
    </div>
  );
};
