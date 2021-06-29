import { GetStaticProps, GetStaticPaths } from 'next'
import { defaultLanguage, languages } from "../../lib/i18n"
import { BlogIndexProps } from "../../types/Blog"
import fetchBlogPosts from '../fetchAllBlogPosts'
import getLangAndDict from '../getLangAndDict'
import getLangDict from '../getLangDict'
import { getStaticPathsStaticPage } from './staticPage'

export const getStaticPropsBlogHome: GetStaticProps<BlogIndexProps> = async (context) => {
    try {
        if (!context.params || !context.params.lang) {
            throw new Error("Lang is not defined in params.")
        }

        const posts = await fetchBlogPosts(context.params.lang as string)
        const { lng, lngDict } = await getLangAndDict(context.params.lang as string)

        return {
            props: {
                posts,
                lng,
                lngDict
            }
        }

    } catch (e) {
        console.error({ e })
        const lngDict = getLangDict(defaultLanguage)

        return {
            props: {
                posts: [],
                lng: defaultLanguage,
                lngDict
            }
        }
    }
}

export const getStaticPathsBlogHome: GetStaticPaths = getStaticPathsStaticPage

