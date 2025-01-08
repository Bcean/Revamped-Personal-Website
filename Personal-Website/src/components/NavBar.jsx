import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export const NavBar = () => {
  //for changing colors based on location

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/About";
  const isProjectsPage = location.pathname === "/Projects";
  const isContactPage = location.pathname === "/Contact";

  return (
    <nav>
      <h1>
        <Link
          to="/"
          className="link"
          style={{
            color: isHomePage ? "#7189BB" : null,
            textShadow: isHomePage
              ? "0px 4px 5px rgba(225, 225, 225, 0.2)"
              : null,
          }}
        >
          BC.
        </Link>
      </h1>
      <div className="otherLinks">
        <ul>
          <li>
            <Link
              to="/About"
              className="link"
              style={{
                color: isAboutPage ? "#7189BB" : null,
                textShadow: isAboutPage
                  ? "0px 4px 5px rgba(225, 225, 225, 0.2)"
                  : null,
              }}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/Projects"
              className="link"
              style={{
                color: isProjectsPage ? "#7189BB" : null,
                textShadow: isProjectsPage
                  ? "0px 4px 5px rgba(225, 225, 225, 0.2)"
                  : null,
              }}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="/Contact"
              className="link"
              style={{
                color: isContactPage ? "#7189BB" : null,
                textShadow: isContactPage
                  ? "0px 4px 5px rgba(225, 225, 225, 0.2)"
                  : null,
              }}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
