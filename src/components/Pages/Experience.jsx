import React, { useEffect, useRef } from "react";
import { workExperience } from "../../utils/experience";
import styles from "./Experience.module.sass";

const Experience = () => {
  const timelineViewportRef = useRef(null);

  useEffect(() => {
    const viewport = timelineViewportRef.current;
    if (viewport) viewport.scrollLeft = viewport.scrollWidth;
  }, []);

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.heading}>
        <p className={styles.sectionLabel}>02 / Experience</p>
        <h2>Work shaped by curiosity and care.</h2>
        <p className={styles.introduction}>
          From supporting people with technology to building complete web
          applications, every role has sharpened how I approach a problem.
        </p>
      </div>
      <div ref={timelineViewportRef} className={styles.timelineViewport}>
        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {workExperience.map((experience, index) => (
            <article
              className={styles.milestone}
              key={`${experience.company}-${experience.title}`}
              tabIndex="0"
            >
              <div className={styles.marker}>{String(index + 1).padStart(2, "0")}</div>
              <div className={styles.card}>
                <p className={styles.period}>{experience.period}</p>
                <h3>{experience.title}</h3>
                <p className={styles.company}>{experience.company}</p>
                <div className={styles.details}>
                  <p>{experience.summary}</p>
                  <ul>
                    {experience.focus.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
