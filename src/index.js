import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { ChatProvider } from './contexts/ChatContext';
import { SnackbarProvider } from './contexts/SnackbarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <SnackbarProvider>
            <ChatProvider>
                <App />
            </ChatProvider>
        </SnackbarProvider>
    </React.StrictMode>
);
