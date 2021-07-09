interface SuccessStoryProps {
    name: string
    intro?: string
    description: string
    picture: string
    picturePosition: 'left' | 'right'
    pictureInParagraph?: string
    list?: string[]
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
                        <span>
                            {props.intro}
                        </span>
                        <br />
                        <span>
                            {props.description}

                        </span>
                    </p>
                    {
                        props.list
                            ? <ul className={`list-disc ${props.picturePosition === "left" ? "mr-8" : "ml-8"}`}>
                                {props.list.map(elem => <li key={elem}>{elem}</li>)}
                            </ul>
                            : null
                    }
                </article>
            </div>
            <div className={`lg:w-1/4 w-full ${props.picturePosition === "right" ? 'order-last pl-6' : 'pr-6 order-last lg:order-first'}`}>
                <img className="h-72 lg:h-auto mx-auto object-contain" src={props.picture} />
            </div>
        </div>
    </section>
}