import { GrayMatterFile } from 'gray-matter'
import { I18nProps } from './i18n'

export interface BlogIndexProps extends I18nProps {
    posts: BlogMetaData[]
}

export type BlogContent = GrayMatterFile<string> & { data: BlogMetaData };

export interface BlogMetaData {
    title: string
    author: string
    description: string
    date: string
    modified: string
    slug: string
    thumb: string
}