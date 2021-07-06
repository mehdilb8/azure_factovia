import '../styles/globals.css'
import GoogleAnalytics from '../components/GoogleAnalytics'
import { AppProps } from 'next/app'
import I18n from '../lib/i18n'

export default function MyApp({ Component, pageProps }: AppProps) {

  if (!pageProps.lngDict || !pageProps.lng) {
    console.warn("You should send dictionnary of lang and lang herself")
  }

  return <>
    <GoogleAnalytics />
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <Component {...pageProps} />
    </I18n>
  </>
}
