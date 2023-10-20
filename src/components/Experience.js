import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';

const Experience = () => {
    const [experiences] = useState([
        {
            id: 1,
            role: 'Junior Web Developer',
            company: 'XYZ Company',
            duration: 'Jan 2020 - Present',
            description:
                'Worked on developing responsive web applications using React, JavaScript, HTML, and CSS.',
            technologies: 'React, JavaScript, HTML, CSS',
        },
        {
            id: 2,
            role: 'Intern',
            company: 'ABC Company',
            duration: 'Jun 2019 - Dec 2019',
            description:
                'Assisted in the development of a web application and gained hands-on experience with front-end technologies.',
            technologies: 'JavaScript, HTML, CSS',
        },
    ]);

    return (
        <Container id="experience" className=" text-center mt-5">
            <Row>
                <Col>
                    <h2 className="text-dark display-4 mb-4">Experience</h2>
                </Col>
            </Row>
            {experiences.map((experience) => (
                <Row key={experience.id} className="experience-entry mb-3">
                    <Col>
                        <h3 className="text-dark h4 mb-3">
                            {experience.role} at {experience.company}
                        </h3>
                        <p className="duration">{experience.duration}</p>
                        <p className="text-dark lead">
                            {experience.description}
                        </p>
                        <p className="technologies text-secondary mt-3">
                            Technologies used: {experience.technologies}
                        </p>
                    </Col>
                </Row>
            ))}
        </Container>
    );
};

export default Experience;
