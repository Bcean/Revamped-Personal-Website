import React from "react";
import "../styles/Contact.css";
export const ContactFormSection = () => {
  //567d1c63-5299-4c1f-a2cb-3a9a367e95ed

  const [result, setResult] = React.useState("Submit");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "567d1c63-5299-4c1f-a2cb-3a9a367e95ed");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

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
      <form onSubmit={onSubmit}>
        <input
          name="name"
          type="text"
          required
          placeholder="Name"
          style={{ animationDelay: "0.4s" }}
        ></input>
        <input
          name="email"
          type="email"
          required
          placeholder="Email"
          style={{ animationDelay: "0.6s" }}
        />
        <textarea
          name="message"
          required
          placeholder="Message"
          style={{ animationDelay: "0.8s" }}
        ></textarea>
        <button type="submit" style={{ animationDelay: "1s" }}>
          {result}
        </button>
      </form>
    </div>
  );
};
