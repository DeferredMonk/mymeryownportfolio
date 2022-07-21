import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProject } from "./Hooks/useProjects";
import Project from "./Project";
import "./Projects.sass";

const Projects = () => {
  const listOfProjects = useProject();

  return (
    <div id="projects">
      <h1 style={{ textAlign: "center" }}>My projects!</h1>
      {listOfProjects.map((project) => (
        <div>
          <Link to={`/projects/${project.id}`}>{project.name}</Link>{" "}
        </div>
      ))}
    </div>
  );
};

export default Projects;
