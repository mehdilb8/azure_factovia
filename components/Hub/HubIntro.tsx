import useI18n from "../../hooks/i18n-hook"

export default function HubIntro() {
    const i18n = useI18n()
    return <div>
        <h1 className="mb-12 title">{i18n.t("hub.intro.title")}</h1>
        <button className="btn lg:w-1/3 w-3/4 normal-case">{i18n.t("hub.buttons.freeAccount")}</button>
    </div>
}