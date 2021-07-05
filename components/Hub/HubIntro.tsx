import useI18n from "../../hooks/i18n-hook"
import { DISCORD_INVIT } from "../../constantes"
import NewTabIcon from "../../elements/NewTabIcon"
import TopNav from "../TopNav"
import AccueilContainer from "../Accueil/AccueilContainer"

export default function HubIntro() {
    const i18n = useI18n()

    return <div className="min-h-screen-80 bg-cover bg-center"
        style={{ backgroundImage: "url('https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/hub_bg.jpg')" }}
    >
        <TopNav />
        <AccueilContainer>
            <>
                <div className="bg-secondary bg-opacity-60 rounded-lg shadow-lg">
                    <div className="py-3 px-6">
                        <h1 className="title text-primaryWhite text-center">{i18n.t("hub.intro.title")}</h1>
                        <p className="text-primaryWhite">{i18n.t("hub.intro.description.1")}</p>
                    </div>
                </div>
            </>
        </AccueilContainer>
    </div>
}