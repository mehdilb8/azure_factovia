import Head from 'next/head'
import MainSection from "../../components/Accueil/MainSection"
import Trending from '../../components/Accueil/Trending'
import SecondSection from "../../components/Accueil/SecondSection"
import ThirdSection from "../../components/Accueil/ThirdSection"
import FourthSection from "../../components/Accueil/FourthSection"
import useI18n from '../../hooks/i18n-hook'
import { HomeProps } from '../../types/Pages'
import { getStaticPathsHome, getStaticPropsHome } from '../../utils/pageUtils/accueil'

export default function index(props: HomeProps) {
    const i18n = useI18n()

    return <>
        <Head>
            <meta name="description" content={i18n.t("home.description")}></meta>
            <title>{i18n.t("home.title")}</title>
        </Head>
        <MainSection />
        <Trending blog={props.blog} />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
    </>
}

export const getStaticProps = getStaticPropsHome
export const getStaticPaths = getStaticPathsHome