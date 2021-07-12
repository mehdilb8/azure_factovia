import AccueilContainer from "./AccueilContainer"
import useI18n from "../../hooks/i18n-hook"
import LazyElement from "../../elements/LazyElement"
import NewTabIcon from "../../elements/NewTabIcon"
import { QUALTRIC_CONTACT } from "../../constantes"

export default function ThirdSection() {
    const i18n = useI18n()
    return <>
        <div className="relative opacity-90 bg-black">
            <AccueilContainer>
                <div className="py-12 lg:py-24">
                    <div className="bg-primaryWhite bg-opacity-40 pt-6 px-6">
                        <h2 className="text-primaryYellow text-2xl lg:text-4xl font-bold mb-4">{i18n.t("thirdSection.title.1")} <span className="text-primaryWhite">{i18n.t("thirdSection.title.2")} </span>{i18n.t("thirdSection.title.3")}</h2>
                        <p className="text-primaryWhite text-base lg:text-lg mb-4"> {i18n.t("thirdSection.description.1")} </p>
                        <p className="text-primaryWhite text-base lg:text-lg mb-4"> {i18n.t("thirdSection.description.2")} </p>
                        <p className="text-primaryWhite text-base lg:text-lg"> {i18n.t("thirdSection.description.3")} </p>
                        <a href={QUALTRIC_CONTACT[i18n.activeLocale]}>
                            <button className="btn relative top-5 flex items-center">
                                <span className="mr-2">
                                    {i18n.t("buttons.contact")}
                                </span>
                                <span>
                                    <NewTabIcon className="w-4 h-4" />
                                </span>
                            </button>
                        </a>
                    </div>
                </div>
            </AccueilContainer>
            <LazyElement>
                <img className="w-full h-full object-cover absolute top-0 opacity-30"
                    alt={i18n.t("thirdSection.alt")}
                    style={{ zIndex: -1 }}
                    src="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/maquette1.jpg" />
            </LazyElement>

        </div>
    </>
}