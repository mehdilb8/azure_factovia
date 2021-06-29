import useI18n from "../../hooks/i18n-hook"

import dynamic from 'next/dynamic'

const HubEngineNoSSR = dynamic(
    () => import('./HubEngine'),
    { ssr: false }
)

export default function HubMain() {
    const i18n = useI18n()
    return <div className="py-10">
        <div className="bg-primaryWhite shadow-sm">
            <div className="py-4 px-5">
                <h2 className="title text-primary">{i18n.t("hub.hubMain.title")}</h2>
                <p>{i18n.t("hub.hubMain.description")}</p>
                <HubEngineNoSSR />
            </div>
        </div>
    </div>

}