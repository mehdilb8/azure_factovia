import Link from 'next/link'
import NewTabIcon from '../../elements/NewTabIcon'

interface SecondSectionCardProps {
    title: string
    content: string
    buttonText: string
    buttonLink: string
    internalLink?: boolean
}

export default function SecondSectionCard(props: SecondSectionCardProps) {
    return <div className="bg-primaryWhite shadow-lg">
        <div className="p-4">
            <h3 className="text-2xl lg:text-3xl text-primary font-bold mb-4">{props.title}</h3>
            <p className="text-base lg:text-lg">{props.content}</p>
            {
                props.internalLink
                    ? <Link href={props.buttonLink}>
                        <a>
                            <button className="btn px-10 relative top-9">{props.buttonText}</button>

                        </a>
                    </Link>
                    : <a href={props.buttonLink}>
                        <button className="btn px-10 flex justify-center items-center relative top-9">
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
}