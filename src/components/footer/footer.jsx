import React from "react";
import "./footer.css";
import { AiFillLinkedin } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
const footer = () => {
  return (
    <footer>
      <a href="#" className="footer__head"></a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>

        <li>
          <a href="#portofolio">Portofolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.linkedin.com/in/nikolas-vasileiou-80b77221b/"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/NikolasRay" target="_blank">
          <FaGithub />
        </a>
      </div>
    </footer>
  );
};

export default footer;
