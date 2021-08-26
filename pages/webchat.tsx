import dynamic from "next/dynamic";

const BotTest = dynamic(() => import('../components/BotTest'), { ssr: false })

export default function webchat() {
    return <BotTest />
}