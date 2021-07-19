import useI18n from "../../hooks/i18n-hook"
import { DISCORD_INVIT } from "../../constantes"
import NewTabIcon from "../../elements/NewTabIcon"
import AccueilContainer from "../Accueil/AccueilContainer"

export default function HubEnd() {
    const i18n = useI18n()

    return <AccueilContainer>
        <a href={DISCORD_INVIT} target="_blank">
            <button className="btn px-8 normal-case flex justify-center items-center mb-10 float-none lg:float-right">
                <span className="mr-2">
                    {i18n.t("hub.buttons.freeAccount")}
                </span>
                <span>
                    <NewTabIcon className="w-4 h-4" />
                </span>
            </button>
        </a>
    </AccueilContainer>
}