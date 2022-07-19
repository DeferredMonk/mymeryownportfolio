import React from "react";
import { useProject } from "./Hooks/useProjects";
import "./Project.sass";

const Project = ({ project }) => {
  const listOfProjects = useProject();

  return (
    <>
      {show && (
        <div id="container">
          <div className="project">
            <iframe
              src={listOfProjects[0].src}
              className="frame"
              title="project"
              width="360px"
              height="500px"
            />
            <div className="projectExplanation">
              <h2 style={{ marginBottom: "2%" }}>{listOfProjects[0].name}</h2>
              <hr />
              <p>{listOfProjects[0].desctrition.application}</p>
              <hr />
              <p>{listOfProjects[0].desctrition.technical}</p>
              <h4 className="createdWith">Created using</h4>
              <ul className="listOfitems">
                {listOfProjects[0].createdUsing.map((item) => (
                  <li className="li">{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Project;
