import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    
   <nav>
    <div className="AB">
      <Link to="/">
        <h1>Home</h1>
      </Link>
    </div>
      
      <span> | </span>
      <Link to="/register">
        <h1>Registration</h1>
      </Link>
      <span> | </span>
      <Link to="/login">
        <h1>Login</h1>
      </Link>
      <Link to="/Dashboard"><h1>Dashboard</h1></Link>
    </nav>
    
  );
};
export default NavBar;
