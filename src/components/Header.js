import React from 'react';
import '../styles/Header.css';

// This is a functional component - like a method that returns JSX
const Header = () => {
  return (
    <header className="header">
      {/* JSX uses className instead of class (because class is a JavaScript keyword) */}
      <div className="header-content">
        {/* Left side - Name and title */}
        <div className="header-left">
          <h1 className="name">PRATIK SHRINGARPURE</h1>
          <h2 className="title">Game Developer</h2>
        </div>
        
        {/* Right side - Social links */}
        <div className="header-right">
          <div className="social-links">
            {/* In React, we use {} to write JavaScript inside JSX */}
            <a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-text">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-text">LinkedIn</span>
            </a>
            <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="social-link">
              <span className="social-text">YouTube</span>
            </a>
            <a href="mailto:your-email@gmail.com" className="social-link">
              <span className="social-text">Gmail</span>
            </a>
          </div>
        </div>
      </div>
      
      {/* Navigation bar */}
      <nav className="navigation">
        <div className="nav-content">
          <a href="#home" className="nav-link">Home</a>
          <a href="#github" className="nav-link">Github</a>
          <a href="#art-station" className="nav-link">Art Station</a>
          <a href="#resume" className="nav-link">Resume</a>
        </div>
      </nav>
    </header>
  );
};

// Export the component so other files can import and use it
// This is like making a class public in C#
export default Header;