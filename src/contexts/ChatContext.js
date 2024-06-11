import React, { createContext } from 'react';
import { useChatManager } from '../components/chat/useChatManager';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const chatManager = useChatManager();

    return (
        <ChatContext.Provider value={chatManager}>
            {children}
        </ChatContext.Provider>
    );
};
