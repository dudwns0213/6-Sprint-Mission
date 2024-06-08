import React from "react";
import { ArticleType } from "@/types/type";
import BestArticle from "./BestArticle";
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
