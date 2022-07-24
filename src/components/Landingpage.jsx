import React from "react";
import "./Landingpage.sass";

const Landingpage = () => {
  return (
    <div className="landingPage">
      <div className="Introduction">
        <h1>Marco Angeli</h1>
        <h3>@DeferredMonk</h3>
        <p className="intro">
          Hi! I am Marco a student at XAMK studying to become a full-stack
          developer. <br /> Welcome to my portfolio!
        </p>
      </div>
      <a href="#skills" className="InteractionButton">
        Enter!
        <img src="chevron-down.svg" alt="arrow icon" className="arrowDown" />
      </a>
    </div>
  );
};

export default Landingpage;
