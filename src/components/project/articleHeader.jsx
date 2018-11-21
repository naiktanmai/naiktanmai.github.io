import React from "react";

const ArticleHeader = props => {
  const { header, description } = props;
  return (
    <header>
      <h3>{header}</h3>
    </header>
  );
};

export default ArticleHeader;
