import React, { useLayoutEffect, useRef, useState } from "react";
import styles from "./Projects.module.sass";
import BeProjectCard from "../project/BeProjectCard";
import FeProjectCard from "../project/FeProjectCard";

const Projects = ({ projects }) => {
  const ref = useRef();

  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div id="projects" ref={ref} className={styles.projects}>
      <h1 className={styles.projectsHeader}>My projects!</h1>
      <p className={styles.sectionLabel}>03 / Selected work</p>
      <p className={styles.projectsDescription}>
        Find listed below a list of projects created by me during school classes
        and free time!
      </p>
      <div className={styles.projectsContainer}>
        {projects.map((project) => {
          return project.src.srcLive ? (
            <FeProjectCard key={project.id} project={project} width={width} />
          ) : (
            <BeProjectCard key={project.id} project={project} width={width} />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
