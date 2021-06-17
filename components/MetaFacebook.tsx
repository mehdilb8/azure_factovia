import { BlogContent } from "../types/Blog";

// Implementation of https://ogp.me/

export default function MetaOpenGraph(props: BlogContent) {
    return <>
        <meta property="og:title" content={props.data.title} />
        <meta property="og:type" content="website" />
        {/* Change this value if the server adress change. */}
        <meta property="og:url" content="https://blog.factovia.education/factovia-one" />
        <meta property="og:image" content={props.data.thumb} />
        <meta property="og:description" content={props.data.description} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="Factovia Blog" />
    </>
}