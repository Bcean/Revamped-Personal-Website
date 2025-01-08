import React from "react";
import { AboutContent } from "../components/AboutContent";
import { AboutSkills } from "../components/AboutSkills";
import "../styles/About.css";
export const About = () => {
  return (
    <main>
      <AboutContent></AboutContent>
      <AboutSkills></AboutSkills>
    </main>
  );
};
