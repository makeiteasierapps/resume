import React, { useContext } from 'react';
import { Container, Col } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';
import { CardImg } from 'reactstrap';
import { useSpring, animated } from 'react-spring';
import '../styles/Home.scss';
import shaunoProfile from '../assets/shauno_profile_web.png';

import { useInView } from 'react-intersection-observer';

const Home = () => {
    const [ref, inView] = useInView();
    const theme = useContext(ThemeContext);
    const props = useSpring({
        from: { opacity: 0, height: '0%' },
        to: { opacity: inView ? 1 : 0, height: inView ? '100%' : '0%' },
        config: { tension: 210, friction: 20 },
    });

    const pageStyle = {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        minHeight: '100vh',
        fontFamily: theme.mainText,
        color: 'black',
    };

    return (
        <Container
            id="home"
            className="text-center mt-3 section"
            style={pageStyle}
            fluid
        >
            <animated.div
                ref={ref}
                style={props}
                className="d-flex align-items-center justify-content-center mt-md-3"
            >
                <Container className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                    <Col xs="12" md="">
                        <Container
                            className="mt-2 fs-1"
                            style={{
                                fontWeight: '700',
                            }}
                        >
                            Shaun Offenbacher
                        </Container>
                        <Container
                            className="mb-3 fs-5"
                            style={{
                                fontWeight: '500',
                                fontStyle: 'italic',
                            }}
                        >
                            Software Engineer
                        </Container>
                        <Container
                            className="responsive-text"
                            style={{
                                fontWeight: '500',
                            }}
                        >
                            Transitioning from fine dining to tech, I
                            bring a unique blend of creativity, precision, and
                            customer focus to software engineering. My
                            hospitality background has honed my attention to
                            detail and commitment to exceptional service, which
                            I now apply to creating efficient code and memorable
                            digital experiences. I strive to build innovative,
                            user-friendly websites that are visually appealing
                            and leave a lasting impression.
                        </Container>
                    </Col>
                    <Col xs="12" md="4" className="align-self-center">
                        <CardImg
                            style={{
                                height: 'auto',
                                width: '13.33rem',
                                borderRadius: '10%',
                                padding: '0.9rem 0',
                                
                            }}
                            src={shaunoProfile}
                            alt="my avatar"
                            className="img-fluid"
                        />
                    </Col>
                </Container>
            </animated.div>
        </Container>
    );
};

export default Home;
