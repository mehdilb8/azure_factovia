import { useState, useEffect, useRef } from 'react'
import isBrowser from '../utils/isBrowser'

interface LazyElementProps {
    placeholderElement?: JSX.Element,
    children: JSX.Element
}

export default function LazyElement(props: LazyElementProps) {
    const [visible, setVisible] = useState(false)
    const placeholderElement = useRef<HTMLDivElement>(null)

    const onSeeFunction = () => {
        if (placeholderElement && placeholderElement.current) {
            // Si la propriété top du rect de mon élément est inférieur à la hauteur de ma vue.
            // Alors cet élément est visible
            if (placeholderElement.current?.getBoundingClientRect().top <= window.innerHeight) {
                setVisible(true)
            }
        }
    }

    useEffect(() => {
        if (isBrowser()) {
            onSeeFunction();
            window.addEventListener('scroll', onSeeFunction)

            return () => window.removeEventListener('scroll', onSeeFunction)
        }
    }, [])

    if (visible) {
        return props.children
    }
    return <div ref={placeholderElement}>
        {props.placeholderElement ? props.placeholderElement : null}
    </div>
}