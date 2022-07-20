import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useProject } from "./Hooks/useProjects";
import Project from "./Project";
import "./Projects.sass";

const Projects = () => {

  const listOfProjects  = useProject()

  return (
    <div id="projects">
      {listOfProjects.map((project) => <h2><Link to={`/projects/${project.id}`}>{project.name}</Link> </h2>)}
    </div>
  );
};

export default Projects;
