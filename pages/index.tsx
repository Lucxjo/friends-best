import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { useRouter } from 'next/router'
import { useTranslations } from 'next-intl'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'

export function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      // You can get the messages from anywhere you like, but the recommended
      // pattern is to put them in JSON files separated by language and read 
      // the desired one based on the `locale` received from Next.js. 
      messages: require(`../locales/${locale}.json`),
    }
  };
}

export default function Home() {
  const router = useRouter()
  const t = useTranslations('common')
  return (
    <div className={styles.container}>
      <Head>
        <title>Vänner Bäst | Friends Best</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {t('welcome')}
        </h1>
        <p className={styles.description}>
          {t('desc')}
        </p>
        <div className={styles.grid}>
          <a href="/watch" className={styles.card}>
            <h2>{t('watch.title')} &rarr;</h2>
            <p>{t('watch.desc')} </p>
          </a>
          <a href="/discord" className={styles.card}>
            <h2>Discord &rarr;</h2>
            <p>{t('discord')}</p>
          </a>
          <a href="/reddit" className={styles.card}>
            <h2>Reddit &rarr;</h2>
            <p>{t('reddit')}</p>
          </a>
        </div>
      </main>
      <footer className={styles.footer}><Link href="https://ludoviko.ch">Created by: Ludoviko</Link></footer>
    </div>
  )
}
