import React from "react";
import styles from "./BeProject.module.sass";
import { Link, useNavigate } from "react-router-dom";

const BeProjectCard = ({ project, width }) => {
  const navigate = useNavigate();
  return (
    <>
      {width <= 480 ? (
        <Link
          className={`${styles.InteractionButton} ${styles.button}`}
          to={`/project/${project.id}`}
        >
          {project.name}
        </Link>
      ) : (
        <div
          className={styles.card}
          onClick={() => navigate(`/project/${project.id}`)}
        >
          <div className={styles.cardContentWrapper}>
            <h4 className={styles.cardTitle}>{project.name}</h4>
            <p className={styles.cardContent}>{project.description.application}</p>
          </div>
          <img
            src="chevron-down.svg"
            alt="arrow icon"
            className={`${styles.arrowDown} ${styles.right}`}
          />
        </div>
      )}
    </>
  );
};

export default BeProjectCard;
