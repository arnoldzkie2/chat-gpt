import React from "react";
import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import './index.scss'
const AuthModal = ({ setAuth }) => {
  const [authPage, setAuthPage] = useState(true);
  return (
    <div className="auth-modal">
      <div className="auth">

      <i className="fa-solid fa-x" onClick={() => setAuth(false)}></i>
      {authPage ? 
    <Login 
    setAuthPage={setAuthPage}
    /> : <Register 
    setAuthPage={setAuthPage}
    />}</div>
    </div>
  );
};

export default AuthModal;
