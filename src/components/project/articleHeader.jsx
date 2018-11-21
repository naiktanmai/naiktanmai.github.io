import React from "react";

const ArticleHeader = props => {
  const { header, description } = props;
  return (
    <header>
      <h3>{header}</h3> <h4>{description}</h4>
    </header>
  );
};

export default ArticleHeader;
