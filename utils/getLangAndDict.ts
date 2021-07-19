import { readFileSync } from 'fs'
import { DEFAULT_LANG } from '../constantes';

export default async function getLangAndDict(lang: string) {
    let lng = lang
    let lngDict;

    try {
        lngDict = JSON.parse(readFileSync('locales/' + lang + '.json', 'utf-8'))
    } catch (e) {
        console.error({ e })
    }

    if (!lngDict) {
        lng = DEFAULT_LANG
        lngDict = await JSON.parse(readFileSync('locales/' + lang + '.json', 'utf-8'))
    }

    return {
        lng,
        lngDict
    }
}