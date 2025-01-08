import React from "react";
import "../styles/Projects.css";
import { ProjectsItem } from "./ProjectsItem";
export const ProjectsContent = () => {
  return (
    <div className="projectsContentContainer">
      <ProjectsItem animationDelaySecs={0}></ProjectsItem>
      <ProjectsItem animationDelaySecs={0.7}></ProjectsItem>
      <ProjectsItem animationDelaySecs={1.4}></ProjectsItem>
    </div>
  );
};
