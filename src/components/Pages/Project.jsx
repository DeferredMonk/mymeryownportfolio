import React, { useLayoutEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProject } from "../Hooks/useProjects";
import "../../sass/Project.sass";
import ProjectDetail from "../project/ProjectDetail";

const Project = () => {
  const { id } = useParams();
  const [listOfEFProjects] = useProject();
  const ref = useRef();
  const [width, setWidth] = useState(0);

  const project = listOfEFProjects.filter(
    (project) => project.id === Number(id)
  )[0];

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div id="container" ref={ref}>
      <ProjectDetail project={project} width={width} />
    </div>
  );
};

export default Project;
