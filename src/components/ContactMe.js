import React, { useContext } from 'react';
import {
    Container,
    Col,
    Button,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { ThemeContext } from '../contexts/ThemeContext';
import '../styles/Contact.scss';

const socialLinks = [
    {
        href: 'https://www.linkedin.com/in/shaun-o-940b591b5/',
        Icon: FaLinkedin,
        type: 'react-icon',
    },
    {
        href: 'https://github.com/makeiteasierapps',
        Icon: FaGithub,
        type: 'react-icon',
    },
    {
        href: 'https://twitter.com/makeiteasier_',
        Icon: faXTwitter,
        type: 'font-awesome',
    },
];
const SocialLink = ({ href, Icon, type }) => {
    const theme = useContext(ThemeContext);
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            {type === 'font-awesome' ? (
                <FontAwesomeIcon
                    icon={Icon}
                    style={{
                        fontSize: '6em',
                        color: theme.deepPurple,
                    }}
                />
            ) : (
                <Icon size={'6em'} style={{ color: theme.deepPurple }} />
            )}
        </a>
    );
};

const ContactMe = () => {
    const theme = useContext(ThemeContext);

    const handleCopy = () => {
        navigator.clipboard.writeText('shaunoffenbacher@yahoo.com');
    };

    const handleOpenMail = () => {
        window.location.href = 'mailto:shaunoffenbacher@yahoo.com';
    };

    return (
        <Container
            fluid
            className="d-flex text-center flex-column justify-content-center align-items-center"
            id="contact"
            style={{
                backgroundColor: theme.lightBlue,
                height: '100vh',
            }}
        >
            <Container
                className="mb-4 h1"
                style={{ fontFamily: theme.mainText, fontWeight:'600', color: theme.deepPurple }}
            >
                Let's Connect!
            </Container>

            <Container className="d-flex flex-row justify-content-center align-items-center">
                {socialLinks.map((link, index) => (
                    <Col xs="auto" className="px-2" key={index}>
                        <SocialLink {...link} />
                    </Col>
                ))}
            </Container>
            <Container
                className="d-flex flex-row justify-content-center align-items-center mt-4"
                style={{ fontFamily: theme.mainText, color: theme.lightBlue }}
            >
                <UncontrolledDropdown>
                    <DropdownToggle tag="span" data-toggle="dropdown">
                        <Button
                            onContextMenu={(e) => e.preventDefault()}
                            style={{
                                backgroundColor: theme.deepPurple,
                            }}
                        >
                            shaunoffenbacher@yahoo.com
                        </Button>
                    </DropdownToggle>
                    <DropdownMenu
                        style={{
                            marginTop: '10px',
                            backgroundColor: theme.deepPurple,
                            left: '50%',
                            transform: 'translateX(-50%)',
                        }}
                    >
                        <DropdownItem
                            className="custom-dropdown-item"
                            onClick={handleCopy}
                            style={{ color: theme.lightBlue }}
                        >
                            Copy
                        </DropdownItem>
                        <DropdownItem
                            className="custom-dropdown-item"
                            onClick={handleOpenMail}
                            style={{ color: theme.lightBlue }}
                        >
                            Open in Mail
                        </DropdownItem>
                    </DropdownMenu>
                </UncontrolledDropdown>
            </Container>
        </Container>
    );
};

export default ContactMe;
