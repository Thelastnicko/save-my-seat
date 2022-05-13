import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <section className="contact-section">
      <h1 className="contact-section__title">Contact</h1>
      <div className="contact-section__container">
        <div className="contact-section__info">
          <p className="contact-section__address">
            231A Roncevalles Ave, Toronto, ON M5R 2L6
          </p>
          <p className="contact-section__email">info@theacetoronto.com</p>
          <p className="contact-section__phone">(416) 792-7729</p>
        </div>
        <div className="contact-section__hours">
          <p>Wednesday</p>
          <p>6pm - 10pm </p>
          <p> Thursday - Saturday</p>
          <p>6pm - 11pm</p>
          <p>Saturday Brunch</p>
          <p>11am - 3pm</p>
          <p>Sunday Brunch</p>
          <p>10am - 3pm</p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
