import React from "react";
import ProjectSection from "./ProjectSection";

function Projects() {
  // Sample project object
  const project = {
    title: "Sample Project",
    overview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    techStack: "React, Node.js, MongoDB",
    githubUrl: "https://github.com/example",
    websiteUrl: "https://example.com",
  };

  return (
    <div>
      <h1 className="text-3xl font-mono font-bold text-green-200">Projects</h1>

      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni blanditiis asperiores natus ipsum error quis, unde nulla esse autem voluptatem itaque odio sequi tempore doloribus mollitia, vel sapiente, corporis harum.
      </p>

      {/* Rendering ProjectSection component with sample project object */}
      <ProjectSection project={project} />
    </div>
  );
}

export default Projects;
