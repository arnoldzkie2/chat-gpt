import React from "react";
import "./index.scss";
const Footer = () => {
  return (

    <footer className="footer">
      <h2>&copy; 2023 ChatGPT. All Rights Reserved.</h2>
      <ul>
        <li>
          <a href="https://openai.com/policies" target='_blank'>Privacy Policy</a>
        </li>
        <li>
          <a href="https://openai.com/policies" target='_blank'>Terms of Use</a>
        </li>
        <li>
          <a href="https://help.openai.com/en/collections/3742473-chatgpt" target='_blank'>Help</a>
        </li>
        <li>
          <a href="https://openai.com/" target='_blank'>Company</a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
