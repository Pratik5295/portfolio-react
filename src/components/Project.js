import React from 'react';
import Header from './Header';
import '../styles/Project.css';

const Project = ({ projectData, onBack }) => {
  // Default project data structure - can be passed as props or from routing state
  const defaultProject = {
    title: "Project Title",
    description: "This is a comprehensive description of the project. It explains the goals, challenges faced, and solutions implemented. The project showcases various skills and technologies used in the development process.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Default video URL
    highlights: [
      "Key feature or achievement #1",
      "Key feature or achievement #2", 
      "Key feature or achievement #3",
      "Technical challenge overcome",
      "Innovative solution implemented"
    ],
    technologies: ["Unity", "C#", "Game Design"],
    category: "Game Development",
    duration: "3 months",
    status: "Completed"
  };

  // Use passed project data or fall back to default
  const project = projectData || defaultProject;

  return (
    <div className="project-page">
      <Header />
      
      <div className="project-container">
        {/* Title Section */}
        <section className="project-title-section">
          <div className="container">
            <div className="project-header">
              <h1 className="project-title">{project.title}</h1>
              <div className="project-meta">
                <span className="project-category">{project.category}</span>
                <span className="project-duration">{project.duration}</span>
                <span className="project-status">{project.status}</span>
              </div>
              <div className="project-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="project-video-section">
          <div className="container">
            <div className="video-wrapper">
              <div className="video-container">
                <iframe
                  src={project.videoUrl}
                  title={`${project.title} Video`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="project-video"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Description Section */}
        <section className="project-description-section">
          <div className="container">
            <div className="description-content">
              <h2 className="section-title">Project Overview</h2>
              <div className="section-divider"></div>
              <p className="project-description">{project.description}</p>
            </div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="project-highlights-section">
          <div className="container">
            <h2 className="section-title">Key Highlights</h2>
            <div className="section-divider"></div>
            <div className="highlights-grid">
              {project.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <div className="highlight-icon">
                    <span>★</span>
                  </div>
                  <p className="highlight-text">{highlight}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Back Navigation */}
        <section className="project-navigation">
          <div className="container">
            <button 
              className="back-button"
              onClick={() => onBack ? onBack() : window.history.back()}
            >
              ← Back to Projects
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Project;