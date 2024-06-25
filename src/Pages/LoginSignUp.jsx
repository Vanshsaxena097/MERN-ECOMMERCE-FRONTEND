import React, { useState } from 'react';
import './CSS/loginSignup.css';

const LoginSignUp = () => {
  const [state, setState] = useState("Login");

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: ""
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = async () => {
    console.log("login function executed ", formData);
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();

      if (response.ok && responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        console.error("Signup failed", responseData);
      }
    } catch (error) {
      console.error("Error occurred during signup", error);
    }
    // Implement login functionality here
  };

  const signup = async () => {
    console.log("signup function executed ", formData);
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const responseData = await response.json();

      if (response.ok && responseData.success) {
        localStorage.setItem('auth-token', responseData.token);
        window.location.replace("/");
      } else {
        console.error("Signup failed", responseData);
      }
    } catch (error) {
      console.error("Error occurred during signup", error);
    }
  };

  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>{state}</h1>
        <div className="login-signup-fields">
          {state === "Sign Up" && (
            <input
              name='username'
              value={formData.username}
              onChange={changeHandler}
              type="text"
              placeholder='Your Name'
            />
          )}
          <input
            name='email'
            value={formData.email}
            onChange={changeHandler}
            type="email"
            placeholder='Email Address'
          />
          <input
            name='password'
            value={formData.password}
            onChange={changeHandler}
            type="password"
            placeholder='Password'
          />
        </div>
        <button onClick={() => { state === "Login" ? login() : signup() }}>Continue</button>
        {state === "Sign Up" ? (
          <p className="login-signup-login">
            Already have an account? <span onClick={() => { setState("Login") }}>Login here</span>
          </p>
        ) : (
          <p className="login-signup-login">
            Create an account? <span onClick={() => { setState("Sign Up") }}>Click here</span>
          </p>
        )}
        <div className="login-signup-agree">
          <input type="checkbox" name='' id='' />
          <p>By continuing I agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignUp;
