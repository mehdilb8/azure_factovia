import Link from 'next/link'
import { useEffect, useState } from 'react'
import MobileMenuTopNav from './MobileMenuTopNav'

export default function TopNav() {

    const [isTop, setIsTop] = useState(true)

    const linkClass = isTop
        ? "text-primaryWhite border-b-2 border-primaryWhite border-opacity-0 hover:border-opacity-100"
        : "text-primaryDark border-b-2 border-primaryDark border-opacity-0 hover:border-opacity-100"

    const titleClass = isTop
        ? "text-primaryWhite text-2xl"
        : "text-primaryBlack text-2xl"

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', () => {
                const { scrollTop } = document.documentElement;
                setIsTop(scrollTop < 10)
            })
        }
    }, [])

    return <>
        <div className={`py-3 md:px-16 px-4 fixed w-screen ${isTop ? 'bg-primaryDark' : 'bg-primaryWhite shadow-lg'} transition-all h-20 z-10`}>
            <div className="flex items-center space-x-6 ">
                <div className="font-display">
                    <Link href="/">
                        <a>
                            <h1 className={titleClass}>Factovia</h1>
                        </a>
                    </Link>
                </div>
                <div>
                    <img className="h-12 w-12" src="/logo.jpg" />
                </div>
                <div className="flex-grow" />
                <div className="hidden md:flex md:space-x-6">
                    <Link href="/">
                        <a>
                            <p className={linkClass}>Home</p>
                        </a>
                    </Link>
                    <Link href="/hub">
                        <a>
                            <p className={linkClass}>Hub</p>
                        </a>
                    </Link>
                    <Link href="/blog">
                        <a>
                            <p className={linkClass}>Blog</p>
                        </a>
                    </Link>
                    <Link href="/contact">
                        <a>
                            <p className={linkClass}>Contact</p>
                        </a>
                    </Link>
                </div>
                <div className="md:hidden">
                    <MobileMenuTopNav isTop={isTop} />
                </div>
            </div>
        </div>
        <div className="h-20" />
    </>
}