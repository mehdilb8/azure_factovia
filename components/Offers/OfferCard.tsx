import Link from 'next/link'
import NewTabIcon from '../../elements/NewTabIcon'

interface OfferCardProps {
    title: string
    content: string
    image?: string
    buttonText: string
    buttonLink: string
    internalLink?: boolean
}

export default function OfferCard(props: OfferCardProps) {
    return <div className="h-full">
        <section className="bg-primaryWhite text-center h-full shadow-lg rounded-md">
            <div className="px-4 py-8">
                <h2 className="title text-primary">{props.title}</h2>
                <article>
                    <p>{props.content}</p>
                </article>
                {
                    props.image
                        ? <img className="mx-auto h-12" src={props.image} />
                        : null
                }
            </div>
        </section>
        <div className="relative bottom-5">
            <div className="flex justify-center">
                {
                    props.internalLink
                        ? <Link href={props.buttonLink}>
                            <a>
                                <button className="btn px-10">{props.buttonText}</button>
                            </a>
                        </Link>
                        : <a href={props.buttonLink}>
                            <button className="btn px-8 flex justify-center items-center">
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