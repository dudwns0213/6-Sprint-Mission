import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/login.module.css";
import Link from "next/link";
import SignupForm from "@/components/Sign/SignupForm";

export default function signup() {
  return (
    <>
      <Head>
        <title>판다마켓-회원가입</title>
      </Head>
      <SignupForm />
    </>
  );
}
