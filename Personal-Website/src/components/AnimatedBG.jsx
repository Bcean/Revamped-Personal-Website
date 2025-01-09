import React from "react";
import { EigthNote } from "./EigthNote";
import { QuarterNote } from "./QuarterNote";
import "../styles/Home.css";

export const AnimatedBG = ({ iterCount }) => {
  return (
    <div className="animatedBgContainer">
      <QuarterNote
        topValue="52vh"
        noteDelay="0s"
        iterCount={iterCount}
      ></QuarterNote>
      <EigthNote
        etopValue="37vh"
        enoteDelay="7.5s"
        iterCount={iterCount}
      ></EigthNote>
      <QuarterNote
        topValue="8vh"
        noteDelay="1.7s"
        iterCount={iterCount}
      ></QuarterNote>
      <EigthNote
        etopValue="77vh"
        enoteDelay="2.9s"
        iterCount={iterCount}
      ></EigthNote>
      <QuarterNote
        topValue="23vh"
        noteDelay="0.87s"
        iterCount={iterCount}
      ></QuarterNote>
      <EigthNote
        etopValue="14vh"
        enoteDelay="8.2s"
        iterCount={iterCount}
      ></EigthNote>
      <QuarterNote
        topValue="95vh"
        noteDelay="5.2s"
        iterCount={iterCount}
      ></QuarterNote>
      <EigthNote
        etopValue="64vh"
        enoteDelay="9.6s"
        iterCount={iterCount}
      ></EigthNote>
      <QuarterNote
        topValue="78vh"
        noteDelay="6.8s"
        iterCount={iterCount}
      ></QuarterNote>
      <QuarterNote
        topValue="37vh"
        noteDelay="3.2s"
        iterCount={iterCount}
      ></QuarterNote>
      <EigthNote
        etopValue="82vh"
        enoteDelay="1.92s"
        iterCount={iterCount}
      ></EigthNote>
      <EigthNote
        etopValue="96vh"
        enoteDelay="3.8s"
        iterCount={iterCount}
      ></EigthNote>
      <QuarterNote
        topValue="44vh"
        noteDelay="4s"
        iterCount={iterCount}
      ></QuarterNote>
      <EigthNote
        etopValue="4vh"
        enoteDelay="1s"
        iterCount={iterCount}
      ></EigthNote>
    </div>
  );
};
