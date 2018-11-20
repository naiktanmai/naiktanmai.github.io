import React from "react";
import Link from "./link";

const Footer = props => {
  const { links } = props;

  return (
    <footer id="footer">
      <div className="inner">
        <div className="flex">
          <div className="copyright">
            &copy; https://templated.co/theory. Images:{" "}
            <a href="https://unsplash.com">Unsplash</a>.
          </div>
          <ul className="icons">
            {links.map(link => {
              return <Link {...link} />;
            })}
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
