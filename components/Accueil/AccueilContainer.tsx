interface AccueilContainerProps {
    children: JSX.Element
}

export default function AccueilContainer(props: AccueilContainerProps) {
    return <div className="flex justify-center ">
        <div className="lg:w-10/12 md:w-9/12 w-10/12">
            {props.children}
        </div>
    </div>
}