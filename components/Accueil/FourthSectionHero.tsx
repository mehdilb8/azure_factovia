import LazyElement from '../../elements/LazyElement'
interface FourthSectionHeroProps {
    img: string,
    content: string,
    authorName: string,
    authorDescription: string,
    authorLogo: string
    firmName: string
}

export default function FourthSectionHero(props: FourthSectionHeroProps) {
    return <div className="px-0 lg:px-6">
        <LazyElement>
            <img className="w-32 rounded-full m-auto mb-2" src={props.img} alt={props.authorName} />
        </LazyElement>
        <div className="h-24 flex items-center justify-center mb-2">
            <h3 className="text-2xl"><i>"{props.content}"</i></h3>
        </div>
        <div className="h-24 flex items-center justify-center mb-2 ">
            <LazyElement>
                <img alt={props.firmName} className="h-3/4" src={props.authorLogo} />
            </LazyElement>
        </div>
        <p className="text-center font-semibold text-xl">{props.authorName}</p>
        <p className="text-center">{props.authorDescription}</p>
    </div>
}