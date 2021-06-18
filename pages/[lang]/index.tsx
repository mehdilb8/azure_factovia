import { GetStaticPaths, GetStaticProps } from 'next'
import Head from 'next/head'
import TopNav from "../../components/TopNav"
import MainSection from "../../components/Accueil/MainSection"
import SecondSection from "../../components/Accueil/SecondSection"
import ThirdSection from "../../components/Accueil/ThirdSection"
import FourthSection from "../../components/Accueil/FourthSection"
import { languages, defaultLanguage } from '../../lib/i18n'
import { I18nProps } from '../../types/i18n';
import useI18n from '../../hooks/i18n-hook'

export default function index() {
    const i18n = useI18n()

    return <>
        <Head>
            <meta name="description" content={i18n.t("home.description")}></meta>
            <title>{i18n.t("home.title")}</title>
        </Head>
        <TopNav />
        <MainSection />
        <SecondSection />
        <ThirdSection />
        <FourthSection />
    </>
}

export const getStaticProps: GetStaticProps<I18nProps> = async (context) => {
    if (!context.params || !context.params.lang) {
        throw new Error("Lang is not defined in params.")
    }

    let lng = context.params.lang as string
    let lngDict = await import('../../locales/' + context.params.lang + ".json")

    if (!lngDict) {
        lng = defaultLanguage
        lngDict = await import('../../locales/' + defaultLanguage + '.json')
    }

    return {
        props: {
            lng,
            lngDict: lngDict.default
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const langPath = languages.map((lang) => ({ params: { lang } }))

    return {
        paths: langPath,
        fallback: false
    }
}
