import { Icon } from '@iconify/react';
import { MessageContainer, MessageContent } from '../agentStyledComponents';

const UserMessage = ({ message }) => {
    return (
        <MessageContainer messageFrom={message.message_from}>
            <Icon
                icon="mdi:account-circle"
                style={{
                    borderRadius: '8px',
                    margin: '0px 13px 0px 0px',
                    width: '33px',
                    height: '33px',
                    backgroundColor: 'transparent',
                    objectFit: 'contain',
                }}
            />

            <MessageContent>{message.content}</MessageContent>
        </MessageContainer>
    );
};

export default UserMessage;
