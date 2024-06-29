import { Icon } from '@iconify/react';
import { MessageContainer, MessageContent } from '../agentStyledComponents';

const AgentMessage = ({ message }) => {
    // Ensure message.content is always an array
    const contentArray = Array.isArray(message.content)
        ? message.content
        : [{ type: 'text', content: message.content }];

    return (
        <MessageContainer messageFrom={message.message_from}>
            <Icon
                icon="mdi:robot"
                style={{
                    fontSize: '36px',
                    position: 'relative',
                    marginRight: '13px',
                    color: 'gray',
                }}
            />

            <MessageContent>
                {contentArray.map((msg, index) => {
                    if (msg.type === 'text') {
                        return <div key={`text${index}`}>{msg.content}</div>;
                    } else if (msg.type === 'code') {
                        return (
                            <pre
                                key={`code${index}`}
                                className={`language-${msg.language}`}
                            >
                                <code
                                    dangerouslySetInnerHTML={{
                                        __html: msg.content,
                                    }}
                                />
                            </pre>
                        );
                    }
                    return null;
                })}
            </MessageContent>
        </MessageContainer>
    );
};

export default AgentMessage;
