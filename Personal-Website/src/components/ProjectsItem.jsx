import React from "react";
import "../styles/Projects.css";

export const ProjectsItem = ({
  animationDelaySecs,
  sourceCodeLink,
  projectHead,
  projectBlurb,
  projectLink,
  imgSrc,
}) => {
  const handleSourceCode = () => {
    window.open(`${sourceCodeLink}`, "_blank");
  };

  const handleProjectLink = () => {
    window.open(`${projectLink}`, "_blank");
  };

  return (
    <div
      className="projectItemContainer projectItem"
      style={{ animationDelay: `${animationDelaySecs}s`, opacity: 0 }}
    >
      <div className="projectsItemImg" onClick={handleProjectLink}>
        <img src={imgSrc}></img>
      </div>
      <h3 id="projectHead">{projectHead}</h3>
      <h5 id="projectItemBlurb">{projectBlurb}</h5>
      <button id="sourceCodeBtn" onClick={handleSourceCode}>
        Source Code
      </button>
    </div>
  );
};
