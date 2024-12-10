import React from 'react';
import '../styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav'

const Login = () => (
  
  
  <div className='background-login'>
    
  <div className="login-container">
    
    <Header></Header>

    
    

    <div className="login-form">
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
    
  </div>
  
  </div>
  
);

export default Login;
