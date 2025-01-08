import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <h1>
        <Link to="/" className="link">
          BC
        </Link>
      </h1>
      <div className="otherLinks">
        <ul>
          <li>
            <Link to="/About" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/Projects" className="link">
              Projects
            </Link>
          </li>
          <li>
            <Link to="/Contact" className="link">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
