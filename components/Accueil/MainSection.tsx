import useI18n from "../../hooks/i18n-hook"
import AccueilContainer from "./AccueilContainer"
import TopNav from '../TopNav'
import ConceptAnimation from "./ConceptAnimation"

export default function MainSection() {
    const i18 = useI18n()

    return <>
        <div className="min-h-screen-80  bg-cover bg-center"
            style={{ backgroundImage: "url('https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/mainSectionBackground.jpg')" }}>
            <TopNav />
            <div className="py-6 lg:py-16">
                <AccueilContainer>
                    <div className="flex flex-wrap space-y-10 lg:space-y-0">
                        <div className="w-full lg:w-1/2">
                        </div>
                        <div className="w-full lg:w-1/2">
                            <div className="h-full lg:px-20 ">
                                <div className="bg-secondary bg-opacity-60 rounded-lg shadow-lg">
                                    <div className="px-6 py-4">
                                        <h1 className="title ">
                                            <span className="text-primaryWhite">{i18.t("mainSection.title.main")} </span>
                                            <ConceptAnimation />
                                        </h1>
                                        <p className="text-primaryWhite text-2xl">
                                            <span>{i18.t("mainSection.description.1")} </span>
                                            <strong>{i18.t("mainSection.description.2")} </strong>
                                            <span>{i18.t("mainSection.description.3")} </span>
                                            <strong>{i18.t("mainSection.description.4")} </strong>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccueilContainer>
            </div>
        </div>
        <AccueilContainer>
            <button className="btn bg-secondary relative bottom-5 active:ring-secondary">{i18.t("buttons.contact")}</button>
        </AccueilContainer>

    </>
}