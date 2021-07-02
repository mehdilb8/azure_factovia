import { useRef, useEffect, useState } from 'react'
import useI18n from '../../hooks/i18n-hook'

export default function ConceptAnimation() {
    const CONCEPTS_NUMBER = 3
    const INTERVAL = 3 * 1000

    const i18n = useI18n()
    const [concept, setConcept] = useState<number>(1)
    const conceptEl = useRef<HTMLDivElement>(null)
    let animation: Animation | undefined

    useEffect(() => {
        if (conceptEl && conceptEl.current) {
            animation = conceptEl.current.getAnimations()[0]
        }

        const conceptInterval = setInterval(() => {
            if (conceptEl && conceptEl.current && animation) {
                setConcept((currentConcept) => ((currentConcept + 1) % CONCEPTS_NUMBER) + 1)
                animation.play()
            }
        }, INTERVAL)

        return () => {
            clearInterval(conceptInterval)
        }
    }, [])

    return <span ref={conceptEl} className="text-primaryYellow concept">{i18n.t("mainSection.title.concept." + concept)}</span>
}