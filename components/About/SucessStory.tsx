interface SuccessStoryProps {
    name: string
    description: string
    picture: string
    picturePosition: 'left' | 'right'
    pictureInParagraph?: string
}

/**
 * 
 * @param props picturePosition on choisi la position de l'image. Sauf en mobile où on aura toujours la description au dessus de l'image
 * @returns 
 */
export default function SuccessStory(props: SuccessStoryProps) {
    return <section className="mb-16">
        <div className="flex flex-wrap space-y-4 lg:space-y-0">
            <div className={`lg:w-3/4 w-full ${props.picturePosition === "left" ? 'order-first lg:order-last text-left lg:text-right' : 'order-first'}`}>
                <h3 className="title text-primaryDark mb-4">{props.name}</h3>
                <article className="flex flex-wrap">
                    {
                        props.pictureInParagraph
                            ? <div className="w-full lg:w-1/5">
                                <img className="mr-2" src={props.pictureInParagraph} />
                            </div>
                            : null
                    }
                    <p className={props.pictureInParagraph ? "w-full lg:w-4/5" : ""}>
                        {props.description}
                    </p>
                </article>
            </div>
            <div className={`lg:w-1/4 w-full ${props.picturePosition === "right" ? 'order-last' : 'order-last lg:order-first'}`}>
                <img src={props.picture} />
            </div>
        </div>
    </section>
}