import LazyElement from './LazyElement'

interface YoutubeVideoProps {
    youtubeId: string
    title: string
}

export default function YoutubeVideo(props: YoutubeVideoProps) {
    return <LazyElement
        placeholderElement={<img alt={props.title} src={"http://img.youtube.com/vi/" + props.youtubeId + "/0.jpg"} />}
    >
        <iframe className="absolute top-0 left-0 w-full h-full"
            title={props.title}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            src={"https://www.youtube.com/embed/" + props.youtubeId + "?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"}
            width="560"
            height="315"
            allowFullScreen />
    </LazyElement>
}