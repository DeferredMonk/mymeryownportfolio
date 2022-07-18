import React, { useState } from "react";
import Project from "./Project";
import "./Projects.sass";

const Projects = () => {
  const [show, setShow] = useState(false);
  return (
    <div id="projects">
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        test
      </button>
      <Project show={show} />
    </div>
  );
};

export default Projects;
