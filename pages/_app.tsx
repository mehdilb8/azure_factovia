import '../styles/globals.css'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import I18n from '../lib/i18n'
import RGPD from '../components/RGPD'
import Bot from '../components/Bot'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (!pageProps.lngDict || !pageProps.lng) {
    console.warn("You should send dictionnary of lang and lang herself")
  }

  return <>
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <div>
        <RGPD />
        <Bot />
      </div>
      <Component {...pageProps} />
    </I18n>
  </>
}
