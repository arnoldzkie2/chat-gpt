// Importing necessary dependencies
import React from "react"; // Importing React
import "./index.scss"; // Importing styles
import AOS from "aos"; // Importing AOS (Animate on Scroll) library
import "aos/dist/aos.css"; // Importing AOS stylesheet
import { useEffect } from "react"; // Importing useEffect hook

const About = () => {
  // Initializing component
  useEffect(() => {
    AOS.init({ duration: 700 }); // Initializing AOS animation library on component mount
  }, []);

  // Rendering component
  return (
    <div className="about" id='about'>
      <div className="about-list">
        <h2>About ChatGPT</h2>
        <div className="about-left">
          <img src="/images/about.png" alt="about" data-aos="zoom-in"/>
          <p data-aos="fade-left">
            - At ChatGPT, we believe that communication is the key to unlocking
            the full potential of human knowledge and connection. That's why
            we've developed the ultimate language model - a cutting-edge
            artificial intelligence technology that puts the power of
            communication directly in your hands.
          </p>
        </div>
        <div className="about-right">
          <p data-aos="fade-right">
            - Our mission is simple: to provide you with the most advanced and
            intuitive language model available, so that you can easily access
            the latest in AI technology, expand your knowledge, and connect with
            others around the world like never before. With ChatGPT, you can
            communicate with clarity, precision, and ease, whether you're
            chatting with friends, collaborating with colleagues, or learning
            something new.
          </p>
          <img src="/images/about.png" alt="about" data-aos="zoom-in"/>
        </div>
        <div className="about-left">
          <img src="/images/about.png" alt="about" data-aos="zoom-in"/>
          <p data-aos="fade-left">
            - So why choose ChatGPT? Our state-of-the-art AI technology ensures
            that you'll always have access to the most up-to-date information
            and insights, while our intuitive interface makes it easy to use, no
            matter your level of experience. Plus, with our commitment to
            privacy and security, you can rest assured that your information is
            always safe and secure.
          </p>
        </div>
        <div className="about-right">
          <p data-aos="fade-right">
            - By joining the ChatGPT community today, you'll be able to
            experience the incredible power of smarter communication for
            yourself. Our cutting-edge AI technology empowers you to connect
            with people around the world with greater ease and precision than
            ever before, while also providing you with access to the latest
            information and insights.
          </p>
          <img src="/images/about.png" alt="about" data-aos="zoom-in"/>
        </div>
      </div>
    </div>
  );
};

export default About;
