import { useState } from 'react'
import { BOT_SECRET } from '../constantes'
import useI18n from '../hooks/i18n-hook'

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
                <iframe
                    src={'https://webchat.botframework.com/embed/factovia-devis-chatbot?s=' + BOT_SECRET}
                    className="h-full w-full" />
            </div>
        </div>
    </div>


}