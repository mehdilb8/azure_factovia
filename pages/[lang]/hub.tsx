import Head from 'next/head'
import { getStaticPathsStaticPage, getStaticPropsStaticPage } from '../../utils/pageUtils/staticPage'
import AccueilContainer from '../../components/Accueil/AccueilContainer'
import useI18n from '../../hooks/i18n-hook'
import MetaOpenGraph from '../../components/MetaOpenGraph'

import TopNav from "../../components/TopNav"
import HubIntro from '../../components/Hub/HubIntro'
import HubHero from '../../components/Hub/HubHero'
import HubMain from '../../components/Hub/HubMain'
import HubEnd from '../../components/Hub/HubEnd'

export default function Hub() {
    const i18n = useI18n()
    return <>
        <Head>
            <MetaOpenGraph
                description={i18n.t("hub.description")}
                path={i18n.activeLocale + "/hub"}
                thumb="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/hub_bg.jpg"
                title={i18n.t("hub.title")}
            />
        </Head>
        <HubIntro />
        <HubHero />
        <HubMain />
        <HubEnd />
    </>

}

export const getStaticProps = getStaticPropsStaticPage
export const getStaticPaths = getStaticPathsStaticPage
