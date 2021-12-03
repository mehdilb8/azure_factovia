interface MarrainesHeroProps {
    picture: string
    name: string
    title: string
    school: string
    job: string
    tags: string[]
    profileUrl: string
}

export default function MarrainesHero(props: MarrainesHeroProps) {
    return <div className="bg-primaryWhite text-center h-full shadow-lg rounded-md relative">
        <div className="px-6 py-8">
            <a href={props.profileUrl}>
                <img className="mx-auto rounded-full h-full w-32 mb-2" src={props.picture} />
            </a>
            <h3 className="title mb-2 text-xl text-primary">{props.name}</h3>
            <p className="text-primaryGray mb-2">{props.title}</p>
            <p className="mb-2"><strong>{props.school}</strong></p>
            <p className="mb-2">{props.job}</p>
            <div className="flex flex-wrap space-x-2 justify-center mb-2">
                {
                    props.tags.map((tag) => <div key={props.name + tag} className="py-1">
                        <div className="border-2 border-primary rounded-lg py-1 px-2 text-primary">{tag}</div>
                    </div>
                    )
                }
            </div>
            <a href={props.profileUrl} className="right-4 bottom-2 absolute">
                <div className="flex flex-row items-center">
                    <svg role="img" viewBox="0 0 24 24" className="w-4 h-4 text-gray-500" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <p className="ml-2 text-gray-500 text-sm">Linkedin</p>
                </div>
            </a>
        </div>
    </div>
}