import { useState, useContext } from 'react';
import { Row, Col, Container, Modal, ModalBody, Button } from 'reactstrap';
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
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
    const [modal, setModal] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);
    const images = importAll(
        require.context(
            '../assets/EmailManagerAssest',
            false,
            /\.(png|jpe?g|svg)$/
        )
    );

    const slides = images.map((image, index) => ({
        key: index,
        content: (
            <img
                src={image}
                alt={'Email Manager'}
                onClick={() => {
                    if (index === slideIndex) setModal(!modal);
                    setSlideIndex(index);
                }}
                style={{
                    backgroundColor: 'black',
                    width: '10rem',
                    height: '10rem',
                    boxShadow: `0 0 6px   ${theme.darkTeal}`,
                    borderRadius: '7px',
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
                                    icon={faReact}
                                    style={{
                                        padding: '5px 0 0 0',
                                        color: '#61dbfb',
                                        fontSize: '3rem',
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
                            <Row>
                                <img
                                    src={MaterialUiLogo}
                                    alt="Material UI"
                                    style={{
                                        width: '8.4rem',
                                        paddingTop: '0.5rem',
                                    }}
                                />
                            </Row>
                            <Row>
                                <Container className="d-flex flex-column align-items-center" style={{paddingTop: '1rem'}}>
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        style={{
                                            color: '#61dbfb',
                                            fontSize: '3rem',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            window.open(
                                                'https://github.com/makeiteasierapps/email-manager-ui',
                                                '_blank'
                                            )
                                        }
                                    />
                                    <p>Code</p>
                                </Container>
                            </Row>
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
                            <Row>
                                <Container className="d-flex flex-column align-items-center">
                                    <FontAwesomeIcon
                                        icon={faGithub}
                                        style={{
                                            padding: '5px 0 0 0',
                                            color: '#61dbfb',
                                            fontSize: '3rem',
                                            cursor: 'pointer',
                                        }}
                                        onClick={() =>
                                            window.open(
                                                'https://github.com/makeiteasierapps/email-manager/tree/main/node_version',
                                                '_blank'
                                            )
                                        }
                                    />
                                    <p>Code</p>
                                </Container>
                            </Row>
                        </Col>
                    </Row>

                </Col>
                <Col md="6" style={{ padding: '2rem' }}>
                    <Carousel slides={slides} goToSlide={slideIndex} />
                </Col>
            </Row>

            <Modal isOpen={modal} toggle={() => setModal(!modal)}>
                <ModalBody style={{ backgroundColor: 'black' }}>
                    <img
                        src={images[slideIndex]}
                        alt={'Email Manager'}
                        style={{
                            width: '100%',
                            height: 'auto',
                        }}
                    />
                    <p className="text-center">Your description here</p>
                </ModalBody>
            </Modal>
        </Container>
    );
};

export default Project;

{
}
