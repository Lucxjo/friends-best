import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {NextIntlProvider} from 'next-intl';
import PlausibleProvider from 'next-plausible';

function _App({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider trackOutboundLinks={true} domain="vannerba.st">
    <NextIntlProvider messages={pageProps.messages}>
      <Component {...pageProps} />
    </NextIntlProvider>
    </PlausibleProvider>
  )
}
export default _App
