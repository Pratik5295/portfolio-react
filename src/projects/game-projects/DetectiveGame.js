import React from 'react';
import Navigation from '../../components/Navigation';
import './project-page.css'; // Import the generic project page styles

function DetectiveGame() {
  return (
    <div className="projects-page">
      <Navigation />

      <div className="project-container">
        {/* Project Title and Description */}
        <section className="project-header">
          <h1>Detective Game</h1>
          <p className="project-description">
            A 3rd Person Game made using Unity and C#. 
            This game follows the story of Derek, a detective who is recently re-joining the force after a 9 month break due to an accident. 
            Solve the case allotted while also figuring out what caused the accident leading to your comatose state. 
            This was a solo project made over a span of 2-months including designing phase.
          </p>
        </section>

        {/* Gameplay Video */}
        <section className="project-video">
          <h2>Gameplay Demo</h2>
          <div className="video-wrapper">
           <iframe
                src="https://drive.google.com/file/d/1dJvNPQteytIBZTnUvsmZp2EfaQ9TOXXa/preview"
                width="100%"
                height="480"
                allow="autoplay"
                title="Detective Game Demo"
                ></iframe>
          </div>
        </section>

        {/* Features */}
        <section className="project-section">
          <h2>Features</h2>
          <ul className="feature-list">
            <li>Dialogue System: A dialogue system branching different dialogue options. Messages can trigger different quests, and fire events of its own.</li>
            <li>IK System: Combined the animations in game with IK Rig system to make it feel more natural</li>
            <li>Pick up and Drop Puzzle System: Puzzle type: pick up and drop objects in right slots created for tutorial</li>
            <li>Scriptable Objects for Data Management: Scriptable objects used for storing dialogues, quests, pick up objects, etc.</li>
            <li>Shooting system: Shooting mode allows player to fire projectiles in targeted direction. Shooting enabled and disabled state</li>
            <li>Quest System: A robust quest system coupled with event system created. Different events handled: Key pressed, Object picked up, Enemy killed</li>
          </ul>
        </section>

        {/* Tools Used */}
        <section className="project-section">
          <h2>Tools & Tech</h2>
          <p>Unity, C#, JIRA</p>
        </section>

        {/* Screenshots Grid */}
        <section className="project-section">
          <h2>Screenshots</h2>
          <div className="screenshot-grid">
            <img src="/images/detective1.png" alt="Screenshot 1" />
            <img src="/images/detective2.png" alt="Screenshot 2" />
            <img src="/images/detective3.png" alt="Screenshot 3" />
          </div>
        </section>

        {/* Image-Text Sections */}
        <section className="project-section alt-section">
          <div className="image-left">
            <img src="/images/detective_feature.png" alt="Feature Visual" />
          </div>
          <div className="text-right">
            <h3>Investigation Mechanic</h3>
            <p>Players can gather evidence, question suspects, and connect clues to uncover the truth behind each case.</p>
          </div>
        </section>

        <section className="project-section alt-section reverse">
          <div className="text-left">
            <h3>Dynamic Storytelling</h3>
            <p>Every decision matters, with branching dialogue options and consequences that shape the narrative and the final outcome.</p>
          </div>
          <div className="image-right">
            <img src="/images/detective_story.png" alt="Story Visual" />
          </div>
        </section>


      </div>
    </div>
  );
}

export default DetectiveGame;
