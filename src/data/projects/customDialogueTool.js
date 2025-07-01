// data/projects/customDialogueTool.js
export const customDialogueTool = {
  id: 'custom-dialogue-tool',
  title: "Custom Dialogue Tool",
  subtitle: "Unity",
  technologies: ["Unity Tool", "Dialogue System", "Custom Editor"],
  description: "A comprehensive dialogue system with custom editor for Unity game development. This tool streamlines the process of creating complex branching dialogues for narrative-driven games, featuring an intuitive node-based editor and runtime dialogue manager."
  +"\n Each dialogue message comprises of Speaker Name, message, Unique Ids and Dialogue Options."
  +" Drag and drop connections via nodes or their option nodes to form a dialogue tree. ",
  category: "Tool Development",
  duration: "2 months",
  status: "Completed",
  videoUrl: "https://drive.google.com/file/d/1KMcEGNsGffncaiMEq6sDTxCMmPlU0L1a/preview",
  highlights: [
    "Node Editor for creating and managing dialogue trees",
    "Scriptable Objects creations for dialogue data management",
    "JSON file support for easy data import/export",
    "Branching conversation support with conditional logic"
  ],
  customHTML: `
    <div class="special-section">
    <p className="project-description">This tool was designed to solve the <strong>complexity problem</strong> in dialogue systems...</p>
    </div>
  `
};

