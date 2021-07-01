import useI18n from "../../hooks/i18n-hook"
import { DISCORD_INVIT } from "../../constantes"
import NewTabIcon from "../../elements/NewTabIcon"

export default function HubEnd() {
    const i18n = useI18n()

    return <div>
        <a href={DISCORD_INVIT} target="_blank">
            <button className="btn lg:w-1/3 w-3/4 normal-case flex justify-center items-center float-right">
                <span className="mr-2">
                    {i18n.t("hub.buttons.freeAccount")}
                </span>
                <span>
                    <NewTabIcon className="w-4 h-4" />
                </span>
            </button>
        </a>
    </div>
}