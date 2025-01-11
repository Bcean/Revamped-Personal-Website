import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import "../styles/NavBar.css";

export const NavBar = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/About";
  const isProjectsPage = location.pathname === "/Projects";
  const isContactPage = location.pathname === "/Contact";

  const [navActivityBtn, setNavActivityBtn] = useState(faBars); // Hamburger icon state
  const [isOpen, setIsOpen] = useState(false); // State for toggling navbar visibility
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);

  const showNav = () => {
    if (navActivityBtn === faBars) {
      setNavActivityBtn(faX);
      setIsOpen(true);
    } else if (navActivityBtn === faX) {
      setNavActivityBtn(faBars);
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsWideScreen(window.innerWidth > 800);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div id="navLeft">
        <h1 className="headHome">
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
        <div className={`otherLinks ${isOpen ? "active" : ""}`}>
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
      </div>
      <div id="navRight">
        <FontAwesomeIcon
          onClick={showNav}
          icon={navActivityBtn}
          style={{ color: "#ffffff" }}
        />
      </div>
    </nav>
  );
};
