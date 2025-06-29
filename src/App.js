import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProjectSections from './components/ProjectSections';
import Project from './components/Project';

// This is your main App component - like your main class in C#
function App() {
  const [currentView, setCurrentView] = useState('home'); // 'home' or 'project'
  const [selectedProject, setSelectedProject] = useState(null);

  // Function to handle project selection
  const handleProjectSelect = (projectData) => {
    setSelectedProject(projectData);
    setCurrentView('project');
  };

  // Function to go back to home
  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProject(null);
  };

  // If viewing a project, show the project page
  if (currentView === 'project') {
    return (
      <div className="App">
        <Project 
          projectData={selectedProject} 
          onBack={handleBackToHome}
        />
      </div>
    );
  }

  // Otherwise, show the main portfolio page
  return (
    <div className="App">
      {/* Use our Header component - it's like instantiating a class */}
      <Header />
      
      {/* Main content area */}
      <main className="main-content">
        
        
        {/* Project Sections - now with project selection handler */}
        <ProjectSections onProjectSelect={handleProjectSelect} />
        
      </main>
    </div>
  );
}

// Export the App component - this is what gets rendered to the page
export default App;