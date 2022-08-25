import React from "react";
import "./header.css";
import CTA from "./cta";

import Social from "./headerSocials";

const header = () => {
  return (
    <header id="#">
      <div className="container header__container">
        <h3>Front End Web Developer</h3>
        <h1>Nick Vasileiou</h1>

        <CTA />
        <Social />
      </div>
    </header>
  );
};

export default header;
