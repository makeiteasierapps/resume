import { useContext, useState } from 'react';
import { Tooltip } from 'reactstrap';
import { FaTimes, FaCommentSlash } from 'react-icons/fa';
import { ChatContext } from '../../../contexts/ChatContext';

import { Bar, StyledIconButton } from '../agentStyledComponents';

const ChatBar = ({ chatName, chatId }) => {
    const { setIsChatOpen, clearChat } = useContext(ChatContext);
    const [tooltipOpen, setTooltipOpen] = useState(false);

    const toggleTooltip = () => {
        setTooltipOpen(!tooltipOpen);
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
                <StyledIconButton
                    aria-label="close"
                    onClick={() => {
                        if (setIsChatOpen) {
                            setIsChatOpen(false);
                        }
                    }}
                >
                    <FaTimes />
                </StyledIconButton>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: '33%',
                }}
            >
                <h6 style={{ margin: 0 }}>{chatName}</h6>
            </div>
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    width: '33%',
                }}
            >
                <StyledIconButton
                    id="clearChatButton"
                    aria-label="clear_chat"
                    onClick={() => clearChat()}
                >
                    <FaCommentSlash />
                </StyledIconButton>
                <Tooltip
                    target="clearChatButton"
                    isOpen={tooltipOpen}
                    toggle={toggleTooltip}
                    placement="top"
                >
                    Clear Chat
                </Tooltip>
            </div>
        </Bar>
    );
};

export default ChatBar;
