import React from "react";
import "../styles/MusicPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { use } from "react";

export const MusicPlayer = () => {
  const [musicStatusLogo, setmusicStatusLogo] = useState(faPlay);

  const changeStaus = () => {
    if (musicStatusLogo === faPlay) {
      setmusicStatusLogo(faPause);
    } else if (musicStatusLogo === faPause) {
      setmusicStatusLogo(faPlay);
    }
  };
  //slider state with onchange
  //change buttons
  //<FontAwesomeIcon icon={faPause} style={{color: "#ffffff",}} />
  return (
    <div className="musicPlayerContainer">
      <div className="controlBtns">
        <FontAwesomeIcon
          className="controlIcons"
          icon={faBackwardStep}
          style={{ color: "#ffffff" }}
        />
        <FontAwesomeIcon
          className="controlIconsPlay"
          icon={musicStatusLogo}
          style={{ color: "#ffffff" }}
          onClick={changeStaus}
        />
        <FontAwesomeIcon
          className="controlIcons"
          icon={faForwardStep}
          style={{ color: "#ffffff" }}
        />
      </div>
    </div>
  );
};
