import AccueilContainer from "./AccueilContainer"
import useI18n from "../../hooks/i18n-hook"
import LazyElement from "../../elements/LazyElement"

export default function ThirdSection() {
    const i18 = useI18n()
    return <>
        <div className="relative opacity-90 bg-black">
            <AccueilContainer>
                <div className="py-12 lg:py-24">
                    <div className="bg-primaryWhite bg-opacity-40 pt-6 px-6">
                        <h2 className="text-primaryYellow text-2xl lg:text-4xl font-bold mb-4">{i18.t("thirdSection.title.1")} <span className="text-primaryWhite">{i18.t("thirdSection.title.2")} </span>{i18.t("thirdSection.title.3")}</h2>
                        <p className="text-primaryWhite text-base lg:text-lg mb-4"> {i18.t("thirdSection.description.1")} </p>
                        <p className="text-primaryWhite text-base lg:text-lg"> {i18.t("thirdSection.description.2")} </p>
                        <button className="btn relative top-5">{i18.t("buttons.contact")}</button>
                    </div>
                </div>
            </AccueilContainer>
            <LazyElement>
                <img className="w-full h-full object-cover absolute top-0 opacity-30"
                    alt={i18.t("thirdSection.alt")}
                    style={{ zIndex: -1 }}
                    src="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/maquette1.jpg" />
            </LazyElement>

        </div>
    </>
}