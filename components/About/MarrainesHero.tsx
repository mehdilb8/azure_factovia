interface MarrainesHeroProps {
    picture: string
    name: string
    title: string
    school: string
    job: string
    tags: string[]
}

export default function MarrainesHero(props: MarrainesHeroProps) {
    return <div className="bg-primaryWhite text-center h-full shadow-lg rounded-md">
        <div className="px-6 py-8">
            <img className="mx-auto rounded-full h-full w-32 mb-2" src={props.picture} />
            <h3 className="title mb-2 text-xl text-primary">{props.name}</h3>
            <p className="text-primaryGray mb-2">{props.title}</p>
            <p className="mb-2"><strong>{props.school}</strong></p>
            <p className="mb-2">{props.job}</p>
            <div className="flex flex-wrap space-x-2 justify-center mb-2">
                {
                    props.tags.map((tag) => <div className="py-1">
                        <div className="border-2 border-primary rounded-lg py-1 px-2 text-primary">{tag}</div>
                    </div>
                    )
                }
            </div>
        </div>
    </div>
}