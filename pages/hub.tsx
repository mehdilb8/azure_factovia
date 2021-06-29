import { defaultLanguage } from "../lib/i18n";
import { getStaticPropsHome } from "../utils/pageUtils/accueil";
import Hub from "./[lang]/hub";

export default function HubPage() {
    return <Hub />
}

export const getStaticProps = () => getStaticPropsHome({ params: { lang: defaultLanguage } })