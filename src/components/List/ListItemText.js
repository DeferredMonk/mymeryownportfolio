import React from "react";
import { strings } from "../../utils/localization";

const ListItemText = ({ primary, secondary }) => {
  return (
    <>
      <h5 style={{ marginTop: "10px" }}>{primary}</h5>
      <p style={{ fontSize: "10px", opacity: "50%" }}>@{secondary}</p>
    </>
  );
};

export default ListItemText;
