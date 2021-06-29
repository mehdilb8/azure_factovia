import Link from 'next/link'
import { useEffect, useState } from 'react'
import useI18n from '../hooks/i18n-hook'
import isBrowser from '../utils/isBrowser'
import FlagIcon from '../elements/FlagIcon'

interface SwitchLangButtonProps {
    className?: string
}

export default function SwitchLangButton(props: SwitchLangButtonProps) {
    const i18n = useI18n()
    const [target, setTarget] = useState("/" + i18n.activeLocale)

    useEffect(() => {
        if (isBrowser()) {
            const currentHref = window.location.href;
            const modifiedHref = currentHref.split("/")

            modifiedHref[3] = i18n.activeLocale === "fr"
                ? "en"
                : "fr"

            setTarget(modifiedHref.join("/"))
        }
    }, [i18n.activeLocale])

    return <Link href={target}>
        <a className="w-full h-full flex items-center">
            <FlagIcon country={i18n.activeLocale.toLowerCase() as any} className="h-6 w-6" />
        </a>
    </Link>
}