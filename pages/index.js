import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.Js Web APP</title>
        <meta name="NextJs" content="Hello World Title with Next.js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello <a href="https://nextjs.org">World with Next.JS!</a>
        </h1>
      </main>

      <footer className={styles.footer}>
        <a href="/" target="_blank">Created by dannzdev ✌️</a>
      </footer>
    </div>
  )
}
