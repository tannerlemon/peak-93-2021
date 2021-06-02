import React from "react";
import logo from "../imgs/white-logo.png";

export default function LeftLogo() {
  return (
    <div className="leftLogoHolder">
      <img src={logo} alt="Peak 93 logo" className="leftLogo" />
    </div>
  );
}
