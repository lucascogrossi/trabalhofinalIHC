import React from 'react';
import '../styles.css';


const Login = () => (
  <div className="login-container">
    <h1>Morning Express</h1>
    <h2>Sign In</h2>
    <form>
      <label htmlFor="email">Email Address:</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">Log In</button>
    </form>
    <a href="#">Forgot Password?</a>
  </div>
);

export default Login;
