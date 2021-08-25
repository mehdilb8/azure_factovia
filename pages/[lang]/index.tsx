import Head from 'next/head'
import MainSection from "../../components/Accueil/MainSection"
import Trending from '../../components/Accueil/Trending'
import SecondSection from "../../components/Accueil/SecondSection"
import ThirdSection from "../../components/Accueil/ThirdSection"
import FourthSection from "../../components/Accueil/FourthSection"
import useI18n from '../../hooks/i18n-hook'
import { HomeProps } from '../../types/Pages'
import { getStaticPathsHome, getStaticPropsHome } from '../../utils/pageUtils/accueil'
import MetaOpenGraph from '../../components/MetaOpenGraph'
import SEO from '../../components/SEO'

export default function index(props: HomeProps) {
    const i18n = useI18n()

    return <>
        <Head>
            <MetaOpenGraph
                description={i18n.t("home.description")}
                path={props.lng}
                // Image de fond de la MainSection
                thumb="https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/mainSectionBackground.jpg"
                title={i18n.t("home.title")}
            />
            <SEO
                path={props.lng}
            />
            <meta name="description" content={i18n.t("home.description")}></meta>
            <title>{i18n.t("home.title")}</title>
        </Head>
        <MainSection />
        {
            i18n.activeLocale !== 'fr'
                ? <Trending blog={props.blog} />
                : null
        }
        <SecondSection />
        <ThirdSection />
        <FourthSection />
    </>
}

export const getStaticProps = getStaticPropsHome
export const getStaticPaths = getStaticPathsHome