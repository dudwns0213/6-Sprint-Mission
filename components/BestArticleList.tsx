import React from "react";
import { ArticleType } from "@/types/type";
import BestArticle from "./BestArticle"; // BestArticle 컴포넌트의 경로에 따라 수정해야 할 수 있습니다.
import styles from "@/styles/BestArticle.module.css";

interface BestArticleListProps {
  articleList: ArticleType[];
}

export default function BestArticleList({ articleList }: BestArticleListProps) {
  return (
    <div className={styles["Boards-container"]}>
      {articleList.map((article) => (
        <BestArticle key={article.id} article={article} />
      ))}
    </div>
  );
}
