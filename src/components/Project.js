import { useState, useContext } from 'react';
import { Row, Col, Container, Modal, ModalBody, Button } from 'reactstrap';
import { faReact, faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Carousel from 'react-spring-3d-carousel';
import { ThemeContext } from '../contexts/ThemeContext';

import DataDash from '../assets/EmailManagerAssest/datadash.png';
import EmailManagerLogo from '../assets/EmailManagerAssest/email-manager-logo.jpeg';
import EmailForm from '../assets/EmailManagerAssest/emailform.png';
import LoginScreen from '../assets/EmailManagerAssest/login.png';
import ProfileScreen from '../assets/EmailManagerAssest/profile.png';
import WelcomeScreen from '../assets/EmailManagerAssest/welcome.png';
import ExtractedData from '../assets/EmailManagerAssest/extractedData.png';

import { ReactComponent as OpenAiLogo } from '../assets/projectIcons/openai-lockup.svg';
import { ReactComponent as MailgunLogo } from '../assets/projectIcons/mailgun.svg';
import { ReactComponent as NodeLogo } from '../assets/skillsIcons/node-js.svg';
import { ReactComponent as FirebaeLogo } from '../assets/projectIcons/firebase.svg';
import MaterialUiLogo from '../assets/projectIcons/materialUi.png';

const images = [
    {
        image: EmailManagerLogo,
        description: `Email Manager is a full stack web app hosted serverless with Vercel. 
        The front end has been built with React and Material-UI while the back end has been done with Node.js. 
        The project started as an actual solution to a companies problem. 
        The handling of sending and tracking emails with automated follow ups based on elapsed time. 
        I then decided to have some fun and implement GPT-4 to automatically respond to email replies. 
        I have preloaded the AI with context about myself and the project so feel free to ask questions!`,
    },
    {
        image: LoginScreen,
        description: 'User accounts are managed with Firebase and Firestore',
    },
    {
        image: WelcomeScreen,
        description: `The first screen shown upon login, gives an overview of the project.`,
    },
    {
        image: ProfileScreen,
        description: `An option to use your own credentials is provided. Keys are encrypted via symmetric encryption using
    Google Cloud KMS. Profile data is pulled from the respective oAuth option choosen by the user.`,
    },
    {
        image: EmailForm,
        description:
            'Simple form to send email with a predefined template or a custom one',
    },
    {
        image: ExtractedData,
        description: `Example of data extracted from a .csv and applied to the template. Templates dynamically update to show previews`,
    },
    {
        image: DataDash,
        description: `The Dashboard shows all emails that have been sent. 
        It also displays the interactions between the recipient of the email and the AI`,
    },
];

const Project = () => {
    const theme = useContext(ThemeContext);
    const [modal, setModal] = useState(false);
    const [slideIndex, setSlideIndex] = useState(0);

    const slides = images.map((image, index) => ({
        key: index,
        content: (
            <img
                src={image.image}
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
                overflowY: 'auto', // Add this line to make the container scrollable
                '@media (max-width: 768px)': {
                    // This will apply the styles inside when the screen width is 768px or less
                    height: '100vh',
                    width: '100vw',
                },
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
                                <a
                                    href="https://github.com/makeiteasierapps/email-manager-ui"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Client Code
                                </a>
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
                                <a
                                    href="https://github.com/makeiteasierapps/email-manager/tree/main/node_version"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Server Code
                                </a>
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
                        src={images[slideIndex].image}
                        alt={'Email Manager'}
                        style={{
                            width: '100%',
                            height: 'auto',
                            padding: '1rem',
                            borderRadius: '30px',
                        }}
                    />
                    <Container
                        className="d-flex justify-content-center align-items-center"
                        style={{
                            boxShadow: `0 0 13px   ${theme.darkTeal}`,
                            padding: '1rem',
                            borderRadius: '10px',
                            width: '80%',
                        }}
                    >
                        <h6
                            className="d-flex align-items-center text-center"
                            style={{ color: '#fff', margin: 0 }}
                        >
                            {images[slideIndex].description}
                        </h6>
                    </Container>
                </ModalBody>
            </Modal>
        </Container>
    );
};

export default Project;

{
}
