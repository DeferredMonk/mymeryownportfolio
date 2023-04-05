import React, { useLayoutEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { useProject } from "../Hooks/useProjects"
import "../../sass/Projects.sass"
import BeProject from "../project/BeProject"
import FeProject from "../project/FeProject"
const Projects = () => {
  const [listOfFEProjects] = useProject()
  const ref = useRef()

  const [width, setWidth] = useState(0)

  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth)
  }, [])

  return (
    <div id="projects" ref={ref}>
      <h1 className="projectsHeader">My projects!</h1>
      <p className="projectsDescription">
        Find listed below a list of projects created by me during school classes
        and free time!
      </p>
      <div className="ProjectsContainer">
        {listOfFEProjects.map((project) =>
          project.src ? (
            <FeProject project={project} width={width} />
          ) : (
            <BeProject project={project} />
          )
        )}
      </div>
    </div>
  )
}

export default Projects
