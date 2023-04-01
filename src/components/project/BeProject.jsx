import React from "react";
import "../../sass/BeProject.sass";
import { useNavigate } from "react-router-dom";

const BeProject = ({ project }) => {
  const navigate = useNavigate();
  return (
    <div className="card" onClick={() => navigate(`/project/${project.id}`)}>
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
  );
};

export default BeProject;
