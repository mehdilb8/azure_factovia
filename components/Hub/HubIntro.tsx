import useI18n from "../../hooks/i18n-hook"

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
        <button className="btn lg:w-1/3 w-3/4 normal-case">{i18n.t("hub.buttons.freeAccount")}</button>
    </div>
}