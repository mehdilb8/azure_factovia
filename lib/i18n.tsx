import { createContext, useState, useRef, useEffect, ClassType } from 'react'
import rosetta from 'rosetta'
import { I18nWrapper } from '../types/i18n'

import FR from '../locales/fr.json'
import EN from '../locales/en.json'

const i18n = rosetta()

export const defaultLanguage = 'fr'
export const languages = ['fr', 'en']
export const contentLanguageMap = { fr: 'fr-FR', en: 'en-US' }

//@ts-ignore
export const I18nContext = createContext<I18nWrapper>()

// default language
i18n.locale(defaultLanguage)

// Add langauges
i18n.set('fr', FR)
i18n.set('en', EN)

interface I18nParams {
    children: ClassType<any, any, any>,
    locale: string,
    lngDict: object
}

export default function I18n(i18nArgs: I18nParams) {
    const { children, locale, lngDict } = i18nArgs

    const activeLocaleRef = useRef(locale || defaultLanguage)
    const [, setTick] = useState(0)
    const firstRender = useRef(true)

    const i18nWrapper: I18nWrapper = {
        activeLocale: activeLocaleRef.current,
        t: (localKey: string) => i18n.t(localKey),
        locale: (currentLocal: string, dict: object) => {
            i18n.locale(currentLocal)
            activeLocaleRef.current = currentLocal
            if (dict) {
                i18n.set(currentLocal, dict)
            }
            // force rerender to update view
            setTick((tick) => tick + 1)
        }
    }

    // for initial SSR render
    if (locale && firstRender.current === true) {
        firstRender.current = false
        i18nWrapper.locale(locale, lngDict)
    }

    // when locale is updated
    useEffect(() => {
        if (locale) {
            i18nWrapper.locale(locale, lngDict)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lngDict, locale])

    return <I18nContext.Provider value={i18nWrapper} > {children} </I18nContext.Provider>
}