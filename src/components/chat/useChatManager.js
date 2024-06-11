import { useState, useRef, useContext, useEffect } from 'react';
import axios from 'axios';
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

    const BACKEND_URL = process.env.BACKEND_URL;
    const BACKEND_URL_PROD = process.env.BACKEND_URL_PROD;
    const API_KEY = process.env.API_KEY;
    const chatUrl =
        process.env.LOCAL_DEV === 'True'
            ? `${BACKEND_URL}:30000`
            : BACKEND_URL_PROD;

    useEffect(() => {
        setIsLoading(true);
    }, []);

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

        try {
            const response = await sendUserMessage(chatId, userMessage);
            await handleStreamingResponse(response, chatId);
        } catch (error) {
            console.error(error);
            showSnackbar(`Network or fetch error: ${error.message}`, 'error');
        }
    };

    // using fetch instead of axios because axios doesn't support streaming
    const sendUserMessage = async (chatId, userMessage, chatHistory) => {
        const response = await fetch(`${chatUrl}/chatMobile/messages`, {
            reactNative: { textStreaming: true },
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-API-Key': API_KEY,
            },
            body: JSON.stringify({
                chatId,
                userMessage,
                chatHistory,
            }),
        });

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
            const response = await axios.delete(
                `${chatUrl}/chatMobile/messages`,
                {
                    data: { chatId },
                    headers: {
                        'X-API-Key': API_KEY,
                    },
                }
            );

            if (!response.ok) throw new Error('Failed to clear messages');

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

    const deleteChat = async (chatId) => {
        try {
            const response = await axios.delete(`${chatUrl}/chatMobile`, {
                data: { chatId },
                headers: {
                    'X-API-Key': API_KEY,
                },
            });
            if (response.status !== 200)
                throw new Error('Failed to delete conversation');
            setChatArray((prevChatArray) => {
                const updatedChatArray = prevChatArray.filter(
                    (chatObj) => chatObj.chatId !== chatId
                );
                localStorage.setItem(
                    'chatArray',
                    JSON.stringify(updatedChatArray)
                );
                return updatedChatArray;
            });
            setMessages((prevMessages) => {
                const updatedMessages = { ...prevMessages };
                delete updatedMessages[chatId];
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

    const createChat = async (model, chatName, userId) => {
        try {
            const response = await axios.post(
                `${chatUrl}/chatMobile`,
                {
                    model,
                    chatName,
                    userId,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'X-API-Key': API_KEY,
                    },
                }
            );
            if (response.status !== 200)
                throw new Error('Failed to create chat');
            const data = await response.data;
            // Update the chatArray directly here
            setChatArray((prevChats) => {
                const updatedChatArray = [data, ...prevChats];
                localStorage.setItem(
                    'chatArray',
                    JSON.stringify(updatedChatArray)
                );
                return updatedChatArray;
            });
        } catch (error) {
            console.error(error);
            showSnackbar(`Network or fetch error: ${error.message}`, 'error');
        }
    };
    return {
        chatArray,
        messages,
        isLoading,
        addMessage,
        sendMessage,
        clearChat,
        deleteChat,
        createChat,
    };
};
