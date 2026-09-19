import React, { useRef } from "react";
import { useSkills } from "../Hooks/useSkills";
import styles from "./Skills.module.sass";

const Skills = ({ portfolio }) => {
  const wrapperRef = useRef();
  const wrapperRefSkills = useRef();

  const { skillsWrappers, listOfSkills } = useSkills({
    wrapperRef,
    wrapperRefSkills,
    skills: portfolio.skills,
  });
  const { about } = portfolio;

  return (
    <div id="skills" className={styles.skills}>
      <p className={styles.sectionLabel}>01 / Profile</p>
      <div
        className={
          skillsWrappers.Me
            ? `${styles.active} ${styles.wrapper}`
            : `${styles.wrapper} ${styles.hidden}`
        }
      >
        <div className={styles.meContainer}>
          <div className={styles.imageAccent} />
          <img className={styles.me} src={portfolio.profileImage} alt={portfolio.person.name} />
        </div>
        <div className={styles.speech}>
          <p className={styles.eyebrow}>A little about me</p>
          <h2 className={styles.smallHeader}>{about.title || "Who am I?"}</h2>
          <p ref={wrapperRef} className={styles.speechAboutMe}>
            {about.text}
          </p>
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
      <p className={styles.sectionLabel}>02 / Capabilities</p>
      <div
        className={
          skillsWrappers.Skills
            ? `${styles.active} ${styles.wrapper}`
            : `${styles.wrapper} ${styles.hidden}`
        }
      >
        <div className={styles.speech}>
          <p className={styles.eyebrow}>What I bring</p>
          <h2 ref={wrapperRefSkills} className={styles.smallHeader}>
            Areas of expertise
          </h2>
          <p className={styles.speechAboutMe}>
            {about.expertise}
          </p>
        </div>
        <div className={styles.skillIcons}>
          {portfolio.skills.map((skill, index) => (
            <div className={styles.skillItem} key={skill}>
              {listOfSkills[index]}
              <span>{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
