import React from "react";

const ListItemText = ({
  primary,
  secondary,
  primaryClassName,
  secondaryClassName,
}) => {
  return (
    <>
      <h5 className={primaryClassName} style={{ marginTop: "10px" }}>
        {primary}
      </h5>
      {secondary && (
        <p className={secondaryClassName} style={{ fontSize: "10px", opacity: "50%" }}>
          @{secondary}
        </p>
      )}
    </>
  );
};

export default ListItemText;
