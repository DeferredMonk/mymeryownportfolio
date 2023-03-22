import React, { useRef } from "react";
import { useSkills } from "./Hooks/useSkills";
import { CsharpOriginal } from "devicons-react";
import "../sass/Skills.sass";
import { strings } from "../utils/localization";

const Skills = () => {
  const wrapperRef = useRef();
  const wrapperRefSkills = useRef();

  const { skillsWrappers, listOfSkills } = useSkills({
    wrapperRef,
    wrapperRefSkills,
  });

  return (
    <div id="skills">
      <div className={skillsWrappers.Me ? `active wrapper` : `wrapper hidden`}>
        <div className="meContainer">
          <img className="me" src="/img_2784.jpg" alt="Marco" />
        </div>
        <div className="speech">
          <h2 className="smallHeader">Who am I?</h2>
          <p ref={wrapperRef} className="speechAboutMe">
            {strings.skills.description}
          </p>
          <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>I am</h4>
          <ul>
            {strings.skills.personalSkills.map((skill) => (
              <>
                <li className="personalSkill">{skill.skill}</li>
                <p className="desPersSkill">{skill.description}</p>
              </>
            ))}
          </ul>
        </div>
      </div>
      <div
        className={skillsWrappers.Skills ? "active wrapper" : "wrapper hidden"}
      >
        <div className="speech">
          <h2 ref={wrapperRefSkills} className="smallHeader">
            {strings.skills.experticeAreas.title}{" "}
          </h2>
          <p className="speechAboutMe">
            {strings.skills.experticeAreas.description}
          </p>
        </div>
        <div className="skillIcons">{listOfSkills.map((img, i) => img)}</div>
      </div>
    </div>
  );
};

export default Skills;
