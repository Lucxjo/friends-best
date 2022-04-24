import Head from 'next/head'
import { useTranslations } from 'next-intl'
import { GetStaticPropsContext, InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import {LinkCard, Title} from '../components'

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
  const t = useTranslations('common')
  return (
    <div className="min-h-screen min-w-full bg-gray-400 dark:bg-gray-800">
      <Head>
        <meta name="description" content="A Young Royals fan website with links to different discussion spaces." />
        <meta property="og:description" content="A Young Royals fan website with links to different discussion spaces."/>
      </Head>

      <main className="container mx-auto flex flex-col py-2 font-body">
          <Title>
            {t('welcome')}
          </Title>
          <p className="dark:text-gray-300 text-center md:text-2xl text-lg">
            {t('desc')}
          </p>
          <div className="grid grid-flow-col grid-cols-2 grid-rows-3 gap-6 pt-4 px-8">
            <LinkCard link="https://www.netflix.com/title/81210762" title={`${t('watch.title')}`} sub={t('watch.desc')}/>
            <LinkCard link="https://discord.gg/hyKVDeRJ8Y" title={`Discord`} sub={t('discord')}/>
            <LinkCard link="https://www.reddit.com/r/YoungRoyals/" title={`Reddit`} sub={t('reddit')}/>
           <LinkCard link="https://www.talkable.com/x/IchxFl" title={t('learn.title')} sub={t('learn.desc')} />
           <LinkCard link="https://matrix.to/#/#young-royals:matrix.org" title={`Matrix`} sub={t('matrix')} />
          </div>
      </main>
    </div>
  )
}
