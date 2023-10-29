import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ThemeContext } from '../contexts/ThemeContext';

const SocialLink = ({ href, Icon, className }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`text-dark text-decoration-none ${className}`}
    >
        <Icon size={50} />
    </a>
);

const ContactMe = () => {
    const theme = useContext(ThemeContext);
    const socialLinks = [
        {
            href: 'https://www.linkedin.com/in/yourusername',
            Icon: FaLinkedin,
            className: 'mr-4',
        },
        {
            href: 'https://github.com/makeiteasierapps',
            Icon: FaGithub,
            className: '',
        },
    ];

    return (
        <Container
            fluid
            className="d-flex text-center justify-content-center align-items-center"
            id="contact"
            style={{
                backgroundColor: theme.lightBlue,
                color: theme.deepPurple,
                height: '100vh',
            }}
        >
            <Row>
                <Col>
                    <h2 className="mb-4">Contact Me</h2>

                    <div className="m-4">
                        {socialLinks.map((link, index) => (
                            <SocialLink key={index} {...link} />
                        ))}
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ContactMe;
