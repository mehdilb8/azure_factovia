import { GetStaticPaths, GetStaticProps } from 'next'
import TopNav from "../../components/TopNav"
import MainSection from "../../components/Accueil/MainSection"
import SecondSection from "../../components/Accueil/SecondSection"
import ThirdSection from "../../components/Accueil/ThirdSection"
import FourthSection from "../../components/Accueil/FourthSection"
import { languages, defaultLanguage } from '../../lib/i18n'
import { I18nProps } from '../../types/i18n';

import FR from '../../locales/fr.json'
import EN from '../../locales/en.json'

export default function index() {
    return <>
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
