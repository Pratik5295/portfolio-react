import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="navbar">
      <div className="nav-logo">Pratik Shringarpure</div>
      <ul className="nav-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/home#projects">Projects</Link></li>
        <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer">Resume</a></li>
        <li><a href="https://www.linkedin.com/in/your-profile/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;
