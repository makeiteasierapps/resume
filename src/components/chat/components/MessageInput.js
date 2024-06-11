import { useContext, useState } from 'react';
import { Input, InputGroup, InputGroupText, Button } from 'reactstrap';
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

const StyledInputLabel = styled.label`
    position: absolute;
    top: 50%;
    left: 12px;
    visibility: ${({ isFocused, userMessage }) =>
        isFocused || userMessage ? 'hidden' : 'visible'};
    transform: translateY(-50%);
    background-color: white;
    padding-left: 5px;
    padding-right: 5px;
`;

const MessageInput = ({ chatSettings }) => {
    const { sendMessage } = useContext(ChatContext);
    const [input, setInput] = useState('');
    const [isFocused, setIsFocused] = useState(false);

    return (
        <InputArea>
            <StyledInputGroup>
                <StyledInputLabel isFocused={isFocused} userMessage={input}>
                    Type Something
                </StyledInputLabel>
                <Input
                    type="textarea"
                    value={input}
                    onChange={(event) => setInput(event.target.value)}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    onKeyDown={(event) => {
                        if (
                            event.key === 'Enter' &&
                            !event.shiftKey &&
                            input.trim() !== ''
                        ) {
                            event.preventDefault();
                            sendMessage(input, chatSettings);
                            setInput('');
                        }
                    }}
                />
                <InputGroupText addonType="append">
                    <Button
                        color="primary"
                        disabled={!input}
                        onClick={() => {
                            sendMessage(input, chatSettings);
                            setInput('');
                        }}
                    >
                        <FaPaperPlane />
                    </Button>
                </InputGroupText>
            </StyledInputGroup>
        </InputArea>
    );
};

export default MessageInput;
