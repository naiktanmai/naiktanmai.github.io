import React from "react";

const Practice = props => {
  const { icon, name } = props;

  return (
    <div className="box person">
      <div className="image round">
        <i className={icon} />
      </div>
      <h3>{name}</h3>
    </div>
  );
};

export default Practice;
