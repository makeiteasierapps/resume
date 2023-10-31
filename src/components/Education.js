import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Container, Card, CardBody, CardText } from 'reactstrap';
import DevOPs from '../assets/badges/devOps.png';
import SQL from '../assets/badges/sql.png';
import BackendCert from '../assets/badges/mseDevOps.png';
import JsFundamentals from '../assets/badges/jsFundamentals.png';
import PythonFundamentals from '../assets/badges/pythonFundamentals.png';
import WebFundamentals from '../assets/badges/webFundamentals.png';
import Carousel from 'react-spring-3d-carousel';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const education = [
    {
        degree: 'Backend, SQL, and DevOps with Python',
        image: BackendCert,
    },
    {
        degree: 'JavaScript Fundamentals',
        image: JsFundamentals,
    },

    {
        degree: 'Python Fundamnetals',
        image: PythonFundamentals,
    },
    {
        degree: 'Web Fundamentals',
        image: WebFundamentals,
    },
    {
        degree: 'DevOPs with Python',
        image: DevOPs,
    },
    {
        degree: 'SQL with Python',
        image: SQL,
    },
];

const Education = () => {
    const [ref, inView] = useInView();
    const [slideIndex, setSlideIndex] = useState(0);
    const theme = useContext(ThemeContext);
    const props = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'scale(1)' : 'scale(0.3)',
        from: { opacity: 0, transform: 'scale(0.3)' },
    });

    const slides = education.map((edu, index) => ({
        key: index,
        content: (
            <animated.div ref={ref} style={props}>
                <Card
                    className="text-center"
                    style={{
                        backgroundColor: 'white',
                        color: theme.deepPurple,
                        width: '30vh',
                        height: '40vh',
                        boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.2)',
                    }}
                    onClick={() => setSlideIndex(index)}
                >
                    {edu.degree === 'Backend, SQL, and DevOps with Python' ? (
                        <CardBody
                            className="d-flex justify-content-center align-items-center"
                            style={{ height: '100%' }}
                        >
                            <img src={edu.image} alt={edu.degree} />
                        </CardBody>
                    ) : (
                        <>
                            <img src={edu.image} alt={edu.degree} />
                            <CardBody className="d-flex justify-content-center align-items-center">
                                <CardText
                                    style={{
                                        fontWeight: 'bold',
                                        fontSize: '3vh',
                                        fontFamily: theme.mainText,
                                    }}
                                >
                                    {edu.degree}
                                </CardText>
                            </CardBody>
                        </>
                    )}
                </Card>
            </animated.div>
        ),
    }));

    return (
        <Container
            fluid
            style={{
                backgroundColor: 'black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
            id="education"
        >
            <Container
                style={{
                    display: 'flex',
                    width: '90%', // take up 90% of parent's width
                    flex: 1,
                }}
            >
                <Carousel slides={slides} goToSlide={slideIndex} />
            </Container>
        </Container>
    );
};

export default Education;
