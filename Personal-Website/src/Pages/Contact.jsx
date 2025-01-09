import { ContactFormSection } from "../components/ContactFormSection";
import { ContactRightSection } from "../components/ContactRightSection";
import { AnimatedBG } from "../components/AnimatedBG";
import React, { useState } from "react";
export const Contact = () => {
  //change animation based off clicks
  const [iterCount, setiterCount] = useState("1");
  const setPlay = () => {
    setiterCount("infinite");
  };

  const setPause = () => {
    setiterCount("1");
  };

  return (
    <main>
      <AnimatedBG iterCount={iterCount}></AnimatedBG>
      <ContactFormSection></ContactFormSection>
      <ContactRightSection
        setPlay={setPlay}
        setPause={setPause}
      ></ContactRightSection>
    </main>
  );
};
