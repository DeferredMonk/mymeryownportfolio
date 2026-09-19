import React from "react";
import ListItemText from "../List/ListItemText";
import ListItemHeader from "../List/ListItemHeader";
import styles from "./Landingpage.module.sass";

const Landingpage = ({ portfolio }) => {
  const { hero } = portfolio;
  return (
    <div className={styles.landingPage}>
      <div className={styles.Introduction}>
        <p className={styles.kicker}>Web design & development / 2026</p>
        <ListItemHeader
          primary={hero.title || portfolio.person.name}
          secondary={hero.username}
          primaryClassName={styles.header}
          secondaryClassName={styles.subHeader}
        />
        <p className={styles.offer}>
          I create clear, modern websites that help small businesses look credible
          and get found online.
        </p>
        <div className={styles.intro} style={{ marginTop: "20px" }}>
          <ListItemText
            primary={hero.subtitle}
            primaryClassName={styles.textPrimary}
            secondaryClassName={styles.textSecondary}
          />
          <ListItemText
            primary={hero.education}
            primaryClassName={styles.textPrimary}
            secondaryClassName={styles.textSecondary}
          />
        </div>
      </div>
      <div className={styles.heroVisual}>
        <div className={styles.heroImageFrame}>
          <img
            className={styles.heroImage}
            src={portfolio.profileImage}
            alt={portfolio.person.name}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/IMG_2784.JPG";
            }}
          />
        </div>
        <p className={styles.heroCaption}>Building useful digital experiences</p>
      </div>
      <a href="#skills" className={styles.InteractionButton}>
        See my work
        <img src="chevron-down.svg" alt="arrow icon" className={styles.arrowDown} />
      </a>
    </div>
  );
};

export default Landingpage;
