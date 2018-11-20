import React from "react";
import ArticleHeader from "./articleHeader";
import ArticleContent from "./articleContent";
import ArticleFooter from "./articleFooter";

const Article = props => {
  const { contentText, moreInfoLink, headerText } = props;

  return (
    <article>
      <ArticleHeader text={headerText} />
      <ArticleContent text={contentText} />
      <ArticleFooter moreInfoLink={moreInfoLink} />
    </article>
  );
};

export default Article;
