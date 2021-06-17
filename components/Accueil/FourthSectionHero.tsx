import StarIcon from '../../elements/StarIcon'

interface FourthSectionHeroProps {
    img: string,
    content: string,
    authorName: string,
    authorDescription: string,
    authorLogo: string
}

export default function FourthSectionHero(props: FourthSectionHeroProps) {
    return <div className="px-0 md:px-2">
        <img className="w-32 rounded-full m-auto mb-2" src={props.img} />
        <div className="flex justify-center mb-2">
            <StarIcon className="h-6 w-6 text-primaryYellow" />
            <StarIcon className="h-6 w-6 text-primaryYellow" />
            <StarIcon className="h-6 w-6 text-primaryYellow" />
            <StarIcon className="h-6 w-6 text-primaryYellow" />
            <StarIcon className="h-6 w-6 text-primaryYellow" />
        </div>
        <div className="h-24 flex items-center justify-center mb-2">
            <h3 className="text-2xl">{props.content}</h3>
        </div>
        <div className="h-24 flex items-center justify-center mb-2 ">
            <img className="h-full" src={props.authorLogo} />
        </div>
        <p className="font-semibold text-xl">{props.authorName}</p>
        <p className="">{props.authorDescription}</p>
    </div>
}