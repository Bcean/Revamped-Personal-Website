import React from "react";
import { AboutContent } from "../components/AboutContent";
import { AboutSkills } from "../components/AboutSkills";
import "../styles/About.css";
import { useState } from "react";
export const About = () => {
  const [iconAnim, seticonAnim] = useState(null);
  const [animState, setanimState] = useState("1");
  // change to iconAnimation on click
  const activeAnimation = () => {
    if (animState === "1") {
      //anim play
      setanimState("infinite");
      seticonAnim("iconAnimation");
    } else if (animState === "infinite") {
      setanimState("1");
    }
  };
  return (
    <main>
      <AboutContent></AboutContent>
      <AboutSkills
        iconAnim={iconAnim}
        activeAnim={activeAnimation}
        animState={animState}
      ></AboutSkills>
    </main>
  );
};
