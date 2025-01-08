import React from "react";
import "../styles/Projects.css";
import { ProjectsItem } from "./ProjectsItem";
export const ProjectsContent = () => {
  return (
    <div className="projectsContentContainer">
      <ProjectsItem></ProjectsItem>
      <ProjectsItem></ProjectsItem>
      <ProjectsItem></ProjectsItem>
    </div>
  );
};
