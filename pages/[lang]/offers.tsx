import Head from 'next/head'
import { getStaticPathsStaticPage, getStaticPropsStaticPage } from '../../utils/pageUtils/staticPage'
import useI18n from '../../hooks/i18n-hook'
import MetaOpenGraph from '../../components/MetaOpenGraph'
import SEO from '../../components/SEO'

import OfferIntro from '../../components/Offers/OfferIntro'
import OfferHero from '../../components/Offers/OfferHero'
import OfferTraining from '../../components/Offers/OfferTraining'
import OffersSample from '../../components/Offers/OfferSamples'
import Footer from '../../components/Footer'

export default function Offers() {
    const i18n = useI18n()
    return <>
        <Head>
            <MetaOpenGraph
                description={i18n.t("offers.description")}
                path={i18n.activeLocale + "/offers"}
                thumb="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/offer_bg.jpg"
                title={i18n.t("offers.title")}
            />
            <SEO
                path={i18n.activeLocale + "/offers"}
            />
            <meta name="description" content={i18n.t("offers.description")}></meta>
            <title>{i18n.t("offers.title")}</title>
        </Head>
        <OfferIntro />
        <OfferHero />
        <OfferTraining />
        <OffersSample />
        <Footer />
    </>
}

export const getStaticProps = getStaticPropsStaticPage
export const getStaticPaths = getStaticPathsStaticPage
