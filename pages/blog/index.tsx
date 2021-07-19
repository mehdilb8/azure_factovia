import BlogPage from '../[lang]/blog/index'
import { BlogIndexProps } from '../../types/Blog'
import { getStaticPropsBlogHome } from '../../utils/pageUtils/bloghome'
import { DEFAULT_LANG } from '../../constantes'

export default function BlogDefaultPage(props: BlogIndexProps) {
    return <BlogPage {...props} />
}

export const getStaticProps = () => getStaticPropsBlogHome({ params: { lang: DEFAULT_LANG } })