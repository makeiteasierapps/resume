import { useContext, useState } from 'react';
import { Tooltip } from 'reactstrap';
import { FaTimes, FaTrash, FaCog, FaCommentSlash } from 'react-icons/fa';
import { ChatContext } from '../../../contexts/ChatContext';

import {
    Bar,
    ClearAndTrashIcons,
    StyledIconButton,
    CloseIconButton,
} from '../agentStyledComponents';

const ChatBar = ({
    chatName,
    chatId,
    isSettingsOpen,
    setIsSettingsOpen,
    setIsChatOpen,
}) => {
    const { closeChat, clearChat, deleteChat } = useContext(ChatContext);
    const [deleteClicked, setDeleteClicked] = useState(false);
    const [tooltipOpen, setTooltipOpen] = useState({
        settings: false,
        clearChat: false,
        delete: false,
    });

    const handleDeleteClick = () => {
        if (deleteClicked) {
            deleteChat(chatId);
        } else {
            setDeleteClicked(true);
            setTimeout(() => {
                setDeleteClicked(false);
            }, 3000);
        }
    };

    const toggleTooltip = (name) => {
        setTooltipOpen((prev) => ({ ...prev, [name]: !prev[name] }));
    };

    return (
        <Bar>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-start',
                    width: '33%',
                }}
            >
                <CloseIconButton
                    aria-label="close"
                    onClick={() => {
                        if (setIsChatOpen) {
                            setIsChatOpen(false);
                        }
                        closeChat(chatId);
                    }}
                >
                    <FaTimes style={{ fontSize: '1.1rem' }} />
                </CloseIconButton>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '33%',
                }}
            >
                <h6>{chatName}</h6>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '33%',
                }}
            >
                <ClearAndTrashIcons>
                    <StyledIconButton
                        id="clearChatButton"
                        aria-label="clear_chat"
                        onClick={() => clearChat(chatId)}
                    >
                        <FaCommentSlash />
                    </StyledIconButton>
                    <Tooltip
                        target="clearChatButton"
                        isOpen={tooltipOpen.clearChat}
                        toggle={() => toggleTooltip('clearChat')}
                        placement="top"
                    >
                        Clear Chat
                    </Tooltip>
                </ClearAndTrashIcons>
            </div>
        </Bar>
    );
};

export default ChatBar;
