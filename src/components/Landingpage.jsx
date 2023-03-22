import React from "react";
import { strings } from "../utils/localization";
import ListItemText from "./List/ListItemText";
import ListItemHeader from "./List/ListItemHeader";
import "../sass/Landingpage.sass";

const Landingpage = () => {
  return (
    <div className="landingPage">
      <div className="Introduction">
        <ListItemHeader
          primary={strings.contactInfo.name}
          secondary={strings.contactInfo.username}
        />
        <div className="intro" style={{ marginTop: "20px" }}>
          <ListItemText
            primary={strings.contactInfo.position}
            secondary={strings.status.work}
          />
          <ListItemText
            primary={strings.contactInfo.schoolPosition}
            secondary={strings.status.schoolShort}
          />
        </div>
      </div>
      <a href="#skills" className="InteractionButton">
        Enter!
        <img src="chevron-down.svg" alt="arrow icon" className="arrowDown" />
      </a>
    </div>
  );
};

export default Landingpage;
