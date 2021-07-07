import Head from 'next/head'
import useI18n from '../../hooks/i18n-hook'
import MetaOpenGraph from '../../components/MetaOpenGraph'
import TopNav from "../../components/TopNav"
import Marraines from "../../components/About/Marraines"
import AboutProjects from "../../components/About/AboutProjects"
import TechExpertise from "../../components/About/TechExpertise"
import Success from "../../components/About/Sucess"
import { getStaticPathsStaticPage, getStaticPropsStaticPage } from "../../utils/pageUtils/staticPage"
import SEO from '../../components/SEO'

export default function About() {
    const i18n = useI18n()
    return <>
        <Head>
            <MetaOpenGraph
                description={i18n.t("about.description")}
                path={i18n.activeLocale + "/about"}
                thumb="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/about_bg.jpg"
                title={i18n.t("about.title")}
            />
            <SEO
                path={i18n.activeLocale + "/about"}
            />
            <meta name="description" content={i18n.t("about.description")}></meta>
            <title>{i18n.t("about.title")}</title>
        </Head>
        <div className="mb-20">
            <Marraines />
            <Success />
            <TechExpertise />
            <AboutProjects />
        </div>
    </>
}

export const getStaticProps = getStaticPropsStaticPage
export const getStaticPaths = getStaticPathsStaticPage
