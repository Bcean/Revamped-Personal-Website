import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navBar";
import { Home } from "./Pages/Home";
import { About } from "./Pages/About";
import { Projects } from "./Pages/Projects";
import { Contact } from "./Pages/Contact";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <div className="Content">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About />}></Route>
          <Route path="/Projects" element={<Projects />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
