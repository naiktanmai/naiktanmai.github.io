import React from "react";

const Link = props => {
  const { icon, text, link } = props;
  return (
    <li>
      <a href={link} target="_blank" className={`icon ${icon}`}>
        <span className="label">{text}</span>
      </a>
    </li>
  );
};

export default Link;
