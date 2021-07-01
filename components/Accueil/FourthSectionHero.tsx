interface FourthSectionHeroProps {
    img: string,
    content: string,
    authorName: string,
    authorDescription: string,
    authorLogo: string
    firmName: string
}

export default function FourthSectionHero(props: FourthSectionHeroProps) {
    return <div className="px-0 lg:px-2">
        <img className="w-32 rounded-full m-auto mb-2" src={props.img} alt={props.authorName} />
        <div className="h-24 flex items-center justify-center mb-2">
            <h3 className="text-2xl"><i>"{props.content}"</i></h3>
        </div>
        <div className="h-24 flex items-center justify-center mb-2 ">
            <img alt={props.firmName} className="h-3/4" src={props.authorLogo} />
        </div>
        <p className="text-center lg:text-left font-semibold text-xl">{props.authorName}</p>
        <p className="text-center lg:text-left">{props.authorDescription}</p>
    </div>
}