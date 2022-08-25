import React from "react";
import "./about.css";
import IMG from "../../assets/asset5.jpg";
import { GiChart } from "react-icons/gi";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const about = () => {
  return (
    <section id="about">
      <h5>Get To Know me</h5>
      <h2>About Me</h2>
      <div className="about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={IMG} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <GiChart className="about__icon" />
              <h5>Experience</h5>
              <small>
                In the proccess of acquiring 10years of experience to become a
                junior!
              </small>
            </article>

            <article className="about__card">
              <AiOutlineFundProjectionScreen className="about__icon" />
              <h5>Projects</h5>
              <small>
                Several Amateur Projects based on Appliacation Testing and Web
                Development
              </small>
            </article>

            {/* <article className="about__card">
              <GiChart className="about__icon" />
              <h5>Hobbies</h5>
              <small></small>
            </article> */}
          </div>
          <p>
            Hello, my name is Nick. I mainly play video games and create
            fantastical worlds in Dungeons and Dragons. I am passionate about
            Web Design/Developement and application testing. It all started by
            discovering Selenium WebDriver and creating some questionable
            applications for automating logins and parsing HTML code with Java.
            That led to an incredible journey of me discovering CSS and
            JavaScript and as of lately falling in love with React.
          </p>
          <a href="#contact" className="btn btn-primary">
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default about;
