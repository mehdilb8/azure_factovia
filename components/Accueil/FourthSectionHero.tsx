import StarIcon from '../../elements/StarIcon'
import Image from 'next/image'

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
            <img alt={props.firmName} className="h-full" src={props.authorLogo} />
        </div>
        <p className="text-center lg:text-left font-semibold text-xl">{props.authorName}</p>
        <p className="text-center lg:text-left">{props.authorDescription}</p>
    </div>
}