import React from "react";

const ArticleHeader = props => {
  const { text } = props;
  return (
    <header>
      <h3>{text}</h3>
    </header>
  );
};

export default ArticleHeader;
