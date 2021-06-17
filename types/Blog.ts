import {GrayMatterFile} from 'gray-matter'

export type BlogContent = GrayMatterFile<string> & {data: BlogMetaData};

export interface BlogMetaData {
    title: string
    description: string
    date: string
    slug: string
    thumb: string
}