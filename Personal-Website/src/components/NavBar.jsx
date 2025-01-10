import React from "react";
import "../styles/NavBar.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { useEffect } from "react";

export const NavBar = () => {
  //for changing colors based on location

  const location = useLocation();

  const isHomePage = location.pathname === "/";
  const isAboutPage = location.pathname === "/About";
  const isProjectsPage = location.pathname === "/Projects";
  const isContactPage = location.pathname === "/Contact";

  //show navbar on the side
  const [navActivityBtn, setnavActivityBtn] = useState(faBars);
  const [backgroundColorStatus, setbackgroundColorStatus] =
    useState("transparent");
  const [displayStatus, setdisplayStatus] = useState("none");
  const showNav = () => {
    if (navActivityBtn === faBars) {
      setnavActivityBtn(faX);
      setbackgroundColorStatus("#4d395f");
      setdisplayStatus("block");
    } else if (navActivityBtn === faX) {
      setnavActivityBtn(faBars);
      setbackgroundColorStatus("transparent");
      setdisplayStatus("none");
    }
  };

  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 800);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 800) {
        setdisplayStatus("block");
      } else {
        setdisplayStatus("none");
      }
    };

    // Run on initial render to ensure the correct state
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav>
      <div id="navLeft" style={{ backgroundColor: backgroundColorStatus }}>
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
        <div className="otherLinks" style={{ display: displayStatus }}>
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
