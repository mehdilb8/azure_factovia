import React, { useState, useEffect } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import BotService from '../services/BotService';
export default function BotTest() {
    const [directLine, setDirectLine] = useState<object | null>(null)

    useEffect(() => {
        BotService.auth().then((authResponse) => {
            setDirectLine(createDirectLine({ token: authResponse.token }))
        })
    }, [])

    console.log({ directLine })

    return directLine !== null
        //@ts-ignore
        ? <ReactWebChat directLine={directLine} userID={directLine.userIdOnStartConversation} />
        : <p>Loading...</p>
}