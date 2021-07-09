import { Menu } from '@headlessui/react'
import Link from 'next/link'
import usei18 from '../hooks/i18n-hook'
import SwitchLangButton from './SwitchLangButton'
import NewTabIcon from '../elements/NewTabIcon'
import { QUALTRIC_CONTACT } from '../constantes'
import BurgerIcon from '../elements/BurgerIcon'

interface MobileMenuTopNavProps {
    isTop: boolean,
    disableLocale?: boolean
}

export default function MobileMenuTopNav(props: MobileMenuTopNavProps) {
    const i18n = usei18()

    return <Menu>
        <Menu.Button>
            <BurgerIcon className="w-6 h-6 cursor-pointer mr-4" />
        </Menu.Button>
        <Menu.Items className="lg:hidden absolute right-0 w-56 mt-2 py-2 origin-top-right bg-secondary divide-y divide-gray-200 rounded-md shadow-lg outline-none border-2 border-primaryWhite border-opacity-10">
            <Menu.Item>
                {({ active }) => (
                    <div className={`px-2 h-8 ${active ? 'bg-primaryWhite bg-opacity-30' : ''}`}>
                        <Link href={"/" + i18n.activeLocale}>
                            <a className="w-full h-full flex items-center">
                                <p className="text-primaryWhite">{i18n.t("nav.home")}</p>
                            </a>
                        </Link>
                    </div>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <div className={`px-2 h-10 ${active ? 'bg-primaryWhite bg-opacity-30' : ''}`}>
                        <Link href={"/" + i18n.activeLocale + "/hub"}>
                            <a className="w-full h-full flex items-center">
                                <p className="text-primaryWhite">{i18n.t("nav.hub")}</p>
                            </a>
                        </Link>
                    </div>

                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <div className={`px-2 h-10 ${active ? 'bg-primaryWhite bg-opacity-30' : ''}`}>
                        <Link href={"/" + i18n.activeLocale + "/blog"}>
                            <a className="w-full h-full flex items-center">
                                <p className="text-primaryWhite">{i18n.t("nav.blog")}</p>
                            </a>
                        </Link>
                    </div>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <div className={`px-2 h-10 ${active ? 'bg-primaryWhite bg-opacity-30' : ''}`}>
                        <Link href={"/" + i18n.activeLocale + "/offers"}>
                            <a className="w-full h-full flex items-center">
                                <p className="text-primaryWhite">{i18n.t("nav.offers")}</p>
                            </a>
                        </Link>
                    </div>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <div className={`px-2 h-10 ${active ? 'bg-primaryWhite bg-opacity-30' : ''}`}>
                        <a href={QUALTRIC_CONTACT[i18n.activeLocale]} target="_blank"
                            className="w-full h-full flex items-center ">
                            <p className="flex items-center">
                                <span className="mr-1 text-primaryWhite">{i18n.t("nav.contact")}</span>
                                <NewTabIcon className="w-3 h-3 text-primaryWhite" />
                            </p>
                        </a>
                    </div>
                )}
            </Menu.Item>
            <Menu.Item>
                {({ active }) => (
                    <div className={`px-2 h-10 ${active ? 'bg-primaryWhite bg-opacity-30' : ''}`}>
                        <Link href={"/" + i18n.activeLocale + "/about"}>
                            <a href="https://gotosmartfactory.com/menu-formulairecontact/" className="w-full h-full flex items-center">
                                <p className="text-primaryWhite">{i18n.t("nav.about")}</p>
                            </a>
                        </Link>
                    </div>
                )}
            </Menu.Item>
            {
                !props.disableLocale
                    ? <Menu.Item>
                        {({ active }) => (
                            <div className={`px-2 h-10 ${active ? 'bg-primaryWhite bg-opacity-30' : ''}`}>
                                <SwitchLangButton />
                            </div>
                        )}
                    </Menu.Item>
                    : null
            }

        </Menu.Items>
    </Menu>
}