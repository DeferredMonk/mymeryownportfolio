import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const ProjectDetail = ({ project, width }) => {
  const navigate = useNavigate();
  return (
    <div className="project">
      {width >= 480 && (
        <ArrowBackIosNewIcon
          className="iconButton"
          onClick={() => navigate(-1)}
          style={{ margin: "15px" }}
        />
      )}
      {width > 480 && project.src.srcLive && (
        <iframe
          src={project.src.srcLive}
          className="frame"
          title="project"
          width="360px"
          height="500px"
        />
      )}

      <div className="projectExplanation">
        <h2>{project.name}</h2>
        <hr />
        <p>{project.description.application}</p>
        <hr />
        <p>{project.description.technical}</p>
        <h4 className="createdWith">Created using</h4>
        <ul className="listOfitems">
          {project.createdUsing.map((item) => (
            <li className="li">{item}</li>
          ))}
        </ul>
        <div className="container">
          <a
            className="InteractionButton projectbutton"
            href={project.src.srcSource}
            target="_blank"
          >
            Source code!
          </a>
          {project.src.srcLive && (
            <a
              className="InteractionButton projectbutton"
              href={project.src.srcLive}
              target="_blank"
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
