import useI18n from "../../hooks/i18n-hook"
import HubData from "../../lib/HubData"
import dynamic from 'next/dynamic'
import AccueilContainer from "../Accueil/AccueilContainer"

const HubEngineNoSSR = dynamic(
    () => import('./HubEngine'),
    { ssr: false }
)

export default function HubMain() {
    const i18n = useI18n()
    return <div className="mt-20">
        <div>
            <AccueilContainer>
                <>
                    <h2 className="title text-primary mb-2">{i18n.t("hub.hubMain.title")}</h2>
                    <p>
                        <span>{i18n.t("hub.hubMain.description.1")} </span>
                        <span>{HubData.nodes.length}</span>
                        <span> {i18n.t("hub.hubMain.description.2")}</span>
                    </p>
                </>
            </AccueilContainer>
            <HubEngineNoSSR />
        </div>
    </div>

}