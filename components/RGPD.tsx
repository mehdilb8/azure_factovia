import { useState, useRef } from 'react'
import { RGPD_GOOGLE_ANALYTICS, RGPD_LOCALSTORAGE_KEY } from '../constantes';
import useI18n from '../hooks/i18n-hook';
import { RPGDLocalStorageState } from "../types/RGPD"
import isBrowser from '../utils/isBrowser';
import GoogleAnalytics from './GoogleAnalytics';

const rgpdinitState: RPGDLocalStorageState = {
    ask: true,
    googleAnalytics: true
}

export default function RGPD() {
    const i18n = useI18n();
    const localStorageOrDefault = isBrowser()
        ? localStorage.getItem(RGPD_LOCALSTORAGE_KEY) || JSON.stringify(rgpdinitState)
        : JSON.stringify(rgpdinitState)
    const rgpdState: RPGDLocalStorageState = JSON.parse(localStorageOrDefault);
    const [state, setState] = useState(rgpdState);
    const rgpdDisclaimerRef = useRef<HTMLDivElement>(null)

    const ANIMATION_DURATION = 0.5;

    const dismissRgpd = () => {
        if (rgpdDisclaimerRef) {
            rgpdDisclaimerRef.current?.classList.add('rgpd')
        }
    }

    const accept = () => {
        dismissRgpd()
        const newState = {
            ask: true,
            googleAnalytics: true
        }
        localStorage.setItem(RGPD_LOCALSTORAGE_KEY, JSON.stringify(newState))
        setTimeout(() => setState(newState),
            ANIMATION_DURATION * 1000
        )

    }

    const decline = () => {
        dismissRgpd()
        const newState = {
            ask: true,
            googleAnalytics: false
        }
        localStorage.setItem(RGPD_LOCALSTORAGE_KEY, JSON.stringify(newState))
        setTimeout(() => setState(newState),
            ANIMATION_DURATION * 1000
        )
    }

    return <>
        {
            !state.ask
                ? <div ref={rgpdDisclaimerRef} className="bg-primaryWhite fixed bottom-0 w-1/4 z-30">
                    <div className="px-8 py-4 ">
                        <p className="title mb-2">{i18n.t("rgpd.title")}</p>
                        <p className="text-primaryDark mb-2">
                            <span>{i18n.t("rgpd.text.content")} </span>
                            <span ><a className="text-blue-300 border-b-2 border-blue-300" href={RGPD_GOOGLE_ANALYTICS + i18n.activeLocale} target="_blank">{i18n.t("rgpd.text.link")}</a>.</span>
                        </p>
                        <div className="flex justify-end">
                            <button onClick={accept} className="mr-2 btn text-primaryDark bg-transparent border-2 border-primaryDark">{i18n.t("rgpd.buttons.decline")}</button>
                            <button onClick={decline} className="btn bg-secondary active:ring-secondaryLight">{i18n.t("rgpd.buttons.agree")}</button>
                        </div>
                    </div>
                </div>
                : null
        }
        {
            state.googleAnalytics
                ? <GoogleAnalytics />
                : null
        }
    </>
}