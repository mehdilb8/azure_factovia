import { defaultLanguage } from "../lib/i18n";
import { getStaticPropsHome } from "../utils/pageUtils/accueil";
import Offers from "./[lang]/offers";

export default function OfferPage() {
    return <Offers />
}

export const getStaticProps = () => getStaticPropsHome({ params: { lang: defaultLanguage } })