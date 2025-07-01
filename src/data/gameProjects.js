// data/gameProjects.js
export const gameProjects = Array.from({ length: 12 }, (_, index) => ({
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