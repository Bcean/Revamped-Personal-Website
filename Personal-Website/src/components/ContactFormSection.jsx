import React from "react";
import "../styles/Contact.css";
export const ContactFormSection = () => {
  return (
    <div className="contactContainer">
      <h1 id="contactHead">
        <mark>Contact</mark> Me
      </h1>
      <h6 id="contactBlurb">
        If you would like to get in touch with me, you can fill out the form
        below to email me or click the images on the side to get my Linkedin and
        GitHub.
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
