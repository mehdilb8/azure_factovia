interface SecondSectionCardProps {
    title: string,
    youtubeUrl: string
    buttonText: string
}

export default function SecondSectionCardVideo(props: SecondSectionCardProps) {
    const youtubeId = props.youtubeUrl.split("v=").splice(-1)[0]

    return <div className="bg-primaryWhite shadow-lg">
        <div className="p-4">
            <h3 className="text-2xl lg:text-3xl text-primary font-bold mb-4">{props.title}</h3>
            <div className="relative overflow-hidden w-full h-80">
                <iframe className="absolute top-0 left-0 w-full h-full"
                    title={props.title}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    src={"https://www.youtube.com/embed/" + youtubeId + "?ecver=1&amp;iv_load_policy=1&amp;yt:stretch=16:9&amp;autohide=1&amp;color=red&amp;width=560&amp;width=560"}
                    width="560"
                    height="315"
                    allowFullScreen
                    allowTransparency
                    frameBorder="0" />
            </div>
            <div className="flex justify-center">
                <button className="btn relative top-9">{props.buttonText}</button>
            </div>
        </div>
    </div>
}