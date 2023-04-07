import React from "react";

const Register = ({setAuthPage}) => {
  return (
    <div className="auth-wrapper">
      <h1>Chat-GPT</h1>
      <form>
        <div className="auth-two">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="text" placeholder="Email address" />
        <div className="auth-two">
          <input type="password" placeholder="Create password" />
          <input type="password" placeholder="Confirm password" />
        </div>
        <button>Register</button>
      </form>
        <div className="auth-footer">
            Already signed up? <span onClick={() => setAuthPage(true)}> Login now!</span>
        </div>
    </div>
  );
};

export default Register;
