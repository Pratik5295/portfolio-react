import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './components/Navigation';

import './App.css'; //Importing CSS for styling

// This is your main App component - like your main class in C#
function App() {
  return (
    <div classname="app">
  <Navigation/>
  
     <section className="projects-section">
        <h2 className="section-title">Projects</h2>
        <div className="project-list">

          <Link to="/dialogue-tool" className="project-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/SSDialogueTool.png)` }}>
            <h3>Dialogue Tool</h3>
            <p>A Unity editor tool for branching dialogue design.</p>
          </Link>

          <Link to="/detective-game" className="project-card" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/images/SSDetective.png)` }}>
            <h3>Detective Game</h3>
            <p>A pixel art mystery adventure game prototype.</p>
          </Link>
          
        </div>
      </section>  


    </div>
  );
}

// Export the App component - this is what gets rendered to the page
export default App;