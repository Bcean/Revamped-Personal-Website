import React from "react";
import "../styles/Home.css";
import { MusicPlayer } from "./MusicPlayer";

export const HomeMusic = () => {
  return (
    <div className="homeMusicContainer">
      <h1>Music Visual here</h1>
      <MusicPlayer />
    </div>
  );
};
