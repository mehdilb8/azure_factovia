import { DISCORD_INVIT } from "../../constantes";
import useI18n from "../../hooks/i18n-hook"
import AccueilContainer from "../Accueil/AccueilContainer"
import NewTabIcon from "../../elements/NewTabIcon";

export default function TechExpertise() {
    const i18n = useI18n()
    const youtubeId = "uC6skEWqgdg";

    return <div className="bg-secondary my-8">
        <AccueilContainer className="py-8">
            <div className="flex flex-wrap space-y-6 lg:space-y-0">
                <div className="lg:w-1/2 w-full">
                    <h2 className="title text-primaryWhite mb-6">{i18n.t("about.techExpertise.title")}</h2>
                    <p className="text-primaryWhite mb-3">
                        {i18n.t("about.techExpertise.description")}
                    </p>
                    <a href={DISCORD_INVIT} target="_blank">
                        <button className="btn lg:w-3/4 w-full normal-case flex justify-center items-center">
                            <span className="mr-2">
                                {i18n.t("hub.buttons.freeAccount")}
                            </span>
                            <span>
                                <NewTabIcon className="w-4 h-4" />
                            </span>
                        </button>
                    </a>
                </div>
                <div className="lg:w-1/2 w-full">
                    <div className="relative overflow-hidden w-full h-80">
                        <iframe className="absolute top-0 left-0 w-full h-full"
                            title={i18n.t("about.techExpertise.videoTitle")}
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            src={"https://www.youtube.com/embed/" + youtubeId + "?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"}
                            width="560"
                            height="315"
                            allowFullScreen
                            allowTransparency
                            frameBorder="0" />
                    </div>
                    <p className="text-center">
                        <a className="border-b-2 border-opacity-0 border-primaryWhite text-primaryWhite hover:border-opacity-100" href="https://www.youtube.com/watch?v=uC6skEWqgdg" target="_blank"><i>https://www.youtube.com/watch?v=uC6skEWqgdg [FR]</i></a>
                    </p>
                </div>
            </div>

        </AccueilContainer>
    </div>
}