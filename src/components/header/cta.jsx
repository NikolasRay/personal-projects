import React from "react";
import CV from "../../assets/NickVasileiouCV.pdf";

function cta() {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Contact me
      </a>
    </div>
  );
}

export default cta;
