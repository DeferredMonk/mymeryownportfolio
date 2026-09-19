import React, { useLayoutEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Project.module.sass";
import ProjectDetail from "../project/ProjectDetail";

const Project = ({ projects }) => {
  const { id } = useParams();
  const ref = useRef();
  const [width, setWidth] = useState(0);

  const project = projects.find((item) => item.id === id);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div id="container" ref={ref} className={styles.container}>
      {project ? <ProjectDetail project={project} width={width} /> : <p>Project not found.</p>}
    </div>
  );
};

export default Project;
