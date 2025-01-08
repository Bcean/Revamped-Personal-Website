import React from "react";
import "../styles/Home.css";
import { HomeContent } from "../components/HomeContent";
import { HomeMusic } from "../components/HomeMusic";

export const Home = () => {
  return (
    <>
      <main>
        <HomeContent />
        <HomeMusic />
      </main>
    </>
  );
};
