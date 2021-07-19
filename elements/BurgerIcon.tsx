interface BurgerIconProps {
    className?: string
}

export default function BurgerIcon(props: BurgerIconProps) {
    return <div className={props.className}>
        <div className="border-b-2 border-primaryWhite mb-1"></div>
        <div className="border-b-2 border-primaryWhite mb-1"></div>
        <div className="border-b-2 border-primaryWhite"></div>
    </div>
}