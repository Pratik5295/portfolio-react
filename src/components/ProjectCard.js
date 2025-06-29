import React from 'react';
import './ProjectCard.css';

// Reusable ProjectCard component - like a class you can instantiate multiple times
const ProjectCard = ({ 
  title, 
  subtitle, 
  technologies, 
  description, 
  imageUrl, 
  projectType = "game", // "game", "recent", or "art"
  onClick 
}) => {
  // Handle card click - like an event handler in C#
  const handleCardClick = () => {
    if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      className={`project-card ${projectType}`} 
      onClick={handleCardClick}
      role="button" 
      tabIndex={0}
      onKeyDown={(e) => e.key === 'Enter' && handleCardClick()}
    >
      {/* Card image/background */}
      <div className="card-image">
        {imageUrl ? (
          <img src={imageUrl} alt={title} />
        ) : (
          // Placeholder background with gradient
          <div className="placeholder-bg">
            <div className="placeholder-text">
              {title.split(' ').map(word => word[0]).join('')}
            </div>
          </div>
        )}
        
        {/* Overlay that appears on hover */}
        <div className="card-overlay">
          <div className="overlay-content">
            <h3 className="card-title">{title}</h3>
            {subtitle && <p className="card-subtitle">{subtitle}</p>}
            {technologies && (
              <div className="tech-tags">
                {technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            )}
            {description && <p className="card-description">{description}</p>}
          </div>
        </div>
      </div>
      
      {/* Card footer - always visible */}
      <div className="card-footer">
        <h4 className="footer-title">{title}</h4>
        {subtitle && <p className="footer-subtitle">{subtitle}</p>}
      </div>
    </div>
  );
};

export default ProjectCard;