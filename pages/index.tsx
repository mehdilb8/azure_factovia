import IndexPage from './[lang]/index'
import { getStaticPropsHome } from '../utils/pageUtils/accueil'
import { HomeProps } from '../types/Pages'
import { DEFAULT_LANG } from '../constantes'

export default function IndexDefaultPage(props: HomeProps) {
    return <IndexPage {...props} />
}

export const getStaticProps = () => getStaticPropsHome({ params: { lang: DEFAULT_LANG } })