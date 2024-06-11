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
    const nodeRef = useRef(null);
    const { messages } = useContext(ChatContext);

    // scrolls chat window to the bottom
    useEffect(() => {
        const node = nodeRef.current;
        if (node) {
            node.scroll(0, node.scrollHeight);
        }
    }, [messages]);

    return (
        <ChatContainerStyled>
            <ChatBar chatName={'Ai Assistant'} />
            <MessagesContainer xs={9} id="messages-container">
                <MessageArea ref={nodeRef}>
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
                </MessageArea>
                <MessageInput />
            </MessagesContainer>
        </ChatContainerStyled>
    );
};

export default memo(Chat);
