// Import the necessary libraries and stylesheets
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-scroll";
import "./index.scss";

// Define the Header component
const Header = ({setAuth}) => {
  // Use state to manage the header and list item colors
  const [header, setHeader] = useState({
    head: "transparent",
    li: "white",
  });

  // Use useEffect to change the header and list item colors based on the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setHeader({
          head: "white",
          li: "#06142e",
        });
      } else {
        setHeader({
          head: "transparent",
          li: "white",
        });
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define the styles for the header background and list item colors
  const style = {
    background: header.head,
  };

  const headColor = {
    color: header.li,
  };

  // Create a ref for the navigation menu
  const navRef = useRef();

  // Toggle the navigation menu
  const toggleNavBar = () => {
      navRef.current.classList.toggle("toggle-nav");
  };

  const showAuth = () => {
    setAuth(true)
    navRef.current.classList.toggle("toggle-nav");
  }

  // Render the header component
  return (
    <>
      <header style={style} className="header">
        <h1 style={headColor}>Chat-GPT</h1>
        <ul style={headColor} ref={navRef}>
          <button onClick={toggleNavBar} className="nav-btn nav-close-btn">
            <i className="fa-solid fa-xmark"></i>
          </button>
          <Link to="main" smooth={true} duration={500}>
            <li onClick={toggleNavBar}>Home</li>
          </Link>
          <Link to="about" smooth={true} duration={500}>
            <li onClick={toggleNavBar}>About</li>
          </Link>
          <Link to="features" smooth={true} duration={500}>
            <li onClick={toggleNavBar}>Features</li>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <li onClick={toggleNavBar}>Contact</li>
          </Link>
          <li onClick={showAuth}>Login</li>
        </ul>
        <button onClick={toggleNavBar} className="nav-btn">
          <i className="fa-solid fa-bars" style={headColor}></i>
        </button>
      </header>
    </>
  );
};

// Export the Header component for use in other files
export default Header;
