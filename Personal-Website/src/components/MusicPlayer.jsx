import React, { useEffect } from "react";
import "../styles/MusicPlayer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { faForwardStep } from "@fortawesome/free-solid-svg-icons";
import { faBackwardStep } from "@fortawesome/free-solid-svg-icons";
import { faPause } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const MusicPlayer = ({ setPlay, setPause, changeAnim }) => {
  const [musicStatusLogo, setmusicStatusLogo] = useState(faPlay);

  const changeStaus = () => {
    if (musicStatusLogo === faPlay) {
      setmusicStatusLogo(faPause); //music playing
      setPlay();
    } else if (musicStatusLogo === faPause) {
      setmusicStatusLogo(faPlay);
      setPause();
    }
  };

  const changeStausAbout = () => {
    if (musicStatusLogo === faPlay) {
      setmusicStatusLogo(faPause); //music playing
    } else if (musicStatusLogo === faPause) {
      setmusicStatusLogo(faPlay);
    }
  };
  //slider state with onchange
  //change buttons
  //<FontAwesomeIcon icon={faPause} style={{color: "#ffffff",}} />

  //change animation delay based on page

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/About";
  const isProjectsPage = location.pathname === "/Projects";
  const isContactPage = location.pathname === "/Contact";

  const [musicPlayerID, setmusicPlayerID] = useState("default");

  const changeAnimEvent = () => {
    changeStausAbout();
    changeAnim();
  };

  useEffect(() => {
    if (isHomePage) {
      setmusicPlayerID("homeMusicControl");
    } else if (isAboutPage) {
      setmusicPlayerID("aboutMusicControl");
    } else if (isContactPage) {
      setmusicPlayerID("contactMusicControl");
    }
  });

  return (
    <div className="musicPlayerContainer" id={musicPlayerID}>
      <div className="controlBtns">
        <Link
          to={
            isHomePage
              ? null
              : isAboutPage
              ? "/"
              : isProjectsPage
              ? "/About"
              : isContactPage
              ? "/Projects"
              : null
          }
        >
          <FontAwesomeIcon
            className="controlIcons"
            icon={faBackwardStep}
            style={{ color: "#ffffff" }}
          />
        </Link>

        <FontAwesomeIcon
          className="controlIconsPlay"
          icon={musicStatusLogo}
          style={{ color: "#ffffff" }}
          onClick={
            isHomePage
              ? changeStaus
              : isContactPage
              ? changeStaus
              : isAboutPage
              ? changeAnimEvent
              : null
          }
        />
        <Link
          to={
            isHomePage
              ? "/About"
              : isAboutPage
              ? "/Projects"
              : isProjectsPage
              ? null
              : isContactPage
              ? "/"
              : null
          }
        >
          <FontAwesomeIcon
            className="controlIcons"
            icon={faForwardStep}
            style={{ color: "#ffffff" }}
          />
        </Link>
      </div>
    </div>
  );
};
