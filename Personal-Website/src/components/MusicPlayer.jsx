import React from "react";
import "../styles/MusicPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";

export const MusicPlayer = () => {
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
          className="controlIcons"
          icon={faPlay}
          style={{ color: "#ffffff" }}
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
