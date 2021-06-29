import { defaultLanguage } from '../lib/i18n'
import { readFileSync } from 'fs'

export default async function getLangAndDict(lang: string) {
    let lng = lang
    let lngDict;

    try {
        lngDict = JSON.parse(readFileSync('locales/' + lang + '.json', 'utf-8'))
    } catch (e) {
        console.error({ e })
    }

    if (!lngDict) {
        lng = defaultLanguage
        lngDict = await JSON.parse(readFileSync('locales/' + lang + '.json', 'utf-8'))
    }

    return {
        lng,
        lngDict
    }
}