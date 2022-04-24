import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NextIntlProvider} from 'next-intl';
import PlausibleProvider from 'next-plausible';
import Head from 'next/head';

function _App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
        <title>Vänner Bäst | Friends Best</title>
        <link rel="icon" href="https://www.vannerba.st/favicon.png" />
        <meta property="og:image" content="https://www.vannerba.st/yr.jpg" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Ludoviko_" />
        <meta name="twitter:creator" content="@Ludoviko_" />
        <meta property="og:title" content="Vänner Bästa | Friends Best" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.vannerba.st/yr.jpg" />
        <meta name="theme-color" 
          content="#9CA3AF" 
          // @ts-ignore
          media="(prefers-color-scheme: light)" />
        <meta name="theme-color" 
          content="#1F2937" 
          // @ts-ignore
          media="(prefers-color-scheme: dark)"/>
    </Head>
    <PlausibleProvider trackOutboundLinks={true} domain="vannerba.st">
      <NextIntlProvider messages={pageProps.messages}>
        <Component {...pageProps} />
      </NextIntlProvider>
    </PlausibleProvider>
    </>
  )
}
export default _App
