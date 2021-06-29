import { GetStaticPaths, GetStaticProps } from 'next'
import { languages } from '../../lib/i18n'
import getLangAndDict from '../getLangAndDict'
import fetchBlogPosts from '../fetchAllBlogPosts'
import { HomeProps } from '../../types/Pages'

export const getStaticPropsStaticPage: GetStaticProps<HomeProps> = async (context) => {
    if (!context.params || !context.params.lang) {
        throw new Error("Lang is not defined in params.")
    }

    const posts = await fetchBlogPosts(context.params.lang as string)
    const { lng, lngDict } = await getLangAndDict(context.params.lang as string)

    return {
        props: {
            lng,
            lngDict,
            blog: posts[0]
        }
    }
}

export const getStaticPathsHome: GetStaticPaths = async () => {
    const langPath = languages.map((lang) => ({ params: { lang } }))

    return {
        paths: langPath,
        fallback: false
    }
}
