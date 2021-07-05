import useI18n from "../../hooks/i18n-hook"
import TopNav from "../TopNav"
import AccueilContainer from "../Accueil/AccueilContainer"
import NewTabIcon from "../../elements/NewTabIcon"

export default function HubIntro() {
    const i18n = useI18n()

    return <div className="min-h-screen-70 lg:min-h-screen-80 bg-cover bg-center"
        style={{ backgroundImage: "url('https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/hub_bg.jpg')" }}
    >
        <TopNav />
        <AccueilContainer className="px-1 py-12 lg:px-36 lg:py-32">
            <>
                <div className="bg-secondary bg-opacity-60 rounded-lg shadow-lg">
                    <div className="py-3 px-6">
                        <h1 className="title text-primaryWhite text-center mb-4">{i18n.t("hub.intro.title")}</h1>
                        <p className="text-primaryWhite text-center mb-4">{i18n.t("hub.intro.description")}</p>
                        <div className="flex justify-center mb-4">
                            <button className="btn bg-secondary text-primaryWhite px-10 lg:px-20 active:ring-secondaryLight flex justify-center items-center">
                                <span className="mr-2">
                                    {i18n.t("hub.buttons.freeAccount")}
                                </span>
                                <span>
                                    <NewTabIcon className="w-4 h-4" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        </AccueilContainer>
    </div>
}