import React, { useLayoutEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProject } from "../Hooks/useProjects";
import "../../sass/Project.sass";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const Project = () => {
  const { id } = useParams();
  const [listOfEFProjects, listOfBEProjects] = useProject();
  const ref = useRef();
  const [width, setWidth] = useState(0);

  const project = listOfEFProjects.filter(
    (project) => project.id === Number(id)
  )[0];

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <>
      <div id="container" ref={ref}>
        <div className="project">
          {width >= 480 && (
            <Link
              style={{
                position: "absolute",
                top: "0",
                left: "0",
                margin: "2%",
              }}
              to="/#projects"
            >
              <ArrowBackIosNewIcon />
            </Link>
          )}
          {width > 480 && (
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
              <a
                className="InteractionButton projectbutton"
                href={project.src.srcLive}
                target="_blank"
              >
                View full site!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
