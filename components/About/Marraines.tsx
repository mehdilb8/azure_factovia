import useI18n from "../../hooks/i18n-hook"
import AccueilContainer from "../Accueil/AccueilContainer"
import MarrainesHero from "./MarrainesHero"

export default function Marraines() {
    const i18n = useI18n()
    return <>
        <div className="bg-secondary">
            <AccueilContainer className="py-8">
                <>
                    <h1 className="title text-primaryWhite">{i18n.t("about.marraines.title")}</h1>
                    <p className="text-primaryWhite mb-6">
                        {i18n.t("about.marraines.description")}
                    </p>
                    <h2 className="title text-primaryWhite text-3xl text-center">{i18n.t("about.marraines.support")}</h2>
                    <div className="flex flex-wrap space-y-6 lg:space-y-0 z-10 relative">
                        <div className="w-full lg:w-2/5">
                            <MarrainesHero
                                picture="https://media-exp3.licdn.com/dms/image/C4D03AQH_h2xb13GDAQ/profile-displayphoto-shrink_400_400/0/1622752063161?e=1630540800&v=beta&t=EdMjhK4ZB36kOfoZ5Gr9ZTDOeIP--xqaBnYrZNj9XkE"
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
                                picture="https://media-exp3.licdn.com/dms/image/C4E03AQGv3pOVeKttkQ/profile-displayphoto-shrink_400_400/0/1516324013300?e=1630540800&v=beta&t=z63guT-SX5xBxhNHXTu8KqD4z2sAXbBIYx2ZzxpXpaM"
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
        </div>
        <div className="">
            <img src="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/maquette2.jpg" className="w-screen h-screen-70 object-cover object-bottom" style={{ zIndex: 0 }} />
        </div>

    </>
}