import '../styles/globals.css'
import { useEffect } from 'react'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import I18n from '../lib/i18n'
import RGPD from '../components/RGPD'
import keepScroll from '../lib/keepScroll'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  if (!pageProps.lngDict || !pageProps.lng) {
    console.warn("You should send dictionnary of lang and lang herself")
  }

  useEffect(() => {
    const clearKeppScroll = keepScroll()

    return () => {
      clearKeppScroll()
    }

  }, [router])

  return <>
    <I18n lngDict={pageProps.lngDict} locale={pageProps.lng}>
      <div>
        <RGPD />
      </div>
      <Component {...pageProps} />
    </I18n>
  </>
}
