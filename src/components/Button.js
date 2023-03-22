import React from "react";

const Button = ({ click }) => {
  return (
    <button>
      <a href="#skills" className="InteractionButton">
        Enter!
        <img src="chevron-down.svg" alt="arrow icon" className="arrowDown" />
      </a>
    </button>
  );
};

export default Button;
