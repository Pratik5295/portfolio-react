// data/artProjects.js
export const artProjects = Array.from({ length: 6 }, (_, index) => ({
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