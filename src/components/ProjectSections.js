import React from 'react';
import ProjectCard from './ProjectCard';
import './ProjectSections.css';

const ProjectSections = () => {
  // Sample data - you can replace with real project data later
  const recentProjects = [
    {
      title: "Custom Dialogue Tool",
      subtitle: "Unity",
      technologies: ["Unity Tool", "Dialogue System", "Custom Editor"],
      description: "A comprehensive dialogue system with custom editor for Unity game development.",
    },
    {
      title: "Detective Game",
      subtitle: "Unity",
      technologies: ["Third Person", "Narrative", "Puzzle Solving", "Shooting"],
      description: "An immersive detective game featuring investigation mechanics and story-driven gameplay.",
    },
    {
      title: "A Hell Shift",
      subtitle: "Unity",
      technologies: ["Point-and-Click", "Work Simulator", "Puzzles", "Game Studio"],
      description: "A unique work simulation game with puzzle elements and engaging gameplay mechanics.",
    }
  ];

  // Generate game projects (3x4 grid = 12 projects)
  const gameProjects = Array.from({ length: 12 }, (_, index) => ({
    title: `Project A${index + 1}`,
    subtitle: "Game Development",
    technologies: ["Unity", "C#", "Game Design"],
    description: `Description for Project A${index + 1}. This will be updated with actual project details.`,
  }));

  // Generate art projects (3x2 grid = 6 projects)
  const artProjects = Array.from({ length: 6 }, (_, index) => ({
    title: `Art Project A${index + 1}`,
    subtitle: "Digital Art",
    technologies: ["3D Modeling", "Texturing", "Animation"],
    description: `Description for Art Project A${index + 1}. This will showcase your artistic work.`,
  }));

  // Handle card click - you can add navigation or modal logic here
  const handleCardClick = (project) => {
    console.log('Clicked project:', project.title);
    // Future: Open project details modal or navigate to project page
  };

  return (
    <div className="project-sections">
      
      {/* Recent Work Section */}
      <section className="project-section recent-work">
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