import useI18n from "../../hooks/i18n-hook"
import AccueilContainer from "../Accueil/AccueilContainer"
import NewTabIcon from "../../elements/NewTabIcon"
import { DISCORD_INVIT } from "../../constantes"

export default function HubCommunity() {
    const i18n = useI18n()
    return <>
        <AccueilContainer className="my-20">
            <>
                <div className="bg-primaryWhite shadow-sm mb-2">
                    <div className="py-4 px-5">
                        <h2 className="title text-3xl text-primary mb-2">{i18n.t("hub.hero.community.title")}</h2>
                        <p className="mb-6">{i18n.t("hub.hero.community.content")}</p>
                        <div className="flex justify-center lg:justify-end mb-6">
                            <a href={DISCORD_INVIT} target="_blank">
                                <button className="btn px-12 normal-case flex justify-center items-center">
                                    <span className="mr-2">
                                        {i18n.t("hub.buttons.freeAccount")}
                                    </span>
                                    <span>
                                        <NewTabIcon className="w-4 h-4" />
                                    </span>

                                </button>
                            </a>
                        </div>
                    </div>
                </div>
                <img src="https://discord.com/assets/cb48d2a8d4991281d7a6a95d2f58195e.svg" className="lg:float-right h-16 mx-auto" />
            </>
        </AccueilContainer>
    </>
}