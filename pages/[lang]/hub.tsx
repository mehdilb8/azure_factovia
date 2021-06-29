import { getStaticPathsStaticPage, getStaticPropsStaticPage } from '../../utils/pageUtils/staticPage'
import AccueilContainer from '../../components/Accueil/AccueilContainer'

import TopNav from "../../components/TopNav"
import HubIntro from '../../components/Hub/HubIntro'
import HubHero from '../../components/Hub/HubHero'
import HubMain from '../../components/Hub/HubMain'
import HubEnd from '../../components/Hub/HubEnd'

export default function Hub() {
    return <div>
        <TopNav />
        <AccueilContainer className="py-10">
            <>
                <HubIntro />
                <HubHero />
                <HubMain />
                <HubEnd />
            </>
        </AccueilContainer>
    </div>
}

export const getStaticProps = getStaticPropsStaticPage
export const getStaticPaths = getStaticPathsStaticPage
