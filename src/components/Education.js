import React, { useState, useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';
import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    ListGroup,
    ListGroupItem,
} from 'reactstrap';
import ReactCardFlip from 'react-card-flip';
import BackendCert from '../assets/badges/python/Modern_Software_Engineering_with_DevOps-Backend,_SQL,_and_DevOps_with_Python_Certificate___Honor_Student_21430.png';

const Education = () => {
    const theme = useContext(ThemeContext);
    const [education] = useState([
        {
            degree: 'JavaScript Fundamentals',
            institution: 'nucamp',
            courses: ['Data Structures', 'Async/Await', 'Loops/Arrays'],
        },
        {
            degree: 'Backend, SQL, and DevOps with Python',
            institution: 'nucamp',
            courses: ['Docker', 'SQL', 'Python', 'Flask'],
        },
    ]);
    const [isFlipped, setIsFlipped] = useState(
        Array(education.length).fill(false)
    );

    const handleFlip = (index) => {
        const newFlippedState = [...isFlipped];
        newFlippedState[index] = !newFlippedState[index];
        setIsFlipped(newFlippedState);
    };

    return (
        <Container
            fluid
            style={{
                backgroundColor: theme.deepPurple,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '800px',
            }}
            id="education"
        >
            <Row className="justify-content-around">
                {education.map((edu, index) => (
                    <Col key={index}>
                        <ReactCardFlip
                            isFlipped={isFlipped[index]}
                            flipDirection="horizontal"
                        >
                            <Card
                                style={{
                                    backgroundColor: theme.lightBlue,
                                    color: theme.deepPurple,
                                    width: '300px',
                                    height: '400px',
                                    boxShadow: '0px 4px 8px rgba(255, 255, 255, 0.2)',
                                }}
                                onMouseEnter={() => handleFlip(index)}
                                className="text-center"
                            >
                                <CardBody className="d-flex justify-content-center align-items-center">
                                    <CardText
                                        style={{
                                            fontWeight: 'bold',
                                            fontSize: '1.9em',
                                        }}
                                    >
                                        {edu.degree}
                                    </CardText>
                                </CardBody>
                            </Card>
                            <Card onMouseLeave={() => handleFlip(index)}>
                                <img
                                    src={BackendCert}
                                    alt="Certificate"
                                    style={{
                                        width: '300px',
                                        height: '400px',
                                        boxShadow:
                                            '0px 4px 8px rgba(0, 0, 0, 0.2)',
                                    }}
                                />
                            </Card>
                        </ReactCardFlip>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Education;
