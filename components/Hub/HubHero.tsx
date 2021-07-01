import useI18n from "../../hooks/i18n-hook"

export default function HubHero() {
    const i18n = useI18n()
    return <div className="flex flex-wrap py-6">
        <div className="lg:w-2/5 w-full lg:mb-0 mb-6">
            <div className="bg-primaryWhite shadow-sm">
                <div className="py-4 px-5">
                    <h2 className="title text-3xl text-primary mb-2">{i18n.t("hub.hero.community.title")}</h2>
                    <p>{i18n.t("hub.hero.community.content")}</p>
                    <img src="https://discord.com/assets/cb48d2a8d4991281d7a6a95d2f58195e.svg" className="mx-auto" />
                </div>
            </div>
        </div>
        <div className="lg:w-1/5 " />
        <div className="lg:w-2/5 w-full">
            <div className="bg-primaryWhite shadow-sm h-full relative">
                <div className="py-4 px-5">
                    <h2 className="title text-3xl text-primary mb-2">{i18n.t("hub.hero.premium.title")}</h2>
                    <p className="mb-3 lg:mb-0">{i18n.t("hub.hero.premium.content")}</p>
                    <button className="btn absolute -bottom-5 w-1/2 normal-case">{i18n.t("hub.hero.premium.button")}</button>
                </div>
            </div>
        </div>
    </div>
}