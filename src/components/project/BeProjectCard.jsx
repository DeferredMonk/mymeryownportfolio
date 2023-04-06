import React from "react";
import "../../sass/BeProject.sass";
import { Link, useNavigate } from "react-router-dom";

const BeProjectCard = ({ project, width }) => {
  const navigate = useNavigate();
  return (
    <>
      {width <= 480 ? (
        <Link
          className="InteractionButton button"
          to={`/project/${project.id}`}
        >
          {project.name}
        </Link>
      ) : (
        <div
          className="card"
          onClick={() => navigate(`/project/${project.id}`)}
        >
          <div className="cardContentWrapper">
            <h4 className="cardTitle">{project.name}</h4>
            <p className="cardContent">{project.description.application}</p>
          </div>
          <img
            src="chevron-down.svg"
            alt="arrow icon"
            className="arrowDown right"
          />
        </div>
      )}
    </>
  );
};

export default BeProjectCard;
