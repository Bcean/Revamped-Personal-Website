import React from "react";
import "../styles/Projects.css";

export const ProjectsItem = () => {
  return (
    <div className="projectItemContainer">
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
