import { useState, useContext } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-spring-3d-carousel';
import { ThemeContext } from '../contexts/ThemeContext';

import { ReactComponent as OpenAiLogo } from '../assets/projectIcons/openai-lockup.svg';
import { ReactComponent as MailgunLogo } from '../assets/projectIcons/mailgun.svg';
import { ReactComponent as NodeLogo } from '../assets/skillsIcons/node-js.svg';
import { ReactComponent as FirebaeLogo } from '../assets/projectIcons/firebase.svg';
import MaterialUiLogo from '../assets/projectIcons/materialUi.png';

function importAll(r) {
    return r.keys().map(r);
}

const Project = () => {
    const theme = useContext(ThemeContext);
    const [slideIndex, setSlideIndex] = useState(0);
    const images = importAll(
        require.context('../assets/EmailManagerAssest', false, /\.(png|jpe?g|svg)$/)
    );

    const slides = images.map((image, index) => ({
        key: index,
        content: (
            <img
                src={image}
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
                <Col
                    md="6"
                    style={{
                        padding: '2rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <Row style={{ paddingBottom: '1rem' }}>
                        <Col>
                            <h1
                                style={{
                                    fontFamily: 'BioRhyme',
                                    color: '#00D1B5',
                                }}
                            >
                                Email Manager
                            </h1>
                            <p>
                                Full Stack Web App utilizing Mailgun to send
                                emails and OpenAi to automatically respond.
                            </p>
                        </Col>
                    </Row>
                    <Row style={{ paddingTop: '1rem' }}>
                        <Col
                            className="d-flex flex-column align-items-center"
                            style={{ paddingRight: '3rem' }}
                        >
                            <Row>
                                <FontAwesomeIcon
                                    size="3x"
                                    icon={faReact}
                                    style={{
                                        padding: '5px 0 0 0',
                                        color: '#61dbfb',
                                    }}
                                />
                                <h3
                                    className="font-weight-bold"
                                    style={{
                                        color: '#61dbfb',
                                        fontSize: '1.5rem',
                                    }}
                                >
                                    React
                                </h3>
                            </Row>
                            <img
                                src={MaterialUiLogo}
                                alt="Material UI"
                                style={{
                                    width: '8.4rem',
                                    paddingTop: '0.5rem',
                                }}
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
                                        width: '6.6rem',
                                        paddingBottom: '1rem',
                                        fill: '#fff',
                                    }}
                                />
                            </Row>
                            <Row>
                                <OpenAiLogo
                                    style={{
                                        width: '6.6rem',
                                        paddingBottom: '1rem',
                                        fill: '#fff',
                                    }}
                                />
                            </Row>
                            <Row>
                                <FirebaeLogo
                                    style={{
                                        width: '6.6rem',
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
