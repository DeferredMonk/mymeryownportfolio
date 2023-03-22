import React from "react";

const ListItemHeader = ({ primary, secondary }) => {
  return (
    <>
      <h1>{primary}</h1>
      <h3>@{secondary}</h3>
    </>
  );
};

export default ListItemHeader;
