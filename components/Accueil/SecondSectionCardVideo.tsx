import YoutubeVideo from '../../elements/YoutubeVideo'
import Link from 'next/link'
import NewTabIcon from '../../elements/NewTabIcon'

interface SecondSectionCardProps {
    title: string,
    youtubeUrl: string
    buttonText: string
    buttonLink: string
    internalLink?: boolean
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
                {
                    props.internalLink
                        ? <Link href={props.buttonLink}>
                            <a>
                                <button className="btn px-10 relative top-9">{props.buttonText}</button>
                            </a>
                        </Link>
                        : <a href={props.buttonLink} target="_blank" >
                            <button className="btn px-8 flex justify-center items-center relative top-9" >
                                <span className="mr-2">
                                    {props.buttonText}
                                </span>
                                <span>
                                    <NewTabIcon className="w-4 h-4" />
                                </span>
                            </button>
                        </a>
                }
            </div>

        </div>
    </div>
}