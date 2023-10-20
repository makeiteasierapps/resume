import React, { useEffect, useState, useContext } from 'react';
import { Container, Card, CardBody, CardText } from 'reactstrap';
import { ThemeContext } from '../contexts/ThemeContext';

const Skills = () => {
    const skills = [
        { name: 'JavaScript' },
        { name: 'React' },
        { name: 'Python' },
        { name: 'Firebase' },
    ];

    const [positions, setPositions] = useState([]);

    const theme = useContext(ThemeContext);
    useEffect(() => {
        const updatePositions = () => {
            const newPositions = skills.map(() => ({
                top: `${Math.random() * 80}%`,
                left: `${Math.random() * 80}%`,
            }));
            setPositions(newPositions);
        };

        // Update positions immediately on mount
        updatePositions();

        // Then update positions every 5 seconds
        const intervalId = setInterval(updatePositions, 7000);

        // Clean up interval on unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ backgroundColor: theme.lightBlue, minHeight: '500px' }}>
            <Container
                id="skills"
                className="position-relative"
                style={{ width: '100%', minHeight: '800px' }}
            >
                {skills.map((skill, index) => (
                    <Card
                        key={index}
                        className="position-absolute m-2 skill-card"
                        style={{...positions[index], backgroundColor: theme.deepPurple, color: theme.lightBlue}}
                    >
                        <CardBody className="card-face face-front">
                            <CardText className="d-block fs-5 mb-2">
                                {skill.name}
                            </CardText>
                        </CardBody>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

export default Skills;
