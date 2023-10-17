import React, { useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../styles/Education.css';

const Education = () => {
  const [education] = useState([
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'XYZ University',
      year: '2018 - 2022',
      courses: ['Data Structures', 'Algorithms', 'Web Development', 'Database Systems']
    },
    {
      degree: 'Web Development Certification',
      institution: 'ABC Online Course',
      year: '2022',
      courses: ['React', 'JavaScript', 'HTML', 'CSS']
    }
  ]);

  return (
    <Container className="Education">
      <Row>
        <Col>
          <h2>Education</h2>
          {education.map((edu, index) => (
            <div key={index} className="Education-entry">
              <h3>{edu.degree}</h3>
              <h4>{edu.institution}</h4>
              <p>{edu.year}</p>
              <ul>
                {edu.courses.map((course, i) => (
                  <li key={i}>{course}</li>
                ))}
              </ul>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
}

export default Education;

