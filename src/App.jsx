import { useState } from "react";
import About from "./components/About/About";
import AuthModal from "./components/Auth/AuthModal";
import Contact from "./components/Contact/Contact";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
function App() {
  const [auth ,setAuth] = useState(false)
  return (
    <>
      {auth && <AuthModal 
      setAuth={setAuth}
      />}
      <Header setAuth={setAuth} />
      <Main />
      <About />
      <Features />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
