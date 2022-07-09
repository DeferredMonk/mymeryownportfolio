import React from "react";
import "./Landingpage.sass";

const Landingpage = () => {
  return (
    <div className="landingPage">
      <div className="Introduction">
        <h1>Marco Angeli</h1>
        <a>
          <h3>@DeferredMonk</h3>
        </a>
        <p>
          Hi! I am Marco a student at XAMK studying to become a full-stack
          developer. <br /> Welcome to my portfolio!
        </p>
      </div>
      <button>Lets dive in!</button>
    </div>
  );
};

export default Landingpage;
