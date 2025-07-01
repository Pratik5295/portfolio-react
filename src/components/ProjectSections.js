import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/ProjectSections.css';

// Import project data from separate files
import { recentProjects } from '../data/recentProjects';
import { gameProjects } from '../data/gameProjects';
import { artProjects } from '../data/artProjects';

const ProjectSections = ({ onProjectSelect }) => {
  // Handle card click - call the parent's project selection handler
  const handleCardClick = (project) => {
    console.log('Selected project:', project.title);
    if (onProjectSelect) {
      onProjectSelect(project);
    }
  };

  return (
    <div className="project-sections">
      
      {/* Recent Work Section */}
      <section className="project-section recent-work" id="recent-work">
        <div className="container">
          <h2 className="section-title">Recent Work</h2>
          <div className="section-divider"></div>
          <div className="projects-grid recent-grid">
            {recentProjects.map((project, index) => (
              <ProjectCard
                key={`recent-${index}`}
                {...project}
                projectType="recent"
                onClick={() => handleCardClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Game Projects Section */}
      <section className="project-section game-projects">
        <div className="container">
          <h2 className="section-title">Game Projects</h2>
          <div className="section-divider"></div>
          <div className="projects-grid game-grid">
            {gameProjects.map((project, index) => (
              <ProjectCard
                key={`game-${index}`}
                {...project}
                projectType="game"
                onClick={() => handleCardClick(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Art Projects Section */}
      <section className="project-section art-projects">
        <div className="container">
          <h2 className="section-title">Art Projects</h2>
          <div className="section-divider"></div>
          <div className="projects-grid art-grid">
            {artProjects.map((project, index) => (
              <ProjectCard
                key={`art-${index}`}
                {...project}
                projectType="art"
                onClick={() => handleCardClick(project)}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectSections;