import React from "react";
import ListItemHeader from "../List/ListItemHeader";
import styles from "./Landingpage.module.sass";

const Landingpage = ({ portfolio }) => {
  const { hero } = portfolio;
  return (
    <div className={styles.landingPage}>
      <p className={styles.kicker}>Web design & development / 2026</p>
      <div className={styles.content}>
        <div className={styles.Introduction}>
          <div className={styles.heroCopy}>
            <ListItemHeader
              primary={hero.title || portfolio.person.name}
              secondary={hero.username}
              primaryClassName={styles.header}
              secondaryClassName={styles.subHeader}
            />
            <div className={styles.heroMeta}>
              {hero.subtitle && (
                <div className={styles.metaItem}>
                  <p className={styles.metaLabel}>Role</p>
                  <p className={styles.metaValue}>{hero.subtitle}</p>
                </div>
              )}
              {hero.education && (
                <div className={styles.metaItem}>
                  <p className={styles.metaLabel}>Education</p>
                  <p className={styles.metaValue}>{hero.education}</p>
                </div>
              )}
            </div>
            <p className={styles.offer}>
              I create clear, modern websites that help small businesses look
              credible and get found online.
            </p>
          </div>
          <a href="#skills" className={styles.InteractionButton}>
            See my work
          </a>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
