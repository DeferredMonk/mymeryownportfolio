import React, { useLayoutEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useProject } from "./Hooks/useProjects";
import Project from "./Project";
import "./Projects.sass";

const Projects = () => {
  const listOfProjects = useProject();
  const ref = useRef();

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div id="projects" ref={ref}>
      <h1 className="projectsHeader">My projects!</h1>
      <p className="projectsDescription">
        Find listed below a list of projects created by me during school classes
        and free time!
      </p>
      <div className="ProjectsContainer">
        {listOfProjects.map((project) => (
          <div className="singleProjectContainer">
            {width <= 480 ? (
              <Link
                className="InteractionButton button"
                to={`/projects/${project.id}`}
              >
                {project.name}
              </Link>
            ) : (
              <>
                <h2>{project.name}</h2>
                <div className="singleProject">
                  <iframe src={project.src.srcLive} className="Projectsframe" />
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
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
