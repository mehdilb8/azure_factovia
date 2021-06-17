import { GetStaticPaths } from 'next'
import { readdirSync } from 'fs'
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

export default function BlobPage(props: BlogContent) {
    return <>
        <Head>
            <MetaOpenGraph {...props} />
            <title>{props.data.title}</title>
        </Head>
        <TopNav />
        <div className="flex justify-center">
            <div className="lg:w-8/12 md:w-9/12 w-10/12">
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

export async function getStaticProps(context: any) {
    try {
        if (!context.params.id) {
            throw new Error("Missing id");
        }
        const { id } = context.params

        const content = await import(`../../../public/md/en/${id}.md`)

        const blogContent = matter(content.default)
        blogContent.data = blogContent.data as BlogMetaData;
        delete blogContent.orig;

        return { props: blogContent };
    } catch (e) {
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

