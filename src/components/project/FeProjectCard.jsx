import React from "react";
import { Link } from "react-router-dom";
import styles from "./FeProjectCard.module.sass";

const FeProjectCard = ({ project, width }) => {
  return (
    <div className={styles.singleProjectContainer}>
      {width <= 480 ? (
        <Link
          className={`${styles.InteractionButton} ${styles.button}`}
          to={`/project/${project.id}`}
        >
          {project.name}
        </Link>
      ) : (
        <div className={styles.projectPreview}>
          <div className={styles.projectPreviewHeader}>
            <span>{project.name}</span>
            <span>View case study</span>
          </div>
          <div className={styles.singleProject}>
            <iframe
              src={project.src.srcLive}
              className={styles.projectsFrame}
              title={project.name}
            />
            <Link
              className={styles.projectLink}
              aria-label={`View ${project.name} case study`}
              to={`/project/${project.id}`}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default FeProjectCard;
