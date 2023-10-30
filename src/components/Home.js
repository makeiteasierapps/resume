import React, { useContext } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';
import { CardImg } from 'reactstrap';
import myAvatar from '../assets/myAvatar.png';
import { useSpring, animated, useSpringRef, useChain } from 'react-spring';
import '../styles/Home.scss';

import { useInView } from 'react-intersection-observer';

const AnimatedRow = animated(Row);

const InViewAnimatedRow = ({ children, springRef, ...props }) => {
    const [ref, inView] = useInView();

    const animatedProps = useSpring({
        ref: springRef,
        from: { opacity: 0 },
        to: { opacity: 1 },
        config: { mass: 1, tension: 30, friction: 90 },
    });

    return (
        <AnimatedRow ref={ref} style={animatedProps} {...props}>
            {children}
        </AnimatedRow>
    );
};

const Home = () => {
    const theme = useContext(ThemeContext);
    const firstRowRef = useSpringRef();
    const secondRowRef = useSpringRef();
    const thirdRowRef = useSpringRef();

    const pageStyle = {
        backgroundColor: theme.lightBlue,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        width: '100%',
        height: '100vh',
        fontFamily: theme.mainText,
        color: theme.deepPurple,
    };

    useChain([firstRowRef, secondRowRef, thirdRowRef], [0, 1, 2]);
    return (
        <Container
            id="home"
            className="text-center mt-3"
            style={pageStyle}
            fluid
        >
            <InViewAnimatedRow
                springRef={firstRowRef}
                className="d-flex align-items-center justify-content-center mt-md-3"
            >
                <Col xs="12" md="9" xl="9">
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                        <div className="text-wrap">
                            <h2
                                className="m-3 fs-1"
                                style={{
                                    
                                    fontWeight: '700',
                                }}
                            >
                                Welcome!
                            </h2>
                            <p
                                className="mb-md-3 responsive-text"
                                style={{
                                    fontWeight: '500',
                                }}
                            >
                                I'm a passionate web developer with a love for
                                creating digital experiences through code. With
                                a background in fine dining as a food server,
                                I'm now transitioning my career to become a
                                software engineer. I'm excited to combine my
                                creativity and technical skills to build
                                innovative and user-friendly websites.
                            </p>
                        </div>
                        <CardImg
                            style={{
                                height: '200px',
                                width: '200px',
                                marginLeft: '20px',
                            }}
                            src={myAvatar}
                            alt="my avatar"
                            className="rounded-circle img-fluid"
                        />
                    </div>
                </Col>
            </InViewAnimatedRow>
            <InViewAnimatedRow
                springRef={secondRowRef}
                className="d-flex justify-content-end mt-3"
            >
                <Col xs="12" md="9" xl="10" className="text-wrap">
                    <p
                        className="m-4 responsive-text"
                        style={{
                            fontWeight: '500',
                        }}
                    >
                        As a fine dining food server, I developed a strong
                        attention to detail and a commitment to delivering
                        exceptional service. These qualities have seamlessly
                        translated into my journey as a software engineer. I
                        approach coding with the same level of precision and
                        dedication, ensuring that every line of code is clean
                        and efficient. With a focus on continuous learning and
                        staying up-to-date with the latest technologies, I'm
                        constantly expanding my skill set to tackle new
                        challenges in the ever-evolving world of software
                        development.
                    </p>
                </Col>
            </InViewAnimatedRow>
            <InViewAnimatedRow
                springRef={thirdRowRef}
                className="d-flex justify-content-start"
            >
                <Col
                    xs="12"
                    md="9"
                    xl="10"
                    className="text-wrap"
                    style={{
                        fontWeight: '500',
                    }}
                >
                    <p className="m-4 responsive-text">
                        Beyond my technical skills, I bring a unique perspective
                        to web development. My background in fine dining has
                        taught me the importance of creating memorable
                        experiences for customers. I apply this mindset to my
                        work as a web developer, striving to create websites
                        that not only function flawlessly but also leave a
                        lasting impression on users. By combining my passion for
                        technology with my customer-centric approach, I aim to
                        create digital experiences that are not only visually
                        appealing but also intuitive and user-friendly.
                    </p>
                </Col>
            </InViewAnimatedRow>
        </Container>
    );
};

export default Home;
