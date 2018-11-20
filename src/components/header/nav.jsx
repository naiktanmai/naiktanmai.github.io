import React from "react";

const Nav = props => {
  const { links } = props;

  return (
    <nav id="nav">
      {links.map(link => (
        <a key={link.key} href={link.href}>
          {link.text}
        </a>
      ))}
    </nav>
  );
};

export default Nav;
