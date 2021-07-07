import useI18n from "../../hooks/i18n-hook";
import AccueilContainer from "../Accueil/AccueilContainer";
import OfferCard from "./OfferCard";
import { QUALTRIC_CONTACT, DISCORD_INVIT } from '../../constantes'

export default function OfferHero() {
    const i18n = useI18n()
    return <AccueilContainer className="relative max-h-full lg:h-screen-30 bottom-60 -mb-48 lg:mb-0">
        <div className="flex flex-wrap space-y-8 lg:space-y-0">
            <div className="w-full lg:w-1/3">
                <div className="lg:pr-12 h-full">
                    <OfferCard
                        title={i18n.t("offers.hero.1.title")}
                        content={i18n.t("offers.hero.1.content")}
                        buttonText={i18n.t("buttons.contact")}
                        image={"https://discord.com/assets/cb48d2a8d4991281d7a6a95d2f58195e.svg"}
                        buttonLink={QUALTRIC_CONTACT[i18n.activeLocale]}
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/3">
                <div className="lg:px-6 h-full">
                    <OfferCard
                        title={i18n.t("offers.hero.2.title")}
                        content={i18n.t("offers.hero.2.content")}
                        buttonText={i18n.t("buttons.join")}
                        buttonLink={DISCORD_INVIT}
                    />
                </div>
            </div>
            <div className="w-full lg:w-1/3">
                <div className="lg:pl-12 h-full">
                    <OfferCard
                        title={i18n.t("offers.hero.3.title")}
                        content={i18n.t("offers.hero.3.content")}
                        buttonText={i18n.t("buttons.contact")}
                        buttonLink={QUALTRIC_CONTACT[i18n.activeLocale]}
                    />
                </div>
            </div>
        </div>
    </AccueilContainer>
}