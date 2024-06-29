import { useState, useRef, useContext, useEffect, useCallback } from 'react';
import { SnackbarContext } from '../../contexts/SnackbarContext';
import {
    processToken,
    handleIncomingMessageStream,
} from './utils/processToken';
import { io } from 'socket.io-client';

export const useChatManager = () => {
    const { showSnackbar } = useContext(SnackbarContext);
    const [isLoading, setIsLoading] = useState(false);
    const [messages, setMessages] = useState({});
    const [insideCodeBlock, setInsideCodeBlock] = useState(false);
    const ignoreNextTokenRef = useRef(false);
    const languageRef = useRef(null);
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [socket, setSocket] = useState(null);

    const BACKEND_URL = process.env.REACT_APP_LOCAL_DEV
        ? process.env.REACT_APP_BACKEND_URL
        : process.env.REACT_APP_URL_PROD;

    const API_KEY = process.env.REACT_APP_API_KEY;

    useEffect(() => {
        const newSocket = io(BACKEND_URL, {
            extraHeaders: {
                'X-API-Key': API_KEY,
            },
        });

        setSocket(newSocket);

        newSocket.on('connect', () => {
            console.log('Connected to WebSocket server');
        });

        newSocket.on('disconnect', () => {
            console.log('Disconnected from WebSocket server');
        });

        return () => {
            newSocket.disconnect();
        };
    }, []);

    useEffect(() => {
        setIsLoading(true);
    }, []);

    const getChatHistory = (chatId) => {
        return messages[chatId] || [];
    };

    const getMessages = useCallback(() => {
        try {
            const localMessages = JSON.parse(localStorage.getItem('messages'));
            if (localMessages) {
                setMessages(localMessages);
            }
        } catch (error) {
            console.error(error);
            showSnackbar(`Network or fetch error: ${error.message}`, 'error');
        }
    }, [showSnackbar]);

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
        if (!socket) return;

        try {
            const userMessage = {
                content: input,
                message_from: 'user',
                time_stamp: new Date().toISOString(),
                type: 'database',
            };
            addMessage(chatId, userMessage);

            const chatHistory = getChatHistory(chatId);

            socket.emit('chat_request', {
                chatId: chatId,
                projectId: '666e139da8a159c87447c8c1',
                dbName: 'paxxium',
                chatHistory: chatHistory,
                userMessage: userMessage,
                saveToDb: false,
                createVectorPipeline: true,
            });
        } catch (error) {
            console.error(error);
            showSnackbar(`Network or fetch error: ${error.message}`, 'error');
        }
    };

    const handleStreamingResponse = useCallback(
      async (data) => {
          if (data.type === 'end_of_stream') {
              setMessages((prevMessage) => {
                  const newPrevMessage = { ...prevMessage };
                  const lastMessageIndex = newPrevMessage['1'].length - 1;
                  let lastMessage = newPrevMessage['1'][lastMessageIndex];

                  // Replace the content array with the final content
                  lastMessage.content = data.content;
                  localStorage.setItem('messages', JSON.stringify(newPrevMessage));
                  return newPrevMessage;
              });
          } else {
              const updatedTokenObj = processToken(
                  data,
                  setInsideCodeBlock,
                  ignoreNextTokenRef,
                  languageRef
              );
              setMessages((prevMessage) => {
                  const newMessageParts = handleIncomingMessageStream(
                      prevMessage,
                      '1',
                      updatedTokenObj,
                      insideCodeBlock
                  );
                  return newMessageParts;
              });
          }
      },
      [insideCodeBlock]
  );
    useEffect(() => {
        if (!socket) return;

        socket.on('chat_response', handleStreamingResponse);

        return () => {
            socket.off('chat_response', handleStreamingResponse);
        };
    }, [handleStreamingResponse, socket]);

    const clearChat = async () => {
        try {
            // Update the messages state for the UI to reflect the cleared messages
            setMessages({});
            localStorage.removeItem('messages');
        } catch (error) {
            console.error(error);
            showSnackbar(`Network or fetch error: ${error.message}`, 'error');
        }
    };

    return {
        isChatOpen,
        setIsChatOpen,
        messages,
        isLoading,
        addMessage,
        sendMessage,
        getMessages,
        clearChat,
    };
};
