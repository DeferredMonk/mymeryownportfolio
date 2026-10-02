import React from "react";
import styles from "./Projects.module.sass";
import ProjectCard from "../project/ProjectCard";

const Projects = ({ projects }) => {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.content}>
        <p className={styles.sectionLabel}>03 / Selected work</p>
        <h2 className={styles.projectsHeader}>Selected projects</h2>
        <p className={styles.projectsDescription}>
          A selection of projects built for real clients, learning, and the joy
          of making useful things.
        </p>
        <div className={styles.projectsContainer}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
