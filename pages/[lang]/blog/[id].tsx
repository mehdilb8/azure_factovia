import { GetStaticPaths, GetStaticProps } from 'next'
import { readdirSync, readFileSync } from 'fs'
import { join } from 'path'
import matter from 'gray-matter'
import Head from 'next/head'
import ShareButton from '../../../components/ShareButton'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'
import footnot from 'remark-footnotes'
import { BlogMetaData, BlogContent } from '../../../types/Blog'
import TopNav from '../../../components/TopNav'
import MetaOpenGraph from '../../../components/MetaFacebook'

import { languages } from '../../../lib/i18n'
import { I18nProps } from '../../../types/i18n'


export default function BlobPage(props: BlogContent & I18nProps) {
    return <>
        <Head>
            <MetaOpenGraph {...props} />
            <title>{props.data.title}</title>
        </Head>
        <TopNav disableLocale={true} />
        <div className="flex justify-center">
            <div className="lg:w-8/12 lg:w-9/12 w-10/12">
                <div className="mb-6 text-center">
                    <h1 className="text-6xl font-bold mb-2">{props.data.title}</h1>
                    <p className="text-gray-500 text-sm mb-2">{new Date(props.data.date || Date.now()).toLocaleDateString()}</p>
                    <img className="blog-cover mb-2"
                        src={props.data.thumb || `https://picsum.photos/seed/${props.data.title}/1600`} />
                    <div className="mb-2">
                        <ShareButton title={props.data.title} />
                    </div>
                    <hr />
                </div>
                <div className="blog-content">
                    <ReactMarkdown remarkPlugins={[gfm, footnot]} children={props.content} />
                </div>
            </div>
        </div>

    </>
}

export const getStaticProps: GetStaticProps<BlogContent & I18nProps> = async (context) => {
    try {
        if (!context.params || !context.params.id || !context.params.lang) {
            throw new Error("Missing id or lang");
        }
        const { id, lang } = context.params

        const blogFilePath = join(__dirname, "../../../../../public/md/" + lang + "/" + id + ".md")
        const content = readFileSync(blogFilePath).toString("utf-8")
        const blogContent = matter(content)

        blogContent.data = blogContent.data as BlogMetaData;
        //@ts-ignore
        delete blogContent.orig;

        return { props: blogContent };
    } catch (e) {
        console.error({ e })
        const errorContent = matter("") as any;
        return { props: errorContent }
    }
}

/**
 * Convert all `.md` files in `.html` files when trigger `next export`
 */
export const getStaticPaths: GetStaticPaths = async (_) => {
    const paths = languages.flatMap((lang) => {
        const filesNames = readdirSync('public/md/' + lang);
        return filesNames.map((blogSlug) => ({ params: { lang, id: blogSlug.split('.md')[0] } }))
    })
    return {
        paths,
        fallback: false
    }

}

