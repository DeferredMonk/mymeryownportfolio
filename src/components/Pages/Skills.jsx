import React, { useRef } from "react";
import { useProfileReveal } from "../Hooks/useProfileReveal";
import styles from "./Skills.module.sass";

const technologyGroups = [
  { title: "Frontend", technologies: ["React", "JavaScript"] },
  { title: "Backend", technologies: ["Python", "Django", "C#", "ASP.NET Core"] },
  { title: "Data", technologies: ["SQL"] },
];

const Skills = ({ portfolio }) => {
  const wrapperRef = useRef();
  const isProfileVisible = useProfileReveal(wrapperRef);
  const { about } = portfolio;

  return (
    <div id="skills" className={styles.skills}>
      <div className={styles.content}>
        <p className={styles.sectionLabel}>01 / A little about me</p>
        <div
          className={
            isProfileVisible
              ? `${styles.active} ${styles.wrapper}`
              : `${styles.wrapper} ${styles.hidden}`
          }
        >
          <div className={styles.meContainer}>
            <div className={styles.imageAccent} />
            <img className={styles.me} src={portfolio.profileImage} alt={portfolio.person.name} />
          </div>
          <div className={styles.speech}>
            <h2 className={styles.smallHeader}>About Me</h2>
            <p ref={wrapperRef} className={styles.speechAboutMe}>
              {about.text}
            </p>
            <h3 className={styles.strengthsHeader}>What I work with</h3>
            <div className={styles.technologyGroups}>
              {technologyGroups.map((group) => (
                <div className={styles.technologyGroup} key={group.title}>
                  <h4>{group.title}</h4>
                  <p>{group.technologies.join(", ")}</p>
                </div>
              ))}
            </div>
            <h3 className={styles.strengthsHeader}>How I work</h3>
            <div className={styles.strengths}>
              {(about.personal_skills || []).map((skill) => (
                <article className={styles.strength} key={skill.title}>
                  <h4 className={styles.personalSkill}>{skill.title}</h4>
                  <p className={styles.desPersSkill}>{skill.text}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
