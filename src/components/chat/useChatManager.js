import { useState, useRef, useContext, useEffect } from 'react';
import { SnackbarContext } from '../../contexts/SnackbarContext';
import { processToken } from './utils/processToken';

export const useChatManager = () => {
    const { showSnackbar } = useContext(SnackbarContext);
    const [chatArray, setChatArray] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState({});
    const [insideCodeBlock, setInsideCodeBlock] = useState(false);
    const ignoreNextTokenRef = useRef(false);
    const languageRef = useRef(null);
    const [isChatOpen, setIsChatOpen] = useState(false);

    const BACKEND_URL_PROD = process.env.REACT_APP_BACKEND_URL_PROD;
    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        setIsLoading(true);
    }, []);

    const getMessages = (chatId) => {
        return messages[chatId] || [];
    };

    const addMessage = async (chatId, newMessage) => {
        setMessages((prevMessageParts) => {
            const updatedMessages = {
                ...prevMessageParts,
                [chatId]: [...(prevMessageParts[chatId] || []), newMessage],
            };
            localStorage.setItem('messages', JSON.stringify(updatedMessages));
            return updatedMessages;
        });
    };

    const sendMessage = async (chatId, input) => {
        const userMessage = {
            content: input,
            message_from: 'user',
            time_stamp: new Date().toISOString(),
            type: 'database',
        };
        addMessage(chatId, userMessage);

        const chatHistory = await getMessages(chatId);

        try {
            const response = await sendUserMessage(
                chatId,
                userMessage,
                chatHistory
            );
            await handleStreamingResponse(response, chatId);
        } catch (error) {
            console.error(error);
            showSnackbar(`Network or fetch error: ${error.message}`, 'error');
        }
    };

    const sendUserMessage = async (chatId, userMessage, chatHistory) => {
        const response = await fetch(
            `http://127.0.0.1:30000/chatMobile/messages`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': API_KEY,
                },
                body: JSON.stringify({
                    chatId: chatId,
                    chatHistory: chatHistory,
                    userMessage: userMessage,
                    saveToDb: false,
                    createVectorPipeline: false,
                }),
            }
        );

        if (!response.ok) {
            throw new Error('Failed to send message');
        }
        return response;
    };

    const handleStreamingResponse = async (response, chatId) => {
        const reader = response.body.getReader();
        let completeMessage = '';
        while (true) {
            const { done, value } = await reader.read();
            if (done) {
                break;
            }
            const decodedValue = new TextDecoder('utf-8').decode(value);
            console.log(decodedValue);
            const jsonChunks = decodedValue
                .split('\n')
                .filter((line) => line.trim() !== '');

            const messages = jsonChunks.map((chunk) => {
                const messageObj = JSON.parse(chunk);
                processToken(
                    messageObj,
                    setInsideCodeBlock,
                    insideCodeBlock,
                    setMessages,
                    chatId,
                    ignoreNextTokenRef,
                    languageRef
                );
                return messageObj.content;
            });
            completeMessage += messages.join('');
        }
        await updateMessagesState(chatId, completeMessage);
    };

    const updateMessagesState = async (chatId, completeMessage) => {
        setMessages((prevMessages) => {
            const updatedMessages = [
                ...(prevMessages[chatId] || []).slice(0, -1),
                {
                    content: completeMessage,
                    message_from: 'agent',
                    type: 'database',
                },
            ];

            const newMessagesState = {
                ...prevMessages,
                [chatId]: updatedMessages,
            };

            // Update chatArray state to reflect the new messages
            setChatArray((prevChatArray) => {
                const updatedChatArray = prevChatArray.map((chat) => {
                    if (chat.chatId === chatId) {
                        return {
                            ...chat,
                            messages: updatedMessages,
                        };
                    }
                    return chat;
                });

                localStorage.setItem(
                    'chatArray',
                    JSON.stringify(updatedChatArray)
                );
                return updatedChatArray;
            });

            localStorage.setItem('messages', JSON.stringify(newMessagesState));
            return newMessagesState;
        });
    };

    const clearChat = async (chatId) => {
        try {
            // Update the chatArray state
            setChatArray((prevChatArray) => {
                const updatedChatArray = prevChatArray.map((chat) => {
                    if (chat.chatId === chatId) {
                        return { ...chat, messages: [] };
                    }
                    return chat;
                });

                localStorage.setItem(
                    'chatArray',
                    JSON.stringify(updatedChatArray)
                );
                return updatedChatArray;
            });

            // Update the messages state for the UI to reflect the cleared messages
            setMessages((prevMessages) => {
                const updatedMessages = { ...prevMessages, [chatId]: [] };
                localStorage.setItem(
                    'messages',
                    JSON.stringify(updatedMessages)
                );
                return updatedMessages;
            });
        } catch (error) {
            console.error(error);
            showSnackbar(`Network or fetch error: ${error.message}`, 'error');
        }
    };

    return {
        chatArray,
        isChatOpen,
        setIsChatOpen,
        messages,
        isLoading,
        addMessage,
        sendMessage,
        clearChat,
    };
};
