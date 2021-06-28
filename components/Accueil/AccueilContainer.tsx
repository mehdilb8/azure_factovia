interface AccueilContainerProps {
    children: JSX.Element
    className?: string
}

export default function AccueilContainer(props: AccueilContainerProps) {
    return <div className={`flex justify-center ${props.className ? props.className : ""}`}>
        <div className="lg:w-10/12 md:w-9/12 w-10/12">
            {props.children}
        </div>
    </div>
}