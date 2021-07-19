interface MetaOpenGraphProps {
    title: string,
    thumb: string
    description: string
    path: string
}

/**
 * Implementation of https://ogp.me/
 */
export default function MetaOpenGraph(props: MetaOpenGraphProps) {
    return <>
        <meta property="og:title" content={props.title} />
        <meta property="og:type" content="website" />
        {/* Change this value if the server adress change. */}
        <meta property="og:url" content={"https://factovia.fr/" + props.path} />
        <meta property="og:image" content={props.thumb} />
        <meta property="og:description" content={props.description} />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:locale:alternate" content="en_US" />
        <meta property="og:site_name" content="Factovia" />
    </>
}