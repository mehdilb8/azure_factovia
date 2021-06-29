import { join } from 'path'
import { readFileSync, readdirSync } from 'fs'
import matter from 'gray-matter'
import { BlogMetaData } from '../types/Blog'

export default async function fetchBlogPosts(lang: string) {
    const markdownDir = "md/" + lang
    const filesNames = readdirSync(markdownDir)

    const posts: BlogMetaData[] = []

    for (const filename of filesNames) {
        const markdownFilePath = join(markdownDir, filename)

        const content = readFileSync(markdownFilePath).toString('utf-8')
        const blogContent = matter(content)

        blogContent.data.slug = filename.split('.md')[0]

        posts.push(blogContent.data as BlogMetaData)
    }

    if (posts.length > 1) {
        posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    }

    return posts

}