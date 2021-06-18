import useI18n from "../../hooks/i18n-hook"
import AccueilContainer from "./AccueilContainer"

export default function MainSection() {
    const i18 = useI18n()

    return <>
        <div className="min-h-screen-60 py-6 lg:py-16 bg-primaryDark">
            <AccueilContainer>
                <div className="flex flex-wrap space-y-10 lg:space-y-0">
                    <div className="w-full lg:w-1/2">
                        <div className="lg:px-8">
                            <h2 className="text-primaryWhite text-4xl font-bold mb-4">{i18.t('mainSection.title.1')} <span className="text-primaryYellow">{i18.t('mainSection.title.2')}</span></h2>
                            <p className="text-primaryWhite mb-4">{i18.t('mainSection.description')}</p>
                            <button className="btn w-full lg:w-60">{i18.t('buttons.contact')}</button>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <div className="h-full lg:px-20 ">
                            <div className="bg-primaryWhite bg-opacity-30 w-full h-full p-2">
                                <img alt={i18.t("mainSection.alt")} className="h-full w-full object-cover" src="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/modelisation.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
            </AccueilContainer>
        </div>
    </>
}