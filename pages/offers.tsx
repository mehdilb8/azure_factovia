import { DEFAULT_LANG } from "../constantes";
import { getStaticPropsHome } from "../utils/pageUtils/accueil";
import Offers from "./[lang]/offers";

export default function OfferPage() {
    return <Offers />
}

export const getStaticProps = () => getStaticPropsHome({ params: { lang: DEFAULT_LANG } })