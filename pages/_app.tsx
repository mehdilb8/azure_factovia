import '../styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import I18n from '../lib/i18n'
import RGPD from '../components/RGPD'
// import Bot from '../components/Bot'

export default function MyApp({ Component, pageProps }: AppProps) {
  if (!pageProps.lngDict || !pageProps.lng) {
    console.warn("You should send dictionnary of lang and lang herself")
  }

  return <>
    <Head>
      <meta name="google-site-verification" content="cW6LqgAqLcs0BufZRldQesFHz4W-qIfkGadlcQ5AoMk" />
    </Head>
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <div>
        <RGPD />
      </div>
      <Component {...pageProps} />
    </I18n>
  </>
}
