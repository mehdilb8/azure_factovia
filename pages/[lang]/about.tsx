import TopNav from "../../components/TopNav"
import Marraines from "../../components/About/Marraines"
import AboutProjects from "../../components/About/AboutProjects"
import TechExpertise from "../../components/About/TechExpertise"
import Success from "../../components/About/Sucess"
import { getStaticPathsStaticPage, getStaticPropsStaticPage } from "../../utils/pageUtils/staticPage"

export default function About() {
    return <div>
        <TopNav />
        <div className="py-10">
            <Marraines />
            <AboutProjects />
            <TechExpertise />
            <Success />
        </div>
    </div>
}

export const getStaticProps = getStaticPropsStaticPage
export const getStaticPaths = getStaticPathsStaticPage
