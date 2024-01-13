import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import { Container, Card, CardBody, CardText } from 'reactstrap';
import DevOPs from '../assets/badges/DevOps_Course_Certificate.png';
import SQL from '../assets/badges/SQL_and_Data_Modeling_with_Python.png';
import BackendCert from '../assets/badges/mseDevOps.png';
import JsFundamentals from '../assets/badges/JavaScript_Fundamentals.png';
import PythonFundamentals from '../assets/badges/Data_Structure_and_Algorithms_with_Python.png';
import WebFundamentals from '../assets/badges/Web-Dev-fundamentals.png';
import ReactCert from '../assets/badges/React_Course_Certificate.png';
import ReactNativeCert from '../assets/badges/React_Native.png';
import FrontEndCert from '../assets/badges/Front_End_Web_and_Mobile_Development.png';
import Carousel from 'react-spring-3d-carousel';
import { useInView } from 'react-intersection-observer';
import { useSpring, animated } from 'react-spring';

const education = [
    {
        image: BackendCert,
    },
    {
        image: PythonFundamentals,
    },

    {
        image: SQL,
    },
    {
        image: DevOPs,
    },
    {
        image: FrontEndCert,
    },
    {
        image: WebFundamentals,
    },
    {
        image: JsFundamentals,
    },
    {
        image: ReactCert,
    },
    {
        image: ReactNativeCert,
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
                <>
                    <img
                        src={edu.image}
                        alt={edu.degree}
                        onClick={() => setSlideIndex(index)}
                        style={{
                            backgroundColor: 'transparent',
                            color: theme.deepPurple,
                            width: '30vh',
                            height: '40vh',
                        }}
                    />
                </>
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
            <Carousel slides={slides} goToSlide={slideIndex} />
        </Container>
    );
};

export default Education;
