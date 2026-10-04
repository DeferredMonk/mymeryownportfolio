import React from "react";
import styles from "./ProjectCard.module.sass";

const ProjectCard = ({ project, index }) => (
  <article className={styles.card}>
    <div className={styles.cardTopline}>
      <span>Selected project</span>
      <span>{String(index + 1).padStart(2, "0")}</span>
    </div>
    <h3 className={styles.title}>{project.name}</h3>
    <p className={styles.description}>{project.description.application}</p>
    {project.description.technical && (
      <p className={styles.technical}>{project.description.technical}</p>
    )}
    {project.createdUsing.length > 0 && (
      <ul className={styles.technologies} aria-label="Technologies">
        {project.createdUsing.map((technology) => (
          <li key={technology}>{technology}</li>
        ))}
      </ul>
    )}
    {(project.src.srcLive || project.src.srcSource) && (
      <div className={styles.actions}>
        {project.src.srcLive && (
        <a href={project.src.srcLive}>
          Visit live site <span aria-hidden="true">↗</span>
        </a>
        )}
        {project.src.srcSource && (
        <a href={project.src.srcSource}>
          Source code <span aria-hidden="true">↗</span>
        </a>
        )}
      </div>
    )}
  </article>
);

export default ProjectCard;
