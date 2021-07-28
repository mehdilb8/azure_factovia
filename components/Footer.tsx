import { LOGO_URL, CREATION_DATE } from "../constantes"
import LazyElement from "../elements/LazyElement"
import useI18n from "../hooks/i18n-hook"
import Link from 'next/link'

export default function Footer() {
    const i18n = useI18n()

    const copyrightDate = CREATION_DATE.getFullYear() !== new Date(Date.now()).getFullYear()
        ? `${CREATION_DATE.getFullYear()} - ${new Date(Date.now()).getFullYear()}`
        : CREATION_DATE.getFullYear().toString()

    return <footer className="bg-secondary py-4">
        <div className="flex flex-wrap justify-center md:justify-around space-y-8 md:space-y-0">
            <div className="w-full md:w-1/4 flex md:block justify-center">
                <div>
                    <div className="h-16 mb-2">
                        <Link href={"/" + i18n.activeLocale}>
                            <a>
                                <LazyElement>
                                    <img src={LOGO_URL} alt="Factovia Logo" className="h-full" />
                                </LazyElement>
                            </a>
                        </Link>
                    </div>
                    <p className="text-primaryWhite">{i18n.t("footer.identity.slogan")}</p>
                    <p className="text-primaryWhite">{i18n.t("footer.identity.copyright")} {copyrightDate}</p>
                </div>
            </div>
            <div className="w-full md:w-1/4">
                <div className="flex md:block justify-center">
                    <div>
                        <h4 className="title mb-2 text-primaryWhite">{i18n.t("footer.contact.title")}</h4>
                        <p className="md:w-min text-blue-300 border-b-2 border-blue-300"><a href={"mailto:" + i18n.t("footer.contact.mail")}>{i18n.t("footer.contact.mail")}</a></p>
                        <p className=" text-primaryWhite">{i18n.t("footer.contact.tel")}</p>
                    </div>

                </div>

            </div>
        </div>

    </footer>
}