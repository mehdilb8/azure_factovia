import { GetStaticPaths, GetStaticProps } from 'next'
import getLangAndDict from '../getLangAndDict'
import fetchBlogPosts from '../fetchAllBlogPosts'
import { HomeProps } from '../../types/Pages'
import { LANGS } from '../../constantes'

export const getStaticPropsHome: GetStaticProps<HomeProps> = async (context) => {
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
    const langPath = LANGS.map((lang) => ({ params: { lang } }))

    return {
        paths: langPath,
        fallback: false
    }
}
