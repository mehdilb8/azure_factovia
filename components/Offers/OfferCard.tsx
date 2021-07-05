interface OfferCardProps {
    title: string
    content: string
    image?: string
    buttonText: string
    buttonLink: string
}

export default function OfferCard(props: OfferCardProps) {
    return <section>
        <h2>{props.title}</h2>
        <article>
            <p>{props.content}</p>
        </article>
        {
            props.image
                ? <img src={props.image} />
                : null
        }
        <a href={props.buttonLink}>
            <button>{props.buttonText}</button>
        </a>
    </section>
}