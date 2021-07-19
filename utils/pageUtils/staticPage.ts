import { GetStaticPaths, GetStaticProps } from 'next'
import getLangAndDict from '../getLangAndDict'
import fetchBlogPosts from '../fetchAllBlogPosts'
import { I18nProps } from '../../types/i18n'
import { LANGS } from '../../constantes'

export const getStaticPropsStaticPage: GetStaticProps<I18nProps> = async (context) => {
    if (!context.params || !context.params.lang) {
        throw new Error("Lang is not defined in params.")
    }

    const posts = await fetchBlogPosts(context.params.lang as string)
    const { lng, lngDict } = await getLangAndDict(context.params.lang as string)

    return {
        props: {
            lng,
            lngDict,
        }
    }
}

export const getStaticPathsStaticPage: GetStaticPaths = async () => {
    const langPath = LANGS.map((lang) => ({ params: { lang } }))

    return {
        paths: langPath,
        fallback: false
    }
}
