import { LOGO_GREEN_URL, CREATION_DATE } from "../constantes"
import LazyElement from "../elements/LazyElement"
import useI18n from "../hooks/i18n-hook"
import Link from 'next/link'

export default function Footer() {
    const i18n = useI18n()

    const copyrightDate = CREATION_DATE.getFullYear() !== new Date(Date.now()).getFullYear()
        ? `${CREATION_DATE.getFullYear()} - ${new Date(Date.now()).getFullYear()}`
        : CREATION_DATE.getFullYear().toString()

    return <footer className="bg-primaryWhite py-4">
        <div className="flex flex-wrap justify-center md:justify-around space-y-8 md:space-y-0">
            <div className="w-full md:w-1/4 flex md:block justify-center">
                <div className="w-48 md:w-auto">
                    <div className="flex items-center">
                        <div className="h-16 mb-2 mr-2">
                            <Link href={"/" + i18n.activeLocale}>
                                <a>
                                    <LazyElement>
                                        <img src={LOGO_GREEN_URL} alt="Factovia Logo" className="h-full" />
                                    </LazyElement>
                                </a>
                            </Link>
                        </div>
                        <p className="text-secondary">{i18n.t("footer.identity.slogan")}</p>
                    </div>
                    <p className="text-secondary">{i18n.t("footer.identity.copyright")} {copyrightDate}</p>
                </div>
            </div>
            <div className="w-full md:w-1/4">
                <div className="flex md:block justify-center">
                    <div className="w-48 md:w-auto">
                        <h4 className="title mb-2 text-secondary">{i18n.t("footer.contact.title")}</h4>
                        <p className="w-min text-blue-300 border-b-2 border-blue-300"><a href={"mailto:" + i18n.t("footer.contact.mail")}>{i18n.t("footer.contact.mail")}</a></p>
                        <p className=" text-secondary">{i18n.t("footer.contact.tel")}</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
}