import React from "react";

const ListItemText = ({ primary, secondary }) => {
  return (
    <>
      <h5 style={{ marginTop: "10px" }}>{primary}</h5>
      {secondary && (
        <p style={{ fontSize: "10px", opacity: "50%" }}>@{secondary}</p>
      )}
    </>
  );
};

export default ListItemText;
