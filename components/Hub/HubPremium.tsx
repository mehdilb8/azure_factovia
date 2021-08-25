import useI18n from "../../hooks/i18n-hook"
import Link from 'next/link'

export default function HubPremium() {
    const i18n = useI18n()
    return <>
        <div className="my-20">
            <div className="flex">
                <div className="w-1/2 hidden lg:block">
                    <img src="https://blobfactoviacommonsrc.blob.core.windows.net/assets/factovia/web/PremiumThumb.jpg" />
                </div>
                <div className="w-full lg:w-1/2 bg-secondary">
                    <div className="px-12 py-10">
                        <h2 className="title mb-2">
                            <span className="text-primaryWhite">{i18n.t("hub.hero.premium.title.1")} </span>
                            <span className="text-primaryYellow">{i18n.t("hub.hero.premium.title.2")}</span>
                        </h2>
                        <p className="text-primaryWhite mb-2">
                            {i18n.t("hub.hero.premium.content")}
                        </p>
                        <Link href={"/" + i18n.activeLocale + "/offers"}>
                            <a>
                                <button className="btn w-full">
                                    {i18n.t("hub.buttons.offers")}
                                </button>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
}