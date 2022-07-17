import React from "react";
import "./Projects.sass";

const Projects = () => {
  return (
    <div id="projects">
      <h1 className="projectsHeader">Projects</h1>
      <div className="wrapper">
        <iframe
          src="https://birders-diary.netlify.app/"
          width="400px"
          height="600px"
          className="project"
          title="project"
        />
        <div className="projectDesc">
          <h2>Bird spotter</h2>
        </div>
      </div>
    </div>
  );
};

export default Projects;
