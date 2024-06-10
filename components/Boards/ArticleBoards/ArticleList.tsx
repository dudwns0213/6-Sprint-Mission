import { ArticleType } from "@/types/type";
import Article from "./Article";
import styles from "@/styles/Article.module.css";
import Link from "next/link";

interface ArticleListProps {
  articleList: ArticleType[];
}

export default function ArticleList({ articleList }: ArticleListProps) {
  return (
    <div>
      {articleList.map((article) => (
        <Article key={article.id} article={article} />
      ))}
    </div>
  );
}
