import React from "react";
import "../../sass/Footer.sass";

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="wrapper footer">
        <div className="info">Marcoangeli151@gmail.com</div>
        <div className="Links">
          <a href="https://github.com/DeferredMonk" target="_blank">
            <img src="./github-logo.png" width="32px" />
          </a>
          <a
            href="https://www.linkedin.com/in/marco-angeli-0ba429170/"
            target="_blank"
          >
            <img src="./linkedin-logo.png" width="32px" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
