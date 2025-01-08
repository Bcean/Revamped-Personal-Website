import React from "react";
import "../styles/Contact.css";
export const ContactFormSection = () => {
  return (
    <div className="contactContainer">
      <h1>
        <mark>Contact</mark> Me
      </h1>
      <h6 id="contactBlurb">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
        ultricies erat.rem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam eu ultricies erat.
      </h6>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <input type="submit"></input>
      </form>
    </div>
  );
};
