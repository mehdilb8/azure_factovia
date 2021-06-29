import { GetStaticPaths, GetStaticProps } from 'next'
import { languages } from '../../lib/i18n'
import getLangAndDict from '../getLangAndDict'
import fetchBlogPosts from '../fetchAllBlogPosts'
import { I18nProps } from '../../types/i18n'

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
    const langPath = languages.map((lang) => ({ params: { lang } }))

    return {
        paths: langPath,
        fallback: false
    }
}
