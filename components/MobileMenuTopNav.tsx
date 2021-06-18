import { Menu } from '@headlessui/react'
import Link from 'next/link'
import usei18 from '../hooks/i18n-hook'

interface MobileMenuTopNavProps {
    isTop: boolean
}

export default function MobileMenuTopNav(props: MobileMenuTopNavProps) {
    const i18n = usei18()
    const menuButtonClass = props.isTop
        ? "h-6 w-6 text-primaryWhite"
        : "h-6 w-6 text-primaryBlack"

    return <Menu>
        <Menu.Button as="div" className="p-2 cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" className={menuButtonClass} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <Menu.Items className="md:hidden absolute right-0 w-56 mt-2 py-2 origin-top-right bg-primaryDark divide-y divide-gray-200 rounded-md shadow-lg outline-none border-2 border-primaryWhite border-opacity-10">
                <Menu.Item as="div" className="px-2 h-8">
                    <Link href={"/" + i18n.activeLocale}>
                        <a>
                            <p className="text-primaryWhite">Home</p>
                        </a>
                    </Link>
                </Menu.Item>
                {/* <Menu.Item as="div" className="px-2 h-10 flex items-center">
                    <Link href={"/" + i18n.activeLocale + "/hub"}>
                    <a>
                        <p className="text-gray-300">Hub</p>
                    </a>
                    </Link>
                </Menu.Item> */}
                <Menu.Item as="div" className="px-2 h-10 flex items-center">
                    <Link href={"/" + i18n.activeLocale + "/blog"}>
                        <a>
                            <p className="text-primaryWhite">Blog</p>
                        </a>
                    </Link>
                </Menu.Item>
                {/* <Menu.Item as="div" className="px-2 h-10 flex items-center">
                    <Link href={"/" + i18n.activeLocale + "/contact"}>
                    <a>
                        <p className="text-gray-300">Contact</p>
                    </a>
                    </Link>
                </Menu.Item> */}

            </Menu.Items>
        </Menu.Button>
    </Menu>
}