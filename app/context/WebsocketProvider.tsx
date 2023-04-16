import React, {useState} from 'react'
import AppProvider, {AppContext} from './AppProvider'
import WebSocketService from "@/app/services/websocketService";

const WebsocketProvider = (props:any) => {
    // Initialize WebSocketService instance
    const [webSocketService, setWebSocketService] = useState<WebSocketService | null>(null);
    const data = {
        webSocketService: webSocketService,
        setWebSocketService: setWebSocketService,
        ...props
    }

    return (
        <AppProvider {...data}>{ props.children }</AppProvider>
    )
}

export default React.memo(WebsocketProvider)
