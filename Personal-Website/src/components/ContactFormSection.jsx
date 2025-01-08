import React from "react";
import "../styles/Contact.css";
export const ContactFormSection = () => {
  return (
    <div className="contactContainer">
      <h1 id="contactHead">
        <mark>Contact</mark> Me
      </h1>
      <h6 id="contactBlurb">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu
        ultricies erat.rem ipsum dolor sit amet, consectetur adipiscing elit.
        Nam eu ultricies erat.
      </h6>
      <form>
        <input
          type="text"
          placeholder="Name"
          style={{ animationDelay: "0.4s" }}
        ></input>
        <input
          type="email"
          placeholder="Email"
          style={{ animationDelay: "0.6s" }}
        />
        <input
          type="text"
          placeholder="Subject"
          style={{ animationDelay: "0.8s" }}
        ></input>
        <textarea
          placeholder="Message"
          style={{ animationDelay: "1s" }}
        ></textarea>
        <button type="submit" style={{ animationDelay: "1.2s" }}>
          Submit
        </button>
      </form>
    </div>
  );
};
