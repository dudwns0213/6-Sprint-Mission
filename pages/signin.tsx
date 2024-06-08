import Head from "next/head";
import Link from "next/link";
import SigninForm from "@/components/Sign/SigninForm";

export default function signin() {
  return (
    <>
      <Head>
        <title>판다마켓-로그인</title>
      </Head>
      <SigninForm />
      <Link href="/signup">회원가입 하러 가기</Link>
    </>
  );
}
