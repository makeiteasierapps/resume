import styled from 'styled-components';
import { Button, ListGroup, ListGroupItem } from 'reactstrap';
import Markdown from 'react-markdown';

export const StyledMarkdown = styled(Markdown)`
    table {
        border-collapse: collapse;
        margin: 15px 0;
        width: 100%;
    }

    th,
    td {
        border: 1px solid #ddd;
        padding: 12px;
        text-align: left;
    }

    th {
        background-color: #f2f2f2;
        font-weight: bold;
    }

    tr:nth-child(even) {
        background-color: #f8f8f8;
    }
    td:first-child {
        width: 1%;
        word-break: keep-all;
        
        text-align: center;
    }
`;
export const ChatContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: white;
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

export const MessageContainer = styled(ListGroupItem).withConfig({
    shouldForwardProp: (prop) => prop !== 'messageFrom',
})`
    background-color: ${({ messageFrom }) =>
        messageFrom === 'user' ? 'lightgray' : 'white'};
    word-break: break-word;
    flex-direction: row;
    display: flex;
    align-items: flex-start;
    padding-right: 20px;
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
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    border-bottom: 2px solid gray;
`;

export const StyledIconButton = styled(Button)`
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.43);
    color: black;
    &:hover {
        background-color: transparent;
        color: gray;
    }
`;
