import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
function headerSocials() {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/nikolas-vasileiou-80b77221b/"
        target="_blank"
      >
        {" "}
        <BsLinkedin />{" "}
      </a>
      <a href="https://github.com/NikolasRay" target="_blank">
        {" "}
        <FaGithub />
      </a>
    </div>
  );
}

export default headerSocials;
