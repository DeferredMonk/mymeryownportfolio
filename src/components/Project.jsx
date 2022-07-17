import React from "react";
import "./Project.sass";

const Project = ({ project }) => {
  return (
    <div id="container">
      <div className="project">
        <iframe
          src="https://birders-diary.netlify.app/"
          className="frame"
          title="project"
          width="360px"
          height="500px"
        />
        <div>
          <h2 style={{ marginBottom: "2%" }}>Bird spotter</h2>
          <hr style={{ marginBottom: "2%" }} />
          <p>This application lets you keep a record of your spotted birds.</p>
          <h4 style={{ margin: "4%" }}>Created with:</h4>
          <ul>
            <li>ReactJS</li>
            <li>MUI</li>
            <li>React-Router</li>
            <li>Date-fns</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Project;
