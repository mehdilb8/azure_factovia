import BlogPage from '../[lang]/blog/index'
import { defaultLanguage } from '../../lib/i18n'
import { BlogIndexProps } from '../../types/Blog'
import { getStaticPropsBlogHome } from '../../utils/pageUtils/bloghome'

export default function BlogDefaultPage(props: BlogIndexProps) {
    return <BlogPage {...props} />
}

export const getStaticProps = () => getStaticPropsBlogHome({ params: { lang: defaultLanguage } })