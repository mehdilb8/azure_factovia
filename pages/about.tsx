import { defaultLanguage } from "../lib/i18n";
import { getStaticPropsHome } from "../utils/pageUtils/accueil";
import About from "./[lang]/about";

export default function AboutPage() {
    return <About />
}

export const getStaticProps = () => getStaticPropsHome({ params: { lang: defaultLanguage } })