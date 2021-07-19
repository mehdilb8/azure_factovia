import Link from 'next/link'
import { useEffect, useState } from 'react'
import MobileMenuTopNav from './MobileMenuTopNav'
import useI18n from '../hooks/i18n-hook'
import SwitchLangButton from './SwitchLangButton'
import isBrowser from '../utils/isBrowser'
import { useRouter } from 'next/router'
import { PAGES_WITH_IMG_BACKGROUND } from '../constantes'
import NewTabIcon from '../elements/NewTabIcon'
import { QUALTRIC_CONTACT, LOGO_URL } from '../constantes'

interface TopNavProps {
    disableLocale?: boolean
}

export default function TopNav(props: TopNavProps) {
    const i18n = useI18n()
    const [isTop, setIsTop] = useState(true)
    const router = useRouter();

    const linkClass = "text-primaryWhite border-b-2 border-primaryWhite border-opacity-0 hover:border-opacity-100"

    const titleClass = isTop
        ? "text-primaryWhite text-2xl"
        : "text-primaryWhite text-xl"

    useEffect(() => {
        if (isBrowser()) {
            window.addEventListener('scroll', () => {
                const { scrollTop } = document.documentElement;
                setIsTop(scrollTop < 10)
            })
        }
    }, [])

    return <>
        <div className={`py-3 lg:px-16 px-4 fixed w-screen ${isTop && PAGES_WITH_IMG_BACKGROUND.includes(router.route) ? 'bg-transparent' : 'bg-secondary shadow-lg'} ${isTop ? 'h-20' : 'h-16'} z-20`}>
            <div className="flex items-center space-x-6 ">
                <div>
                    <Link href={"/" + i18n.activeLocale}>
                        <a>
                            <img className={`${isTop ? 'h-12' : 'h-10'}`} src={LOGO_URL} alt="Factovia Logo" />
                        </a>
                    </Link>
                </div>
                <div className="font-display">
                    <Link href={"/" + i18n.activeLocale}>
                        <a>
                            <h1 className={titleClass}>Factovia</h1>
                        </a>
                    </Link>
                </div>

                <div className="flex-grow" />
                <div className="hidden lg:flex lg:space-x-6">
                    <Link href={"/" + i18n.activeLocale}>
                        <a>
                            <p className={linkClass}>{i18n.t("nav.home")}</p>
                        </a>
                    </Link>
                    <Link href={"/" + i18n.activeLocale + "/hub"}>
                        <a>
                            <p className={linkClass}>{i18n.t("nav.hub")}</p>
                        </a>
                    </Link>
                    <Link href={"/" + i18n.activeLocale + "/blog"}>
                        <a>
                            <p className={linkClass}>{i18n.t("nav.blog")}</p>
                        </a>
                    </Link>
                    <Link href={"/" + i18n.activeLocale + "/offers"}>
                        <a>
                            <p className={linkClass}>{i18n.t("nav.offers")}</p>
                        </a>
                    </Link>
                    <a href={QUALTRIC_CONTACT[i18n.activeLocale]} target="_blank">
                        <p className={linkClass + " flex items-center"}>
                            <span className="mr-1">{i18n.t("nav.contact")}</span>
                            <NewTabIcon className="w-3 h-3" />
                        </p>
                    </a>
                    <Link href={"/" + i18n.activeLocale + "/about"}>
                        <a>
                            <p className={linkClass}>{i18n.t("nav.about")}</p>
                        </a>
                    </Link>
                    {
                        !props.disableLocale
                            ? <div className="border-b-2 border-primaryWhite">
                                <SwitchLangButton />
                            </div>
                            : null
                    }
                </div>
                <div className="lg:hidden">
                    <MobileMenuTopNav isTop={isTop} />
                </div>
            </div>
        </div>
        <div className={isTop && PAGES_WITH_IMG_BACKGROUND.includes(router.route) ? 'h-20' : 'h-16'} />
    </>
}