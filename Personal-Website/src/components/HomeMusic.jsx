import "../styles/Home.css";
import { MusicPlayer } from "./MusicPlayer";
import HomePageImg from "../assets/HomePageImg.jpg";
import React, { useRef, useEffect } from "react";

export const HomeMusic = ({ setPlay, setPause }) => {
  return (
    <div className="homeMusicContainer">
      <div className="homeImgCon">
        <img src={HomePageImg} className="homeImg"></img>
      </div>
      <MusicPlayer setPlay={setPlay} setPause={setPause} />
    </div>
  );
};
