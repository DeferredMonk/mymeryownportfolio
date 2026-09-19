import React from "react";
import styles from "./Footer.module.sass";

const Footer = ({ email }) => {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footer}>
        <div className={styles.info}>{email}</div>
        <div className={styles.Links}>
          <a href="https://github.com/DeferredMonk" target="_blank">
            <img src="./github-logo.png" width="32px" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/marco-angeli-0ba429170/"
            target="_blank"
          >
            <img src="./linkedin-logo.png" width="32px" alt="LinkedIn" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
