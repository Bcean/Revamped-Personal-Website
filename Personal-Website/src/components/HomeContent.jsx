import React from "react";
import "../styles/Home.css";

export const HomeContent = () => {
  return (
    <div className="homeContentContainer">
      <h1 className="contentHead">
        Hi I'm <br />
        <mark>Britney</mark>
      </h1>
      <h5 id="homeBlurb">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
        ultricies erat. Vivamus auctor efficitur erat id mattis. Fusce blandit
        in erat porta malesuada. Alikquam luctus metus nibh, sit amet bibendum
        justo luctus et. Curabitur gravida sit amet leo non facilisis.{" "}
      </h5>
    </div>
  );
};
