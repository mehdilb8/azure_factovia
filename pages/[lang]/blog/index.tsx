import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { BlogMetaData, IndexProps } from '../../../types/Blog'
import Link from 'next/link'
import TopNav from '../../../components/TopNav'
import useI18n from "../../../hooks/i18n-hook"
import { languages, defaultLanguage } from '../../../lib/i18n'
import fetchAllBlogPost from '../../../utils/fetchAllBlogPosts'

export default function index(props: IndexProps) {
    const first = props.posts[0] as BlogMetaData
    const posts = props.posts.slice(1)
    const i18 = useI18n()

    return <>
        <Head>
            <title>Factovia Blog</title>
        </Head>
        <TopNav />
        <div className="flex justify-center">
            <div className="lg:w-8/12 md:w-9/12 w-10/12">
                <h1 className="text-7xl my-8 font-semibold">The Blog</h1>
                <div className="flex flex-col lg:flex-row mb-8">
                    <div className="lg:w-1/2">
                        <Link href={"/" + i18.activeLocale + "/blog/" + first.slug}>
                            <a>
                                <img alt={i18.t("blog.index.hightlight.altThumb") + first.title} className="blog-highlight-thumb w-full object-cover rounded-sm shadow-md transition-transform transform hover:translate-x-2 hover:-translate-y-2" src={first.thumb || `https://picsum.photos/seed/${first.title}/1600`} />
                            </a>
                        </Link>
                    </div>
                    <div className="lg:w-1/2 lg:px-6 sm:px-0">
                        <p className="text-gray-500 text-sm">{new Date(first.date || Date.now()).toLocaleDateString()}</p>
                        <h2 className="text-6xl my-2 cursor-pointer">{first?.title}</h2>
                        <p>{first?.description}</p>
                    </div>
                </div>
                <div className="flex flex-wrap">
                    {
                        posts.map((blogPost) => <div className="lg:w-1/3 md:w-1/2 w-full mb-4 lg:pr-8 md:pr-6 pr-0" key={blogPost.slug}>
                            <div className="mb-2">
                                <Link href={i18.activeLocale + "/blog/" + blogPost.slug}>
                                    <a>
                                        <img className="list-blog-thumb w-full object-cover rounded-sm shadow-md transition-transform transform hover:translate-x-2 hover:-translate-y-2"
                                            src={blogPost.thumb || `https://picsum.photos/seed/${blogPost.title}/1600`} />
                                    </a>
                                </Link>
                            </div>
                            <p className="text-gray-500 text-sm">{new Date(blogPost.date || Date.now()).toLocaleDateString()}</p>
                            <Link href={i18.activeLocale + "/blog/" + blogPost.slug}>
                                <a>
                                    <h3 className="cursor-pointer text-3xl font-semibold">{blogPost.title}</h3>
                                </a>
                            </Link>
                            <p>{blogPost.description}</p>
                        </div>
                        )
                    }
                </div>
            </div>
        </div>
    </>
}

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
    try {
        if (!context.params || !context.params.lang) {
            throw new Error("Lang is not defined in params.")
        }

        return await fetchAllBlogPost({ lang: context.params.lang as string })

    } catch (e) {
        console.error({ e })
        const lngDict = await import('../../../locales/' + defaultLanguage + ".json")

        return {
            props: {
                posts: [],
                lng: defaultLanguage,
                lngDict: lngDict.default
            }
        }
    }
}

export const getStaticPaths: GetStaticPaths = async () => {
    const langPath = languages.map((lang) => ({ params: { lang } }))

    return {
        paths: langPath,
        fallback: false
    }
}

