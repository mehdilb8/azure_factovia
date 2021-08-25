import TopNav from "../TopNav"
import AccueilContainer from "../Accueil/AccueilContainer"
import useI18n from "../../hooks/i18n-hook"

export default function OfferIntro() {
    const i18n = useI18n()
    return <div className="min-h-screen-80 bg-cover bg-center"
        style={{ backgroundImage: "url('https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/offer_bg.jpg')" }}
    >
        <TopNav />
        <AccueilContainer className="py-28">
            <div className="bg-secondary bg-opacity-60 rounded-lg shadow-lg">
                <div className="py-8">
                    <h1 className="title text-primaryWhite mb-0 text-center">{i18n.t("offers.intro.title")}</h1>
                </div>
            </div>
        </AccueilContainer>
    </div>
}