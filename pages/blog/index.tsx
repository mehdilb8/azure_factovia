import { GetStaticProps } from 'next'
import BlogPage from '../[lang]/blog/index'
import fetchAllBlogPost from '../../utils/fetchAllBlogPosts'
import { defaultLanguage } from '../../lib/i18n'
import { IndexProps } from '../../types/Blog'

export default function BlogDefaultPage(props: IndexProps) {
    return <BlogPage {...props} />
}

export const getStaticProps: GetStaticProps<IndexProps> = async (context) => {
    return await fetchAllBlogPost({ lang: defaultLanguage })
}