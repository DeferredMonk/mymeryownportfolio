import React from "react";
import "./Project.sass";

const Project = ({ project }) => {

  return (
    <>
        <div id="container">
          <div className="project">
            <iframe
              src={project.src}
              className="frame"
              title="project"
              width="360px"
              height="500px"
            />
            <div className="projectExplanation">
              <h2 style={{ marginBottom: "2%" }}>{project.name}</h2>
              <hr />
              <p>{project.desctrition.application}</p>
              <hr />
              <p>{project.desctrition.technical}</p>
              <h4 className="createdWith">Created using</h4>
              <ul className="listOfitems">
                {project.createdUsing.map((item) => (
                  <li className="li">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
    </>
  );
};

export default Project;
