import React, { useRef } from "react";
import "./Skills.sass";
import { useSkills } from "./useSkills";

const Skills = () => {
  const wrapperRef = useRef();
  const wrapperRefSkills = useRef();

  const { skillsWrappers, listOfSkills, listOfProgLang } = useSkills({
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
            I am a student at XAMK, studying full-stack programming online. I
            got into coding in 2021 while studying in Haaga-Helia open UAS. I
            enjoyed it so much that I decided to continue and embrace it! At the
            moment I work full time as an ICT specialist and study web
            developement during evenings.
          </p>
          <h4 style={{ marginTop: "1rem", marginBottom: "1rem" }}>I am</h4>
          <ul>
            <li className="personalSkill">A team player</li>
            <p className="desPersSkill">
              I try to contribute the best way I can with my teammates. If
              needed I am not afraid to ask for help and I gladly help others
              the best way I can.
            </p>
            <li className="personalSkill">Proactive</li>
            <p className="desPersSkill">
              I do my best to complete even the hardest tasks. I try to approuch
              them from different perspectives to solve them.
            </p>
            <li className="personalSkill">Customer service</li>
            <p className="desPersSkill">
              I've been working with customers daily for over 4 years. I
              understand and know how to communicate with them.
            </p>
            <li className="personalSkill">A Problem solver</li>
            <p className="desPersSkill">
              Problem solving has become a day to day routine for me. For the
              last four years I've been solving problems practically daily as an
              ICT-Specialist.
            </p>
          </ul>
        </div>
      </div>
      <div
        className={skillsWrappers.Skills ? "active wrapper" : "wrapper hidden"}
      >
        <div className="speech">
          <h2 ref={wrapperRefSkills} className="smallHeader">
            Areas of expertise
          </h2>
          <p className="speechAboutMe">
            During my journey I've learned multiple programming languages. In
            2021 I studied in Haaga-Helia Open UAS the basics of JS, HTML and
            CSS. Now in XAMK I learned about SQL and React. On top of theese in
            my school we use Git to commit changes to repositories. That way we
            also learned the basic commands of Git. During this summer I decided
            to attend Helsinkis universitys Full Stack Open course. This course
            is still ongoing but until know I've learned the basics of Node.js
            and how to manipulate a MongoDB database.
          </p>
          {/* <ul>
            {listOfProgLang.map((language, i) => (
              <li key={i}>{language.language}</li>
            ))}
          </ul> */}
        </div>
        <div className="skillIcons">
          {listOfSkills.map((img, i) => (
            <img className="icon" key={i} src={img} alt={`icon-${i}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
