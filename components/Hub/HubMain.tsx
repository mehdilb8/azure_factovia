import useI18n from "../../hooks/i18n-hook"
import HubData from "../../lib/HubData"

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
                <p>
                    <span>{i18n.t("hub.hubMain.description.1")} </span>
                    <span>{HubData.nodes.length}</span>
                    <span> {i18n.t("hub.hubMain.description.2")}</span>
                </p>
                <HubEngineNoSSR />
            </div>
        </div>
    </div>

}