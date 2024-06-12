import styled from 'styled-components';
import { Button, Input, ListGroup, ListGroupItem } from 'reactstrap';

// AgentDash.js
export const SettingsSubmitButton = styled(Button)`
    background-color: transparent;
    font-family: 'Arial, sans-serif';
    font-weight: bold;
    font-size: 1rem;
    &:hover {
        background-color: blue;
        color: black;
    }
`;

SettingsSubmitButton.defaultProps = {
    color: 'outline-primary',
};

export const SettingsMenuButton = styled(Button)`
    font-family: 'Arial, sans-serif';
    font-weight: bold;
    font-size: 1rem;
    width: 33%;
    height: 40px;
    background-color: transparent;
    white-space: nowrap;
    text-overflow: ellipsis;
    &:hover {
        background-color: blue;
        color: black;
    }
`;

SettingsMenuButton.defaultProps = {
    color: 'outline-primary',
};

export const InvisibleInput = styled(Input)`
    width: 100%;
    height: 40px;
    font-size: inherit;
    padding: 0;
    color: black;
    border: none;
    &:focus {
        box-shadow: none;
    }
`;

export const ChatContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    position: fixed; /* Change from relative to fixed */
    bottom: 20px; /* Align with the icon */
    right: 20px; /* Align with the icon */
    margin-bottom: 24px;
    width: 40%;
    min-height: 40%;
    height: 7%;
    border-radius: 7px;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
    background-color: white; /* Ensure it has a background */
    z-index: 1000; /* Ensure it appears above other elements */
`;

export const MessageArea = styled(ListGroup)`
    flex-grow: 1;
    overflow-y: auto;
    width: 100%;
    padding: 0px;
`;

export const MessagesContainer = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    white-space: pre-line;
`;

export const MessageContainer = styled(ListGroupItem)`
    background-color: ${({ messageFrom }) =>
        messageFrom === 'user' ? 'lightgray' : 'white'};
    word-break: break-word;
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    padding-right: 50px;
    padding-top: 20px;
    padding-bottom: 20px;
`;

export const MessageContent = styled.div`
    max-height: 100%;
    overflow-x: hidden;
    width: 100%;
    white-space: pre-wrap;
    align-self: flex-start;
    margin-left: 0px;
`;

export const Bar = styled.div`
    position: relative;
    background-color: darkgray;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 2px solid gray;
`;

export const ClearAndTrashIcons = styled.div`
    transform: translate(10%, -40%);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 9px;
`;

export const StyledIconButton = styled(Button)`
    padding: 0;
    color: black;
    &:hover {
        background-color: transparent;
        color: gray;
    }
`;

export const CloseIconButton = styled(Button)`
    
    padding: 1px;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.43);
    color: black;
    &:hover {
        background-color: transparent;
        color: gray;
    }
`;

export const InputArea = styled.div`
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
