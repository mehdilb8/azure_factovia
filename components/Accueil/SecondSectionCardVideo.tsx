import YoutubeVideo from '../../elements/YoutubeVideo'

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
                <YoutubeVideo
                    title={props.title}
                    youtubeId={youtubeId}
                />
            </div>
            <div className="flex justify-center">
                <button className="btn relative top-9">{props.buttonText}</button>
            </div>
        </div>
    </div>
}