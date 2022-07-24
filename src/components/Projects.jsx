import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProject } from "./Hooks/useProjects";
import Project from "./Project";
import "./Projects.sass";

const Projects = () => {
  const listOfProjects = useProject();

  return (
    <div id="projects">
      <h1 className="projectsHeader">My projects!</h1>
      <div className="ProjectsContainer">
        {listOfProjects.map((project) => (
          <div className="singleProjectContainer">
            <h2>{project.name}</h2>
            <div className="singleProject">
              <iframe src={project.src} className="Projectsframe" />
              <Link
                style={{
                  position: "absolute",
                  top: "0",
                  left: "0",
                  display: "inline-block",
                  width: "100%",
                  height: "100%",
                  zIndex: "5",
                }}
                to={`/projects/${project.id}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
