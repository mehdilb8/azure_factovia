import { LOGO_GREEN_URL, CREATION_DATE } from "../constantes"
import LazyElement from "../elements/LazyElement"
import useI18n from "../hooks/i18n-hook"
import Link from 'next/link'

export default function Footer() {
    const i18n = useI18n()

    const copyrightDate = CREATION_DATE.getFullYear() !== new Date(Date.now()).getFullYear()
        ? `${CREATION_DATE.getFullYear()} - ${new Date(Date.now()).getFullYear()}`
        : CREATION_DATE.getFullYear().toString()

    return <footer className="bg-primaryWhite py-8">
        <div className="flex flex-wrap justify-center md:justify-around space-y-8 md:space-y-0">
            <div className="w-full md:w-1/4 flex md:block justify-center">
                <div className="w-4/5 md:w-auto">
                    <div className="flex items-center justify-center">
                        <div className="h-16 mb-2 mr-2 w-24">
                            <Link href={"/" + i18n.activeLocale}>
                                <a>
                                    <LazyElement>
                                        <img src={LOGO_GREEN_URL} alt="Factovia Logo" className="w-full" />
                                    </LazyElement>
                                </a>
                            </Link>
                        </div>
                        <div>
                            <p className="text-secondary">{i18n.t("footer.identity.slogan")}</p>
                            <p className="text-secondary">{i18n.t("footer.identity.copyright")} {copyrightDate}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full md:w-1/4 flex md:block justify-center">
                <div className="w-4/5 md:w-auto">
                    <div className="flex items-center justify-center">
                        <div className="w-4/5 md:w-auto">
                            <h4 className="title mb-2 text-secondary w-full">{i18n.t("footer.contact.title")}</h4>
                            <p className="text-secondary w-full">{i18n.t("footer.contact.tel")}</p>
                            <p className="text-secondary w-full"><Link href={"/" + i18n.activeLocale + "/rgpd"}><a>{i18n.t("footer.contact.rgpd")}</a></Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </footer>
}