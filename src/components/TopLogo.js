import React from "react";
import logo from "../imgs/white-logo-horizontal.png";

export default function TopLogo() {
  return (
    <div className="topLogoHolder">
      <img src={logo} alt="Peak 93 logo" className="topLogo" />
    </div>
  );
}
