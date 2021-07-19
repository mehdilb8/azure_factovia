import isBrowser from '../utils/isBrowser'
import Script from 'next/script'

export default function GoogleAnalytics() {

    const analytics = () => {
        if (isBrowser()) {
            //@ts-ignore
            window.dataLayer = window.dataLayer || []
            //@ts-ignore
            function gtag() { dataLayer.push(arguments) }
            //@ts-ignore
            gtag('js', new Date())
            //@ts-ignore
            gtag('config', 'G-ML41TN8SSL')
        }
        return null
    }

    return <>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-ML41TN8SSL" />
        {analytics()}
    </>
}