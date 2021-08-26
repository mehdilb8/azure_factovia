import { useState } from 'react'
import useI18n from '../hooks/i18n-hook'
import dynamic from "next/dynamic";

const BotConversation = dynamic(() => import('./BotConversation'), { ssr: false })

export default function Bot() {
    const i18n = useI18n()
    const [open, setOpen] = useState(false)

    const toggle = () => setOpen(!open)

    return <div className={`transition-all fixed bottom-0 right-3 z-30 bg-white shadow-md rounded-t-md`}>
        <div className="md:w-72 w-52">
            <button onClick={toggle} className="bg-primaryBlue text-primaryWhite w-full py-1 rounded-t-md outline-none active:ring-2 active:ring-primaryBlue active:ring-opacity-25">
                {i18n.t("bot.button")}
            </button>
            <div className={`${open ? 'visible' : 'hidden'} h-screen-50 transition-all`}>
                <BotConversation />
            </div>
        </div>
    </div>


}