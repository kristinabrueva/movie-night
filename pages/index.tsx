import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Movies</title>
        <meta name="description" content="Popular movies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Popular Movies</h1>
        <div className={styles.grid}></div>
      </main>
    </div>
  );
}
