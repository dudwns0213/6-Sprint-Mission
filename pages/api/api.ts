import axios from "@/lib/axios";
import { ArticleType } from "@/types/type";

// getArticle 함수(게시글)
export async function getArticle(
  page: number,
  pageSize: number,
  orderby: string,
  keyword: string
): Promise<ArticleType[]> {
  const res = await axios.get(
    `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderby}&keyword=${keyword}`
  );

  const articleList = res.data.list;
  return articleList;
}

// getBestArticle 함수(베스트 게시글)
export async function getBestArticle(
  page: number,
  pageSize: number,
  orderby: string
): Promise<ArticleType[]> {
  const res = await axios.get(
    `/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderby}`
  );

  const articleList = res.data.list;
  return articleList;
}
