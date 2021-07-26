import React from "react";
import LeftLogo from "./LeftLogo";

export default function Contact() {
  const business = "Let's talk business.";
  const subtitle =
    "We appreciate your visit to our website. We look forward to hearing from you. Give us a call, email us, or fill out this form... whatever is convenient for you.";
  const phone = "(330) 316-2052";
  const email = "peak93media@gmail.com";

  return (
    <div>
      <LeftLogo />
      <div className="introWrapper second">
        <h2 className="subtitle">
          {business.split("").map((char) => {
            return <span className="h2Char">{char}</span>;
          })}
        </h2>
        <a href={`tel:${phone}`}>{phone}</a>
        <a target="blank" href={`mailto:${email}`}>
          {email}
        </a>
        <p className="appreciate">{subtitle}</p>
        <form className="contactForm">
          <label>Name</label>
          <input type="text" />
          <label>Email</label>
          <input type="text" />
          <label>How can we help?</label>
          <textarea type="text" />
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
