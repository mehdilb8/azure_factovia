import React, { useState, useEffect } from 'react';
import ReactWebChat, { createDirectLine } from 'botframework-webchat';
import BotService from '../services/BotService';

export default function BotConversation() {
    const [directLine, setDirectLine] = useState<object | null>(null)

    useEffect(() => {
        BotService.auth().then((authResponse) => {
            setDirectLine(createDirectLine({ token: authResponse.token }))
        })
    }, [])

    return directLine !== null
        //@ts-ignore
        ? <ReactWebChat directLine={directLine} userID={directLine.userIdOnStartConversation} locale="en-US" />
        : <p>Loading...</p>
}