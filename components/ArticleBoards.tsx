import instance from "@/lib/axios";
import { useEffect, useState } from "react";
import { ArticleType } from "@/types/type";
import DropdownMenu from "./DropdownMenu";
import axios from "@/lib/axios";
import ArticleList from "./Article";
import styles from "@/styles/ArticleBoards.module.css";
import search from "@/public/search.svg";
import Image from "next/image";

import { getArticle } from "@/pages/api/api";

export default function ArticleBoards() {
  const [article, setArticle] = useState<ArticleType[]>([]);
  const [keyword, setKeyword] = useState("");
  const [orderby, setOrderby] = useState("recent");

  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);

  async function fetchArticle() {
    const articleList = await getArticle(page, pageSize, orderby, keyword);
    setArticle(articleList);
  }

  useEffect(() => {
    fetchArticle();
  }, [page, pageSize, orderby]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      fetchArticle();
    }
  };

  return (
    <>
      <div className={styles["Boards-header"]}>
        <div className={styles["Boards-header-title"]}>게시글</div>
        <div className={styles["Boards-header-writing"]}>글쓰기</div>
      </div>
      <div className={styles["Boards-container"]}>
        <input
          className={styles["Search"]}
          type="text"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="검색어를 입력하세요"
        />
        <Image
          className={styles["Search-img"]}
          src={search}
          alt="검색"
          width={24}
          height={24}
        />
        <DropdownMenu orderBySort={setOrderby} />
      </div>
      <ArticleList articleList={article} />
    </>
  );
}
