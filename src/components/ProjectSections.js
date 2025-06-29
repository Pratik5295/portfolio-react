import React from 'react';
import ProjectCard from './ProjectCard';
import '../styles/ProjectSections.css';

const ProjectSections = ({ onProjectSelect }) => {
  // Sample data - you can replace with real project data later
  const recentProjects = [
    {
      id: 'custom-dialogue-tool',
      title: "Custom Dialogue Tool",
      subtitle: "Unity",
      technologies: ["Unity Tool", "Dialogue System", "Custom Editor"],
      description: "A comprehensive dialogue system with custom editor for Unity game development. This tool streamlines the process of creating complex branching dialogues for narrative-driven games, featuring an intuitive node-based editor and runtime dialogue manager.",
      category: "Tool Development",
      duration: "2 months",
      status: "Completed",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      highlights: [
        "Custom Unity Editor Interface with drag-and-drop functionality",
        "Node-based dialogue system for complex branching conversations",
        "Runtime dialogue manager with save/load capabilities",
        "Branching conversation support with conditional logic",
        "Character emotion system integrated with dialogue flow"
      ]
    },
    {
      id: 'detective-game',
      title: "Detective Game",
      subtitle: "Unity",
      technologies: ["Third Person", "Narrative", "Puzzle Solving", "Shooting"],
      description: "An immersive detective game featuring investigation mechanics and story-driven gameplay. Players take on the role of a seasoned detective solving complex cases through evidence collection, witness interviews, and deductive reasoning.",
      category: "Game Development",
      duration: "6 months",
      status: "In Development",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      highlights: [
        "Third-person investigation mechanics with intuitive controls",
        "Complex narrative branching based on player choices",
        "Evidence collection system with interactive crime scenes",
        "Interactive dialogue system with multiple conversation paths",
        "Atmospheric environment design creating immersive crime scenes"
      ]
    },
    {
      id: 'hell-shift',
      title: "A Hell Shift",
      subtitle: "Unity",
      technologies: ["Point-and-Click", "Work Simulator", "Puzzles", "Game Studio"],
      description: "A unique work simulation game with puzzle elements and engaging gameplay mechanics. Experience the chaos of a demanding workplace through humor-driven storytelling and challenging puzzle-based progression.",
      category: "Game Development",
      duration: "4 months",
      status: "Completed",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      highlights: [
        "Point-and-click interface optimized for desktop and mobile",
        "Work simulation mechanics reflecting real workplace challenges",
        "Puzzle-based progression system with increasing complexity",
        "Humor-driven narrative with relatable workplace scenarios",
        "Multiple ending system based on player performance and choices"
      ]
    }
  ];

  // Generate game projects (3x4 grid = 12 projects) with unique IDs
  const gameProjects = Array.from({ length: 12 }, (_, index) => ({
    id: `game-project-${index + 1}`,
    title: `Project A${index + 1}`,
    subtitle: "Game Development",
    technologies: ["Unity", "C#", "Game Design"],
    description: `This is a comprehensive game development project showcasing advanced Unity techniques and creative problem-solving. Project A${index + 1} demonstrates proficiency in multiple aspects of game development including gameplay mechanics, user interface design, and performance optimization.`,
    category: "Game Development",
    duration: "3 months",
    status: "Completed",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "Innovative gameplay mechanics that enhance player engagement",
      "Polished user interface with intuitive navigation and feedback",
      "Optimized performance across multiple platforms and devices",
      "Cross-platform compatibility ensuring broad accessibility",
      "Engaging player experience with balanced difficulty progression"
    ]
  }));

  // Generate art projects (3x2 grid = 6 projects) with unique IDs
  const artProjects = Array.from({ length: 6 }, (_, index) => ({
    id: `art-project-${index + 1}`,
    title: `Art Project A${index + 1}`,
    subtitle: "Digital Art",
    technologies: ["3D Modeling", "Texturing", "Animation"],
    description: `A sophisticated digital art project showcasing advanced 3D modeling and animation techniques. Art Project A${index + 1} demonstrates mastery of industry-standard tools and creative vision in digital content creation.`,
    category: "Digital Art",
    duration: "1 month",
    status: "Completed",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    highlights: [
      "High-quality 3D modeling with attention to detail and accuracy",
      "Realistic texturing work using industry-standard techniques",
      "Smooth animation sequences with natural movement and timing",
      "Creative concept design showcasing original artistic vision",
      "Professional presentation suitable for portfolio and client work"
    ]
  }));

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