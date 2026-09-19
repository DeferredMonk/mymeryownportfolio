import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styles from "./ProjectDetail.module.sass";

const ProjectDetail = ({ project, width }) => {
  const navigate = useNavigate();
  if (!project) return null;

  return (
    <div className={styles.project}>
      {width >= 480 && (
        <ArrowBackIosNewIcon
          className={styles.iconButton}
          onClick={() => navigate(-1)}
          style={{ margin: "15px" }}
        />
      )}
      {width > 480 && project.src.srcLive && (
        <iframe
          src={project.src.srcLive}
          className={styles.frame}
          title="project"
          width="360px"
          height="500px"
        />
      )}

      <div className={styles.projectExplanation}>
        <h2>{project.name}</h2>
        <hr className={styles.hr} />
        <p>{project.description.application}</p>
        <hr className={styles.hr} />
        <p>{project.description.technical}</p>
        <h4 className={styles.createdWith}>Created using</h4>
        <ul className={styles.listOfitems}>
          {project.createdUsing.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>
        <div className={styles.projectButtonsRow}>
          <a
            className={`${styles.InteractionButton} ${styles.projectbutton}`}
            href={project.src.srcSource}
            target="_blank"
            rel="noreferrer"
          >
            Source code!
          </a>
          {project.src.srcLive && (
            <a
              className={`${styles.InteractionButton} ${styles.projectbutton}`}
              href={project.src.srcLive}
              target="_blank"
              rel="noreferrer"
            >
              View full site!
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
