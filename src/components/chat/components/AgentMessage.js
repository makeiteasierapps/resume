import { Icon } from '@iconify/react';
import { MessageContainer, MessageContent } from '../agentStyledComponents';

const AgentMessage = ({ message }) => {
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
                {Array.isArray(message.content)
                    ? message.content.map((msg, index) => {
                          if (msg.type === 'text') {
                              return (
                                  <div key={`text${index}`}>{msg.content}</div>
                              );
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
                      })
                    : null}
            </MessageContent>
        </MessageContainer>
    );
};

export default AgentMessage;
