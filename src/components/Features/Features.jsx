// Importing the React library and a stylesheet for the Features component
import React from "react";
import "./index.scss";
import featureData from './featuredata'
// Defining the Features component as a functional component
const Features = () => {
  // Returning the JSX for the Features component
  return (
    <div className="features" id='features'>
      <h1>Features of ChatGPT</h1>
      <div className="feature">

        {featureData.map((item) => {
          return (
            <div className="feature-card" key={item.id}>
              <img src={item.img} alt={item.id} />
              <h3>{item.heading}</h3>
              <p>{item.summary}</p>
            </div>
          )
        })}
        
        {/* <div className="feature-card">
          <img src="/images/f-1.jpg" alt="Feature 1" />
          <h3>Natural Language Processing</h3>
          <p>
            ChatGPT's AI technology makes communication faster and more
            intuitive.
          </p>
        </div> */}

      </div>
    </div>
  );
};

// Exporting the Features component as the default export of this module
export default Features;
