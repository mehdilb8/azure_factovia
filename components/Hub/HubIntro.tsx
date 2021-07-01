import useI18n from "../../hooks/i18n-hook"
import { DISCORD_INVIT } from "../../constantes"
import NewTabIcon from "../../elements/NewTabIcon"

export default function HubIntro() {
    const i18n = useI18n()
    return <div className="mb-8">
        <div className="flex flex-wrap mb-14">
            <h1 className="mb-4 lg:mb-0 title w-max mr-0 lg:mr-4">{i18n.t("hub.intro.title")}</h1>
            <div className="w-full lg:w-3/4">
                <p className="float-left">{i18n.t("hub.intro.description.1")}</p>
                <p>{i18n.t("hub.intro.description.2")}</p>
            </div>
        </div>
        <a href={DISCORD_INVIT} target="_blank">
            <button className="btn lg:w-1/3 w-3/4 normal-case flex justify-center items-center">
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