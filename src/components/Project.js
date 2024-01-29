import { useState, useContext } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-spring-3d-carousel';
import { ThemeContext } from '../contexts/ThemeContext';

import EmailManagerLogo from '../assets/email-manager-logo.jpeg';
import EmailManagerLogin from '../assets/emailManagerLogin.png';
import { ReactComponent as OpenAiLogo } from '../assets/projectIcons/openai-lockup.svg';
import { ReactComponent as MailgunLogo } from '../assets/projectIcons/mailgun.svg';
import { ReactComponent as NodeLogo } from '../assets/skillsIcons/node-js.svg';
import { ReactComponent as FirebaeLogo } from '../assets/projectIcons/firebase.svg';
import MaterialUiLogo from '../assets/projectIcons/materialUi.png';
import ReactLogo from '../assets/projectIcons/react.png';

const Project = () => {
    const theme = useContext(ThemeContext);
    const [slideIndex, setSlideIndex] = useState(0);
    const images = [
        {
            image: EmailManagerLogo,
            description:
                "Full Stack Web App utilizing Mailgun and OpenAi API's. Built with React and Node",
        },
        {
            image: EmailManagerLogin,
            description:
                'Login page for Email Manager. Built with React and Material UI',
        },
        {
            image: EmailManagerLogin,
            description:
                'Login page for Email Manager. Built with React and Material UI',
        },
    ];

    const slides = images.map((image, index) => ({
        key: index,
        content: (
            <img
                src={image.image}
                alt={'Email Manager'}
                style={{
                    backgroundColor: 'transparent',
                    width: '20vw',
                    height: '30vh',
                }}
            />
        ),
    }));

    return (
        <Container
            style={{
                height: '50vh',
                width: '70vw',
                backgroundColor: 'transparent',
                boxShadow: `0 0 13px   ${theme.darkTeal}`,
                borderRadius: '10px',
            }}
        >
            <Row style={{ height: '100%' }}>
                <Col md="6" style={{ padding: '2rem' }}>
                    <Row>
                        <Col>
                            <h1>Email Manager</h1>
                            <p>
                                Full Stack Web App utilizing Mailgun and OpenAi
                                API's. Built with React and Node
                            </p>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '1rem' }}>
                        <Col>
                            <img
                                src={ReactLogo}
                                alt="React"
                                style={{ width: '8rem' }}
                            />
                            <img
                                src={MaterialUiLogo}
                                alt="Material UI"
                                style={{ width: '8rem' }}
                            />
                        </Col>
                        <Col className="d-flex flex-column align-items-center">
                            <Row>
                                <NodeLogo
                                    style={{
                                        width: '8rem',
                                        paddingBottom: '1.4rem',
                                    }}
                                />
                            </Row>
                            <Row>
                                <MailgunLogo
                                    style={{
                                        width: '6rem',
                                        paddingBottom: '1rem',
                                        fill: '#fff',
                                    }}
                                />
                            </Row>
                            <Row>
                                <OpenAiLogo
                                    style={{
                                        width: '6rem',
                                        paddingBottom: '1rem',
                                        fill: '#fff',
                                    }}
                                />
                            </Row>
                            <Row>
                                <FirebaeLogo
                                    style={{
                                        width: '6rem',
                                        paddingBottom: '1rem',
                                        fill: '#fff',
                                    }}
                                />
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col md="6" style={{ padding: '2rem' }}>
                    <Carousel slides={slides} />
                </Col>
            </Row>
        </Container>
    );
};

export default Project;
