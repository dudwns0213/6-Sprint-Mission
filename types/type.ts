export interface ArticleType {
  updatedAt: string;
  createdAt: string;
  likeCount: string;
  writer: WriterType;
  image?: string;
  content: string;
  title: string;
  id: number;
}

interface WriterType {
  nickname: string;
  id: number;
  image?: string;
}
export interface ArticleProps {
  //게시글 내부
  article: ArticleType;
}

export interface ArticleComments {
  writer: WriterType;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
}

export interface CommentProps {
  comment: ArticleComments;
}

export interface ArticleFormData {
  title: string;
  content: string;
  image?: string | File | null;
}
