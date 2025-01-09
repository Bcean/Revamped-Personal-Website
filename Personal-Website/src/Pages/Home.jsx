import React, { useState } from "react";
import "../styles/Home.css";
import { HomeContent } from "../components/HomeContent";
import { HomeMusic } from "../components/HomeMusic";
import { EigthNote } from "../components/EigthNote";
import { QuarterNote } from "../components/QuarterNote";
import { AnimatedBG } from "../components/AnimatedBG";
export const Home = () => {
  //change animation based off clicks
  const [iterCount, setiterCount] = useState("infinite");
  const setPlay = () => {
    setiterCount("infinite");
  };

  const setPause = () => {
    setiterCount("1");
  };

  return (
    <>
      <main>
        <AnimatedBG iterCount={iterCount}></AnimatedBG>
        <HomeContent />
        <HomeMusic setPlay={setPlay} setPause={setPause} />
      </main>
    </>
  );
};
