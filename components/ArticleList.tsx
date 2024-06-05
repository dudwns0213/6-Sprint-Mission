import { ArticleType } from "@/types/type";
import Article from "@/components/Article"; // 경로는 실제 프로젝트 구조에 맞게 조정해야 합니다.
import styles from "@/styles/Article.module.css";

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
