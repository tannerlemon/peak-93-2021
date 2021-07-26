import React from "react";
import { Link } from "react-router-dom";
import LeftLogo from "./LeftLogo";

export default function Nav() {
  const question = "What would you like to do?";

  return (
    <div>
      <LeftLogo />
      <div className="introWrapper second">
        <h2 className="subtitle">
          {question.split("").map((char) => {
            return <span className="h2Char">{char}</span>;
          })}
        </h2>
        <Link to="/projects">
          <button className="button">See projects</button>
        </Link>
        <Link to="/projects">
          <button className="button">View project types</button>
        </Link>
        <Link to="/photography">
          <button className="button">See photography</button>
        </Link>
        {/* <Link to="/home">
          <button className="button">Go home</button>
        </Link> */}
        <Link to="/contact">
          <button className="button">Contact us</button>
        </Link>
      </div>
    </div>
  );
}
