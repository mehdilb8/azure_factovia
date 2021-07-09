import { DEFAULT_LANG } from "../constantes";
import { getStaticPropsHome } from "../utils/pageUtils/accueil";
import Hub from "./[lang]/hub";

export default function HubPage() {
    return <Hub />
}

export const getStaticProps = () => getStaticPropsHome({ params: { lang: DEFAULT_LANG } })