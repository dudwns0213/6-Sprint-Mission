import Header from "@/components/Header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>판다마켓</title>
        <link rel="icon" href="/public/pandalogo.svg" />
      </Head>
      <Header />
      <Component {...pageProps} />
    </>
  );
}
