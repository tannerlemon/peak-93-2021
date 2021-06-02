import React from "react";
import TopLogo from "./TopLogo";
import image from "../imgs/1.png";

export default function Home() {
  return (
    <div>
      <TopLogo />
      <div
        className="heroWrapper"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="heroText">
          <h1>Electronic Media Company</h1>
          <h2>Video • Web • More</h2>
          <button>Contact Us</button>
        </div>
      </div>
      <div className="sectionWrapper centered">
        <p>
          We’ve partnered with some of the best designers money could ask for to
          offer you complete packages that will change the way people view your
          business. We now offer videography, photography, graphics and logo
          design, web design and development, and much more. Our prices are
          competitive and our service is top tier. <br /> Let’s get to work!
        </p>
      </div>
    </div>
  );
}
