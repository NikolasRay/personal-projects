import React from "react";
import "./portofolio.css";
import IMG1 from "../../assets/portofolio-asset1.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "React Portofolio Website",
    github: "https://github.com/NikolasRay/personal-projects/personal-website",
    demo: "packetcodeofficial.github.io/personal-website",
  },
];

const portoflio = () => {
  return (
    <section id="portofolio">
      <h5>My Recent Work</h5>
      <h2>Portofolio</h2>
      <div className="container portofolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portofolio__item">
              <div className="portofolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portofolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  {" "}
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">
                  {" "}
                  Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default portoflio;
