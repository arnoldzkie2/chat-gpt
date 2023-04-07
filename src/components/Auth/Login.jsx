import React from 'react'

const Login = ({setAuthPage}) => {
  return (
    <div className="auth-wrapper">
      <h1>Chat-GPT</h1>
      <form>
        <input type="text" placeholder="Email address" />
          <input type="password" placeholder="Enter password" />
        <button>Login</button>
      </form>
        <div className="auth-footer">
            Don't have account yet? <span onClick={() => setAuthPage(false)}> Sign up now!</span>
        </div>
    </div>
  )
}

export default Login
