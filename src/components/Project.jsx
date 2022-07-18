import React from "react";
import "./Project.sass";

const Project = ({ project, info, show }) => {
  const listOfProjects = [
    {
      name: "Bird spotter",
      src: "https://birders-diary.netlify.app/",
      createdUsing: ["ReactJS", "MUI", "React-Router", "Date-fns", "UUID"],
      desctrition: {
        application:
          "This application lets you keep a record of your spotted birds.",
        technical:
          "Bird spotter is created using ReactJS, its components are from the Material UI component library. The routing is managed by React-Router. Each new bird added to the list, gets a unique ID from uuid, by using this unique id you're able to modify each item (bird) freely from the list. In addition, I have added errorHandlers to the inputs to inform the users about mistakes or errors in their inputs.",
      },
    },
  ];

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
