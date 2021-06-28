import { BlogMetaData } from "./Blog";
import { I18nProps } from "./i18n";

export type HomeProps = I18nProps & TrendingProps;

export interface TrendingProps {
    blog: BlogMetaData
}