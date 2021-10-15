import { DEFAULT_LANG } from "../constantes";
import { getStaticPropsHome } from "../utils/pageUtils/accueil";
import Rgpd from "./[lang]/rgpd";

export default function RgpdPage() {
    return <Rgpd />
}

export const getStaticProps = () => getStaticPropsHome({ params: { lang: DEFAULT_LANG } })