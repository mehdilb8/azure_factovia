import Head from 'next/head'
import useI18n from '../../hooks/i18n-hook'
import MetaOpenGraph from '../../components/MetaOpenGraph'
import Marraines from "../../components/About/Marraines"
import AboutProjects from "../../components/About/AboutProjects"
import TechExpertise from "../../components/About/TechExpertise"
import Success from "../../components/About/Sucess"
import Footer from '../../components/Footer'
import { getStaticPathsStaticPage, getStaticPropsStaticPage } from "../../utils/pageUtils/staticPage"
import SEO from '../../components/SEO'

export default function About() {
    const i18n = useI18n()
    return <>
        <Head>
            <MetaOpenGraph
                description={i18n.t("about.description")}
                path={i18n.activeLocale + "/about"}
                thumb="https://stfactowebprdsrcfrce.blob.core.windows.net/factoviaweb-public-resources/about_bg.jpg"
                title={i18n.t("about.title")}
            />
            <SEO
                path={i18n.activeLocale + "/about"}
            />
            <meta name="description" content={i18n.t("about.description")}></meta>
            <title>{i18n.t("about.title")}</title>
        </Head>
        <Marraines />
        <Success />
        <TechExpertise />
        <AboutProjects />
        <Footer />

    </>
}

export const getStaticProps = getStaticPropsStaticPage
export const getStaticPaths = getStaticPathsStaticPage
