import React from 'react';
import { Link } from 'react-router-dom';
// import './Landing.css'; // optional for styling

const Landing = () => {
  return (
    <div className="landing-container">
      <h1>Welcome to MERN Blog</h1>
      <p>Create, share, and manage your blogs effortlessly.</p>
      <div className="landing-buttons">
        <Link to="/signup" className="btn">Sign Up</Link>
        <Link to="/login" className="btn btn-primary">Login</Link>
      </div>
    </div>
  );
};

export default Landing;
