import Head from "next/head";
import styles from "../styles/Home.module.css";

import HomePage from "../src/views/home";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </div>
  );
}
