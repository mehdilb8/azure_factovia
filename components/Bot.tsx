import { useRef } from 'react'
import useI18n from '../hooks/i18n-hook'
import dynamic from "next/dynamic";

const BotConversation = dynamic(() => import('./BotConversation'), { ssr: false })

export default function Bot() {
    const i18n = useI18n()
    const botDivRef = useRef<HTMLDivElement>()

    // Utilisation de la référence pour éviter que le composant BotConversation ne se redessine (Et qu'il bug).
    const toggle = () => {
        if (botDivRef.current) {
            if (botDivRef.current.classList.contains("h-0")) {
                return botDivRef.current.classList.replace("h-0", "h-screen-50")
            }
            return botDivRef.current.classList.replace("h-screen-50", "h-0")
        }
    }


    return <div className={`transition-all fixed bottom-0 right-3 z-30 bg-white shadow-md rounded-t-md`}>
        <div className="w-72">
            <button onClick={toggle} className="bg-primaryBlue text-primaryWhite w-full py-1 rounded-t-md outline-none active:ring-2 active:ring-primaryBlue active:ring-opacity-25">
                {i18n.t("bot.button")}
            </button>
            <div ref={botDivRef as any} className={`transition-height h-0`}>
                <BotConversation />
            </div>
        </div>
    </div>


}