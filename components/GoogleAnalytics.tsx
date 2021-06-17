import Head from 'next/head'

export default function GoogleAnalytics() {

    const analytics = () => {
        if (typeof window !== 'undefined') {
            //@ts-ignore
            window.dataLayer = window.dataLayer || [];
            //@ts-ignore
            function gtag() { dataLayer.push(arguments); }
            //@ts-ignore
            gtag('js', new Date());

            //@ts-ignore
            gtag('config', 'UA-199420266-1');
        }
        return null;
    }

    return <>
        <Head>
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-199420266-1" />
        </Head>
        {analytics()}
    </>
}