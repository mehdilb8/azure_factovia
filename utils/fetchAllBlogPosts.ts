import { join } from 'path'
import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import { BlogMetaData } from '../types/Blog'
import getLangDict from './getLangDict'

interface FetchBlogPost {
    lang: string
}

export default async function fetchBlogPost(options: FetchBlogPost) {
    const markdownDir = "md/" + options.lang

    const lngDict = getLangDict({ lang: options.lang })
    const filesNames = readdirSync(markdownDir)
    const posts: BlogMetaData[] = []

    for (const filename of filesNames) {
        const markdownFilePath = join(markdownDir, filename)

        const content = readFileSync(markdownFilePath).toString('utf-8')
        const blogContent = matter(content)

        blogContent.data.slug = filename.split('.md')[0]

        posts.push(blogContent.data as BlogMetaData)
    }

    return {
        props: {
            posts,
            lng: options.lang as string,
            lngDict
        }
    }
}