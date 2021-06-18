import FR from '../locales/fr.json'
import EN from '../locales/en.json'

interface GetLangDict {
    lang: 'fr' | 'en' | string
}

export default function getLangDict(options: GetLangDict) {
    switch (options.lang) {
        case "en":
            return EN
        case "fr":
        default:
            return FR
    }
}