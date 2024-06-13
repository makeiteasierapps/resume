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
    border: none;
    border-radius: 4px;
`;

const StyledInput = styled(Input)`
    border: none;
    resize: none;
    padding: 6px 0px 6px 10px;
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
        <StyledInputGroup>
            <StyledInput
                type="textarea"
                rows={1}
                placeholder="Type a message..."
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={(event) => {
                    if (
                        event.key === 'Enter' &&
                        !event.shiftKey &&
                        input.trim() !== ''
                    ) {
                        event.preventDefault();
                        sendMessage(1, input);
                        setInput('');
                    }
                }}
            />

            <Button
                color="transparent"
                style={{ border: 'none', padding: '0px 10px 3px 7px' }}
                disabled={!input}
                onClick={() => {
                    sendMessage(1, input);
                    setInput('');
                }}
            >
                <FaPaperPlane />
            </Button>
        </StyledInputGroup>
    );
};

export default MessageInput;
