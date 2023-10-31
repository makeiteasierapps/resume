import React, { useContext } from 'react';
import { Container, Col } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';
import { CardImg } from 'reactstrap';
import { useSpring, animated, config } from 'react-spring';
import '../styles/Home.scss';
import shaunoProfile from '../assets/shauno_profile.png';

import { useInView } from 'react-intersection-observer';

const Home = () => {
    const [ref, inView] = useInView();
    const theme = useContext(ThemeContext);
    const props = useSpring({
        from: { opacity: 0, transform: 'translate3d(0,40px,0)' },
        to: { opacity: inView ? 1 : 0, transform: 'translate3d(0,0px,0)' },
        config: { tension: 210, friction: 20 },
    });

    const pageStyle = {
        backgroundColor: 'white',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100vh',
        fontFamily: theme.mainText,
        color: 'black',
    };

    return (
        <Container
            id="home"
            className="text-center mt-3"
            style={pageStyle}
            fluid
        >
            <animated.div
                ref={ref}
                style={props}
                className="d-flex align-items-center justify-content-center mt-md-3"
            >
                <Col xs="12" md="9" xl="9">
                    <Container className="d-flex flex-column-reverse flex-md-row justify-content-center align-items-center">
                        <Col xs="12" md="10">
                            <Container className="text-wrap">
                                <Container
                                    className="mt-2 fs-1 text-wrap"
                                    style={{
                                        fontWeight: '700',
                                    }}
                                >
                                    Shaun Offenbacher
                                </Container>
                                <Container
                                    className="mb-3 fs-5 text-wrap"
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
                                    Transitioning from fine dining to web
                                    development, I bring a unique blend of
                                    creativity, precision, and customer focus to
                                    software engineering. My hospitality
                                    background has honed my attention to detail
                                    and commitment to exceptional service, which
                                    I now apply to creating efficient code and
                                    memorable digital experiences. I strive to
                                    build innovative, user-friendly websites
                                    that are visually appealing and leave a
                                    lasting impression.
                                </Container>
                            </Container>
                        </Col>
                        <Col
                            xs="12"
                            md="4"
                            className="align-self-center mt-5 mt-md-0"
                        >
                            <CardImg
                                style={{
                                    height: 'auto',
                                    width: 'clamp(150px, 23vw, 250px)',
                                }}
                                src={shaunoProfile}
                                alt="my avatar"
                                className="rounded-circle img-fluid"
                            />
                        </Col>
                    </Container>
                </Col>
            </animated.div>
        </Container>
    );
};

export default Home;
