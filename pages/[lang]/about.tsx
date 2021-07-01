import TopNav from "../../components/TopNav"
import Marraines from "../../components/About/Marraines"
import { getStaticPathsStaticPage, getStaticPropsStaticPage } from "../../utils/pageUtils/staticPage"

export default function About() {
    return <div>
        <TopNav />
        <div className="py-10">
            <Marraines />

        </div>
    </div>
}

export const getStaticProps = getStaticPropsStaticPage
export const getStaticPaths = getStaticPathsStaticPage
