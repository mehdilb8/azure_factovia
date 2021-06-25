import Link from 'next/link'
import { useEffect, useState } from 'react'
import MobileMenuTopNav from './MobileMenuTopNav'
import useI18n from '../hooks/i18n-hook'
import SwitchLangButton from './SwitchLangButton'
import isBrowser from '../utils/isBrowser'

interface TopNavProps {
    disableLocale?: boolean
}

export default function TopNav(props: TopNavProps) {
    const i18n = useI18n()
    const [isTop, setIsTop] = useState(true)

    const linkClass = isTop
        ? "text-primaryWhite border-b-2 border-primaryWhite border-opacity-0 hover:border-opacity-100"
        : "text-primaryWhite border-b-2 border-primaryDark border-opacity-0 hover:border-opacity-100"

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
        <div className={`py-3 lg:px-16 px-4 fixed w-screen ${isTop ? 'bg-transparent' : 'bg-secondary shadow-lg'} transition-all h-20 z-10`}>
            <div className="flex items-center space-x-6 ">
                <div>
                    <Link href={"/" + i18n.activeLocale}>
                        <a>
                            <img className={`${isTop ? 'h-12' : 'h-10'} transition-all`} src="https://stmediarassetsfrcerec.blob.core.windows.net/other/factovia/web/logo.png" alt="Factovia Logo" />
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
                            <p className={linkClass}>Home</p>
                        </a>
                    </Link>
                    <Link href={"/" + i18n.activeLocale + "/hub"}>
                        <a>
                            <p className={linkClass}>Hub</p>
                        </a>
                    </Link>
                    <Link href={"/" + i18n.activeLocale + "/blog"}>
                        <a>
                            <p className={linkClass}>Blog</p>
                        </a>
                    </Link>
                    <Link href={"/" + i18n.activeLocale + "/contact"}>
                        <a href="https://gotosmartfactory.com/menu-formulairecontact/">
                            <p className={linkClass}>Contact</p>
                        </a>
                    </Link>
                    {
                        !props.disableLocale
                            ? <SwitchLangButton className={linkClass} />
                            : null
                    }
                </div>
                <div className="lg:hidden">
                    <MobileMenuTopNav isTop={isTop} />
                </div>
            </div>
        </div>
        <div className="h-20" />
    </>
}