import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Demo Web APP Platzily</title>
        <meta name="NextJs" content="Hello World Title with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          I am the MVP of Platzily
        </h1>
      </main>

      <footer className={styles.footer}>
        <Link href="/" target="_blank">Created by ivchip82 ✌️</Link>
      </footer>
    </div>
  )
}
