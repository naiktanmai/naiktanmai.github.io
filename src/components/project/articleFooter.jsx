import React from "react";

const ArticleFooter = props => {
  const { moreInfoLink } = props;

  return (
    <footer>
      {moreInfoLink && (
        <a href="#" className="button special">
          More
        </a>
      )}
      {!moreInfoLink && (
        <a href="#" className="button special">
          More to follow...
        </a>
      )}
    </footer>
  );
};

export default ArticleFooter;
