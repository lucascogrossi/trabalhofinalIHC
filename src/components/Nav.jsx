import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <Link to="/shop">Shop</Link>
    <Link to="/impact">Impact</Link>
    <Link to="/shopping">Shopping</Link>
    <Link to="/cart">Cart</Link>
    <Link to="/signup">Sign Up</Link>
    <Link to="/login">Log in</Link>
  </div>
);

export default Nav;
