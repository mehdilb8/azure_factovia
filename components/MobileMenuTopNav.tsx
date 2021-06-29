import { Menu } from '@headlessui/react'
import Link from 'next/link'
import usei18 from '../hooks/i18n-hook'
import SwitchLangButton from './SwitchLangButton'

interface MobileMenuTopNavProps {
    isTop: boolean,
    disableLocale?: boolean
}

export default function MobileMenuTopNav(props: MobileMenuTopNavProps) {
    const i18n = usei18()
    const menuButtonClass = "h-6 w-6 text-primaryWhite"

    return <Menu>
        <Menu.Button as="div" className="p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className={menuButtonClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <Menu.Items className="lg:hidden absolute right-0 w-56 mt-2 py-2 origin-top-right bg-secondary divide-y divide-gray-200 rounded-md shadow-lg outline-none border-2 border-primaryWhite border-opacity-10">
                <Menu.Item>
                    {({ active }) => (
                        <div className={`px-2 h-8 ${active ? 'bg-primaryWhite bg-opacity-30' : ''}`}>
                            <Link href={"/" + i18n.activeLocale}>
                                <a className="w-full h-full flex items-center">
                                    <p className="text-primaryWhite">Home</p>
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
                                    <p className="text-primaryWhite">Hub</p>
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
                                    <p className="text-primaryWhite">Blog</p>
                                </a>
                            </Link>
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
        </Menu.Button>
    </Menu>
}