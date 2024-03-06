import React from "react";
import PopularArticles from "../Sidebar/PopularArticles";
import LatestArticles from "../LatestArticles/LatestArticles";
import ArticlesHeading from "../Shared/ArticlesHeading";

const ArticleSections = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-4 p-4">
      <div className="col-span-2">
        <ArticlesHeading title="Latest Articles Published" />
        <LatestArticles />
      </div>
      <div>
        <div className="popular-articles-container sticky top-40">
          <ArticlesHeading title="Popular Articles" />
          <PopularArticles />
        </div>
      </div>
    </div>
  );
};

export default ArticleSections;
