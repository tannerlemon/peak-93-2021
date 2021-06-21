import React from "react";
import TopLogo from "./TopLogo";
import { Link } from "react-router-dom";
import alex from "../imgs/Alex1.jpeg";
import exit from "../imgs/exit.png";

export default function Menu({ showMenu, setShowMenu }) {
  return (
    showMenu && (
      <div className="menuHolder">
        <div className="exit" onClick={() => setShowMenu(false)}>
          <img src={exit} alt="exit" />
        </div>
        <TopLogo />
        <div className="menuWrapper">
          <div className="menuImg">
            <img src={alex} alt="jumping to catch a football" />
          </div>
          <ul>
            <Link
              className="menuLink"
              to="/home"
              onClick={() => setShowMenu(false)}
            >
              <li>Home</li>
            </Link>
            <Link
              className="menuLink"
              to="/projects"
              onClick={() => setShowMenu(false)}
            >
              <li>Projects</li>
            </Link>
            <Link
              className="menuLink"
              to="/project-types"
              onClick={() => setShowMenu(false)}
            >
              <li>Project Types</li>
            </Link>
            <Link
              className="menuLink"
              to="/photography"
              onClick={() => setShowMenu(false)}
            >
              <li>Photography</li>
            </Link>
            <Link
              className="menuLink"
              to="/contact"
              onClick={() => setShowMenu(false)}
            >
              <li>Contact Us</li>
            </Link>
          </ul>
        </div>
      </div>
    )
  );
}
