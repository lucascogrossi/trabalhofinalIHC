import React from 'react';
import '../styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Nav from '../components/Nav'

const Signup = () => (
  <div className='background-signup'>
    <div className="signup-container">
      <Header></Header>
      <Nav></Nav>
     

      <div className="signup-form">
        <h2>Sign Up</h2>
        <form>
          <label htmlFor="name">Full Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email Address:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />

          <button type="submit">Sign Up</button>
        </form>
        <Footer></Footer>
      </div>
    </div>
  </div>
);

export default Signup;
