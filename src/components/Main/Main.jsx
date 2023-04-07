// Import the React library
import React from "react";

// Import the stylesheet for this component
import "./index.scss";

// Define the Main component
const Main = () => {

  const handleButtons = (buttonLink) => {
    if(buttonLink){
      window.open('https://chat.openai.com/chat')
    }else {
      window.open('https://openai.com/blog/chatgpt')
    }
  }
  return (
    // Render the main content of the webpage
    <main id='main'>
      <div className="banner">
        <h1>Welcome to ChatGPT</h1>
        <p>
          The power of AI at your fingertips. Communicate with clarity, expand
          your knowledge, and connect with the world like never before. Join the
          conversation today and experience the ultimate in language technology.
          ChatGPT - simply smarter communication.
        </p>
      </div>
      <div className="buttons">
        <button onClick={() => handleButtons(false)}>Learn More</button>
        <button onClick={() => handleButtons(true)}>Try GPT</button>
      </div>
    </main>
  );
};

// Export the Main component for use in other files
export default Main;
