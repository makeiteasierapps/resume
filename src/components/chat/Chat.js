import { memo, useContext, useEffect, useRef, useState } from 'react';
import { formatBlockMessage } from './utils/messageFormatter';
import AgentMessage from './components/AgentMessage';
import { ChatContext } from '../../contexts/ChatContext';
import ChatBar from './components/ChatBar';
import MessageInput from './components/MessageInput';
import UserMessage from './components/UserMessage';
import {
    MessagesContainer,
    MessageArea,
    ChatContainerStyled,
} from './agentStyledComponents';

const Chat = ({ chatId }) => {
    const { messages, getMessages } = useContext(ChatContext);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        getMessages();
    }, [getMessages]);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [messages]);

    return (
        <ChatContainerStyled>
            <ChatBar chatName={'Ai Assistant'} />
            <MessagesContainer id="messages-container">
                <MessageArea>
                    {messages[chatId]?.map((message, index) => {
                        let formattedMessage = message;
                        if (message.type === 'database') {
                            if (message.message_from === 'agent') {
                                formattedMessage = formatBlockMessage(message);
                                return (
                                    <AgentMessage
                                        key={`agent${index}`}
                                        message={formattedMessage}
                                        id={chatId}
                                    />
                                );
                            } else {
                                return (
                                    <UserMessage
                                        key={`user${index}`}
                                        message={message}
                                    />
                                );
                            }
                        } else {
                            return (
                                <AgentMessage
                                    key={`stream${index}`}
                                    message={message}
                                />
                            );
                        }
                    })}
                    <div ref={messagesEndRef} />
                </MessageArea>
                <MessageInput />
            </MessagesContainer>
        </ChatContainerStyled>
    );
};

export default memo(Chat);
