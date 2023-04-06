import React from "react";
import { Link } from "react-router-dom";

const FeProjectCard = ({ project, width }) => {
  return (
    <div className="singleProjectContainer">
      {width <= 480 ? (
        <Link
          className="InteractionButton button"
          to={`/project/${project.id}`}
        >
          {project.name}
        </Link>
      ) : (
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
            to={`/project/${project.id}`}
          />
        </div>
      )}
    </div>
  );
};

export default FeProjectCard;
