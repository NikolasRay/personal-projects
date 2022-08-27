import React from "react";
import "./contact.css";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { useRef } from "react";
import emailjs from "emailjs-com";
const contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    e.target.reset();

    emailjs.sendForm('service_3belxkr', 'template_2s6bygm', form.current, 'Ht3fryUj5jtVFFw0c')
    .then((result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className="contact__option-icon" />
            <h4>Email</h4>
            <h5 className="container__email">nikolasvasileiou1993@gmail.com</h5>

            <a href="mailto:nikolasvasileiou1993@gmail.com" target="_blank">
              Send me a message
            </a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>LinkedIn</h4>
            <h5>Nikolas Vasileiou</h5>
            <a
              href="https://www.linkedin.com/in/nikolas-vasileiou-80b77221b/"
              target="_blank"
            >
              Send me a message
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name='name'
            placeholder="Your full Name"
            required
          />
          <input type="email" name='email' placeholder="Your Email" required />
          <textarea
            name='message'
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit"  className="btn btn-primary">
            {" "}
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
