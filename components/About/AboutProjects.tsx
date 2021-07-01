import useI18n from "../../hooks/i18n-hook"
import AccueilContainer from "../Accueil/AccueilContainer"

export default function AboutProjects() {
    const i18n = useI18n()
    return <div>
        <AccueilContainer>
            <>
                <h2 className="title text-primary">{i18n.t("about.projects.title")}</h2>
                <img src="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/projects_1.jpg" className="w-full h-screen-60 object-center object-cover mb-2" />
                <p className="text-center text-primaryGray">
                    <i>{i18n.t("about.projects.figureDescription.1")}</i>
                </p>
                <p className="text-center text-primaryGray">
                    <i>{i18n.t("about.projects.figureDescription.2")}</i>
                </p>
            </>
        </AccueilContainer>

    </div>
}