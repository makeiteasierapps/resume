import { useContext, useState } from 'react';
import { Input, InputGroup, Button } from 'reactstrap';
import { ChatContext } from '../../../contexts/ChatContext';
import { InputArea } from '../agentStyledComponents';
import { FaPaperPlane } from 'react-icons/fa';
import styled from 'styled-components';

const StyledInputGroup = styled(InputGroup)`
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    border: 2px solid lightgray;
    border-radius: 4px;
`;

const StyledInput = styled(Input)`
    border: none;
    resize: none;
    height: 100%;
    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

const MessageInput = () => {
    const { sendMessage } = useContext(ChatContext);
    const [input, setInput] = useState('');

    return (
        <InputArea>
            <StyledInputGroup>
                <StyledInput
                    type="textarea"
                    placeholder="Type a message..."
                    style={{ border: 'none', resize: 'none', height: '100%' }}
                    value={input}
                    es
                    onChange={(event) => setInput(event.target.value)}
                    onKeyDown={(event) => {
                        if (
                            event.key === 'Enter' &&
                            !event.shiftKey &&
                            input.trim() !== ''
                        ) {
                            event.preventDefault();
                            sendMessage(input);
                            setInput('');
                        }
                    }}
                />

                <Button
                    color="transparent"
                    style={{ border: 'none' }}
                    disabled={!input}
                    onClick={() => {
                        sendMessage(input);
                        setInput('');
                    }}
                >
                    <FaPaperPlane />
                </Button>
            </StyledInputGroup>
        </InputArea>
    );
};

export default MessageInput;
