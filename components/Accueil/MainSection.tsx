import useI18n from "../../hooks/i18n-hook"
import AccueilContainer from "./AccueilContainer"
import TopNav from '../TopNav'
import ConceptAnimation from "./ConceptAnimation"
import NewTabIcon from "../../elements/NewTabIcon"
import { CONTACT_LINK } from "../../constantes"

export default function MainSection() {
    const i18 = useI18n()

    return <>
        <div className="min-h-screen-80 bg-cover bg-center"
            style={{ backgroundImage: "url('https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/mainSectionBackground.jpg')" }}>
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
                                        <h1 className="title text-4xl">
                                            <span className="text-primaryWhite">{i18.t("mainSection.title.main")} </span>
                                            <ConceptAnimation />
                                        </h1>
                                        <p className="text-primaryWhite text-xl mb-2">
                                            <span>{i18.t("mainSection.description.1")} </span>
                                            <strong>{i18.t("mainSection.description.2")} </strong>
                                            <span>{i18.t("mainSection.description.3")} </span>
                                            <strong>{i18.t("mainSection.description.4")} </strong>
                                        </p>
                                        <a href={CONTACT_LINK} target="_blank">
                                            <button className="btn px-12 bg-secondary active:ring-secondaryLight flex items-center">
                                                <span className="mr-2">
                                                    {i18.t("buttons.contact")}
                                                </span>
                                                <span>
                                                    <NewTabIcon className="w-4 h-4" />
                                                </span>
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </AccueilContainer>
            </div>
        </div>
    </>
}