import Head from 'next/head'
import { getStaticPathsStaticPage, getStaticPropsStaticPage } from '../../utils/pageUtils/staticPage'
import useI18n from '../../hooks/i18n-hook'
import MetaOpenGraph from '../../components/MetaOpenGraph'
import SEO from '../../components/SEO'

import HubIntro from '../../components/Hub/HubIntro'
import HubCommunity from '../../components/Hub/HubCommunity'
import HubPremium from '../../components/Hub/HubPremium'
import HubMain from '../../components/Hub/HubMain'
import HubEnd from '../../components/Hub/HubEnd'
import Footer from '../../components/Footer'

export default function Hub() {
    const i18n = useI18n()
    return <>
        <Head>
            <MetaOpenGraph
                description={i18n.t("hub.description")}
                path={i18n.activeLocale + "/hub"}
                thumb="https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/hub_bg.jpg"
                title={i18n.t("hub.title")}
            />
            <SEO
                path={i18n.activeLocale + "/hub"}
            />
            <meta name="description" content={i18n.t("hub.description")}></meta>
            <title>{i18n.t("hub.title")}</title>
        </Head>
        <HubIntro />
        <HubCommunity />
        <HubPremium />
        <HubMain />
        <HubEnd />
        <Footer />
    </>
}

export const getStaticProps = getStaticPropsStaticPage
export const getStaticPaths = getStaticPathsStaticPage
