import IndexPage from './[lang]/index'
import { getStaticPropsHome } from '../utils/pageUtils/accueil'
import { defaultLanguage } from '../lib/i18n'
import { HomeProps } from '../types/Pages'

export default function IndexDefaultPage(props: HomeProps) {
    return <IndexPage {...props} />
}

export const getStaticProps = () => getStaticPropsHome({ params: { lang: defaultLanguage } })