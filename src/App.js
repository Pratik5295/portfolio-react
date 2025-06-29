import React from 'react';
import './App.css';
import Header from './components/Header'; // Import our Header component
import ProjectSections from './components/ProjectSections'; // Import our ProjectSections component

// This is your main App component - like your main class in C#
function App() {
  return (
    <div className="App">
      {/* Use our Header component - it's like instantiating a class */}
      <Header />
      
      {/* Main content area */}
      <main className="main-content">
        <section id="home" className="hero-section">
          <div className="hero-container">
            <div className="hero-content">
              <h1 className="hero-title">Welcome to My Portfolio</h1>
              <p className="hero-subtitle">Game Developer | Unity Specialist | Creative Problem Solver</p>
              <p className="hero-description">
                Passionate about creating immersive gaming experiences and innovative tools. 
                Explore my latest projects, game development work, and artistic creations.
              </p>
              <div className="hero-buttons">
                <a href="#recent-work" className="btn btn-primary">View My Work</a>
                <a href="#resume" className="btn btn-secondary">Download Resume</a>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Sections */}
        <ProjectSections />
        
        <section id="github" className="section">
          <div className="container">
            <h1>GitHub Projects</h1>
            <p>This section will showcase your GitHub repositories and coding projects.</p>
          </div>
        </section>
        
        <section id="art-station" className="section">
          <div className="container">
            <h1>Art Station</h1>
            <p>Display your artwork, 3D models, and creative projects here.</p>
          </div>
        </section>
        
        <section id="resume" className="section">
          <div className="container">
            <h1>Resume</h1>
            <p>Your professional experience, education, and skills will go here.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

// Export the App component - this is what gets rendered to the page
export default App;