import useI18n from "../../hooks/i18n-hook"
import AccueilContainer from "../Accueil/AccueilContainer"
import MarrainesHero from "./MarrainesHero"
import TopNav from "../TopNav"

export default function Marraines() {
    const i18n = useI18n()
    return <div className="bg-cover bg-center"
        style={{ backgroundImage: "url('https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/about_bg.jpg')" }}
    >
        <TopNav />
        <AccueilContainer className="py-6 lg:py-16">
            <>
                <section className="bg-secondary bg-opacity-60 rounded-lg shadow-lg">
                    <div className="px-6 py-8 mb-8">
                        <h1 className="title text-primaryWhite">{i18n.t("about.marraines.title")}</h1>
                        <p className="text-primaryWhite mb-6">
                            {i18n.t("about.marraines.description")}
                        </p>
                        <h2 className="title text-primaryWhite text-3xl text-center">{i18n.t("about.marraines.support")}</h2>
                    </div>
                </section>
                <div className="flex flex-wrap space-y-6 lg:space-y-0 z-10 relative">
                    <div className="w-full lg:w-2/5">
                        <MarrainesHero
                            picture="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/estelleAuberix.jpg"
                            name="Estelle Auberix"
                            title="Solution Architect, Microsoft Regional Director & Azure MVP"
                            school="Conservatoire National des Arts et Métiers"
                            job="IOKELA CEO, founder"
                            tags={["Promoton of Parity", "Cloud", "Artificial Intelligence"]}
                        />
                    </div>
                    <div className="w-1/5 hidden lg:block" />
                    <div className="w-full lg:w-2/5">
                        <MarrainesHero
                            picture="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/MaritxuGoyhetcheAvatar.png"
                            name="Maritxu Goyhetche"
                            title="Manager in action - Innovation-Development-Industrialisation in Industry"
                            school="The University of Sheffield"
                            job="Manager in action - Innovation-Development-Industrialisation in Industry"
                            tags={["Innovation", "Development & Industrialisation", "growth"]}
                        />
                    </div>
                </div>
            </>
        </AccueilContainer>
        <div className="">
            <img src="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/maquette2.jpg" className="w-screen h-screen-70 object-cover object-bottom" style={{ zIndex: 0 }} />
        </div>

    </div>
}