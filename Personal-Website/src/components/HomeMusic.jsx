import "../styles/Home.css";
import { MusicPlayer } from "./MusicPlayer";

import React, { useRef, useEffect } from "react";

export const HomeMusic = () => {
  return (
    <div className="homeMusicContainer">
      <div className="canvas"></div>
      <MusicPlayer />
    </div>
  );
};
