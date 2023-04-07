import React from "react";
import "./index.scss";

const Contact = () => {
  return (
    // Contact section container
    <div className="contact" id="contact">
      <div className="contact-text">
        <h1>Let's Chat!</h1>
        <h2>We want to hear from you!</h2>
        <p>
          Thank you for considering reaching out to us! Whether you have a
          question, feedback, or simply want to say hello, we're excited to hear
          from you. Please fill out the form below and we'll get back to you as
          soon as possible. Thank you for using ChatGPT!
        </p>
      </div>
      {/* Contact form */}
      <form>
        <h1>Send us a Message.</h1>
        <input type="text" name="name" required placeholder="Name" />
        <input type="email" name="email" required placeholder="Email" />
        <textarea name="message" required placeholder="Message" />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
