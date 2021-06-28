import FR from '../locales/fr.json'
import EN from '../locales/en.json'

export default function getLangDict(lang: string) {
    switch (lang) {
        case "en":
            return EN
        case "fr":
        default:
            return FR
    }
}