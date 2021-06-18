interface SecondSectionCardProps {
    title: string
    content: string
    buttonText: string
}

export default function SecondSectionCard(props: SecondSectionCardProps) {
    return <div className="bg-primaryWhite shadow-lg">
        <div className="p-4">
            <h3 className="text-2xl lg:text-3xl text-primary font-bold mb-4">{props.title}</h3>
            <p className="text-base lg:text-lg">{props.content}</p>
            <div className="flex">
                <button className="btn relative top-9 w-48">{props.buttonText}</button>
            </div>
        </div>
    </div>
}