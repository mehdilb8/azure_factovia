import useI18n from "../../hooks/i18n-hook"

export default function HubEnd() {
    const i18n = useI18n()

    return <div >
        <button className="btn w-3/4 lg:w-1/3 float-right normal-case">{i18n.t("hub.buttons.freeAccount")}</button>
    </div>
}