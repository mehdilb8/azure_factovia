import { GrayMatterFile } from 'gray-matter'
import { I18nProps } from './i18n'

export interface IndexProps extends I18nProps {
    posts: BlogMetaData[]
}

export type BlogContent = GrayMatterFile<string> & { data: BlogMetaData };

export interface BlogMetaData {
    title: string
    description: string
    date: string
    slug: string
    thumb: string
}