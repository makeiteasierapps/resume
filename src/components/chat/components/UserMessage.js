import { Icon } from '@iconify/react';
import { MessageContainer, MessageContent } from '../agentStyledComponents';
import { Media } from 'reactstrap';

const UserMessage = ({ message }) => {
    return (
        <MessageContainer messageFrom={message.message_from}>
            <Media>
                <Media left>
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
                </Media>
                <Media body>
                    <MessageContent>{message.content}</MessageContent>
                </Media>
            </Media>
        </MessageContainer>
    );
};

export default UserMessage;
