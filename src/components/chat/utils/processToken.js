import { formatStreamMessage } from './messageFormatter';

export const handleIncomingMessageStream = (
    prevMessage,
    id,
    tokenObj,
    insideCodeBlock
) => {
    let language = '';
    // Ignore empty message_content
    if (tokenObj.content === '') {
        return prevMessage;
    }

    if (tokenObj.language) {
        language = tokenObj.language;
    }

    const messagePartsArray = formatStreamMessage(
        tokenObj,
        insideCodeBlock,
        language
    );

    if (!prevMessage[id]) {
        prevMessage[id] = [];
    }

    if (
        prevMessage[id].length === 0 ||
        prevMessage[id][prevMessage[id].length - 1].message_from === 'user'
    ) {
        return {
            ...prevMessage,
            [id]: [
                ...prevMessage[id],
                {
                    content: messagePartsArray,
                    message_from: 'agent',
                    type: 'stream',
                },
            ],
        };
    } else {
        const newPrevMessage = { ...prevMessage };

        const lastMessageIndex = newPrevMessage[id].length - 1;
        let lastMessage = newPrevMessage[id][lastMessageIndex];

        // Check if the last message is of type 'text' and append the new content to it
        // Get the last object in the lastMessage array
        // this is done to handle when there might be alternating code and text blocks
        const lastMessageObject =
            lastMessage.content[lastMessage.content.length - 1];

        if (lastMessageObject.type === messagePartsArray[0].type) {
            // If the types match, append the new content to the last object's content
            lastMessageObject.content += messagePartsArray[0].content;
        } else {
            // If the types do not match, add the new result as a new object in the lastMessage array
            lastMessage.content.push(messagePartsArray[0]);
        }

        // Return the updated messages array without spreading it into a new array
        return newPrevMessage;
    }
};

export const processToken = (
    tokenObj,
    setInsideCodeBlock,
    ignoreNextTokenRef,
    languageRef
) => {
    const codeStartIndicator = /```/g;
    const codeEndIndicator = /``/g;
    let messageContent = tokenObj.content;

    if (ignoreNextTokenRef.current) {
        if (tokenObj.content !== '`') {
            // This means the token is not a backtick, so it should be the language
            languageRef.current = tokenObj.content;
        }

        // Reset the flag after processing the token, regardless of its content
        ignoreNextTokenRef.current = false;
        return tokenObj;
    }

    // Check if we are not ignoring this token and if there is a language set
    // This is the next tokenObj after we captured the language.
    if (!ignoreNextTokenRef.current && languageRef.current) {
        // Add the language property to the token object
        tokenObj.language = languageRef.current;
        // Reset languageRef as it has been used for this code block
        languageRef.current = null;
    }

    if (codeStartIndicator.test(messageContent)) {
        setInsideCodeBlock((prevInsideCodeBlock) => !prevInsideCodeBlock);
        ignoreNextTokenRef.current = true;
        return tokenObj;
    }

    if (codeEndIndicator.test(messageContent)) {
        setInsideCodeBlock((prevInsideCodeBlock) => !prevInsideCodeBlock);
        ignoreNextTokenRef.current = true;
        return tokenObj;
    }

    return tokenObj;
};
