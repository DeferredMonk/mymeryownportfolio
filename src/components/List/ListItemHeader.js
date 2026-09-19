import React from "react";

const ListItemHeader = ({
  primary,
  secondary,
  primaryClassName,
  secondaryClassName,
}) => {
  return (
    <>
      <h1 className={primaryClassName}>{primary}</h1>
      <h3 className={secondaryClassName}>@{secondary}</h3>
    </>
  );
};

export default ListItemHeader;
