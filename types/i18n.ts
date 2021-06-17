export interface I18nWrapper {
    activeLocale: string,
    t: (localKey: string, data?: object) => string,
    locale: (currentLocal: string, dict: object) => void
}

export interface I18nProps {
    lng: string
    lngDict: object
}