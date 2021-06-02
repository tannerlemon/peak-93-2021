import React from "react";
import { Link } from "react-router-dom";
import LeftLogo from "./LeftLogo";

export default function Hello() {
  const videography = "Videography / Photography";
  const title = "Hello.";
  const subtitle = "We made our site super easy to navigate";

  return (
    <div>
      <LeftLogo />
      <div className="introWrapper">
        <p>
          {videography.split("").map((char) => {
            return <span className="pChar">{char}</span>;
          })}
        </p>
        <h1>
          {title.split("").map((char) => {
            return <span className="h1Char">{char}</span>;
          })}
        </h1>
        <h2 className="subtitle">
          {subtitle.split("").map((char) => {
            return <span className="h2Char">{char}</span>;
          })}
        </h2>
        <Link to="/nav">
          <button className="button">Start here</button>
        </Link>
      </div>
    </div>
  );
}
