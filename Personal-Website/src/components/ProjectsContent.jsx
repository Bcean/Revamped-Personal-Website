import React from "react";
import "../styles/Projects.css";
import { ProjectsItem } from "./ProjectsItem";
import GradCountDown from "../assets/CountDown.png";
import Recipe from "../assets/Recipe.png";
import RockPaperScissors from "../assets/RockPaperScissors.png";

export const ProjectsContent = () => {
  return (
    <div className="projectsContentContainer">
      <ProjectsItem
        animationDelaySecs={0}
        projectHead="Recipe Generator"
        projectBlurb="Find random recipes through website that fetches API data. Made with JS, HTML, and CSS"
        sourceCodeLink="https://github.com/Bcean/Recipe-Finder"
        projectLink="https://bcean.github.io/Recipe-Finder/"
        imgSrc={Recipe}
      ></ProjectsItem>
      <ProjectsItem
        imgSrc={RockPaperScissors}
        animationDelaySecs={0.5}
        projectHead="Rock, Paper, Scissors"
        projectBlurb="Create rock paper scissors vs a computer. Made with JS, HTMl and CSS"
        sourceCodeLink="https://github.com/Bcean/Rock-Paper-Scissors-Game"
        projectLink="https://bcean.github.io/Rock-Paper-Scissors-Game/"
      ></ProjectsItem>
      <ProjectsItem
        imgSrc={GradCountDown}
        animationDelaySecs={1}
        projectHead="Graduation Countdown"
        projectBlurb="Live countdown to update the time remaining until I get my bachelors in Computer Engineering. Made with JS, HTML, and CSS"
        sourceCodeLink="https://github.com/Bcean/Graduation-Countdown"
        projectLink="https://bcean.github.io/Graduation-Countdown/"
      ></ProjectsItem>
    </div>
  );
};
