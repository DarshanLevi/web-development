import React from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {
  return (
    <div className="LoginSignup">
      <div className="LoginSignup-container">
        <h1>Sign up</h1>
        <div className="LoginSignup-fields">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>
        <button>Continue</button>
        <p className="LoginSignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="LoginSignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, I agree to the Terms and Policy.</p>
        </div>
      </div>
    </div>
  );
};
export default LoginSignup;
